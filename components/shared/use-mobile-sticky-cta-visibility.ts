'use client'

import { useEffect, useState } from 'react'

export function useMobileStickyCtaVisibility() {
  const [blocked, setBlocked] = useState(true)
  const [assistantAvoidanceVisible, setAssistantAvoidanceVisible] = useState(false)
  const [stickyCtaPresent, setStickyCtaPresent] = useState(() => (
    typeof document !== 'undefined' && Boolean(document.querySelector('[data-mobile-sticky-cta]'))
  ))

  useEffect(() => {
    setStickyCtaPresent(Boolean(document.querySelector('[data-mobile-sticky-cta]')))
    const stickyTargets = Array.from(document.querySelectorAll('[data-hide-sticky-cta]'))
    const assistantTargets = Array.from(document.querySelectorAll('[data-avoid-floating-assistant]'))
    const stickyTargetSet = new Set(stickyTargets)
    const assistantTargetSet = new Set(assistantTargets)
    const targets = new Set([...stickyTargets, ...assistantTargets])
    const stickyVisible = new Set<Element>()
    const assistantVisible = new Set<Element>()

    const isInViewport = (element: Element) => {
      const rect = element.getBoundingClientRect()
      return rect.top < window.innerHeight && rect.bottom > 0
    }

    stickyTargets.forEach((target) => {
      if (isInViewport(target)) stickyVisible.add(target)
    })
    assistantTargets.forEach((target) => {
      if (isInViewport(target)) assistantVisible.add(target)
    })

    if (targets.size === 0) {
      setBlocked(false)
      setAssistantAvoidanceVisible(false)
      return
    }

    setBlocked(stickyVisible.size > 0)
    setAssistantAvoidanceVisible(assistantVisible.size > 0)

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (stickyTargetSet.has(entry.target)) {
          if (entry.isIntersecting) stickyVisible.add(entry.target)
          else stickyVisible.delete(entry.target)
        }
        if (assistantTargetSet.has(entry.target)) {
          if (entry.isIntersecting) assistantVisible.add(entry.target)
          else assistantVisible.delete(entry.target)
        }
      }
      setBlocked(stickyVisible.size > 0)
      setAssistantAvoidanceVisible(assistantVisible.size > 0)
    })

    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  return {
    isStickyCtaVisible: stickyCtaPresent && !blocked,
    isStickyCtaBlocked: blocked,
    isAssistantAvoidanceVisible: assistantAvoidanceVisible,
  }
}
