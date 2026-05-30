import { FadeIn } from './FadeIn'

type SectionHeadingProps = {
  label?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = 'center',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <FadeIn className={`mb-14 max-w-3xl ${alignClass}`}>
      {label && (
        <p className="mb-3 font-accent text-lg tracking-[0.2em] uppercase italic text-ink">
          {label}
        </p>
      )}
      <h2 className="font-display text-4xl leading-tight tracking-tight text-ink sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base leading-relaxed text-ink-subtle sm:text-lg">
          {subtitle}
        </p>
      )}
    </FadeIn>
  )
}
