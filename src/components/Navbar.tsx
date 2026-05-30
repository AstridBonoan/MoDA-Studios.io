import { useEffect, useState } from 'react'
import { BOOKING_URL } from '../constants'
import { Logo } from './Logo'
import { Button } from './ui/Button'
import { InstagramLink } from './ui/InstagramLink'

const navLinks = [
  { href: '#philosophy', label: 'Studio' },
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#barber', label: 'Barber' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

/** Logo height — inline px so global img { height: auto } does not shrink it */
const LOGO_HEIGHT_PX = 80

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
        className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8"
        aria-label="Main navigation"
      >
        <a
          href="#"
          className="flex shrink-0 self-start items-center transition-opacity hover:opacity-90"
        >
          <Logo heightPx={LOGO_HEIGHT_PX} />
        </a>

        <ul className="hidden flex-1 items-center justify-center gap-6 lg:flex xl:gap-8">
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

        <div className="flex shrink-0 items-center gap-4">
          <InstagramLink
            iconClassName="h-5 w-5"
            className="hidden items-center lg:inline-flex"
          />
          <Button
            href={BOOKING_URL}
            className="hidden !px-6 !py-2.5 !text-xs lg:inline-flex"
          >
            Book
          </Button>

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
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 top-20 z-40 bg-white lg:hidden">
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
