import { SITE } from '@/lib/constants'

export function Wordmark({ href = '/', ariaLabel = `${SITE.name}, back to top`, onClick }: { href?: string; ariaLabel?: string; onClick?: () => void }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="flex h-full items-center rounded-md"
      aria-label={ariaLabel}
    >
      <span className="flex items-center gap-2">
        <span className="font-serif text-[1.75rem] leading-[1] tracking-[-0.01em]">{SITE.wordmark}</span>
        <span className="text-[0.6875rem] leading-normal font-medium tracking-[0.18em] text-muted-foreground uppercase">
          Dental Istanbul
        </span>
      </span>
    </a>
  )
}
