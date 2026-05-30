import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from '../../constants'
import { InstagramIcon } from './InstagramIcon'

type InstagramLinkProps = {
  className?: string
  iconClassName?: string
}

export function InstagramLink({
  className = 'inline-flex items-center justify-center text-ink transition-colors hover:text-ink-muted',
  iconClassName = 'h-6 w-6',
}: InstagramLinkProps) {
  return (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`@${INSTAGRAM_HANDLE} on Instagram`}
      className={className}
    >
      <InstagramIcon className={iconClassName} />
    </a>
  )
}
