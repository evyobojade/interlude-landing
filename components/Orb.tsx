export default function Orb({ size = 200 }: { size?: number }) {
  const scale = size / 200
  return (
    <div className="relative flex items-center justify-center" style={{width:`${size}px`,height:`${size}px`}} aria-hidden="true">
      <div className="absolute rounded-full border border-[rgba(200,169,110,0.12)]" style={{width:`${200 * scale}px`,height:`${200 * scale}px`}} />
      <div className="absolute rounded-full border border-[rgba(200,169,110,0.08)]" style={{width:`${150 * scale}px`,height:`${150 * scale}px`}} />
      <div className="absolute rounded-full border border-[rgba(200,169,110,0.06)]" style={{width:`${110 * scale}px`,height:`${110 * scale}px`}} />
      <div className="rounded-full" style={{width:`${80 * scale}px`,height:`${80 * scale}px`,background:'conic-gradient(from 180deg, #c8a96e, #7a5c2e, #e8d5b0, #f5efe3, #c8a96e)',boxShadow:'0 0 60px rgba(200,169,110,0.3), 0 0 120px rgba(200,169,110,0.1)',animation:'orbFloat 3s ease-in-out infinite',position:'relative'}}>
        <div style={{position:'absolute',inset:0,borderRadius:'50%',background:'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.15), transparent 60%)'}} />
      </div>
    </div>
  )
}
