'use client'

import { ArrowUp } from 'lucide-react'
import { useState } from 'react'

export function AssistantComposer({ placeholder, sendLabel, isPending = false, onSend }: { placeholder: string; sendLabel: string; isPending?: boolean; onSend: (message: string) => void | Promise<void> }) {
  const [value, setValue] = useState('')
  const canSend = value.trim().length > 0 && !isPending

  function submit() {
    if (!canSend) return
    void onSend(value.trim())
    setValue('')
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        submit()
      }}
      aria-busy={isPending}
      className="flex items-end gap-2 border-t border-border bg-background/80 p-4 pb-[max(1rem,env(safe-area-inset-bottom))]"
    >
      <label className="sr-only" htmlFor="patient-assistant-composer">
        {placeholder}
      </label>
      <textarea
        id="patient-assistant-composer"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        disabled={isPending}
        onKeyDown={(event) => {
          if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault()
            submit()
          }
        }}
        placeholder={placeholder}
        rows={1}
        className="max-h-24 min-h-11 flex-1 resize-none rounded-xl border border-input bg-background px-3.5 py-3 text-sm leading-5 outline-none placeholder:text-muted-foreground focus-visible:ring-3 focus-visible:ring-ring/30"
      />
      <button
        type="submit"
        aria-label={sendLabel}
        disabled={!canSend}
        className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-colors hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        <ArrowUp aria-hidden="true" className="size-4" />
      </button>
    </form>
  )
}
