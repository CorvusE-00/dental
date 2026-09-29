'use client'

export function AssistantTypingIndicator({ label, roleLabel }: { label: string; roleLabel: string }) {
  return (
    <div role="status" aria-label={label} className="flex flex-col items-start gap-1.5">
      <span className="px-1 text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-muted-foreground">{roleLabel}</span>
      <div className="inline-flex items-center gap-1 rounded-2xl rounded-bl-md bg-sage-soft px-4 py-3 text-sm text-muted-foreground">
        <span className="sr-only">{label}</span>
        <span aria-hidden="true" className="size-1.5 rounded-full bg-current motion-safe:animate-pulse motion-reduce:animate-none" />
        <span aria-hidden="true" className="size-1.5 rounded-full bg-current motion-safe:animate-pulse motion-reduce:animate-none [animation-delay:150ms]" />
        <span aria-hidden="true" className="size-1.5 rounded-full bg-current motion-safe:animate-pulse motion-reduce:animate-none [animation-delay:300ms]" />
      </div>
    </div>
  )
}
