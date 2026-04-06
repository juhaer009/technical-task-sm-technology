import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import faqSideImg from '../assets/awards-portrait.png'
import faqItemImg from '../assets/banner_img.jpg'

// ─── FAQ Data ────────────────────────────────────────────────────────────────
const FAQS = [
  {
    id: 1,
    question: 'What is artificial intelligence (AI)?',
    answer: 'Artificial intelligence refers to the simulation of human intelligence in machines that are programmed to think, learn, and problem-solve like humans.',
    img: null,
  },
  {
    id: 2,
    question: 'How does AI improve business efficiency?',
    answer: 'Explore how we transform ideas into extraordinary digital experiences. Each case study is a testament to our design thinking, strategic approach, and creative execution.',
    img: faqItemImg,
  },
  {
    id: 3,
    question: 'How long does AI implementation take?',
    answer: 'Implementation timelines vary based on complexity. Simple integrations can take a few weeks, while enterprise-level solutions may require several months of careful planning and execution.',
    img: null,
  },
  {
    id: 4,
    question: 'What industries can benefit from AI?',
    answer: 'AI has proven transformative across healthcare, finance, retail, manufacturing, logistics, and creative industries — virtually any sector that processes data can leverage AI insights.',
    img: null,
  },
  {
    id: 5,
    question: 'What are the costs of AI solutions?',
    answer: 'Costs depend on scope, customisation, and integration needs. We offer flexible engagement models from small pilots to full-scale enterprise deployments.',
    img: null,
  },
]

// ─── FAQItem ─────────────────────────────────────────────────────────────────
function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="rounded-xl overflow-hidden bg-gray-100">
      {/* Question row */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
        aria-expanded={isOpen}
      >
        <span
          className={[
            'text-sm font-medium transition-colors duration-200',
            isOpen ? 'text-gray-900' : 'text-gray-700',
          ].join(' ')}
        >
          {item.question}
        </span>

        {/* Toggle icon */}
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 w-7 h-7 rounded-full bg-gray-900 text-white flex items-center justify-center text-lg leading-none"
        >
          +
        </motion.span>
      </button>

      {/* Expanded content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              exit={{ y: 6 }}
              transition={{ duration: 0.3 }}
              className="px-5 pb-5"
            >
              {item.img ? (
                /* Layout with image */
                <div className="flex gap-4 items-start">
                  <div className="shrink-0 w-36 sm:w-44 rounded-lg overflow-hidden">
                    <img
                      src={item.img}
                      alt="FAQ visual"
                      className="w-full h-28 object-cover object-center"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.answer}
                    </p>
                    <button className="flex items-center gap-2.5 group self-start mt-1">
                      <span className="w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center text-white text-base shrink-0 group-hover:bg-black transition-colors">
                        +
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-gray-900">
                        Get in Touch
                      </span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Text-only layout */
                <p className="text-sm text-gray-500 leading-relaxed max-w-xl">
                  {item.answer}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ─── FAQSection ──────────────────────────────────────────────────────────────
export default function FAQSection() {
  const [activeId, setActiveId] = useState(null)

  const toggle = (id) => setActiveId((prev) => (prev === id ? null : id))

  return (
    <section className="bg-gray-100 px-4 sm:px-6 lg:px-12 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-20 items-start">

          {/* ── LEFT ── */}
          <div className="flex flex-col gap-6 lg:pt-2">

            {/* Label */}
            <p className="text-[18px] uppercase tracking-[0.2em] text-gray-400 font-medium">
              FAQ &amp; Get Answer
            </p>

            {/* Supporting text */}
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Don't found anything yet. Feel free to ask anything.{' '}
              <a href="#contact" className="underline text-gray-700 hover:text-gray-900 transition-colors">
                Let's Talk
              </a>
            </p>

            {/* Side image */}
            <div className="rounded-2xl overflow-hidden mt-2 w-full max-w-[300px]">
              <img
                src={faqSideImg}
                alt="FAQ"
                className="w-full h-64 object-cover object-top"
              />
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div className="flex flex-col gap-6">

            {/* Heading — slides in from left, once */}
            <motion.h2
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-4xl font-funnel sm:text-4xl lg:text-5xl font-medium text-gray-900 leading-tight max-w-xl mb-2"
            >
              Have more questions?{' '}
              <br className="hidden sm:block" />
              We've answers.
            </motion.h2>

            {/* Accordion */}
            <div className="flex flex-col gap-2">
              {FAQS.map((faq) => (
                <FAQItem
                  key={faq.id}
                  item={faq}
                  isOpen={activeId === faq.id}
                  onToggle={() => toggle(faq.id)}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
