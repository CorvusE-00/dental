'use client'

import { useEffect, useState } from 'react'

export function useMobileStickyCtaVisibility() {
  const [blocked, setBlocked] = useState(true)

  useEffect(() => {
    const targets = document.querySelectorAll('[data-hide-sticky-cta]')
    const visible = new Set<Element>()

    if (targets.length === 0) {
      setBlocked(false)
      return
    }

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) visible.add(entry.target)
        else visible.delete(entry.target)
      }
      setBlocked(visible.size > 0)
    })

    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  return {
    isStickyCtaVisible: !blocked,
    isStickyCtaBlocked: blocked,
  }
}
