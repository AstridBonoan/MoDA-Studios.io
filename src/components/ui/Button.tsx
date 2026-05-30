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
    'bg-ink text-white hover:bg-black border border-ink shadow-md shadow-ink/10',
  secondary:
    'bg-transparent text-ink border border-ink/25 hover:bg-ink hover:text-white',
  outline:
    'bg-transparent text-ink border border-ink/40 hover:bg-ink/5',
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
