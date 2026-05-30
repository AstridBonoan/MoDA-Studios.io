import { BOOKING_URL, INSTAGRAM_URL, LOCATION, MAP_EMBED_URL } from '../constants'
import { Button } from './ui/Button'
import { FadeIn } from './ui/FadeIn'
import { SectionHeading } from './ui/SectionHeading'

export function Contact() {
  return (
    <section id="contact" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          label="Visit"
          title="Find the Studio"
          subtitle="Located in Garden City. By appointment only."
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <FadeIn className="space-y-8">
            <div>
              <h3 className="text-xs tracking-[0.15em] uppercase text-ink">
                Location
              </h3>
              <p className="mt-2 font-display text-2xl text-ink">
                {LOCATION.name}
              </p>
              <p className="mt-1 text-ink-muted">{LOCATION.area}</p>
            </div>

            <div>
              <h3 className="text-xs tracking-[0.15em] uppercase text-ink">
                Hours
              </h3>
              <ul className="mt-3 space-y-2">
                {LOCATION.hours.map((row) => (
                  <li
                    key={row.days}
                    className="flex justify-between gap-4 border-b border-ink/10 py-2 text-sm"
                  >
                    <span className="text-ink-muted">{row.days}</span>
                    <span className="text-ink">{row.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs tracking-[0.15em] uppercase text-ink">
                Connect
              </h3>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-lg text-ink transition-colors hover:text-ink"
              >
                @modastudiosofficial
              </a>
            </div>

            <Button href={BOOKING_URL}>Book Appointment</Button>
          </FadeIn>

          <FadeIn
            delay={0.15}
            className="relative min-h-[320px] overflow-hidden border border-ink/10 bg-white shadow-sm lg:min-h-[420px]"
          >
            <iframe
              title="MODA STUDIOS location map — Garden City, NY"
              src={MAP_EMBED_URL}
              className="absolute inset-0 h-full w-full opacity-95"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
