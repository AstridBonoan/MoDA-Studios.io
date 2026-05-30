import { useEffect, useState } from 'react'
import { BOOKING_URL } from '../constants'
import { Logo } from './Logo'
import { Button } from './ui/Button'
import { InstagramLink } from './ui/InstagramLink'

/** Shared height for logo, Book button, and nav row alignment */
const NAV_ACTION_HEIGHT = 'h-12'

const navLinksLeft = [
  { href: '#philosophy', label: 'Studio' },
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Gallery' },
]

const navLinksRight = [
  { href: '#barber', label: 'Barber' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className="fixed inset-x-0 top-0 z-50 overflow-hidden border-b border-ink/8 bg-white shadow-sm">
      <nav
        className="mx-auto grid h-20 max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-5 sm:px-8"
        aria-label="Main navigation"
      >
        <div className={`flex ${NAV_ACTION_HEIGHT} items-center justify-start`}>
          <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
            {navLinksLeft.map((link) => (
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
        </div>

        <a
          href="#"
          className={`flex ${NAV_ACTION_HEIGHT} items-center justify-center transition-opacity hover:opacity-90`}
        >
          <Logo className={`${NAV_ACTION_HEIGHT} w-auto max-h-full`} />
        </a>

        <div className={`flex ${NAV_ACTION_HEIGHT} items-center justify-end gap-4`}>
          <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
            {navLinksRight.map((link) => (
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
          <div className={`hidden items-center gap-4 lg:flex ${NAV_ACTION_HEIGHT}`}>
            <InstagramLink
              iconClassName="h-5 w-5"
              className={`${NAV_ACTION_HEIGHT} items-center`}
            />
            <Button
              href={BOOKING_URL}
              className={`!flex ${NAV_ACTION_HEIGHT} !min-h-0 !items-center !justify-center !px-6 !py-0 !text-xs`}
            >
              Book
            </Button>
          </div>

          <button
            type="button"
            className={`flex ${NAV_ACTION_HEIGHT} w-11 items-center justify-center lg:hidden`}
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
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 top-20 z-40 bg-white lg:hidden">
          <ul className="flex flex-col gap-1 px-6 py-8">
            {[...navLinksLeft, ...navLinksRight].map((link) => (
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
            <li className="mt-6 flex flex-col gap-4 border-t border-ink/10 pt-6">
              <InstagramLink iconClassName="h-6 w-6" />
              <Button href={BOOKING_URL} className="w-full">
                Book Appointment
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
