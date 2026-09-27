import type { Copy } from '@/lib/copy'

export default function Keepsakes({ copy }: { copy: Copy['keepsakes'] }) {
  return (
    <section id="keepsakes" className="py-16 px-6 bg-[#0c0b14] scroll-mt-20">
      <div className="max-w-2xl mx-auto text-center">
        <span className="inline-block bg-[rgba(200,169,110,0.15)] text-[#c8a96e] text-[10px] font-medium uppercase tracking-widest px-2.5 py-1 rounded-full mb-6">{copy.badge}</span>
        <p className="text-[#c8a96e] text-xs uppercase tracking-widest mb-4">{copy.eyebrow}</p>
        <h2 className="text-3xl md:text-5xl text-[#f5efe3] mb-6 leading-tight" style={{fontFamily:'var(--font-playfair)'}}>{copy.heading}</h2>
        {copy.paragraphs.map((text, i) => (
          <p key={i} className={`text-[rgba(245,239,227,0.55)] text-lg leading-relaxed${i < copy.paragraphs.length - 1 ? ' mb-4' : ''}`}>
            {text}
          </p>
        ))}
      </div>
    </section>
  )
}
