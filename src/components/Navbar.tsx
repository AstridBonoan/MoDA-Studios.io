import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { BOOKING_URL, INSTAGRAM_URL } from '../constants'
import { Logo } from './Logo'
import { Button } from './ui/Button'

const navLinks = [
  { href: '#philosophy', label: 'Studio' },
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#barber', label: 'Barber' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? 'bg-matte/90 backdrop-blur-md border-b border-off-white/5'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 sm:py-4"
        aria-label="Main navigation"
      >
        <a
          href="#"
          className="flex shrink-0 items-center overflow-visible transition-opacity hover:opacity-90"
        >
          <Logo className="max-h-[5.5rem] sm:max-h-24 md:max-h-28 lg:max-h-32" />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs font-medium tracking-[0.15em] uppercase text-beige/80 transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-[0.12em] uppercase text-beige/70 transition-colors hover:text-gold"
            aria-label="Instagram"
          >
            Instagram
          </a>
          <Button href={BOOKING_URL} className="!px-6 !py-2.5 !text-xs">
            Book
          </Button>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center lg:hidden"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-6 flex-col gap-1.5">
            <span
              className={`block h-px bg-off-white transition-transform ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span
              className={`block h-px bg-off-white transition-opacity ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-px bg-off-white transition-transform ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
            />
          </div>
        </button>
      </nav>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 top-[5.75rem] z-40 bg-matte/98 sm:top-24 lg:hidden"
        >
          <ul className="flex flex-col gap-1 px-6 py-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block min-h-12 py-3 font-display text-2xl text-off-white transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-6 border-t border-off-white/10 pt-6">
              <Button href={BOOKING_URL} className="w-full">
                Book Appointment
              </Button>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  )
}
