import { BOOKING_URL } from '../constants'
import { Button } from './ui/Button'
import { FadeIn } from './ui/FadeIn'

const steps = [
  {
    step: '01',
    title: 'Select Your Service',
    text: 'Choose from signature experiences, fades, and grooming services tailored to your needs.',
  },
  {
    step: '02',
    title: 'Pick Your Time',
    text: 'Flexible scheduling through Squire — book the slot that works for your calendar.',
  },
  {
    step: '03',
    title: 'Arrive Prepared',
    text: 'Come ready for your consultation. We handle the rest with precision and care.',
  },
]

export function Booking() {
  return (
    <section
      id="booking"
      className="relative overflow-hidden bg-surface-muted py-24 sm:py-32"
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 30% 50%, rgba(184,160,102,0.15), transparent 60%)',
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <p className="font-accent text-lg italic tracking-[0.2em] text-gold uppercase">
            Appointments
          </p>
          <h2 className="mt-3 font-display text-4xl text-ink sm:text-5xl md:text-6xl">
            Reserve Your Appointment
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
            MODA STUDIOS is appointment-only. Book through Squire for a
            seamless, professional scheduling experience — no walk-ins, no
            waiting room chaos.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((item, i) => (
            <FadeIn key={item.step} delay={i * 0.12}>
              <div className="border-t border-gold/40 pt-8 text-center md:text-left">
                <span className="font-display text-3xl text-gold/60">
                  {item.step}
                </span>
                <h3 className="mt-4 font-display text-xl text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-subtle">
                  {item.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-16 flex flex-col items-center gap-4">
          <Button href={BOOKING_URL} className="!px-12 !py-4 !text-sm">
            Book Through Squire
          </Button>
          <p className="text-xs tracking-wide text-ink-subtle">
            Secure online booking · Appointment only
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
