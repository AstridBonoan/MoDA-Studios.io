import { BARBERS } from '../constants'
import { Button } from './ui/Button'
import { FadeIn } from './ui/FadeIn'
import { SectionHeading } from './ui/SectionHeading'

export function MeetBarber() {
  return (
    <section id="barber" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          label="Meet Your Barber"
          title="Expertise You Can Trust"
          subtitle="Two artists. One standard of excellence. Book directly with the barber who fits your style."
        />

        <div className="grid gap-12 md:grid-cols-2 md:gap-10 lg:gap-14">
          {BARBERS.map((barber, i) => (
            <FadeIn key={barber.name} delay={i * 0.1}>
              <article className="flex h-full flex-col border border-ink/10 bg-white shadow-sm">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={barber.image}
                    alt={`${barber.name} — barber at MODA STUDIOS`}
                    className="h-full w-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-ink/10" />
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <h3 className="font-display text-3xl text-ink sm:text-4xl">
                    {barber.name}
                  </h3>
                  <p className="mt-4 flex-1 text-base leading-relaxed text-ink-muted">
                    {barber.bio}
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    {barber.highlights.map((item) => (
                      <div
                        key={item.label}
                        className="border border-ink/10 px-4 py-3"
                      >
                        <p className="text-xs tracking-[0.15em] uppercase text-ink-subtle">
                          {item.label}
                        </p>
                        <p className="mt-1 font-display text-base text-ink">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <Button href={barber.bookingUrl} className="w-full sm:w-auto">
                      Book with {barber.name.split(' ')[0]}
                    </Button>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
