import { isIP } from 'node:net'
import { NextResponse, type NextRequest } from 'next/server'
import { CONSENT_TEXT, CONSENT_VERSION, NEWSLETTER_SOURCES } from '@/lib/newsletter'

// Newsletter signups, stored in Supabase with proof of express consent (CASL): the exact
// wording shown, its version, the time, the page and the IP address. Server-side only; the
// service role key never reaches the browser, and the table has no public access.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 5
const attempts = new Map<string, number[]>() // per server instance; a light brake on bots

function tooMany(key: string) {
  const now = Date.now()
  const recent = (attempts.get(key) || []).filter(t => now - t < WINDOW_MS)
  recent.push(now)
  attempts.set(key, recent)
  return recent.length > MAX_PER_WINDOW
}

export async function POST(request: NextRequest) {
  const wantsJson = (request.headers.get('accept') || '').includes('application/json')
  const fields: Record<string, string> = {}
  try {
    const form = await request.formData()
    form.forEach((value, key) => { if (typeof value === 'string') fields[key] = value })
  } catch {
    // Not a form body; everything below treats missing fields as invalid
  }

  const source = (NEWSLETTER_SOURCES as readonly string[]).includes(fields.source) ? fields.source : '/'
  // JavaScript callers get JSON; a plain form post is redirected back to the page it came from
  const reply = (status: number, result: string) => wantsJson
    ? NextResponse.json({ status: result }, { status })
    : NextResponse.redirect(new URL(`${source}?newsletter=${result}#newsletter`, request.url), 303)

  // Honeypot filled in: answer as if it worked so bots learn nothing
  if (fields.website) return reply(200, 'subscribed')

  const email = (fields.email || '').trim().toLowerCase()
  if (email.length > 254 || !EMAIL_RE.test(email)) return reply(400, 'invalid-email')
  // Express consent is required: the checkbox must have been ticked
  if (fields.consent !== 'yes') return reply(400, 'consent-required')

  // Vercel sets x-forwarded-for; the first entry is the visitor
  const forwarded = (request.headers.get('x-forwarded-for') || '').split(',')[0].trim()
  const ip = isIP(forwarded) ? forwarded : null
  if (tooMany(ip || 'unknown')) return reply(429, 'rate-limited')

  const url = process.env.SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) {
    console.error('Newsletter signup unavailable: SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is not set')
    return reply(503, 'unavailable')
  }

  // An address that is already subscribed is left untouched, so its original consent record stands
  const res = await fetch(`${url}/rest/v1/newsletter_subscribers?on_conflict=email`, {
    method: 'POST',
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
      Prefer: 'resolution=ignore-duplicates,return=minimal',
    },
    body: JSON.stringify({
      email,
      consent_text: CONSENT_TEXT,
      consent_version: CONSENT_VERSION,
      consented_at: new Date().toISOString(),
      source_page: source,
      ip_address: ip,
      user_agent: (request.headers.get('user-agent') || '').slice(0, 512) || null,
    }),
  }).catch(err => {
    console.error('Newsletter signup failed to reach Supabase', err)
    return null
  })
  if (!res || !res.ok) {
    if (res) console.error('Newsletter signup rejected by Supabase', res.status, (await res.text()).slice(0, 300))
    return reply(502, 'error')
  }
  // Same answer for new and existing addresses, so the form cannot be used to check who is subscribed
  return reply(200, 'subscribed')
}
