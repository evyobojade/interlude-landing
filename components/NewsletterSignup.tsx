'use client'
import { useState, useSyncExternalStore } from 'react'
import { CONSENT_TEXT, HONEYPOT_FIELD } from '@/lib/newsletter'
import type { Copy } from '@/lib/copy'

// Result codes sent by /api/subscribe, and the line of copy shown for each
const RESULTS: Record<string, { key: keyof Copy['newsletter']['results']; ok: boolean }> = {
  subscribed: { key: 'subscribed', ok: true },
  'invalid-email': { key: 'invalidEmail', ok: false },
  'consent-required': { key: 'consentRequired', ok: false },
  'rate-limited': { key: 'rateLimited', ok: false },
  unavailable: { key: 'unavailable', ok: false },
  error: { key: 'error', ok: false },
}

// Plain form posting to /api/subscribe, so it works without JavaScript (the route redirects
// back with ?newsletter=<result>). With JavaScript it submits in place and shows the result.
const HONEYPOT_STYLE: React.CSSProperties = {
  position: 'absolute', left: '-10000px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden',
}

// Result of a no-JavaScript submission, passed back in the URL by the route's redirect
const noSubscribe = () => () => {}
const redirectResult = () => new URLSearchParams(window.location.search).get('newsletter')
const noResult = () => null

// The consent wording is not in the copy file: it is legal text stored with each signup.
export default function NewsletterSignup({ source, copy }: { source: '/' | '/about'; copy: Copy['newsletter'] }) {
  const [submitted, setStatus] = useState<string | null>(null)
  const [sending, setSending] = useState(false)
  const fromRedirect = useSyncExternalStore(noSubscribe, redirectResult, noResult)
  const status = submitted ?? fromRedirect

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget // currentTarget is null after the await
    setSending(true)
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })
      const data = await res.json().catch(() => ({}))
      setStatus(RESULTS[data.status] ? data.status : 'error')
      if (data.status === 'subscribed') form.reset()
    } catch {
      setStatus('error')
    }
    setSending(false)
  }

  const result = status ? RESULTS[status] : null
  const message = result ? { text: copy.results[result.key], ok: result.ok } : null
  return (
    <section id="newsletter" className="py-14 px-4 sm:px-6 relative">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <p className="text-[#c8a96e] text-xs uppercase tracking-widest mb-4">{copy.eyebrow}</p>
          <h2 className="text-3xl text-[#f5efe3] mb-3" style={{fontFamily:'var(--font-playfair)'}}>{copy.heading}</h2>
          <p className="text-[rgba(245,239,227,0.5)] text-base">{copy.intro}</p>
        </div>
        <form action="/api/subscribe" method="post" onSubmit={onSubmit} className="flex flex-col gap-4">
          <input type="hidden" name="source" value={source} />
          {/* Honeypot: off-screen for people, still in the page for bots to fill in. Inline styles,
              not a class, so it is hidden even before (or without) the stylesheet loading. The name
              is one browsers do not autofill, so a real visitor is never mistaken for a bot. */}
          <div aria-hidden="true" style={HONEYPOT_STYLE}>
            <label>Leave this empty<input type="text" name={HONEYPOT_FIELD} tabIndex={-1} autoComplete="off" /></label>
          </div>
          <label className="sr-only" htmlFor="newsletter-email">{copy.emailLabel}</label>
          <input id="newsletter-email" type="email" name="email" required autoComplete="email" maxLength={254}
            placeholder={copy.emailPlaceholder}
            className="w-full px-4 py-4 rounded-xl bg-[rgba(245,239,227,0.06)] border border-[rgba(200,169,110,0.25)] text-[#f5efe3] placeholder-[rgba(245,239,227,0.3)] outline-none focus:border-[#c8a96e]" />
          <label className="flex items-start gap-3 text-left cursor-pointer">
            <input type="checkbox" name="consent" value="yes" required
              className="mt-1 w-5 h-5 shrink-0 accent-[#c8a96e]" />
            <span className="text-[rgba(245,239,227,0.6)] text-sm leading-relaxed">{CONSENT_TEXT}</span>
          </label>
          <button type="submit" disabled={sending}
            className="w-full py-4 rounded-xl bg-[#c8a96e] text-[#0f0e17] font-medium hover:opacity-90 transition-opacity disabled:opacity-50">
            {sending ? copy.subscribing : copy.subscribe}
          </button>
          <p role="status" aria-live="polite"
            className={`text-sm text-center min-h-[1.25rem] ${message ? (message.ok ? 'text-[#7fd1a8]' : 'text-[#f0a3a3]') : ''}`}>
            {message?.text}
          </p>
        </form>
      </div>
    </section>
  )
}
