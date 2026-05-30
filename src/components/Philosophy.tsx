import { FadeIn } from './ui/FadeIn'

const points = [
  {
    title: 'Personalized Consultations',
    text: 'Every visit begins with understanding your hair, lifestyle, and style goals — not a one-size-fits-all cut.',
  },
  {
    title: 'Modern Barbering',
    text: 'Precision scissor work, contemporary fades, and texture-forward styling for the modern gentleman.',
  },
  {
    title: 'Attention to Detail',
    text: 'From line work to finishing product, each element is executed with intention and care.',
  },
  {
    title: 'Style Tailored to You',
    text: 'Your look is built around your features, preferences, and the image you want to project.',
  },
]

const STUDIO_IMAGE = `${import.meta.env.BASE_URL}studio.png`

export function Philosophy() {
  return (
    <section id="philosophy" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn className="relative w-full overflow-hidden">
            <img
              src={STUDIO_IMAGE}
              alt="MODA STUDIOS interior — modern barber chairs and studio environment"
              width={379}
              height={371}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-auto w-full"
              decoding="async"
              loading="lazy"
            />
          </FadeIn>

          <div>
            <FadeIn>
              <p className="font-accent text-lg italic tracking-[0.2em] text-ink uppercase">
                The Studio
              </p>
              <h2 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">
                Crafted Around
                <br />
                <span className="italic text-ink-muted">Your Experience</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-ink-muted sm:text-lg">
                MODA STUDIOS is not a walk-in shop. It is a modern grooming
                studio built on consultation, precision, and quality over
                volume. The focus is the experience — how you feel when you
                leave, confident and impeccably groomed.
              </p>
            </FadeIn>

            <div className="mt-12 space-y-8">
              {points.map((point, i) => (
                <FadeIn key={point.title} delay={i * 0.1}>
                  <div className="border-l border-ink/40 pl-6">
                    <h3 className="font-display text-xl text-ink">
                      {point.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-subtle sm:text-base">
                      {point.text}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
