'use client'
import { useState, useSyncExternalStore } from 'react'
import { CONSENT_TEXT } from '@/lib/newsletter'

const MESSAGES: Record<string, { text: string; ok: boolean }> = {
  subscribed: { text: "You're subscribed. Thank you.", ok: true },
  'invalid-email': { text: 'Please enter a valid email address.', ok: false },
  'consent-required': { text: 'Please tick the box to agree to receive emails.', ok: false },
  'rate-limited': { text: 'Too many attempts. Please try again in a few minutes.', ok: false },
  unavailable: { text: 'Signups are temporarily unavailable. Please try again later.', ok: false },
  error: { text: 'Something went wrong. Please try again.', ok: false },
}

// Plain form posting to /api/subscribe, so it works without JavaScript (the route redirects
// back with ?newsletter=<result>). With JavaScript it submits in place and shows the result.
// Result of a no-JavaScript submission, passed back in the URL by the route's redirect
const noSubscribe = () => () => {}
const redirectResult = () => new URLSearchParams(window.location.search).get('newsletter')
const noResult = () => null

export default function NewsletterSignup({ source }: { source: '/' | '/about' }) {
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
      setStatus(MESSAGES[data.status] ? data.status : 'error')
      if (data.status === 'subscribed') form.reset()
    } catch {
      setStatus('error')
    }
    setSending(false)
  }

  const message = status ? MESSAGES[status] : null
  return (
    <section id="newsletter" className="py-14 px-4 sm:px-6 relative">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <p className="text-[#c8a96e] text-xs uppercase tracking-widest mb-4">Newsletter</p>
          <h2 className="text-3xl text-[#f5efe3] mb-3" style={{fontFamily:'var(--font-playfair)'}}>Stay in the loop</h2>
          <p className="text-[rgba(245,239,227,0.5)] text-base">Occasional news about Interlüde. Unsubscribe any time.</p>
        </div>
        <form action="/api/subscribe" method="post" onSubmit={onSubmit} className="flex flex-col gap-4">
          <input type="hidden" name="source" value={source} />
          {/* Honeypot: hidden from people, often filled in by bots */}
          <div className="absolute -left-[9999px]" aria-hidden="true">
            <label>Leave this empty<input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
          </div>
          <label className="sr-only" htmlFor="newsletter-email">Email address</label>
          <input id="newsletter-email" type="email" name="email" required autoComplete="email" maxLength={254}
            placeholder="you@example.com"
            className="w-full px-4 py-4 rounded-xl bg-[rgba(245,239,227,0.06)] border border-[rgba(200,169,110,0.25)] text-[#f5efe3] placeholder-[rgba(245,239,227,0.3)] outline-none focus:border-[#c8a96e]" />
          <label className="flex items-start gap-3 text-left cursor-pointer">
            <input type="checkbox" name="consent" value="yes" required
              className="mt-1 w-5 h-5 shrink-0 accent-[#c8a96e]" />
            <span className="text-[rgba(245,239,227,0.6)] text-sm leading-relaxed">{CONSENT_TEXT}</span>
          </label>
          <button type="submit" disabled={sending}
            className="w-full py-4 rounded-xl bg-[#c8a96e] text-[#0f0e17] font-medium hover:opacity-90 transition-opacity disabled:opacity-50">
            {sending ? 'Subscribing…' : 'Subscribe'}
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
