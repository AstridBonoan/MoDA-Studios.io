import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { BOOKING_URL } from '../constants'
import { Button } from './ui/Button'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1622286342621-4bd786c24475?auto=format&fit=crop&w=1920&q=80'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.6])

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex min-h-[100dvh] items-end overflow-hidden"
    >
      <motion.div style={{ y: imageY }} className="absolute inset-0 -top-20">
        <img
          src={HERO_IMAGE}
          alt="Precision barbering and modern grooming at MODA STUDIOS"
          className="h-[120%] w-full object-cover object-center"
          fetchPriority="high"
        />
      </motion.div>

      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-t from-surface via-surface/85 to-white/20"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-32 sm:px-8 sm:pb-28 md:pb-32">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mb-4 font-accent text-xl italic tracking-wide text-gold sm:text-2xl"
        >
          Garden City · Appointment Only
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="max-w-4xl font-display text-5xl leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Modern Grooming.
          <br />
          <span className="italic text-ink-muted">Elevated.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg md:text-xl"
        >
          Precision cuts, tailored consultations, and a barbering experience
          designed around you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.7 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <Button href={BOOKING_URL}>Book Appointment</Button>
          <Button href="#services" variant="secondary" external={false}>
            View Services
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 sm:block"
        aria-hidden
      >
        <div className="h-12 w-px bg-gradient-to-b from-gold/0 via-gold/60 to-gold/0" />
      </motion.div>
    </section>
  )
}
