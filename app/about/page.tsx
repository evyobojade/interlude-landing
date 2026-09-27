import Image from 'next/image'
import Starfield from '@/components/Starfield'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import { CONTACT_EMAIL, PRESS_KIT_URL } from '@/lib/links'

export const metadata = {
  title: 'About Interlüde — founder, recognition and press',
  description: 'The founder story, recognition, press coverage and coverage figures for Interlüde.',
}

// For investors and journalists. The home page is for travellers only.

const AIRPORT_COUNT = 150
const FEATURED_AIRPORTS = ['LHR','DXB','CDG','SIN','JFK','LOS','ACC','NBO','DOH','YYZ','BOM','ICN','GRU','IST','SYD','HKG','NRT','DEL','ORD','LAX','ATL','YVR','CPH','AMS','FRA']

type Item = { title: string; detail: string; href?: string; cta?: string }
const RECOGNITION: { group: string; items: Item[] }[] = [
  { group: 'Programs & competitions', items: [
    { title: 'MELAMOON Pitch · FACE Coalition and Interac', detail: 'Vancouver Top 10 · advanced to the national Top 50', href: 'https://www.instagram.com/reel/DcMq4LoBASl/', cta: 'Watch the pitch' },
    { title: 'FoundHers Innovation Labs · Cohort III', detail: 'One of 16 founders selected from 203 applications', href: 'https://www.instagram.com/p/DdUGccgFrnP/', cta: 'Read the announcement' },
    { title: 'League of Innovators · Labs 17', detail: 'National accelerator' },
    { title: 'Web Summit Vancouver 2026', detail: 'May 2026 · Startup programme with exhibition booth and investor access' },
    { title: 'Web Summit Lisbon 2026', detail: 'November 2026 · 71,000+ attendees · Exhibition space' },
  ] },
  { group: 'In the press', items: [
    { title: 'Victoria News', detail: '25 September 2026 · Showcase shines light on University of Victoria startups and ventures', href: 'https://vicnews.com/2026/09/25/showcase-shines-light-on-university-of-victoria-startups-and-ventures/', cta: 'Read the article' },
    { title: 'Vancouver Island Free Daily', detail: '25 September 2026 · Showcase shines light on University of Victoria startups and ventures', href: 'https://vancouverislandfreedaily.com/2026/09/25/showcase-shines-light-on-university-of-victoria-startups-and-ventures/', cta: 'Read the article' },
  ] },
]

const AT_A_GLANCE = [
  { number: String(AIRPORT_COUNT), label: 'Airports' },
  { number: '15', label: 'Languages' },
  { number: '194', label: 'Passports covered' },
]

const eyebrow = 'text-[#c8a96e] text-xs uppercase tracking-widest mb-4'
const card = 'bg-[rgba(200,169,110,0.05)] border border-[rgba(200,169,110,0.15)] rounded-2xl p-5'

