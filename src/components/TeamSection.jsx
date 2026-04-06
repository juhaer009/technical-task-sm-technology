import { useState } from 'react'
import { motion } from 'framer-motion'
import team1 from '../assets/team-1.png'
import team2 from '../assets/team-2.png'
import team3 from '../assets/team-3.png'
import team4 from '../assets/team-4.png'
import teamGroup from '../assets/team-group.png'

// ─── Data ────────────────────────────────────────────────────────────────────
const TEAMS = {
  design: [
    { id: 1, name: 'Nicolas K. Ellington', role: 'Founder', img: team1 },
    { id: 2, name: 'Carlos E. Ashcroft', role: 'CEO', img: team2 },
    { id: 3, name: 'Leonardo F. Ashton', role: 'UX Designer', img: team3 },
    { id: 4, name: 'Ricardo P. Winslow', role: 'UI Designer', img: team4 },
  ],
  development: [
    { id: 3, name: 'Leonardo F. Ashton', role: 'Lead Dev', img: team3 },
    { id: 4, name: 'Ricardo P. Winslow', role: 'Frontend', img: team4 },
    { id: 1, name: 'Nicolas K. Ellington', role: 'Backend', img: team1 },
    { id: 2, name: 'Carlos E. Ashcroft', role: 'DevOps', img: team2 },
  ],
}

const DESCRIPTIONS = {
  design: 'What began over coffee-fueled brainstorming sessions has grown into a thriving digital agency dedicated to helping brands stand out.',
  development: 'Our engineering team crafts scalable, high-performance solutions — from elegant frontends to robust backend infrastructure.',
}

// ─── Social Icons (inline SVG, no external deps) ─────────────────────────────
function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}
function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

// ─── Card Variants ────────────────────────────────────────────────────────────
const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
}

// ─── TeamCard ─────────────────────────────────────────────────────────────────
function TeamCard({ member, index }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      whileHover={{ scale: 1.05, y: -8 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      className="bg-white rounded-2xl p-4 shadow-sm flex flex-col gap-3"
    >
      {/* Image with zoom on card hover */}
      <div className="rounded-xl overflow-hidden bg-[#C4A882]">
        <motion.img
          src={member.img}
          alt={member.name}
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="w-full h-44 object-cover object-top"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-0.5 px-1">
        <p className="text-sm font-medium text-gray-900">{member.name}</p>
        <p className="text-[11px] uppercase tracking-widest text-gray-400">{member.role}</p>
      </div>

      {/* Social icons */}
      <div className="flex gap-2 px-1">
        {[FacebookIcon, TwitterIcon, LinkedInIcon].map((Icon, i) => (
          <motion.a
            key={i}
            href="#"
            whileHover={{ scale: 1.2 }}
            className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-200 transition-colors"
            aria-label="Social link"
          >
            <Icon />
          </motion.a>
        ))}
      </div>
    </motion.div>
  )
}

// ─── TeamSection ─────────────────────────────────────────────────────────────
export default function TeamSection() {
  const [activeTab, setActiveTab] = useState('design')
  const members = TEAMS[activeTab]

  return (
    <section className="bg-gray-100 px-4 sm:px-6 lg:px-12 py-12">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl px-8 lg:px-14 py-14 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* ── LEFT ── */}
          <div className="flex flex-col gap-6">

            {/* Label */}
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium">
              Our Avengers
            </p>

            {/* Heading — slides in from left, once */}
            <motion.h2
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-5xl font-funnel sm:text-4xl lg:text-5xl font-medium text-gray-900 leading-tight max-w-sm"
            >
              Meet with our team member
            </motion.h2>

            {/* Tabs */}
            <div className="flex gap-6 items-center">
              {(['design', 'development']).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={[
                    'text-[11px] uppercase tracking-widest font-semibold pb-1 transition-colors',
                    activeTab === tab
                      ? 'text-gray-900 border-b-2 border-gray-900'
                      : 'text-gray-400 border-b-2 border-transparent hover:text-gray-600',
                  ].join(' ')}
                >
                  {tab === 'design' ? 'Design Team' : 'Development Team'}
                </button>
              ))}
            </div>

            {/* Description */}
            <motion.p
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-sm text-gray-500 leading-relaxed max-w-sm"
            >
              {DESCRIPTIONS[activeTab]}
            </motion.p>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 group self-start"
            >
              <span className="w-9 h-9 rounded-full bg-gray-900 flex items-center justify-center text-white text-lg shrink-0 group-hover:bg-black transition-colors">
                +
              </span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-gray-900">
                Join With Us
              </span>
            </motion.button>

            {/* Bottom group image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              className="rounded-xl overflow-hidden mt-2"
            >
              <img
                src={teamGroup}
                alt="Our team"
                className="w-full h-48 object-cover object-top"
              />
            </motion.div>
          </div>

          {/* ── RIGHT: 2×2 card grid ── */}
          <div className="grid grid-cols-2 gap-4">
            {members.map((member, i) => (
              <TeamCard key={member.id + activeTab} member={member} index={i} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
