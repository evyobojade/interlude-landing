// All visitor-facing text on the landing site, in English. This is the master copy: every
// other language will be a file with exactly this shape (the Copy type below), so the build
// fails if a translation is missing a line.
//
// Notes for translators:
// - Leave Interlüde, Interlude Travels Inc., and the names of programmes, events and
//   publications as they are.
// - {count} and similar placeholders are filled in by the page; keep them in the sentence.
// - Prices stay in CAD.
//
// Not here on purpose: the newsletter consent wording, which is legal text stored with each
// signup (lib/newsletter.ts), and links, which are the same in every language.

const en = {
  meta: {
    title: 'Interlüde — The best stories hide in the in-between',
    description: 'Enter your layover and get a plan built around your passport, your window and your budget, then get back to the gate on time.',
  },

  nav: {
    label: 'Main',
    howItWorks: 'How it works',
    pricing: 'Pricing',
    keepsakes: 'Keepsakes',
    about: 'About',
    signIn: 'Sign in',
    menu: 'Menu',
    close: 'Close',
  },

  getApp: 'Get Interlüde',

  // The gold second sentence is shown separately, so it is its own line
  brand: {
    line: 'The best stories hide in the in-between.',
    call: 'Go find yours.',
  },

  home: {
    credibility: 'FoundHers Innovation Labs · League of Innovators · As seen in Victoria News',
    moment: {
      eyebrow: 'The layover moment',
      text: "You have hours in a city you've never seen, a passport that decides where you can go, and a flight you cannot miss. No app was built for that window. Until now.",
    },
    howItWorks: {
      eyebrow: 'How it works',
      heading: 'Three steps. One layover.',
      steps: [
        'Enter your layover.',
        'Get a plan built around your passport, your window and your budget.',
        'Get back to the gate on time.',
      ],
    },
    fullStory: 'Press, recognition and the full story →',
  },

  pricing: {
    eyebrow: 'Pricing',
    heading: 'Free to start',
    free: {
      name: 'Free',
      price: '$0',
      text: 'Join and plan your layover for free.',
    },
    pass: {
      badge: 'Launching soon',
      name: 'Interlüde Pass',
      price: '$12.99',
      per: ' CAD per trip',
      yearly: 'or $59.99 CAD per year',
      includes: [
        'The full AI itinerary',
        'Visa intelligence across 194 passports',
        'Advanced matching',
        'Currency and transport intelligence',
        'Live flight and gate alerts',
      ],
    },
  },

  keepsakes: {
    badge: 'Coming soon',
    eyebrow: 'Keepsakes',
    heading: 'The best part comes after.',
    paragraphs: [
      'Every layover leaves something behind. Your photos, your notes, the song that was playing.',
      'Interlüde turns them into something you keep — custom pieces you wear, and an illustrated storybook of the day, printed and posted to you.',
    ],
  },

  newsletter: {
    eyebrow: 'Newsletter',
    heading: 'Stay in the loop',
    intro: 'Occasional news about Interlüde. Unsubscribe any time.',
    emailLabel: 'Email address',
    emailPlaceholder: 'you@example.com',
    subscribe: 'Subscribe',
    subscribing: 'Subscribing…',
    results: {
      subscribed: "You're subscribed. Thank you.",
      invalidEmail: 'Please enter a valid email address.',
      consentRequired: 'Please tick the box to agree to receive emails.',
      rateLimited: 'Too many attempts. Please try again in a few minutes.',
      unavailable: 'Signups are temporarily unavailable. Please try again later.',
      error: 'Something went wrong. Please try again.',
    },
  },

  footer: {
    tagline: 'The best stories hide in the in-between.',
    about: 'About',
    signIn: 'Sign in',
    press: 'Press & Media',
    contact: 'Contact',
    privacy: 'Privacy',
    terms: 'Terms',
    security: 'Security',
    dataRequest: 'Data Request',
    location: 'Langford, BC, Canada',
  },

  about: {
    meta: {
      title: 'About Interlüde — founder, recognition and press',
      description: 'The founder story, recognition, press coverage and coverage figures for Interlüde.',
    },
    founder: {
      photoAlt: 'Evidence Oghenekioja Obojade, founder of Interlüde',
      eyebrow: 'About Interlüde',
      heading: 'Founded by Evidence Oghenekioja Obojade',
      bio: 'Nigerian-Canadian entrepreneur. Computer Science and Health Information Science, University of Victoria. Built Interlüde from lived experience as a diaspora traveler who has navigated airports, immigration systems and cultural displacement across three continents.',
      pressLink: 'Full bio & press materials →',
    },
    // The quoted words are shown in italics, so they are their own line
    note: {
      lead: 'Wangari Maathai, who began planting trees in Kenya and ended up with a Nobel Peace Prize, once said:',
      quote: 'it is the little things citizens do. That is what will make the difference. My little thing is planting trees.',
      close: 'Our little thing is layovers.',
    },
    glance: {
      airports: 'Airports',
      languages: 'Languages',
      passports: 'Passports covered',
    },
    recognition: {
      eyebrow: 'Recognition',
      heading: 'Selected, backed and in the news',
      programmes: 'Programs & competitions',
      press: 'In the press',
      // Keyed by the ids in app/about/page.tsx, which holds the links
      items: {
        melamoon: { title: 'MELAMOON Pitch · FACE Coalition and Interac', detail: 'Vancouver Top 10 · advanced to the national Top 50', cta: 'Watch the pitch' },
        foundhers: { title: 'FoundHers Innovation Labs · Cohort III', detail: 'One of 16 founders selected from 203 applications', cta: 'Read the announcement' },
        leagueOfInnovators: { title: 'League of Innovators · Labs 17', detail: 'National accelerator', cta: '' },
        webSummitVancouver: { title: 'Web Summit Vancouver 2026', detail: 'May 2026 · Startup programme with exhibition booth and investor access', cta: '' },
        webSummitLisbon: { title: 'Web Summit Lisbon 2026', detail: 'November 2026 · 71,000+ attendees · Exhibition space', cta: '' },
        victoriaNews: { title: 'Victoria News', detail: '25 September 2026 · Showcase shines light on University of Victoria startups and ventures', cta: 'Read the article' },
        freeDaily: { title: 'Vancouver Island Free Daily', detail: '25 September 2026 · Showcase shines light on University of Victoria startups and ventures', cta: 'Read the article' },
      },
    },
    video: {
      eyebrow: 'See it in action',
      title: 'Watch the Interlüde story',
      detail: '90 seconds · Runway $100K Big Ad Contest',
      cta: 'Watch on Instagram →',
    },
    coverage: {
      eyebrow: 'Global coverage',
      heading: '{count} airports across 6 continents',
      more: '+{count} more',
    },
    contact: {
      eyebrow: 'Press & investors',
      text: 'For interviews, press materials or investment enquiries:',
    },
  },
}

export type Copy = typeof en
export default en
