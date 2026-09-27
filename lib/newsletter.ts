// The consent wording shown next to the newsletter checkbox. The signup route stores this exact
// text with every subscriber as proof of express consent (CASL), so it is imported by both the
// form and the route. If the wording changes, bump CONSENT_VERSION: stored rows keep the text
// their subscribers actually agreed to.
export const CONSENT_VERSION = '2026-09-27'
export const CONSENT_TEXT =
  'Yes, I agree to receive occasional emails about Interlüde from Interlude Travels Inc., ' +
  'Langford, BC, Canada (evidence@getinterlude.app). I can unsubscribe at any time.'

// Hidden field bots fill in and people never see. Deliberately not a name browsers autofill
// ("website", "url", "company"...), or a real visitor's signup would be dropped as a bot.
export const HONEYPOT_FIELD = 'nl_confirm_x7'

// Pages the form appears on; anything else is recorded as "/"
export const NEWSLETTER_SOURCES = ['/', '/about'] as const
