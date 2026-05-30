import { FadeIn } from './FadeIn'

type SectionHeadingProps = {
  label?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <FadeIn className={`mb-14 max-w-3xl ${alignClass}`}>
      {label && (
        <p
          className={`mb-3 font-accent text-lg tracking-[0.2em] uppercase italic ${light ? 'text-gold' : 'text-gold'}`}
        >
          {label}
        </p>
      )}
      <h2
        className={`font-display text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl ${light ? 'text-off-white' : 'text-off-white'}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${light ? 'text-beige/80' : 'text-warm-gray'}`}
        >
          {subtitle}
        </p>
      )}
    </FadeIn>
  )
}
