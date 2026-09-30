import { SITE } from '@/lib/constants'

export function Wordmark({ onClick }: { onClick?: () => void }) {
  return (
    <a
      href="#top"
      onClick={onClick}
      className="flex min-h-11 items-center gap-2 rounded-md"
      aria-label={`${SITE.name}, back to top`}
    >
      <span className="translate-y-px font-serif text-[1.75rem] leading-none tracking-[-0.01em]">{SITE.wordmark}</span>
      <span className="translate-y-px text-[0.6875rem] font-medium tracking-[0.18em] text-muted-foreground uppercase">
        Dental Istanbul
      </span>
    </a>
  )
}
