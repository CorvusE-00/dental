'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { ChevronsLeftRight } from 'lucide-react'
import type { ResultCase } from '@/lib/data'

const clamp = (value: number) => Math.min(100, Math.max(0, value))

export function BeforeAfterSlider({ result }: { result: ResultCase }) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const draggingRef = useRef(false)

  function updateFromPointer(clientX: number) {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect || rect.width === 0) return
    setPosition(clamp(((clientX - rect.left) / rect.width) * 100))
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    const steps: Record<string, number> = {
      ArrowLeft: -5,
      ArrowDown: -5,
      ArrowRight: 5,
      ArrowUp: 5,
      PageDown: -20,
      PageUp: 20,
    }
    if (event.key in steps) {
      event.preventDefault()
      setPosition((current) => clamp(current + steps[event.key]))
    } else if (event.key === 'Home') {
      event.preventDefault()
      setPosition(0)
    } else if (event.key === 'End') {
      event.preventDefault()
      setPosition(100)
    }
  }

  const rounded = Math.round(position)

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] w-full cursor-ew-resize touch-pan-y overflow-hidden rounded-2xl bg-muted select-none"
      onPointerDown={(event) => {
        draggingRef.current = true
        event.currentTarget.setPointerCapture(event.pointerId)
        updateFromPointer(event.clientX)
      }}
      onPointerMove={(event) => {
        if (draggingRef.current) updateFromPointer(event.clientX)
      }}
      onPointerUp={() => {
        draggingRef.current = false
      }}
      onPointerCancel={() => {
        draggingRef.current = false
      }}
    >
      <Image
        src={result.after.src}
        alt={result.after.alt}
        fill
        sizes="(min-width: 1024px) 380px, 100vw"
        className="pointer-events-none object-cover"
        draggable={false}
      />
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={result.before.src}
          alt={result.before.alt}
          fill
          sizes="(min-width: 1024px) 380px, 100vw"
          className="pointer-events-none object-cover"
          draggable={false}
        />
      </div>

      <span className="pointer-events-none absolute top-3 left-3 rounded-md bg-background/85 px-2.5 py-1 text-xs font-medium tracking-wide text-foreground">
        Before
      </span>
      <span className="pointer-events-none absolute top-3 right-3 rounded-md bg-background/85 px-2.5 py-1 text-xs font-medium tracking-wide text-foreground">
        After
      </span>

      <div
        className="pointer-events-none absolute inset-y-0 w-px -translate-x-1/2 bg-background"
        style={{ left: `${position}%` }}
        aria-hidden="true"
      />
      <div
        role="slider"
        tabIndex={0}
        aria-label={`Before and after comparison, ${result.patient}`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={rounded}
        aria-valuetext={`${rounded}% before image visible`}
        aria-orientation="horizontal"
        onKeyDown={handleKeyDown}
        className="absolute top-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-background text-foreground shadow-[0_2px_12px_rgba(21,35,33,0.18)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-background"
        style={{ left: `${position}%` }}
      >
        <ChevronsLeftRight aria-hidden="true" className="size-4" />
      </div>
    </div>
  )
}
