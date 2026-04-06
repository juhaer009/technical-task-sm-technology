import { useState, useEffect, useRef } from 'react'

function ContactForm({ popState }) {
  // popState: 'hidden' | 'popped' | 'receded'
  const styles = {
    hidden:  { transform: 'translateY(60px) scale(0.94)', opacity: 0 },
    popped:  { transform: 'translateY(0px)  scale(1)',    opacity: 1 },
    receded: { transform: 'translateY(30px) scale(0.96)', opacity: 0.6 },
  }

  return (
    <div
      className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl w-full"
      style={{
        ...styles[popState],
        transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.45s ease-out',
        willChange: 'transform, opacity',
      }}
    >
      <h3 className="text-base font-semibold text-gray-900 mb-5">Have a project in mind?</h3>

      <div className="flex flex-col gap-3">
        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-gray-100 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-black w-full"
          />
          <input
            type="email"
            placeholder="Business Email"
            className="bg-gray-100 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-black w-full"
          />
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="relative">
            <p className="text-[9px] uppercase tracking-widest text-gray-400 mb-1 px-1">Budget</p>
            <select className="bg-gray-100 rounded-lg px-4 py-3 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-black w-full appearance-none cursor-pointer">
              <option>$1,000 – $2,000</option>
              <option>$2,000 – $5,000</option>
              <option>$5,000 – $10,000</option>
              <option>$10,000+</option>
            </select>
          </div>
          <div className="relative">
            <p className="text-[9px] uppercase tracking-widest text-gray-400 mb-1 px-1">Service</p>
            <select className="bg-gray-100 rounded-lg px-4 py-3 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-black w-full appearance-none cursor-pointer">
              <option>Consultancy</option>
              <option>Web Development</option>
              <option>UI/UX Design</option>
              <option>SEO</option>
              <option>Branding</option>
            </select>
          </div>
        </div>

        {/* Row 3 — textarea */}
        <textarea
          placeholder="Message"
          rows={4}
          className="bg-gray-100 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-black w-full resize-none"
        />

        {/* Submit */}
        <button className="flex items-center gap-3 mt-1 group self-start">
          <span className="w-9 h-9 rounded-full bg-gray-900 flex items-center justify-center text-white text-lg shrink-0 group-hover:bg-black transition-colors">+</span>
          <span className="text-[11px] font-bold uppercase tracking-widest text-gray-900">Let's Talk</span>
        </button>
      </div>
    </div>
  )
}

export default function Contact() {
  // 'hidden' → not yet in view, 'popped' → scrolled down into view, 'receded' → scrolled up away
  const [popState, setPopState] = useState('hidden')
  const formRef = useRef(null)
  const lastY = useRef(window.scrollY)
  const isVisible = useRef(false)

  useEffect(() => {
    // Track scroll direction
    const onScroll = () => {
      const y = window.scrollY
      const goingDown = y > lastY.current
      lastY.current = y

      if (isVisible.current) {
        setPopState(goingDown ? 'popped' : 'receded')
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    // Observe when the form enters / leaves viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.current = true
          // Pop out when scrolled into view going downward
          const goingDown = window.scrollY >= lastY.current
          setPopState(goingDown ? 'popped' : 'receded')
        } else {
          isVisible.current = false
          setPopState('hidden')
        }
      },
      { threshold: 0.15 }
    )

    if (formRef.current) observer.observe(formRef.current)

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <section className="px-4 sm:px-6 lg:px-12 py-8 bg-gray-100">
      <div
        className="relative rounded-3xl overflow-hidden px-8 sm:px-12 lg:px-16 py-14 sm:py-20"
        style={{
          backgroundColor: '#111',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-4">Get in Touch</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
                Tell us about your project—whether it's a website, SEO, or marketing.
              </h2>
            </div>

            {/* Bottom info */}
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/10">
              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="text-gray-500 text-xs">✦</span>
                  <p className="text-[9px] uppercase tracking-widest text-gray-500 font-semibold">Talk to Us</p>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">Work and general inquiries</p>
                <p className="text-xs text-gray-300 mt-1">+123 456 789 00</p>
              </div>
              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="text-gray-500 text-xs">✦</span>
                  <p className="text-[9px] uppercase tracking-widest text-gray-500 font-semibold">Post Address</p>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  541 Melville Ave, Palo Alto,<br />CA 94301, United States
                </p>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div ref={formRef}>
            <ContactForm popState={popState} />
          </div>
        </div>
      </div>
    </section>
  )
}
