import Marquee from './Marquee'

const avatars = [
  'https://i.pravatar.cc/32?img=1',
  'https://i.pravatar.cc/32?img=2',
  'https://i.pravatar.cc/32?img=3',
  'https://i.pravatar.cc/32?img=4',
]

const pills = ['DRIBBBLE', 'BEHANCE', 'LINKEDIN', 'X', 'XING']

const bars = [
  { label: 'Solutions', pct: 100, highlight: false },
  { label: 'UI/UX', pct: 90, highlight: true },
  { label: 'Explore', pct: 72, highlight: false },
]

export default function About() {
  return (
    <section className="bg-gray-100 px-4 sm:px-6 lg:px-12 py-12 sm:py-16">

      {/* Top two-column header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-start max-w-6xl mx-auto">
        <div>
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow mb-4">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <rect x="0" y="0" width="8" height="8" fill="#111" />
              <rect x="10" y="0" width="8" height="8" fill="#111" />
              <rect x="0" y="10" width="8" height="8" fill="#111" />
            </svg>
          </div>
          <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
            We design every project with long-term success in mind.
          </p>
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-funnel text-gray-900 leading-snug">
            Our approach is straightforward—prioritizing functionality, speed, and clarity for solutions.
          </h2>
        </div>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-6xl mx-auto">

        {/* Card 1 — Stats */}
        <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col justify-between min-h-72 sm:min-h-80">
          <div>
            <p className="text-6xl sm:text-7xl font-bold text-gray-900 leading-none">
              25<span className="text-3xl sm:text-4xl">+</span>
            </p>
            <p className="text-sm font-funnel text-gray-400 mt-2 mb-5">Years of experience</p>
            <hr className="border-gray-100 mb-5" />
            <p className="text-sm text-gray-500 leading-relaxed font-funnel">
              Explore how we transform ideas into extraordinary digital experiences.
            </p>
          </div>
          <div className="mt-6">
            <div className="flex -space-x-2 mb-2">
              {avatars.map((src, i) => (
                <img key={i} src={src} alt="" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
              ))}
            </div>
            <p className="text-xs text-gray-500">1200+ happy users review</p>
          </div>
        </div>

        {/* Card 2 — Featured image */}
        <div className="relative rounded-2xl overflow-hidden shadow-sm min-h-72 sm:min-h-80 sm:col-span-1">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
            alt="Featured"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            {[1, 2].map((i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-1.5 text-center">
                <p className="text-white text-[9px] font-bold uppercase tracking-wider leading-tight">
                  {i === 1 ? 'ULTRA CERTIFIED' : 'SUPER INNER'}
                </p>
                <div className="flex justify-center gap-0.5 mt-1">
                  {[...Array(5)].map((_, s) => (
                    <span key={s} className="text-yellow-400 text-[8px]">★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-5 left-5 right-5">
            <p className="text-white text-sm leading-relaxed mb-2">
              " At Floka, we merge strategy, creativity, and technology to shape brands that people love. "
            </p>
            <p className="text-white/60 text-xs">Marlio H. Yelso, CEO</p>
          </div>
        </div>

        {/* Right column — two stacked cards */}
        <div className="flex flex-col gap-4 sm:gap-5 sm:col-span-2 lg:col-span-1">

          {/* Card 3 — Follow us */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm flex-1">
            <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Follow us</p>
            <p className="text-base sm:text-lg font-semibold text-gray-900 mb-5">For check updates</p>
            <div className="flex flex-wrap gap-2">
              {pills.map((p) => (
                <span
                  key={p}
                  className="text-[11px] font-semibold text-gray-700 border border-gray-200 rounded-full px-3 py-1 hover:bg-gray-50 cursor-pointer transition-colors"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Card 4 — Impressions */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm flex-1">
            <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-4">Impressions</p>
            <div className="flex flex-col gap-4">
              {bars.map(({ label, pct, highlight }) => (
                <div key={label}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-xs font-medium text-gray-600">
                      {highlight ? (
                        <span className="bg-gray-900 text-white text-xs font-semibold px-3 py-1 rounded-full">{label}</span>
                      ) : label}
                    </span>
                    <span className="text-xs text-gray-400">{pct}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5">
                    <div
                      className={`h-1.5 rounded-full ${highlight ? 'bg-gray-900' : 'bg-gray-300'}`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-12 py-8 border-y border-gray-200">
        <div
          className="overflow-hidden max-w-6xl mx-auto"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
          }}
        >
          <Marquee
            text="See how our team combines creativity, technology, and strategy"
            className="text-4xl sm:text-6xl lg:text-7xl font-funnel font-semibold text-gray-900"
          />
        </div>
      </div>
    </section>
  )
}
