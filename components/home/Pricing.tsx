// Moved unchanged from the old single-page layout
export default function Pricing() {
  return (
    <section className="py-14 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[#c8a96e] text-xs uppercase tracking-widest mb-4">Pricing</p>
          <h2 className="text-3xl md:text-4xl text-[#f5efe3]" style={{fontFamily:'var(--font-playfair)'}}>Free to start</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[rgba(200,169,110,0.05)] border border-[rgba(200,169,110,0.15)] rounded-2xl p-6">
            <p className="text-[#f5efe3] font-medium text-lg mb-2" style={{fontFamily:'var(--font-playfair)'}}>Free</p>
            <p className="text-4xl font-light text-[#c8a96e] mb-3" style={{fontFamily:'var(--font-playfair)'}}>$0</p>
            <p className="text-[rgba(245,239,227,0.45)] text-sm leading-relaxed">Join and plan your layover for free.</p>
          </div>
          <div className="bg-[rgba(200,169,110,0.05)] border border-[rgba(200,169,110,0.3)] rounded-2xl p-6 relative">
            <span className="absolute top-5 right-5 bg-[rgba(200,169,110,0.15)] text-[#c8a96e] text-[10px] font-medium uppercase tracking-widest px-2.5 py-1 rounded-full">Launching soon</span>
            <p className="text-[#f5efe3] font-medium text-lg mb-2" style={{fontFamily:'var(--font-playfair)'}}>Interlüde Pass</p>
            <p className="text-4xl font-light text-[#c8a96e] mb-1" style={{fontFamily:'var(--font-playfair)'}}>$12.99<span className="text-base text-[rgba(245,239,227,0.45)]"> CAD per trip</span></p>
            <p className="text-[rgba(245,239,227,0.6)] text-sm mb-4">or $59.99 CAD per year</p>
            <ul className="space-y-2">
              {[
                'The full AI itinerary',
                'Visa intelligence across 194 passports',
                'Advanced matching',
                'Currency and transport intelligence',
                'Live flight and gate alerts',
              ].map(item => (
                <li key={item} className="flex gap-2 text-[rgba(245,239,227,0.55)] text-sm leading-relaxed">
                  <span className="text-[#c8a96e]" aria-hidden="true">✓</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
