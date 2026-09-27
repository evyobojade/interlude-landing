import Image from 'next/image'
import Starfield from '@/components/Starfield'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import { CONTACT_EMAIL, PRESS_KIT_URL } from '@/lib/links'
import { getCopy, fill, type Copy } from '@/lib/copy'

const copy = getCopy()
const { about } = copy

export const metadata = {
  title: about.meta.title,
  description: about.meta.description,
}

// For investors and journalists. The home page is for travellers only.

const AIRPORT_COUNT = 150
const FEATURED_AIRPORTS = ['LHR','DXB','CDG','SIN','JFK','LOS','ACC','NBO','DOH','YYZ','BOM','ICN','GRU','IST','SYD','HKG','NRT','DEL','ORD','LAX','ATL','YVR','CPH','AMS','FRA']

// Order, grouping and links; the text for each item is in the copy file under the same id
type ItemId = keyof Copy['about']['recognition']['items']
const RECOGNITION: { group: 'programmes' | 'press'; items: { id: ItemId; href?: string }[] }[] = [
  { group: 'programmes', items: [
    { id: 'melamoon', href: 'https://www.instagram.com/reel/DcMq4LoBASl/' },
    { id: 'foundhers', href: 'https://www.instagram.com/p/DdUGccgFrnP/' },
    { id: 'leagueOfInnovators' },
    { id: 'webSummitVancouver' },
    { id: 'webSummitLisbon' },
  ] },
  { group: 'press', items: [
    { id: 'victoriaNews', href: 'https://vicnews.com/2026/09/25/showcase-shines-light-on-university-of-victoria-startups-and-ventures/' },
    { id: 'freeDaily', href: 'https://vancouverislandfreedaily.com/2026/09/25/showcase-shines-light-on-university-of-victoria-startups-and-ventures/' },
  ] },
]

const AT_A_GLANCE = [
  { number: String(AIRPORT_COUNT), label: about.glance.airports },
  { number: '15', label: about.glance.languages },
  { number: '194', label: about.glance.passports },
]

const eyebrow = 'text-[#c8a96e] text-xs uppercase tracking-widest mb-4'
const card = 'bg-[rgba(200,169,110,0.05)] border border-[rgba(200,169,110,0.15)] rounded-2xl p-5'

