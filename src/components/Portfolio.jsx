import { motion } from 'framer-motion'

// Animation variants
const textRevealVariants = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
}

const textContainerVariants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.12 } },
}

const cardRollDownVariants = {
  initial: { opacity: 0, y: -60, rotateX: 8 },
  animate: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const cardContainerVariants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.15 } },
}

const projects = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1580014317999-e9f1936787a5?w=800&q=80',
    label: 'ALDAN BRANDING',
    year: '2025',
    wide: false,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&q=80',
    label: 'ALDAN BRANDING',
    year: '2025',
    wide: false,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
    label: 'ALDAN BRANDING',
    year: '2025',
    wide: true,
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80',
    label: 'ALDAN BRANDING',
    year: '2025',
    wide: false,
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1644786350390-ad1bae4b97a4?w=800&q=80',
    label: 'ALDAN BRANDING',
    year: '2025',
    wide: false,
  },
]

function PortfolioCard({ image, label, year, wide }) {
  return (
    <motion.div
      variants={cardRollDownVariants}
      className={`flex flex-col gap-2 ${wide ? 'col-span-1 sm:col-span-2' : ''}`}
      style={{ transformPerspective: 800 }}
    >
      <div className={`overflow-hidden rounded-xl ${wide ? 'aspect-video' : 'aspect-4/3'} relative`}>
        <img
          src={image}
          alt={label}
          className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-105"
        />
        <div className="absolute top-3 left-3 bg-white/15 backdrop-blur-sm border border-white/25 rounded-md px-2 py-1 flex items-center gap-1.5">
          <div className="w-3.5 h-3.5 bg-white rounded-sm flex items-center justify-center">
            <div className="w-2 h-2 bg-gray-800 rounded-sm" />
          </div>
          <span className="text-white text-[10px] font-semibold tracking-wide">Logoipsum</span>
        </div>
      </div>
      <div className="bg-white rounded-xl px-4 py-2.5 flex items-center justify-between">
        <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest">{label}</span>
        <span className="text-[10px] text-gray-400 tracking-wide">{year}</span>
      </div>
    </motion.div>
  )
}

export default function Portfolio() {
  return (
    <section className="bg-gray-100 px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
      <div className="max-w-5xl mx-auto">

        {/* Animated header */}
        <motion.div
          className="mb-8 sm:mb-10"
          variants={textContainerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.25 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <motion.span
              variants={textRevealVariants}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-[20px] font-semibold text-gray-400 uppercase tracking-widest"
            >
              Portfolio
            </motion.span>
            <motion.div
              variants={textRevealVariants}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex-1 h-px bg-gray-300 max-w-16"
            />
          </div>
          <motion.h2
            variants={textRevealVariants}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-5xl sm:text-3xl font-medium font-funnel text-gray-900 leading-snug max-w-sm pl-9"
          >
            Strategy to build powerful digital solutions.
          </motion.h2>
        </motion.div>

        {/* Animated cards grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
          variants={cardContainerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, margin: '-80px', amount: 0.25 }}
        >
          {projects.map((p) => (
            <PortfolioCard key={p.id} {...p} />
          ))}
        </motion.div>

        <div className="flex justify-center mt-10">
          <button className="flex items-center gap-3 border border-gray-300 rounded-full px-5 py-2.5 text-[11px] font-semibold uppercase tracking-widest text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300">
            <span className="w-5 h-5 rounded-full bg-gray-900 text-white flex items-center justify-center text-xs">+</span>
            More Works
          </button>
        </div>

      </div>
    </section>
  )
}
