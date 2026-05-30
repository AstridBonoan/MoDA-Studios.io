import { BOOKING_URL } from '../constants'
import { Button } from './ui/Button'
import { FadeIn } from './ui/FadeIn'
import { SectionHeading } from './ui/SectionHeading'

const services = [
  {
    name: 'The Moda Experience',
    featured: true,
    description:
      'Our signature appointment — consultation, precision scissor work, beard detailing, and a refined styling finish.',
    includes: [
      'Personal consultation',
      'Signature haircut',
      'Precision scissor work',
      'Beard detailing',
      'Styling finish',
    ],
    image:
      'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Haircut + Beard',
    description:
      'Complete grooming with coordinated haircut and beard sculpting for a polished, unified look.',
    includes: ['Haircut', 'Beard trim & shape', 'Hot towel finish'],
    image:
      'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Precision Fade',
    description:
      'Clean, seamless fades with sharp transitions and meticulous blending for a modern silhouette.',
    includes: ['Consultation', 'Fade execution', 'Line-up', 'Styling'],
    image:
      'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Texture & Styling',
    description:
      'Cuts designed to enhance natural texture with product recommendations tailored to your hair type.',
    includes: ['Texture cut', 'Styling education', 'Product finish'],
    image:
      'https://images.unsplash.com/photo-1620331314712-92fdd703f4ee?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Grooming Services',
    description:
      'Beard maintenance, line-ups, and detailed grooming for clients who demand consistency between cuts.',
    includes: ['Beard trim', 'Line-up', 'Skin prep'],
    image:
      'https://images.unsplash.com/photo-1593702275687-f2b03847553d?auto=format&fit=crop&w=800&q=80',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          label="Services"
          title="Tailored to Precision"
          subtitle="Every service begins with a consultation. Choose the experience that fits your grooming goals."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {services.map((service, i) => (
            <FadeIn
              key={service.name}
              delay={i * 0.08}
              className={`group relative overflow-hidden border border-ink/10 bg-surface-card shadow-sm transition-colors hover:border-gold/40 hover:shadow-md ${
                service.featured ? 'md:col-span-2 lg:grid lg:grid-cols-2' : ''
              }`}
            >
              <div
                className={`relative overflow-hidden ${service.featured ? 'aspect-[16/10] lg:aspect-auto lg:min-h-full' : 'aspect-[4/3]'}`}
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-ink/10 to-transparent" />
                {service.featured && (
                  <span className="absolute left-4 top-4 bg-gold px-3 py-1 text-xs font-medium tracking-[0.15em] uppercase text-ink">
                    Signature
                  </span>
                )}
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                <h3 className="font-display text-2xl text-ink sm:text-3xl">
                  {service.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                  {service.description}
                </p>
                <ul className="mt-5 space-y-2">
                  {service.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-ink-subtle"
                    >
                      <span className="h-px w-4 bg-gold/60" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-14 text-center">
          <Button href={BOOKING_URL}>Book Your Service</Button>
        </FadeIn>
      </div>
    </section>
  )
}