export default function About() {
  return (
    <main className="min-h-screen overflow-x-hidden relative" style={{background:'radial-gradient(ellipse at 50% 20%, #111018 0%, #08080e 50%, #050507 100%)'}}>
      <Starfield />
      <SiteNav copy={copy.nav} getApp={copy.getApp} />

      {/* Founder */}
      <section className="pt-28 pb-14 px-4 sm:px-6 relative">
        <div className="max-w-2xl mx-auto text-center">
          <Image src="/evidence-obojade.jpg" width={1280} height={1600} priority
            sizes="(min-width: 640px) 224px, 176px"
            alt={about.founder.photoAlt}
            className="w-44 sm:w-56 h-auto mx-auto mb-8 rounded-2xl border border-[rgba(200,169,110,0.25)]" />
          <p className={eyebrow}>{about.founder.eyebrow}</p>
          <h1 className="text-3xl md:text-4xl text-[#f5efe3] mb-4" style={{fontFamily:'var(--font-playfair)'}}>{about.founder.heading}</h1>
          <p className="text-[rgba(245,239,227,0.55)] text-base leading-relaxed mb-6">
            {about.founder.bio}
          </p>
          <a href={PRESS_KIT_URL} className="inline-flex items-center gap-2 text-[#c8a96e] text-sm hover:opacity-80 transition-opacity">
            {about.founder.pressLink}
          </a>
        </div>
      </section>

      {/* Closing note: set apart by rules and type, not a card */}
      <section className="pb-14 px-4 sm:px-6 relative">
        <div className="max-w-xl mx-auto text-center">
          <div aria-hidden="true" className="w-12 h-px bg-[rgba(200,169,110,0.5)] mx-auto mb-8" />
          <p className="text-[rgba(245,239,227,0.6)] text-lg leading-relaxed" style={{fontFamily:'var(--font-playfair)'}}>
            {about.note.lead} <em>{about.note.quote}</em>
          </p>
          <p className="mt-6 text-[#c8a96e] text-2xl" style={{fontFamily:'var(--font-playfair)'}}>{about.note.close}</p>
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
            <p className={eyebrow}>{about.recognition.eyebrow}</p>
            <h2 className="text-2xl md:text-3xl text-[#f5efe3]" style={{fontFamily:'var(--font-playfair)'}}>{about.recognition.heading}</h2>
          </div>
          {RECOGNITION.map(section => (
            <div key={section.group} className="mb-8 last:mb-0">
              <p className="text-[rgba(245,239,227,0.35)] text-xs uppercase tracking-widest mb-3">{about.recognition[section.group]}</p>
              <div className="grid md:grid-cols-2 gap-4">
                {section.items.map(({ id, href }) => {
                  const item = about.recognition.items[id]
                  return (
                    <div key={id} className={`${card} flex flex-col`}>
                      <p className="text-[#c8a96e] text-sm font-medium mb-2">{item.title}</p>
                      <p className="text-[rgba(245,239,227,0.55)] text-sm leading-relaxed">{item.detail}</p>
                      {href && (
                        <a href={href} target="_blank" rel="noopener noreferrer" className="mt-3 text-[#c8a96e] text-xs hover:opacity-80 transition-opacity">
                          {item.cta} →
                        </a>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video */}
      <section className="py-10 px-4 sm:px-6 bg-[#0c0b14] relative">
        <div className="max-w-sm mx-auto text-center">
          <p className={eyebrow}>{about.video.eyebrow}</p>
          <div className={`${card} p-8 flex flex-col items-center gap-4`}>
            <div className="w-16 h-16 rounded-full bg-[#c8a96e] flex items-center justify-center text-[#0f0e17] text-2xl" aria-hidden="true">▶</div>
            <div>
              <p className="text-[#f5efe3] font-medium mb-1" style={{fontFamily:'var(--font-playfair)'}}>{about.video.title}</p>
              <p className="text-[rgba(245,239,227,0.45)] text-sm">{about.video.detail}</p>
            </div>
            <a href="https://www.instagram.com/interludetravels/reel/DWdAhG5D3Ru/" target="_blank" rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-[#c8a96e] text-[#0f0e17] font-medium text-sm hover:opacity-90 transition-opacity">
              {about.video.cta}
            </a>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-14 px-4 sm:px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <p className={eyebrow}>{about.coverage.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl text-[#f5efe3] mb-8" style={{fontFamily:'var(--font-playfair)'}}>{fill(about.coverage.heading, { count: AIRPORT_COUNT })}</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {FEATURED_AIRPORTS.map(code => (
              <span key={code} className="bg-[rgba(200,169,110,0.08)] border border-[rgba(200,169,110,0.15)] text-[#c8a96e] text-xs px-3 py-1.5 rounded-full font-medium">{code}</span>
            ))}
            <span className="bg-[rgba(200,169,110,0.08)] border border-[rgba(200,169,110,0.15)] text-[rgba(200,169,110,0.5)] text-xs px-3 py-1.5 rounded-full">{fill(about.coverage.more, { count: AIRPORT_COUNT - FEATURED_AIRPORTS.length })}</span>
          </div>
        </div>
      </section>

      {/* Press contact */}
      <section className="py-12 px-4 sm:px-6 bg-[#0c0b14] relative">
        <div className="max-w-2xl mx-auto text-center">
          <p className={eyebrow}>{about.contact.eyebrow}</p>
          <p className="text-[rgba(245,239,227,0.6)] text-base mb-4">{about.contact.text}</p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#c8a96e] text-lg hover:opacity-80 transition-opacity">{CONTACT_EMAIL}</a>
        </div>
      </section>

      <SiteFooter copy={copy.footer} />
    </main>
  )
}
