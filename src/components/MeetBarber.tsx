import { BOOKING_URL } from '../constants'
import { Button } from './ui/Button'
import { FadeIn } from './ui/FadeIn'

const PORTRAIT =
  'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80'

export function MeetBarber() {
  return (
    <section id="barber" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <FadeIn className="lg:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src={PORTRAIT}
                alt="Professional barber at MODA STUDIOS"
                className="h-full w-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-ink/10" />
            </div>
          </FadeIn>

          <div className="lg:col-span-7">
            <FadeIn>
              <p className="font-accent text-lg italic tracking-[0.2em] text-ink uppercase">
                Meet Your Barber
              </p>
              <h2 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl md:text-6xl">
                Expertise You
                <br />
                <span className="italic text-ink-muted">Can Trust</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.1} className="mt-8 space-y-5 text-base leading-relaxed text-ink-muted">
              <p>
                At MODA STUDIOS, barbering is treated as a craft — not a
                commodity. With years of experience in precision cutting,
                modern fades, and consultation-driven service, every appointment
                is approached with the same standard: excellence without
                compromise.
              </p>
              <p>
                The philosophy is simple: listen first, cut second. Understanding
                how you wear your hair day-to-day, what shapes complement your
                features, and what level of maintenance fits your lifestyle
                ensures results that look intentional — not accidental.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} className="mt-10 grid gap-6 sm:grid-cols-3">
              {[
                { label: 'Approach', value: 'Consultation-led' },
                { label: 'Specialty', value: 'Modern precision' },
                { label: 'Focus', value: 'Quality over volume' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="border border-ink/10 bg-white px-5 py-4 shadow-sm"
                >
                  <p className="text-xs tracking-[0.15em] uppercase text-ink">
                    {stat.label}
                  </p>
                  <p className="mt-1 font-display text-lg text-ink">
                    {stat.value}
                  </p>
                </div>
              ))}
            </FadeIn>

            <FadeIn delay={0.3} className="mt-10">
              <Button href={BOOKING_URL}>Book With MODA</Button>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
