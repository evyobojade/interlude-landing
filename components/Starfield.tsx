// Background stars and shooting stars. Positions come from a fixed formula rather than
// Math.random so the server and browser render the same markup.
export default function Starfield() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{zIndex:0}} aria-hidden="true">
      {[...Array(80)].map((_, i) => (
        <div key={i} className="absolute rounded-full bg-white" style={{
          width: i % 5 === 0 ? '2px' : '1px',
          height: i % 5 === 0 ? '2px' : '1px',
          top: `${(i * 37 + 11) % 100}%`,
          left: `${(i * 53 + 7) % 100}%`,
          opacity: 0.3 + (i % 6) * 0.08,
          animation: `twinkle ${2 + (i % 4)}s ease-in-out infinite`,
          animationDelay: `${(i % 7) * 0.4}s`,
        }} />
      ))}
      <div className="shooting-star" style={{top:'15%',left:'10%',animationDelay:'0s',animationDuration:'2.5s'}} />
      <div className="shooting-star" style={{top:'35%',left:'40%',animationDelay:'4s',animationDuration:'3s'}} />
      <div className="shooting-star" style={{top:'60%',left:'20%',animationDelay:'8s',animationDuration:'2s'}} />
    </div>
  )
}
