export default function Marquee({ text, className = '' }) {
  // Duplicate text enough times to fill the loop seamlessly
  const items = Array(4).fill(text)

  return (
    <div className="overflow-hidden w-full">
      <div className={`flex whitespace-nowrap animate-marquee ${className}`}>
        {items.map((t, i) => (
          <span key={i} className="pr-16 shrink-0">{t}</span>
        ))}
        {/* Duplicate set for seamless loop */}
        {items.map((t, i) => (
          <span key={`dup-${i}`} className="pr-16 shrink-0" aria-hidden="true">{t}</span>
        ))}
      </div>
    </div>
  )
}
