import { BOOKING_URL, HERO_IMAGE } from '../constants'
import { Button } from './ui/Button'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] items-end overflow-hidden"
    >
      <img
        src={HERO_IMAGE}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
        fetchPriority="high"
        aria-hidden
      />

      <div
        className="absolute inset-0 bg-gradient-to-t from-white via-white/95 to-black/25"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-28 sm:px-8 sm:pb-28 sm:pt-32 md:pb-32">
        <p className="mb-4 font-accent text-xl italic tracking-wide text-ink sm:text-2xl">
          Garden City · Appointment Only
        </p>

        <h1 className="max-w-4xl font-display text-5xl leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-8xl">
          Modern Grooming.
          <br />
          <span className="italic text-ink-muted">Elevated.</span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg md:text-xl">
          Precision cuts, tailored consultations, and a barbering experience
          designed around you.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button href={BOOKING_URL}>Book Appointment</Button>
          <Button href="#services" variant="secondary" external={false}>
            View Services
          </Button>
        </div>
      </div>
    </section>
  )
}
