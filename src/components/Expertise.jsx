import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const items = [
  {
    id: 0,
    title: 'User Interface & Experience Design',
  },
  {
    id: 1,
    title: 'Web Development',
    description: 'From brand strategy to immersive digital experiences, we offer end-to-end creative solutions...',
    tags: ['BRANDING', 'MODULE', 'PRODUCT', 'UX'],
    image: 'https://images.unsplash.com/photo-1644786350390-ad1bae4b97a4?w=800&q=80',
  },
  {
    id: 2,
    title: 'Search Engine Optimization',
  },
  {
    id: 3,
    title: 'Low-Code Development',
  },
]

const testimonials = [
  { quote: '" 10/10 well recommended "', avatar: 'https://i.pravatar.cc/32?img=5' },
  { quote: '" Super speedy website designer "', avatar: 'https://i.pravatar.cc/32?img=6' },
  { quote: '" Great in UI/UX "', avatar: 'https://i.pravatar.cc/32?img=7' },
  { quote: '" Best design communicator "', avatar: 'https://i.pravatar.cc/32?img=8' },
  { quote: '" Delivered beyond expectations "', avatar: 'https://i.pravatar.cc/32?img=9' },
  { quote: '" Incredibly fast turnaround "', avatar: 'https://i.pravatar.cc/32?img=10' },
  { quote: '" Clean and modern designs "', avatar: 'https://i.pravatar.cc/32?img=11' },
  { quote: '" Highly professional team "', avatar: 'https://i.pravatar.cc/32?img=14' },
  { quote: '" Would hire again without hesitation "', avatar: 'https://i.pravatar.cc/32?img=15' },
  { quote: '" Transformed our brand identity "', avatar: 'https://i.pravatar.cc/32?img=16' },
]

function SeamlessMarquee({ testimonials }) {
  const trackRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    // Wait for layout, then measure the first half width
    const halfWidth = track.scrollWidth / 2
    let start = null
    let raf

    // pixels per second — lower = slower
    const speed = 60

    function step(ts) {
      if (!start) start = ts
      const elapsed = ts - start
      const x = -((elapsed / 1000) * speed) % halfWidth
      track.style.transform = `translateX(${x}px)`
      raf = requestAnimationFrame(step)
    }

    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [])

  const doubled = [...testimonials, ...testimonials]

  return (
    <div ref={trackRef} className="flex gap-16 whitespace-nowrap w-max will-change-transform">
      {doubled.map((t, i) => (
        <div key={i} className="flex items-center gap-2 shrink-0">
          <img src={t.avatar} alt="" className="w-7 h-7 rounded-full object-cover shrink-0" />
          <p className="text-xs text-gray-400">{t.quote}</p>
        </div>
      ))}
    </div>
  )
}

export default function Expertise() {
  const [active, setActive] = useState(1)

  return (
    <section className="bg-black text-white mx-3.5 py-24 px-4 sm:px-6 lg:px-12 rounded-3xl">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-7xl font-funnel font-medium leading-tight text-white">Company</h2>
          <h2 className="text-7xl font-funnel font-medium leading-tight text-gray-500">expertise</h2>
        </div>

        {/* Accordion */}
        <div className="border-t border-white/10">
          {items.map((item) => {
            const isOpen = active === item.id
            return (
              <motion.div key={item.id} layout className="border-b border-white/10">
                {/* Row header */}
                <button
                  className="w-full flex items-center gap-5 py-5 text-left group"
                  onClick={() => setActive(isOpen ? -1 : item.id)}
                >
                  {/* Circle icon */}
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white text-lg shrink-0 group-hover:bg-white/10 transition-colors"
                  >
                    +
                  </motion.span>
                  <span className="text-xl font-medium text-white/90">{item.title}</span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pl-13 grid grid-cols-1 sm:grid-cols-2 gap-6 items-start" style={{ paddingLeft: '52px' }}>
                        {/* Left */}
                        <div>
                          <p className="text-sm text-gray-400 leading-relaxed mb-5">{item.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag) => (
                              <span key={tag} className="text-xs uppercase px-3 py-1 rounded-full bg-white/10 text-gray-300 tracking-wider">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <motion.div
                          initial={{ opacity: 0, x: 40 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5 }}
                          className="aspect-square rounded-lg overflow-hidden max-w-[180px] sm:ml-auto"
                        >
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        {/* Hire us button */}
        <div className="flex justify-start mt-10 pl-0">
          <button className="flex items-center gap-3 border border-white/20 rounded-full px-5 py-2.5 text-[11px] font-semibold uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all duration-300">
            <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">+</span>
            Hire Us Today
          </button>
        </div>

      </div>
      {/* testimonials */}
      <div className="mt-20 border-t border-white/10 pt-8 overflow-hidden">
        <SeamlessMarquee testimonials={testimonials} />
      </div>
    </section>
  )
}
