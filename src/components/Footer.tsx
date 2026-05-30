import { BOOKING_URL, INSTAGRAM_URL, LOCATION, SITE_NAME } from '../constants'
import { Logo } from './Logo'
import { Button } from './ui/Button'

const footerLinks = [
  { href: '#philosophy', label: 'Studio' },
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#barber', label: 'Barber' },
  { href: '#booking', label: 'Book' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-off-white/8 bg-charcoal py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <Logo className="max-h-40 sm:max-h-44 md:max-h-48" />
            <p className="mt-4 text-sm text-warm-gray">{LOCATION.area}</p>
            <div className="mt-6">
              <Button href={BOOKING_URL} className="!text-xs">
                Book Appointment
              </Button>
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-beige/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="text-sm">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-beige/70 transition-colors hover:text-gold"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-off-white/8 pt-8 text-xs text-warm-gray sm:flex-row sm:justify-between">
          <p>© {year} {SITE_NAME}. All rights reserved.</p>
          <p className="italic">Modern Grooming. Elevated.</p>
        </div>
      </div>
    </footer>
  )
}
