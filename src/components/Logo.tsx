import { SITE_NAME } from '../constants'

const logoSrc = `${import.meta.env.BASE_URL}logo.png`

type LogoProps = {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const heights = {
  sm: 'h-10',
  md: 'h-14',
  lg: 'h-20',
}

/** Brand logo — inverted for dark site backgrounds */
export function Logo({ className = '', size = 'md' }: LogoProps) {
  return (
    <img
      src={logoSrc}
      alt={SITE_NAME}
      className={`w-auto object-contain object-left brightness-0 invert ${heights[size]} ${className}`}
    />
  )
}
