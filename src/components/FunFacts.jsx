import { useRef, useEffect, useState } from 'react'

const overlayAvatars = [
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=80&q=80',
  'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=80&q=80',
]

function StatsCard({ children, className = '' }) {
  return (
    <div className={`rounded-2xl p-5 ${className}`}>{children}</div>
  )
}

export default function FunFacts() {
  const headingRef = useRef(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const el = headingRef.current
    if (!el) return

    // Small delay ensures the browser has painted the hidden state
    // before the observer can trigger the reveal
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setRevealed(true)
            observer.disconnect()
          }
        },
        { threshold: 0, rootMargin: '0px' }
      )
      observer.observe(el)
      return () => observer.disconnect()
    }, 100)

    return () => clearTimeout(timer)
  }, [])
  return (
    <section className="bg-gray-100 px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

        {/* Left — tall portrait image */}
        <div className="w-full">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=700&q=80"
            alt="Team"
            className="w-full h-full max-h-150 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Right — stacked content */}
        <div className="flex flex-col gap-5">

          {/* Top text block */}
          <div>
            <p className="text-[18px] uppercase tracking-widest text-gray-400 mb-3">Fun Facts</p>

            {/* Clip-path left-to-right reveal */}
            <div className="overflow-hidden" ref={headingRef}>
              <h2
                className="text-4xl sm:text-5xl font-semibold font-funnel text-gray-900 leading-tight"
                style={{
                  transform: revealed ? 'translateX(0)' : 'translateX(-50px)',
                  opacity: revealed ? 1 : 0,
                  transition: 'transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.1s, opacity 0.9s ease 0.1s',
                  willChange: 'transform, opacity',
                }}
              >
                Consistently delivering impactful results through a perfect blend of design and functionality.
              </h2>
            </div>
          </div>

          {/* Stats row — 2 col */}
          <div className="grid grid-cols-2 gap-4">

            {/* Projects card */}
            <StatsCard className="bg-white shadow-sm flex flex-col justify-between min-h-28">
              <p className="text-xs text-gray-400 leading-snug">Successful projects completed</p>
              <p className="text-4xl font-bold text-gray-900 mt-2">
                2k<span className="text-2xl text-orange-400">+</span>
              </p>
            </StatsCard>

            {/* Rating card */}
            <StatsCard className="bg-white shadow-sm flex flex-col justify-between min-h-28">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-orange-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-4xl font-bold text-gray-900 mt-1">4.9/5</p>
              <p className="text-xs text-gray-400 mt-1 leading-snug">We offer end-to-end creative solutions that make brands unforgettable.</p>
            </StatsCard>
          </div>

          {/* Dark highlight card + CTA + world card — 2 col */}
          <div className="grid grid-cols-2 gap-4">

            {/* Dark card */}
            <StatsCard className="bg-black text-white flex flex-col justify-between min-h-48">
              {/* Overlapping images */}
              <div className="flex -space-x-3 mb-4">
                {overlayAvatars.map((src, i) => (
                  <img key={i} src={src} alt="" className="w-12 h-12 rounded-xl object-cover border-2 border-black" />
                ))}
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                More than 2k+ projects completed—each crafted to deliver real-world results for ambitious brands.
              </p>
            </StatsCard>

            {/* Right column: CTA + world */}
            <div className="flex flex-col gap-4">

              {/* CTA card */}
              <StatsCard className="bg-white shadow-sm flex flex-col gap-3">
                <p className="text-xs text-gray-400 leading-snug">
                  We offer end-to-end creative solutions that make brands unforgettable.
                </p>
                <button className="flex items-center gap-2 self-start">
                  <span className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center text-white text-base shrink-0">+</span>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-gray-900">Hire Us Now</span>
                </button>
              </StatsCard>

              {/* World card */}
              <div className="relative rounded-2xl overflow-hidden min-h-20">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80"
                  alt="World"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 p-4 flex items-center justify-between h-full">
                  <p className="text-white text-xs font-medium leading-snug">Worldwide base<br />around the world</p>
                  <p className="text-white text-3xl font-bold">5<span className="text-orange-400">+</span></p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
