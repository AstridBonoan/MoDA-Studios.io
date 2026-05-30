import { FadeIn } from './ui/FadeIn'
import { InstagramLink } from './ui/InstagramLink'
import { SectionHeading } from './ui/SectionHeading'

const galleryItems = [
  {
    src: 'https://images.unsplash.com/photo-1622286342621-4bd786c24475?auto=format&fit=crop&w=600&q=80',
    alt: 'Precision fade and line work',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=600&q=80',
    alt: 'Modern textured hairstyle',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1620331314712-92fdd703f4ee?auto=format&fit=crop&w=600&q=80',
    alt: 'Scissor work detail',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80',
    alt: 'Finished cut styling',
    span: 'md:col-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1585747860715-2a37fcefcad8?auto=format&fit=crop&w=600&q=80',
    alt: 'Studio environment',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=600&q=80',
    alt: 'Beard grooming detail',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1593702275687-f2b03847553d?auto=format&fit=crop&w=600&q=80',
    alt: 'Before and after transformation',
    span: 'md:col-span-2',
  },
]

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
          {galleryItems.map((item, i) => (
            <FadeIn
              key={item.src}
              delay={i * 0.05}
              className={`group relative overflow-hidden ${item.span}`}
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
