'use client'

import { useEffect, useRef, useState } from 'react'
import { Check } from 'lucide-react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog'
import { TreatmentPlanForm } from '@/components/shared/treatment-plan-form'
import { PRIMARY_CTA_LABEL } from '@/lib/constants'

type TreatmentPlanModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  returnFocusRef: React.RefObject<HTMLElement | null>
}

export function TreatmentPlanModal({ open, onOpenChange, returnFocusRef }: TreatmentPlanModalProps) {
  const [submitted, setSubmitted] = useState(false)

  return (
    <Dialog
      open={open}
      onOpenChange={(nextOpen) => onOpenChange(nextOpen)}
      onOpenChangeComplete={(isOpen) => {
        if (!isOpen) setSubmitted(false)
      }}
    >
      <DialogContent
        finalFocus={() => returnFocusRef.current ?? true}
        className="max-h-[calc(100dvh-1.5rem)] gap-0 overflow-y-auto overscroll-contain rounded-2xl bg-card p-0 text-foreground ring-foreground/5 sm:max-w-[36rem]"
      >
        {submitted ? (
          <SubmissionSuccess />
        ) : (
          <div className="flex flex-col gap-8 p-6 sm:p-10">
            <header className="flex flex-col gap-3 pr-8">
              <p className="eyebrow">Free · No commitment</p>
              <DialogTitle className="font-serif text-3xl leading-[1.1] font-normal tracking-[-0.01em] sm:text-4xl">
                {PRIMARY_CTA_LABEL}
              </DialogTitle>
              <DialogDescription className="text-[0.9375rem] leading-relaxed text-muted-foreground">
                Tell us a little about you and what you would like to change. A clinician-reviewed
                plan usually follows within 24 hours.
              </DialogDescription>
            </header>
            <TreatmentPlanForm onSubmitted={() => setSubmitted(true)} />
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

function SubmissionSuccess() {
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    headingRef.current?.focus()
  }, [])

  return (
    <div className="flex flex-col items-start gap-6 p-6 sm:p-10" role="status">
      <span className="flex size-12 items-center justify-center rounded-full bg-sage-soft">
        <Check aria-hidden="true" className="size-5 text-foreground" />
      </span>
      <div className="flex flex-col gap-3 pr-8">
        <DialogTitle
          ref={headingRef}
          tabIndex={-1}
          className="font-serif text-3xl leading-[1.1] font-normal tracking-[-0.01em] outline-none sm:text-4xl"
        >
          Thank you. Your treatment request has been received.
        </DialogTitle>
        <DialogDescription className="text-[0.9375rem] leading-relaxed text-muted-foreground">
          This is a demonstration form. No information has been transmitted.
        </DialogDescription>
      </div>
      <DialogClose className="inline-flex h-12 items-center justify-center rounded-[10px] bg-primary px-6 text-[0.9375rem] font-medium text-primary-foreground transition-colors hover:bg-primary/90">
        Close
      </DialogClose>
    </div>
  )
}
