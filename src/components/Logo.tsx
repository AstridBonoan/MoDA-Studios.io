import { SITE_NAME } from '../constants'

const logoSrc = `${import.meta.env.BASE_URL}logo.png?v=5`

type LogoProps = {
  className?: string
  /** Pixel height — inline style avoids global img { height: auto } reset */
  heightPx?: number
}

/** Black logo mark — transparent PNG, no background box */
export function Logo({ className = '', heightPx }: LogoProps) {
  const widthPx = heightPx ? Math.round((heightPx * 346) / 313) : undefined

  return (
    <img
      src={logoSrc}
      alt={SITE_NAME}
      width={widthPx}
      height={heightPx}
      style={
        heightPx
          ? { height: heightPx, width: widthPx, maxHeight: heightPx }
          : undefined
      }
      className={`block max-w-none shrink-0 object-contain object-left ${className}`}
    />
  )
}
