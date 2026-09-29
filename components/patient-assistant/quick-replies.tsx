'use client'

import { ArrowUpRight } from 'lucide-react'

type QuickReply = { id: string; label: string }

export function QuickReplies({ replies, onSelect, ariaLabel }: { replies: QuickReply[]; onSelect: (reply: QuickReply) => void; ariaLabel: string }) {
  return (
    <div className="flex flex-col items-start gap-2" aria-label={ariaLabel}>
      {replies.map((reply) => (
        <button
          key={reply.id}
          type="button"
          onClick={() => onSelect(reply)}
          className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-background px-4 text-left text-sm font-medium text-foreground transition-colors hover:border-foreground/30 hover:bg-sage-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          {reply.label}
          <ArrowUpRight aria-hidden="true" className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      ))}
    </div>
  )
}
