import { SITE } from '@/lib/constants'

export function Wordmark({ onClick }: { onClick?: () => void }) {
  return (
    <a
      href="#top"
      onClick={onClick}
      className="flex min-h-11 items-baseline gap-2 rounded-md leading-none"
      aria-label={`${SITE.name}, back to top`}
    >
      <span className="font-serif text-[1.75rem] leading-[0.82] tracking-[-0.01em]">{SITE.wordmark}</span>
      <span className="text-[0.6875rem] leading-none font-medium tracking-[0.18em] text-muted-foreground uppercase">
        Dental Istanbul
      </span>
    </a>
  )
}
