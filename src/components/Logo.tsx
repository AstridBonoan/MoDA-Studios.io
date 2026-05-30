import { SITE_NAME } from '../constants'

const logoSrc = `${import.meta.env.BASE_URL}logo.png`

type LogoProps = {
  className?: string
}

/** Full vertical logo — original black on transparent */
export function Logo({ className = '' }: LogoProps) {
  return (
    <img
      src={logoSrc}
      alt={SITE_NAME}
      className={`block h-auto w-auto max-w-none object-contain ${className}`}
      style={{ aspectRatio: '346 / 466' }}
    />
  )
}
