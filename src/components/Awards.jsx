import { useEffect, useRef, useState } from 'react'
import awardsPortrait from '../assets/awards-portrait.png'

// ─── Reusable InView hook ────────────────────────────────────────────────────
function useInView(options = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set true when entering, false when leaving → animation replays every scroll
        setInView(entry.isIntersecting)
      },
      { threshold: 0.15, ...options }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, inView]
}

// ─── Award Row ────────────────────────────────────────────────────────────────
function AwardRow({ title, org, year, index }) {
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref}
      className={[
        'flex items-center justify-between py-4 border-b border-gray-200',
        'transition-all ease-out',
        inView
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 -translate-y-3 scale-[0.98]',
      ].join(' ')}
      style={{
        transitionDuration: '500ms',
        transitionDelay: inView ? `${index * 100}ms` : '0ms',
      }}
    >
      {/* Title */}
      <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-gray-900 w-2/5">
        {title}
      </span>

      {/* Org */}
      <span className="text-[11px] sm:text-xs uppercase tracking-widest text-gray-400 w-2/5 text-center">
        {org}
      </span>

      {/* Year */}
      <span className="text-[11px] sm:text-xs uppercase tracking-widest text-gray-400 w-1/5 text-right">
        {year}
      </span>
    </div>
  )
}

// ─── Main Section ─────────────────────────────────────────────────────────────
const AWARDS = [
  { title: 'Best Designer Awards', org: 'Awwwards',  year: '2025' },
  { title: 'Peaky UI Designer',    org: 'Google',    year: '2024' },
  { title: 'Great in UX',          org: 'Apple',     year: '2023' },
  { title: 'Best Website Pick',    org: 'Microsoft', year: '2022' },
  { title: 'Nelson UI & UX Designer', org: 'Samsung', year: '2021' },
]

export default function Awards() {
  const [headingRef, headingInView] = useInView()
  const [trophyRef, trophyInView] = useInView()

  return (
    <section className="bg-gray-100 px-4 sm:px-6 lg:px-12 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start lg:items-center">

          {/* ── LEFT: Portrait image ── */}
          <div className="flex flex-col items-start gap-3 shrink-0">
            <div className="w-[260px] sm:w-[300px] lg:w-[320px] rounded-2xl overflow-hidden shadow-lg">
              <img
                src={awardsPortrait}
                alt="Award-winning team"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[9px] uppercase tracking-[0.2em] text-gray-400 font-medium px-1">
              Get Rewards
            </p>
          </div>

          {/* ── RIGHT: Text + Table ── */}
          <div className="flex-1 min-w-0">

            {/* Trophy icon */}
            <div
              ref={trophyRef}
              className={[
                'w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center mb-6',
                'transition-all duration-500 ease-out',
                trophyInView ? 'opacity-100 scale-100' : 'opacity-0 scale-75',
              ].join(' ')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                className="w-5 h-5 text-gray-400"
              >
                <path d="M6 9H3l1 4h2m12-4h3l-1 4h-2M8 9V5h8v4M8 9c0 4 4 7 4 7s4-3 4-7" />
                <path d="M9 19h6M12 16v3" />
              </svg>
            </div>

            {/* Heading */}
            <h2
              ref={headingRef}
              className={[
                'text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 leading-snug max-w-2xl mb-8',
                'transition-all duration-700 ease-out',
                headingInView
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-10',
              ].join(' ')}
            >
              Driven by passion and grounded in expertise, our team turns bold ideas
              into reality, leading the way in creative innovation.
            </h2>

            {/* Divider */}
            <div className="border-t border-gray-200 mb-2" />

            {/* Awards Table */}
            <div>
              {AWARDS.map((award, i) => (
                <AwardRow
                  key={award.title}
                  title={award.title}
                  org={award.org}
                  year={award.year}
                  index={i}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
