'use client'
import { useState, useEffect } from 'react'
import { detectLanguage, loadMessages, t } from '@/lib/i18n'
import LanguageSelector from '@/components/LanguageSelector'

export default function Home() {
  const [messages, setMessages] = useState(null)
  const [showLanguage, setShowLanguage] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const lang = detectLanguage()
    loadMessages(lang).then(setMessages)
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLanguageChange = async (code) => {
    const msgs = await loadMessages(code)
    setMessages(msgs)
    setShowLanguage(false)
  }

  if (!messages) return (
    <main className="min-h-screen bg-[#0f0e17] flex items-center justify-center">
      <div className="w-12 h-12 rounded-full animate-pulse" style={{background:'conic-gradient(from 180deg, #c8a96e, #7a5c2e, #c8a96e)'}} />
    </main>
  )

  return (
    <main className="min-h-screen overflow-x-hidden relative" style={{background:"radial-gradient(ellipse at 50% 20%, #111018 0%, #08080e 50%, #050507 100%)"}}>

      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{zIndex:0}}>
        {[...Array(80)].map((_,i) => (
          <div key={i} className="absolute rounded-full bg-white" style={{
            width: Math.random() > 0.8 ? '2px' : '1px',
            height: Math.random() > 0.8 ? '2px' : '1px',
            top: `${Math.floor(Math.random()*100)}%`,
            left: `${Math.floor(Math.random()*100)}%`,
            opacity: 0.3 + Math.random() * 0.5,
            animation: `twinkle ${2 + Math.random()*3}s ease-in-out infinite`,
            animationDelay: `${Math.random()*3}s`
          }} />
        ))}
      </div>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[rgba(15,14,23,0.95)] backdrop-blur-md border-b border-[rgba(200,169,110,0.1)]' : ''}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-2xl text-[#f5efe3]" style={{fontFamily:'var(--font-playfair)'}}>interlüde</span>
          <div className="flex items-center gap-3">
            <button onClick={() => setShowLanguage(!showLanguage)} className="text-[rgba(245,239,227,0.5)] text-sm px-3 py-2 rounded-xl hover:text-[#f5efe3] transition-colors">🌍</button>
            <button onClick={() => window.location.href = '/auth?mode=signin'} className="text-[rgba(245,239,227,0.6)] text-sm px-4 py-2 rounded-xl hover:text-[#f5efe3] transition-colors">Sign in</button>
            <button onClick={() => window.location.href = 'https://app.getinterlude.app/auth?mode=signup'} className="bg-[#c8a96e] text-[#0f0e17] text-sm font-medium px-4 py-2 rounded-xl hover:opacity-90 transition-opacity">Get started</button>
          </div>
        </div>
        {showLanguage && (
          <div className="absolute top-16 right-6 z-50 w-72 bg-[#1a1927] border border-[rgba(200,169,110,0.2)] rounded-2xl p-4 shadow-2xl">
            <LanguageSelector onLanguageChange={handleLanguageChange} />
          </div>
        )}
      </nav>

      <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-20 pb-6 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div style={{position:'absolute',top:'20%',left:'50%',transform:'translateX(-50%)',width:'600px',height:'600px',borderRadius:'50%',background:'radial-gradient(circle, rgba(200,169,110,0.08) 0%, transparent 70%)'}} />
        </div>
        <div className="relative flex items-center justify-center mb-10" style={{width:'200px',height:'200px'}}>
          <div className="absolute rounded-full border border-[rgba(200,169,110,0.12)]" style={{width:'200px',height:'200px'}} />
          <div className="absolute rounded-full border border-[rgba(200,169,110,0.08)]" style={{width:'150px',height:'150px'}} />
          <div className="absolute rounded-full border border-[rgba(200,169,110,0.06)]" style={{width:'110px',height:'110px'}} />
          <div className="rounded-full" style={{width:'80px',height:'80px',background:'conic-gradient(from 180deg, #c8a96e, #7a5c2e, #e8d5b0, #f5efe3, #c8a96e)',boxShadow:'0 0 60px rgba(200,169,110,0.3), 0 0 120px rgba(200,169,110,0.1)',animation:'orbFloat 3s ease-in-out infinite',position:'relative'}}>
            <div style={{position:'absolute',inset:0,borderRadius:'50%',background:'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.15), transparent 60%)'}} />
          </div>
        </div>
        <div className="inline-flex items-center gap-2 bg-[rgba(200,169,110,0.1)] border border-[rgba(200,169,110,0.2)] rounded-full px-4 py-2 mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-[#c8a96e] animate-pulse" />
          <span className="text-[#c8a96e] text-xs font-medium tracking-wide">NOW LIVE · FREE TO JOIN</span>
        </div>
        <h1 className="text-5xl md:text-7xl text-[#f5efe3] mb-8 leading-tight max-w-3xl" style={{fontFamily:'var(--font-playfair)'}}>
          Your layover.<br />Your story.
        </h1>
        <p className="text-[rgba(245,239,227,0.55)] text-lg md:text-xl leading-relaxed max-w-lg mb-10">
          Interlüde connects travelers during airport layovers — matching you by time, language, hobbies and interests. Explore cities together or go solo. International or domestic. Plan ahead or jump in. Your layover, your way.
        </p>
<p className="text-[rgba(245,239,227,0.25)] text-xs mt-6">Available on web now · App Store & Google Play coming soon</p>
        <div className="mt-8 flex flex-col items-center gap-1 animate-bounce">
          <div className="w-px h-8 bg-gradient-to-b from-[rgba(200,169,110,0.4)] to-transparent" />
          <div className="w-1.5 h-1.5 rounded-full bg-[rgba(200,169,110,0.4)]" />
        </div>
      </section>

      
      {/* VIDEO */}
      <section className="py-10 px-6">
        <div className="max-w-sm mx-auto text-center">
          <p className="text-[#c8a96e] text-xs uppercase tracking-widest mb-6">See it in action</p>
          <div className="bg-[rgba(200,169,110,0.05)] border border-[rgba(200,169,110,0.15)] rounded-2xl p-8 flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#c8a96e] flex items-center justify-center text-[#0f0e17] text-2xl">▶</div>
            <div>
              <p className="text-[#f5efe3] font-medium mb-1" style={{fontFamily:'var(--font-playfair)'}}>Watch the Interlüde story</p>
              <p className="text-[rgba(245,239,227,0.4)] text-sm">90 seconds · Runway $100K Big Ad Contest</p>
            </div>
            <a href="https://www.instagram.com/interludetravels/reel/DWdAhG5D3Ru/" target="_blank"
              className="w-full py-3 rounded-xl bg-[#c8a96e] text-[#0f0e17] font-medium text-sm hover:opacity-90 transition-opacity">
              Watch on Instagram →
            </a>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-14 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#c8a96e] text-xs uppercase tracking-widest mb-4">The problem</p>
          <h2 className="text-3xl md:text-5xl text-[#f5efe3] mb-6 leading-tight" style={{fontFamily:'var(--font-playfair)'}}>
            You didn't plan to meet them.
          </h2>
          <p className="text-[rgba(245,239,227,0.55)] text-lg leading-relaxed mb-4">
            You just happened to be at the same airport, at the same time, going somewhere else entirely.
          </p>
          <p className="text-[rgba(245,239,227,0.55)] text-lg leading-relaxed mb-4">
            And somehow — that was enough.
          </p>
          <p className="text-[rgba(245,239,227,0.4)] text-base leading-relaxed mb-4">
            Or maybe you explored alone, and that was enough too.
          </p>
          <p className="text-[rgba(245,239,227,0.3)] text-base leading-relaxed">
            No app was built for this moment. Until now.
          </p>
          <div className="mt-10 h-px bg-gradient-to-r from-transparent via-[rgba(200,169,110,0.3)] to-transparent" />
        </div>
      </section>

      <section className="py-14 px-6 bg-[#0c0b14]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[rgba(245,239,227,0.35)] text-2xl md:text-3xl leading-relaxed mb-6" style={{fontFamily:'var(--font-playfair)',fontStyle:'italic'}}>
            "You've crossed oceans, time zones and borders<br />to get where you are.
          </p>
          <p className="text-[rgba(245,239,227,0.55)] text-2xl md:text-3xl leading-relaxed mb-6" style={{fontFamily:'var(--font-playfair)',fontStyle:'italic'}}>
            Somewhere between departure and arrival<br />is a story waiting to happen.
          </p>
          <p className="text-[#c8a96e] text-2xl md:text-3xl leading-relaxed" style={{fontFamily:'var(--font-playfair)',fontStyle:'italic'}}>
            You deserve more than a plastic airport chair."
          </p>
        </div>
      </section>

      <section className="py-10 px-6 border-y border-[rgba(200,169,110,0.1)]">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {number:'121',label:'Airports worldwide'},
            {number:'15',label:'Languages supported'},
            {number:'6',label:'Continents covered'},
            {number:'$0',label:'Free to join'},
          ].map((stat,i) => (
            <div key={i} className="text-center">
              <p className="text-4xl font-light text-[#c8a96e] mb-2" style={{fontFamily:'var(--font-playfair)'}}>{stat.number}</p>
              <p className="text-[rgba(245,239,227,0.4)] text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#c8a96e] text-xs uppercase tracking-widest mb-4">How it works</p>
            <h2 className="text-3xl md:text-4xl text-[#f5efe3]" style={{fontFamily:'var(--font-playfair)'}}>Your layover. Transformed.</h2>
            <p className="text-[rgba(245,239,227,0.4)] text-sm mt-4 max-w-lg mx-auto">Plan weeks ahead or jump in day-of. 2 hours or 12. With people or alone. Interlüde works for every layover.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {step:'01',icon:'📋',title:'Plan weeks ahead',desc:'Enter your layover in advance. We instantly check your visa status — if you need one, we tell you exactly how long it takes to process and link you straight to apply. No surprises, no stress.'},
              {step:'02',icon:'⚡',title:'Or jump in day-of',desc:'Already at the airport? Open Interlüde right now. We instantly show you who is at your airport, what is happening nearby, and exactly how much time you have to explore.'},
              {step:'03',icon:'🤝',title:'Find your people — or your path',desc:'Match with travelers by overlapping layover time, shared language, hobbies, interests and profession. Prefer solo? We build your perfect solo itinerary tailored to your exact layover duration.'},
              {step:'04',icon:'🌍',title:'Make every hour count',desc:'Live events, concerts, festivals and cultural hotspots with exact travel times. Weather and outfit tips. Local phrases. New shops, airside dining and lounge updates. Always fresh, never outdated.'},
            ].map((item,i) => (
              <div key={i} className="bg-[rgba(200,169,110,0.05)] border border-[rgba(200,169,110,0.1)] rounded-2xl p-6">
                <p className="text-[rgba(200,169,110,0.3)] text-xs font-medium mb-4">{item.step}</p>
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-[#f5efe3] font-medium text-lg mb-3" style={{fontFamily:'var(--font-playfair)'}}>{item.title}</h3>
                <p className="text-[rgba(245,239,227,0.45)] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-6 bg-[#0c0b14]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#c8a96e] text-xs uppercase tracking-widest mb-4">Features</p>
            <h2 className="text-3xl md:text-4xl text-[#f5efe3]" style={{fontFamily:'var(--font-playfair)'}}>Everything you need. Nothing you don't.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              {icon:'🛂',title:'Visa intelligence',desc:'Passport & citizenship check — costs, processing times and direct apply links. Plan ahead, never get caught off guard.'},
              {icon:'🗺',title:'Live airport guides',desc:'Inside & outside — always updated with new shops, airside dining and lounge options.'},
              {icon:'🎭',title:'Live events & festivals',desc:'Concerts, markets, cultural events near your airport with exact travel times — via Ticketmaster and Eventbrite.'},
              {icon:'🏛',title:'Tourist hotspots',desc:'Galleries, monuments, iconic restaurants and hidden gems — curated for your exact layover duration.'},
              {icon:'🌤',title:'Weather & outfit tips',desc:'Know exactly what to wear before you step outside. Weather forecasts and packing tips for your layover city.'},
              {icon:'🗣',title:'Local phrases & greetings',desc:'Learn how to say hello, thank you and more in the local language. Connect authentically wherever you land.'},
              {icon:'💱',title:'Currency & payment intel',desc:'Live exchange rates, accepted cards at your airport and fintech partner referrals to avoid punishing international fees.'},
              {icon:'🚗',title:'Smart transport alerts',desc:'We monitor traffic for your return journey. If surge pricing or rush hour is predicted we alert you to book early.'},
              {icon:'🗺',title:'Your way planning',desc:'Have something in mind? Tell us a restaurant, shop or event and we plan your entire layover around it.'},
              {icon:'🔔',title:'Gate change alerts',desc:'Real-time gate changes detected and sent to you the moment they happen.'},
              {icon:'👥',title:'Smart matching',desc:'By layover time, language, hobbies, interests and profession — the most relevant connections first.'},
              {icon:'💬',title:'Group chat',desc:'Create a crew, plan together in real-time and stay connected throughout your layover.'},
              {icon:'⏰',title:'Return reminders',desc:'We calculate your travel time back and tell you exactly when to leave so you never miss your flight.'},
              {icon:'🧭',title:'Solo explorer mode',desc:'Going alone? We build your perfect solo itinerary — tailored to your interests and layover duration.'},
              {icon:'🏠',title:'Domestic layovers',desc:'Works for local flights too — no passport, no visa, no problem.'},
              {icon:'🌐',title:'15 languages',desc:'Yoruba, Igbo, Twi, Swahili, Arabic, Hindi, Tagalog, Chinese, Japanese and more.'},
              {icon:'🍜',title:'Food & dining',desc:'Best local restaurants, street food, airside dining and hidden gems — inside and outside the airport.'},
              {icon:'📱',title:'Available on web now',desc:'Works instantly on iPhone and Android. App Store & Google Play coming soon.'},
            ].map((feature,i) => (
              <div key={i} className="bg-[rgba(245,239,227,0.03)] border border-[rgba(200,169,110,0.08)] rounded-2xl p-4 hover:border-[rgba(200,169,110,0.2)] transition-all">
                <div className="text-2xl mb-3">{feature.icon}</div>
                <p className="text-[#f5efe3] text-sm font-medium mb-1">{feature.title}</p>
                <p className="text-[rgba(245,239,227,0.35)] text-xs leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#c8a96e] text-xs uppercase tracking-widest mb-4">Built for everyone</p>
            <h2 className="text-3xl md:text-4xl text-[#f5efe3]" style={{fontFamily:'var(--font-playfair)'}}>The traveler the world forgot to build for</h2>
            <p className="text-[rgba(245,239,227,0.4)] text-sm mt-4 max-w-lg mx-auto">Every immigrant, every adventurer, every solo explorer, every family in transit — Interlüde was built for all of you. All 195 countries. No one left out.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {icon:'🌍',title:'Africa — all 56 countries',desc:'From Lagos to Cape Town, Accra to Nairobi, Dakar to Addis Ababa. We speak Yoruba, Igbo, Twi, Swahili, Amharic, French and more. Finally, an app that was built with you in mind.',detail:'Nigeria · Ghana · Kenya · Ethiopia · South Africa · Cameroon · Senegal · Uganda · Zimbabwe · Côte d\'Ivoire and all 46 more'},
              {icon:'🌏',title:'Asia & the Pacific — all 48 countries',desc:'OFWs transiting Dubai. NRIs flying through Singapore. Students heading home from Tokyo. Families connecting through Bangkok. We were built for your routes and your reality.',detail:'Philippines · India · Bangladesh · Pakistan · Vietnam · Indonesia · Malaysia · Thailand · China · Japan · Sri Lanka and all 37 more'},
              {icon:'🌎',title:'The Americas, Europe & beyond',desc:'Diaspora traveling between continents. Families split across borders. Immigrants who carry two cultures in one heart. Wherever your journey started — you belong here.',detail:'Brazil · Mexico · Colombia · Jamaica · Trinidad · Caribbean · Latin America · Eastern Europe · Middle East and all who journey'},
              {icon:'✈️',title:'Every adventurer. Every traveler. Full stop.',desc:'You do not need to be an immigrant to belong here. If you have a layover and curiosity in your heart — whether you want a crew, a concert, a quiet café or the best shawarma in the city — this is for you.',detail:'Solo explorers · Digital nomads · Families in transit · Business travelers · Students · Anyone with hours to spare and a story to make'},
            ].map((item,i) => (
              <div key={i} className="bg-[rgba(200,169,110,0.04)] border border-[rgba(200,169,110,0.1)] rounded-2xl p-6">
                <p className="text-4xl mb-4">{item.icon}</p>
                <h3 className="text-[#f5efe3] font-medium text-lg mb-2" style={{fontFamily:'var(--font-playfair)'}}>{item.title}</h3>
                <p className="text-[rgba(245,239,227,0.45)] text-sm leading-relaxed mb-3">{item.desc}</p>
                <p className="text-[rgba(200,169,110,0.4)] text-xs leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-6 bg-[#0c0b14]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#c8a96e] text-xs uppercase tracking-widest mb-4">Global coverage</p>
          <h2 className="text-3xl md:text-4xl text-[#f5efe3] mb-6" style={{fontFamily:'var(--font-playfair)'}}>121 airports across 6 continents</h2>
          <p className="text-[rgba(245,239,227,0.4)] text-sm leading-relaxed mb-10 max-w-xl mx-auto">From Lagos to London, Dubai to Toronto, Singapore to New York — if you have a layover, we have a guide. And we are always adding more.</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['LHR','DXB','CDG','SIN','JFK','LOS','ACC','NBO','DOH','YYZ','BOM','ICN','GRU','IST','SYD','HKG','NRT','DEL','ORD','LAX','ATL','YVR','CPH','AMS','FRA'].map(code => (
              <span key={code} className="bg-[rgba(200,169,110,0.08)] border border-[rgba(200,169,110,0.15)] text-[#c8a96e] text-xs px-3 py-1.5 rounded-full font-medium">{code}</span>
            ))}
            <span className="bg-[rgba(200,169,110,0.08)] border border-[rgba(200,169,110,0.15)] text-[rgba(200,169,110,0.5)] text-xs px-3 py-1.5 rounded-full">+96 more</span>
          </div>
        </div>
      </section>

      <section className="py-14 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="relative flex items-center justify-center" style={{width:'120px',height:'120px',margin:'0 auto 2rem'}}>
            <div className="absolute rounded-full border border-[rgba(200,169,110,0.08)]" style={{width:'120px',height:'120px'}} />
            <div className="absolute rounded-full border border-[rgba(200,169,110,0.05)]" style={{width:'90px',height:'90px'}} />
            <div className="rounded-full" style={{width:'60px',height:'60px',background:'radial-gradient(circle at 35% 30%, #f5efe3 0%, #e8d5a0 20%, #c8a96e 50%, #a07840 75%, #7a5c2e 100%)',boxShadow:'0 0 40px rgba(200,169,110,0.3)',animation:'orbFloat 3s ease-in-out infinite'}} />
          </div>
          <h2 className="text-3xl md:text-5xl text-[#f5efe3] mb-6 leading-tight" style={{fontFamily:'var(--font-playfair)'}}>
            Moments and memories<br />that make life worth living.
          </h2>
          <p className="text-[rgba(245,239,227,0.45)] text-lg mb-10">Join free. Works on iPhone and Android right now. App Store & Google Play coming soon.</p>
          <button onClick={() => window.location.href = 'https://app.getinterlude.app/auth?mode=signup'} className="w-full max-w-sm py-5 rounded-2xl bg-[#c8a96e] text-[#0f0e17] font-medium text-lg hover:opacity-90 transition-opacity mx-auto block">
            Start your journey →
          </button>
          <p className="text-[rgba(245,239,227,0.2)] text-xs mt-4">getinterlude.app · free forever</p>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-[rgba(200,169,110,0.1)]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xl text-[#f5efe3] mb-1" style={{fontFamily:'var(--font-playfair)'}}>interlüde</p>
            <p className="text-[rgba(245,239,227,0.3)] text-xs">Turn your layover into a story.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-[rgba(245,239,227,0.3)] text-xs">
            <a href="/press" className="hover:text-[#c8a96e] transition-colors">Press & Media</a>
            <a href="/auth?mode=signup" className="hover:text-[#c8a96e] transition-colors">Get started</a>
            <a href="/auth?mode=signin" className="hover:text-[#c8a96e] transition-colors">Sign in</a>
            <a href="mailto:evidence@getinterlude.app" className="hover:text-[#c8a96e] transition-colors">Contact</a>
            <a href="/privacy" className="hover:text-[#c8a96e] transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-[#c8a96e] transition-colors">Terms</a>
            <a href="https://instagram.com/interludetravels" className="hover:text-[#c8a96e] transition-colors">Instagram</a>
            <a href="https://tiktok.com/@interludetravels" className="hover:text-[#c8a96e] transition-colors">TikTok</a>
            <a href="/security" className="hover:text-[#c8a96e] transition-colors">Security</a>
            <a href="/data-request" className="hover:text-[#c8a96e] transition-colors">Data Request</a>
          </div>
          <div className="text-center md:text-right">
            <p className="text-[rgba(245,239,227,0.2)] text-xs">© 2026 Interlüde Travels</p>
            <p className="text-[rgba(245,239,227,0.15)] text-xs">Langford, BC, Canada</p>
          </div>
        </div>
      </footer>

      <button
        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-[#c8a96e] text-[#0f0e17] flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity z-40 text-lg">
        ↑
      </button>

    </main>
  )
}
