import type { ReactNode } from 'react'

type ButtonProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
  external?: boolean
}

const variants = {
  primary:
    'bg-gold text-ink hover:bg-brass border border-gold/40 shadow-md shadow-gold/15',
  secondary:
    'bg-transparent text-ink border border-ink/20 hover:border-gold hover:text-gold',
  outline:
    'bg-transparent text-gold border border-gold/50 hover:bg-gold/10',
}

export function Button({
  href,
  children,
  variant = 'primary',
  className = '',
  external = true,
}: ButtonProps) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`inline-flex min-h-12 items-center justify-center px-8 py-3 text-sm font-medium tracking-[0.12em] uppercase transition-all duration-300 ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  )
}
