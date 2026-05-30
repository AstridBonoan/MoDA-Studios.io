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
          ? 'bg-white/95 backdrop-blur-md border-b border-ink/8 shadow-sm shadow-ink/5'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="mx-auto flex h-32 max-w-7xl items-center justify-between px-5 sm:h-36 sm:px-8"
        aria-label="Main navigation"
      >
        <a
          href="#"
          className="flex h-full shrink-0 items-center bg-transparent py-1 transition-opacity hover:opacity-90"
        >
          <Logo className="h-full max-h-full w-auto min-h-0" />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs font-medium tracking-[0.15em] uppercase text-ink-muted transition-colors hover:text-ink"
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
            className="text-xs tracking-[0.12em] uppercase text-ink-muted transition-colors hover:text-ink"
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
              className={`block h-px bg-ink transition-transform ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span
              className={`block h-px bg-ink transition-opacity ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-px bg-ink transition-transform ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
            />
          </div>
        </button>
      </nav>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 top-32 z-40 bg-white sm:top-36 lg:hidden"
        >
          <ul className="flex flex-col gap-1 px-6 py-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block min-h-12 py-3 font-display text-2xl text-ink transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-6 border-t border-ink/10 pt-6">
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
