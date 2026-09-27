// Moved unchanged from the old single-page layout
export default function Keepsakes() {
  return (
    <section className="py-16 px-6 bg-[#0c0b14]">
      <div className="max-w-2xl mx-auto text-center">
        <span className="inline-block bg-[rgba(200,169,110,0.15)] text-[#c8a96e] text-[10px] font-medium uppercase tracking-widest px-2.5 py-1 rounded-full mb-6">Coming soon</span>
        <p className="text-[#c8a96e] text-xs uppercase tracking-widest mb-4">Keepsakes</p>
        <h2 className="text-3xl md:text-5xl text-[#f5efe3] mb-6 leading-tight" style={{fontFamily:'var(--font-playfair)'}}>The best part comes after.</h2>
        <p className="text-[rgba(245,239,227,0.55)] text-lg leading-relaxed mb-4">
          Every layover leaves something behind. Your photos, your notes, the song that was playing.
        </p>
        <p className="text-[rgba(245,239,227,0.55)] text-lg leading-relaxed">
          Interlüde turns them into something you keep — custom pieces you wear, and an illustrated storybook of the day, printed and posted to you.
        </p>
      </div>
    </section>
  )
}
