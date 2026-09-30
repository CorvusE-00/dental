import { SITE } from '@/lib/constants'

export function Wordmark({ onClick }: { onClick?: () => void }) {
  return (
    <a
      href="#top"
      onClick={onClick}
      className="flex h-full items-center rounded-md"
      aria-label={`${SITE.name}, back to top`}
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