export default function About() {
  return (
    <main className="min-h-screen overflow-x-hidden relative" style={{background:'radial-gradient(ellipse at 50% 20%, #111018 0%, #08080e 50%, #050507 100%)'}}>
      <Starfield />
      <SiteNav />

      {/* Founder */}
      <section className="pt-28 pb-14 px-4 sm:px-6 relative">
        <div className="max-w-2xl mx-auto text-center">
          <Image src="/evidence-obojade.jpg" width={1280} height={1600} priority
            sizes="(min-width: 640px) 224px, 176px"
            alt="Evidence Oghenekioja Obojade, founder of Interlüde"
            className="w-44 sm:w-56 h-auto mx-auto mb-8 rounded-2xl border border-[rgba(200,169,110,0.25)]" />
          <p className={eyebrow}>About Interlüde</p>
          <h1 className="text-3xl md:text-4xl text-[#f5efe3] mb-4" style={{fontFamily:'var(--font-playfair)'}}>Founded by Evidence Oghenekioja Obojade</h1>
          <p className="text-[rgba(245,239,227,0.55)] text-base leading-relaxed mb-6">
            Nigerian-Canadian entrepreneur. Computer Science and Health Information Science, University of Victoria. Built Interlüde from lived experience as a diaspora traveler who has navigated airports, immigration systems and cultural displacement across three continents.
          </p>
          <a href={PRESS_KIT_URL} className="inline-flex items-center gap-2 text-[#c8a96e] text-sm hover:opacity-80 transition-opacity">
            Full bio & press materials →
          </a>
        </div>
      </section>

      {/* Closing note: set apart by rules and type, not a card */}
      <section className="pb-14 px-4 sm:px-6 relative">
        <div className="max-w-xl mx-auto text-center">
          <div aria-hidden="true" className="w-12 h-px bg-[rgba(200,169,110,0.5)] mx-auto mb-8" />
          <p className="text-[rgba(245,239,227,0.6)] text-lg leading-relaxed" style={{fontFamily:'var(--font-playfair)'}}>
            Wangari Maathai, who began planting trees in Kenya and ended up with a Nobel Peace Prize, once said: <em>it is the little things citizens do. That is what will make the difference. My little thing is planting trees.</em>
          </p>
          <p className="mt-6 text-[#c8a96e] text-2xl" style={{fontFamily:'var(--font-playfair)'}}>Our little thing is layovers.</p>
          <div aria-hidden="true" className="w-12 h-px bg-[rgba(200,169,110,0.5)] mx-auto mt-8" />
        </div>
      </section>

      {/* At a glance */}
      <section className="py-10 px-4 sm:px-6 border-y border-[rgba(200,169,110,0.1)] relative">
        <div className="max-w-3xl mx-auto grid grid-cols-3 gap-4">
          {AT_A_GLANCE.map(stat => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl sm:text-4xl font-light text-[#c8a96e] mb-1" style={{fontFamily:'var(--font-playfair)'}}>{stat.number}</p>
              <p className="text-[rgba(245,239,227,0.45)] text-xs sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recognition and press */}
      <section className="py-14 px-4 sm:px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <p className={eyebrow}>Recognition</p>
            <h2 className="text-2xl md:text-3xl text-[#f5efe3]" style={{fontFamily:'var(--font-playfair)'}}>Selected, backed and in the news</h2>
          </div>
          {RECOGNITION.map(section => (
            <div key={section.group} className="mb-8 last:mb-0">
              <p className="text-[rgba(245,239,227,0.35)] text-xs uppercase tracking-widest mb-3">{section.group}</p>
              <div className="grid md:grid-cols-2 gap-4">
                {section.items.map(item => (
                  <div key={item.title} className={`${card} flex flex-col`}>
                    <p className="text-[#c8a96e] text-sm font-medium mb-2">{item.title}</p>
                    <p className="text-[rgba(245,239,227,0.55)] text-sm leading-relaxed">{item.detail}</p>
                    {item.href && (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="mt-3 text-[#c8a96e] text-xs hover:opacity-80 transition-opacity">
                        {item.cta} →
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video */}
      <section className="py-10 px-4 sm:px-6 bg-[#0c0b14] relative">
        <div className="max-w-sm mx-auto text-center">
          <p className={eyebrow}>See it in action</p>
          <div className={`${card} p-8 flex flex-col items-center gap-4`}>
            <div className="w-16 h-16 rounded-full bg-[#c8a96e] flex items-center justify-center text-[#0f0e17] text-2xl" aria-hidden="true">▶</div>
            <div>
              <p className="text-[#f5efe3] font-medium mb-1" style={{fontFamily:'var(--font-playfair)'}}>Watch the Interlüde story</p>
              <p className="text-[rgba(245,239,227,0.45)] text-sm">90 seconds · Runway $100K Big Ad Contest</p>
            </div>
            <a href="https://www.instagram.com/interludetravels/reel/DWdAhG5D3Ru/" target="_blank" rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-[#c8a96e] text-[#0f0e17] font-medium text-sm hover:opacity-90 transition-opacity">
              Watch on Instagram →
            </a>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-14 px-4 sm:px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <p className={eyebrow}>Global coverage</p>
          <h2 className="text-3xl md:text-4xl text-[#f5efe3] mb-8" style={{fontFamily:'var(--font-playfair)'}}>{AIRPORT_COUNT} airports across 6 continents</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {FEATURED_AIRPORTS.map(code => (
              <span key={code} className="bg-[rgba(200,169,110,0.08)] border border-[rgba(200,169,110,0.15)] text-[#c8a96e] text-xs px-3 py-1.5 rounded-full font-medium">{code}</span>
            ))}
            <span className="bg-[rgba(200,169,110,0.08)] border border-[rgba(200,169,110,0.15)] text-[rgba(200,169,110,0.5)] text-xs px-3 py-1.5 rounded-full">+{AIRPORT_COUNT - FEATURED_AIRPORTS.length} more</span>
          </div>
        </div>
      </section>

      {/* Press contact */}
      <section className="py-12 px-4 sm:px-6 bg-[#0c0b14] relative">
        <div className="max-w-2xl mx-auto text-center">
          <p className={eyebrow}>Press & investors</p>
          <p className="text-[rgba(245,239,227,0.6)] text-base mb-4">For interviews, press materials or investment enquiries:</p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#c8a96e] text-lg hover:opacity-80 transition-opacity">{CONTACT_EMAIL}</a>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
