import { FadeIn } from './ui/FadeIn'
import { SectionHeading } from './ui/SectionHeading'

const reviews = [
  {
    quote:
      'The attention to detail is unmatched. Every line, every fade — perfection. I will not go anywhere else.',
    author: 'Michael R.',
    theme: 'Attention to Detail',
  },
  {
    quote:
      'Consistent quality every single visit. The consultation alone sets this apart from every barber I have tried.',
    author: 'James T.',
    theme: 'Consistency',
  },
  {
    quote:
      'Professional from start to finish. The studio feels premium, and the results match that energy.',
    author: 'David K.',
    theme: 'Professionalism',
  },
  {
    quote:
      'Finally a barber who listens. My cut is tailored to my face shape and lifestyle — exactly what I needed.',
    author: 'Chris M.',
    theme: 'Personalized Service',
  },
  {
    quote:
      'The Moda Experience is worth every minute. Beard work, styling, the whole package — exceptional grooming.',
    author: 'Anthony L.',
    theme: 'Quality Experience',
  },
  {
    quote:
      'Appointment-only makes all the difference. No rush, no chaos — just focused craftsmanship.',
    author: 'Robert S.',
    theme: 'Premium Experience',
  },
]

export function Reviews() {
  return (
    <section id="reviews" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          label="Testimonials"
          title="Trusted by Discerning Clients"
          subtitle="What guests say about the MODA experience."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <FadeIn
              key={review.author}
              delay={i * 0.06}
              className="flex flex-col border border-ink/10 bg-white p-8 shadow-sm transition-colors hover:border-ink/35 hover:shadow-md"
            >
              <p className="text-xs tracking-[0.15em] uppercase text-ink">
                {review.theme}
              </p>
              <blockquote className="mt-5 flex-1 font-accent text-xl leading-relaxed text-ink-muted italic">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <footer className="mt-6 border-t border-ink/10 pt-4 text-sm tracking-wide text-ink-subtle">
                — {review.author}
              </footer>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
