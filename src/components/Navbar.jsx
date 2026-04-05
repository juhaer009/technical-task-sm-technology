import { useState, useEffect, useRef } from 'react'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Pages', href: '#' },
  { label: 'Portfolio', href: '#' },
  { label: 'Blog', href: '#' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      // Show when scrolling up or at top, hide when scrolling down
      setVisible(currentY < lastScrollY.current || currentY < 10)
      lastScrollY.current = currentY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      style={{
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100"
    >
      <div className="h-14 flex justify-center gap-40">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1.5 font-bold text-lg text-gray-900">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-gray-900">
            <rect x="0" y="0" width="8" height="8" fill="currentColor" />
            <rect x="10" y="0" width="8" height="8" fill="currentColor" />
            <rect x="0" y="10" width="8" height="8" fill="currentColor" />
          </svg>
          Floka
        </a>

        {/* Desktop nav links — centered */}
        <ul className="hidden md:flex items-center justify-center gap-40">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-base font-semibold text-gray-700 hover:text-gray-900 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="hidden md:flex items-center justify-end gap-4">
          <a href="mailto:info@floka.com" className="text-base text-gray-700 font-semibold hover:text-gray-900 transition-colors">
            info@floka.com
          </a>
          <button className="w-8 h-8 flex flex-col justify-center items-center gap-1.5 group">
            <span className="block w-5 h-px bg-gray-700 group-hover:bg-gray-900 transition-colors" />
            <span className="block w-5 h-px bg-gray-700 group-hover:bg-gray-900 transition-colors" />
            <span className="block w-3 h-px bg-gray-700 group-hover:bg-gray-900 transition-colors self-start" />
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1 justify-self-end col-start-3"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-px bg-gray-800" />
          <span className="block w-5 h-px bg-gray-800" />
          <span className="block w-3 h-px bg-gray-800" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-sm text-gray-700">
              {link.label}
            </a>
          ))}
          <a href="mailto:info@floka.com" className="text-sm text-gray-700">info@floka.com</a>
        </div>
      )}
    </nav>
  )
}
