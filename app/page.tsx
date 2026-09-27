import Link from 'next/link'
import Starfield from '@/components/Starfield'
import Orb from '@/components/Orb'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import GetAppButton from '@/components/GetAppButton'
import Pricing from '@/components/home/Pricing'
import Keepsakes from '@/components/home/Keepsakes'
import NewsletterSignup from '@/components/NewsletterSignup'

// Home page for travellers. Recognition, press and the founder story live on /about.

const BRAND_LINE = 'The best stories hide in the in-between.'
const BRAND_CALL = 'Go find yours.'

const STEPS = [
  'Enter your layover.',
  'Get a plan built around your passport, your window and your budget.',
  'Get back to the gate on time.',
]

function BrandLine({ as: Tag = 'h1' }: { as?: 'h1' | 'h2' }) {
  return (
    <Tag className="text-4xl sm:text-5xl md:text-6xl text-[#f5efe3] leading-tight max-w-3xl mx-auto" style={{fontFamily:'var(--font-playfair)'}}>
      {BRAND_LINE} <span className="text-[#c8a96e]">{BRAND_CALL}</span>
    </Tag>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden relative" style={{background:'radial-gradient(ellipse at 50% 20%, #111018 0%, #08080e 50%, #050507 100%)'}}>
      <Starfield />
      <SiteNav />

      {/* 1. Hero */}
      <section data-nav-hero className="min-h-[85vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-24 pb-10 relative">
        <div className="mb-10"><Orb /></div>
        <BrandLine />
        <div className="mt-10 w-full flex justify-center"><GetAppButton /></div>
      </section>

      {/* 2. Credibility strip */}
      <section className="border-y border-[rgba(200,169,110,0.1)] relative">
        <Link href="/about" className="group block px-4 sm:px-6 py-5 text-center text-[rgba(245,239,227,0.45)] text-xs sm:text-sm tracking-wide hover:text-[#c8a96e] transition-colors">
          FoundHers Innovation Labs · League of Innovators · As seen in Victoria News
          <span aria-hidden="true" className="inline-block ml-1.5 transition-transform group-hover:translate-x-0.5">→</span>
        </Link>
      </section>

      {/* 3. The layover moment */}
      <section className="py-14 px-4 sm:px-6 relative">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#c8a96e] text-xs uppercase tracking-widest mb-4">The layover moment</p>
          <p className="text-[rgba(245,239,227,0.7)] text-xl sm:text-2xl leading-relaxed" style={{fontFamily:'var(--font-playfair)'}}>
            You have hours in a city you&apos;ve never seen, a passport that decides where you can go, and a flight you cannot miss. No app was built for that window. Until now.
          </p>
        </div>
      </section>

      {/* 4. How it works */}
      <section id="how-it-works" className="py-14 px-4 sm:px-6 bg-[#0c0b14] relative scroll-mt-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#c8a96e] text-xs uppercase tracking-widest mb-4">How it works</p>
            <h2 className="text-3xl md:text-4xl text-[#f5efe3]" style={{fontFamily:'var(--font-playfair)'}}>Three steps. One layover.</h2>
          </div>
          <ol className="flex flex-col gap-4">
            {STEPS.map((step, i) => (
              <li key={step} className="flex items-start gap-4 bg-[rgba(200,169,110,0.05)] border border-[rgba(200,169,110,0.12)] rounded-2xl p-5">
                <span className="shrink-0 w-9 h-9 rounded-full border border-[rgba(200,169,110,0.4)] text-[#c8a96e] flex items-center justify-center text-sm" style={{fontFamily:'var(--font-playfair)'}}>{i + 1}</span>
                <p className="text-[#f5efe3] text-lg leading-snug pt-1">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5. Pricing */}
      <Pricing />

      {/* 6. Keepsakes: the closer */}
      <Keepsakes />

      {/* 7. Newsletter */}
      <NewsletterSignup source="/" />

      {/* 8. Final call to action */}
      <section className="py-16 px-4 sm:px-6 text-center relative">
        <div className="mb-8 flex justify-center"><Orb size={140} /></div>
        <BrandLine as="h2" />
        <div className="mt-10 w-full flex justify-center"><GetAppButton /></div>
      </section>

      {/* For press and investors */}
      <section className="px-4 sm:px-6 pb-10 text-center relative">
        <Link href="/about" className="text-[#c8a96e] text-sm hover:opacity-80 transition-opacity">Press, recognition and the full story →</Link>
      </section>

      <SiteFooter />
    </main>
  )
}
