import { SITE_NAME } from '../constants'

const logoSrc = `${import.meta.env.BASE_URL}logo.png`

type LogoProps = {
  className?: string
}

/** Black logo mark — transparent PNG, no background box */
export function Logo({ className = '' }: LogoProps) {
  return (
    <img
      src={logoSrc}
      alt={SITE_NAME}
      className={`block max-w-none object-contain object-left ${className}`}
      style={{ aspectRatio: '346 / 313' }}
    />
  )
}
