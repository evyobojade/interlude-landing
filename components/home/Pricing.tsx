import type { Copy } from '@/lib/copy'

export default function Pricing({ copy }: { copy: Copy['pricing'] }) {
  const { free, pass } = copy
  return (
    <section id="pricing" className="py-14 px-6 scroll-mt-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[#c8a96e] text-xs uppercase tracking-widest mb-4">{copy.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl text-[#f5efe3]" style={{fontFamily:'var(--font-playfair)'}}>{copy.heading}</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[rgba(200,169,110,0.05)] border border-[rgba(200,169,110,0.15)] rounded-2xl p-6">
            <p className="text-[#f5efe3] font-medium text-lg mb-2" style={{fontFamily:'var(--font-playfair)'}}>{free.name}</p>
            <p className="text-4xl font-light text-[#c8a96e] mb-3" style={{fontFamily:'var(--font-playfair)'}}>{free.price}</p>
            <p className="text-[rgba(245,239,227,0.45)] text-sm leading-relaxed">{free.text}</p>
          </div>
          <div className="bg-[rgba(200,169,110,0.05)] border border-[rgba(200,169,110,0.3)] rounded-2xl p-6 relative">
            <span className="absolute top-5 right-5 bg-[rgba(200,169,110,0.15)] text-[#c8a96e] text-[10px] font-medium uppercase tracking-widest px-2.5 py-1 rounded-full">{pass.badge}</span>
            <p className="text-[#f5efe3] font-medium text-lg mb-2" style={{fontFamily:'var(--font-playfair)'}}>{pass.name}</p>
            <p className="text-4xl font-light text-[#c8a96e] mb-1" style={{fontFamily:'var(--font-playfair)'}}>{pass.price}<span className="text-base text-[rgba(245,239,227,0.45)]">{pass.per}</span></p>
            <p className="text-[rgba(245,239,227,0.6)] text-sm mb-4">{pass.yearly}</p>
            <ul className="space-y-2">
              {pass.includes.map(item => (
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
