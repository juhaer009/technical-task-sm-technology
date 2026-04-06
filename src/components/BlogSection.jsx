import { motion } from 'framer-motion'

// Curated Unsplash photos (agency / creative / team context)
const IMG_TEAM_COLLAB = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80'
const IMG_MEETING = 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80'
const IMG_WORKSPACE = 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80'

// ─── Spring config ────────────────────────────────────────────────────────────
const SPRING = { type: 'spring', stiffness: 200, damping: 18 }

// ─── Dark Content Card ────────────────────────────────────────────────────────
function DarkCard({ category, date, title }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04, y: -6 }}
      transition={SPRING}
      className="bg-gray-900 text-white rounded-2xl p-5 flex flex-col gap-3 cursor-pointer"
    >
      <p className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">
        {category}&nbsp;&nbsp;|&nbsp;&nbsp;{date}
      </p>
      <p className="text-base font-medium leading-snug text-white">
        {title}
      </p>
    </motion.div>
  )
}

// ─── Light Content Card ───────────────────────────────────────────────────────
function LightCard({ category, date, title }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04, y: -6 }}
      transition={SPRING}
      className="bg-gray-100 text-gray-900 rounded-2xl p-5 flex flex-col gap-3 cursor-pointer"
    >
      <p className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">
        {category}&nbsp;&nbsp;|&nbsp;&nbsp;{date}
      </p>
      <p className="text-base font-medium leading-snug text-gray-900">
        {title}
      </p>
    </motion.div>
  )
}

function ImageCard({ src, alt, height = 'h-64' }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04, y: -6 }}
      transition={SPRING}
      className="rounded-2xl overflow-hidden cursor-pointer relative group"
    >
      <motion.img
        src={src}
        alt={alt}
        whileHover={{ scale: 1.1 }}
        transition={SPRING}
        className={`w-full ${height} object-cover object-center`}
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300 rounded-2xl" />
    </motion.div>
  )
}

export default function BlogSection() {
  return (
    <section className="bg-gray-100 px-4 sm:px-6 lg:px-12 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div className="flex flex-col items-center gap-3 mb-12">
          <p className="text-[18px] uppercase tracking-[0.2em] text-gray-400 font-medium">
            Insights
          </p>

          <motion.h2
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl font-funnel sm:text-4xl lg:text-5xl font-medium text-gray-900 text-center leading-tight"
          >
            Company blog &amp; updates
          </motion.h2>
        </div>

        {/*3-Column Grid*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          <div className="flex flex-col gap-5">
            <DarkCard
              category="Web3"
              date="Nov 07, 2025"
              title="Seamless user interfaces, crafted with intent."
            />
            <ImageCard src={IMG_TEAM_COLLAB} alt="Team collaborating" height="h-72" />
          </div>

          <div className="flex flex-col gap-5">
            <ImageCard src={IMG_MEETING} alt="Professional meeting" height="h-72" />
            <LightCard
              category="Web3"
              date="Nov 07, 2025"
              title="Creative web platforms, designed for growth."
            />
          </div>

          <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
            <DarkCard
              category="Web3"
              date="Nov 07, 2025"
              title="Immersive virtual journeys, built with precision."
            />
            <ImageCard src={IMG_WORKSPACE} alt="Creative workspace" height="h-72" />
          </div>

        </div>
      </div>
    </section>
  )
}
