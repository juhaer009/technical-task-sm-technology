import { motion } from 'framer-motion'
import teamImg from '../assets/team-group.png'

// ─── Circular rotating CTA ───────────────────────────────────────────────────
function CircularCTA() {
  const text = 'GET IN TOUCH • GET IN TOUCH • '
  const chars = text.split('')
  const radius = 44
  const circumference = 2 * Math.PI * radius

  return (
    <div className="relative w-28 h-28 mx-auto flex items-center justify-center">
      {/* Rotating text ring */}
      <motion.svg
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        viewBox="0 0 120 120"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <path
            id="circle-path"
            d={`M 60,60 m -${radius},0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
          />
        </defs>
        <text className="text-[9px]" fill="rgba(255,255,255,0.5)" fontSize="9" letterSpacing="2.5">
          <textPath href="#circle-path">{text}</textPath>
        </text>
      </motion.svg>

      {/* Center arrow */}
      <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center z-10">
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" className="w-4 h-4">
          <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
}

// ─── Footer Image Card ────────────────────────────────────────────────────────
function FooterImageCard() {
  return (
    <div className="relative rounded-xl overflow-hidden w-full max-w-[220px]">
      <img
        src={teamImg}
        alt="Team"
        className="w-full h-56 object-cover object-top"
      />
      {/* Big 'F' overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[100px] font-bold text-white/25 leading-none select-none">F</span>
      </div>
    </div>
  )
}

// ─── Footer Nav ───────────────────────────────────────────────────────────────
const NAV_LINKS = ['About Us', 'Journal', 'Faq', 'Get In Touch', 'Careers']

function FooterNav() {
  return (
    <nav>
      <ul className="flex flex-col gap-4">
        {NAV_LINKS.map((link) => (
          <li key={link}>
            <motion.a
              href="#"
              whileHover={{ x: 4, opacity: 0.7 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="text-white text-lg font-medium block transition-opacity"
            >
              {link}
            </motion.a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

// ─── Social icons ──────────────────────────────────────────────────────────────
function SocialIcon({ label, children }) {
  return (
    <motion.a
      href="#"
      aria-label={label}
      whileHover={{ scale: 1.15, opacity: 0.8 }}
      className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/70"
    >
      {children}
    </motion.a>
  )
}

function FooterInfo() {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
        At <span className="text-white font-medium">Floka</span>, we believe furniture should be
        more than just functional — it should tell your story. With a focus on timeless design,
        sustainable materials, and expert craftsmanship, we create pieces that feel personal.
      </p>

      <div className="flex flex-col gap-1.5 text-sm">
        <a href="mailto:info@floka-design.com" className="text-white/80 hover:text-white transition-colors">
          info@floka-design.com
        </a>
        <span className="text-white/80">+123 (456) 789 001</span>
        <span className="text-gray-500">12A, Basoton Tower, NYC</span>
      </div>

      <div className="flex gap-2.5">
        {/* Facebook */}
        <SocialIcon label="Facebook">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </SocialIcon>
        {/* X / Twitter */}
        <SocialIcon label="X">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </SocialIcon>
        {/* LinkedIn */}
        <SocialIcon label="LinkedIn">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </SocialIcon>
        {/* Dribbble */}
        <SocialIcon label="Dribbble">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5">
            <circle cx="12" cy="12" r="10" />
            <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32M8.56 2.75c4.37 6 6 9.42 8 17.72" />
          </svg>
        </SocialIcon>
      </div>
    </div>
  )
}

// ─── FooterSection ────────────────────────────────────────────────────────────
export default function FooterSection() {
  return (
    <footer className="bg-gray-100">
      <div className="relative bg-black overflow-hidden px-8 sm:px-12 lg:px-20 pt-16 pb-10">

          {/* Background noise texture */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              backgroundSize: '200px 200px',
            }}
          />

          {/* Radial glow decoration (right side) */}
          <div className="absolute right-0 top-1/4 w-96 h-96 rounded-full bg-white/[0.03] blur-3xl pointer-events-none" />

          {/* ── Hero CTA Heading ── */}
          <div className="text-center mb-4 relative z-10">
            <h2
              className="font-semibold leading-none tracking-tight select-none"
              style={{
                fontSize: 'clamp(56px, 10vw, 110px)',
                background: 'linear-gradient(to bottom, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.08) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Let's<br />talk now
            </h2>
          </div>

          {/* Circular CTA */}
          <div className="relative z-10 mb-14">
            <CircularCTA />
          </div>

          {/* ── Bottom 3-column layout ── */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8 items-start">

            {/* LEFT — Image + Brand text */}
            <div className="flex flex-col">
              <FooterImageCard />
              {/* Giant faint brand name */}
              <div className="overflow-hidden -ml-4 mt-1">
                <p
                  className="font-bold text-white/10 leading-none select-none whitespace-nowrap"
                  style={{ fontSize: 'clamp(60px, 8vw, 100px)' }}
                >
                  Floka
                </p>
              </div>
            </div>

            {/* MIDDLE — Nav */}
            <div className="lg:pt-2">
              <FooterNav />
            </div>

            {/* RIGHT — Info */}
            <div className="lg:pt-2">
              <FooterInfo />
            </div>

          </div>

          {/* ── Copyright bar ── */}
          <div className="relative z-10 mt-12 pt-6 border-t border-white/10 text-center">
            <p className="text-xs text-gray-600">
              Copyright © 2025{' '}
              <span className="text-gray-400 font-medium">Case-Themes</span>
            </p>
          </div>

      </div>
    </footer>
  )
}
