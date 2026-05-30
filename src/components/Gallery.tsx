import { GALLERY_ITEMS } from '../constants'
import { FadeIn } from './ui/FadeIn'
import { InstagramLink } from './ui/InstagramLink'
import { SectionHeading } from './ui/SectionHeading'

export function Gallery() {
  return (
    <section id="gallery" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          label="Portfolio"
          title="The Craft, Captured"
          subtitle="Precision fades, scissor work, and finished looks from the chair. Follow us for the latest transformations."
        />

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4 auto-rows-[140px] sm:auto-rows-[180px] md:auto-rows-[200px]">
          {GALLERY_ITEMS.map((item, i) => (
            <FadeIn
              key={item.id}
              delay={i * 0.05}
              className={`group relative overflow-hidden bg-ink/5 ${item.span}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/10" />
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-12 flex justify-center">
          <InstagramLink
            className="inline-flex min-h-12 min-w-12 items-center justify-center text-ink hover:text-ink-muted"
            iconClassName="h-8 w-8"
          />
        </FadeIn>
      </div>
    </section>
  )
}
