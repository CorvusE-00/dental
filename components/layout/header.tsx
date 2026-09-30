'use client'

import { useEffect, useRef, useState } from 'react'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetDescription, SheetTitle } from '@/components/ui/sheet'
import { PrimaryCta } from '@/components/shared/primary-cta'
import { Wordmark } from '@/components/layout/wordmark'
import { mobileNav, primaryNav } from '@/lib/data'
import { cn } from '@/lib/utils'
import { LocaleSwitcher, useLocale } from '@/lib/i18n'

export function Header() {
  const { copy } = useLocale()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const pendingHashRef = useRef<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function scrollToPendingHash() {
    const hash = pendingHashRef.current
    pendingHashRef.current = null
    if (!hash) return
    const target = document.querySelector<HTMLElement>(hash)
    if (!target) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
    history.pushState(null, '', hash)
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 border-b transition-[background-color,border-color,backdrop-filter] duration-300',
        scrolled
          ? 'border-border/80 bg-background backdrop-blur-md'
          : 'border-transparent bg-background lg:bg-background/0',
      )}
    >
      <div className="container-page flex h-(--header-height) items-center justify-between gap-6">
        <Wordmark />

        <nav aria-label={copy.menu} className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {primaryNav.map((item, index) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="flex min-h-11 items-center rounded-md px-3.5 text-sm text-foreground/80 transition-colors hover:text-foreground"
                >
                  {copy.nav[index]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LocaleSwitcher compact />
            <PrimaryCta size="sm" className="hidden lg:inline-flex" />
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label={copy.openMenu}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="flex size-11 items-center justify-center rounded-[10px] text-foreground transition-colors hover:bg-sage-soft lg:hidden"
          >
            <Menu aria-hidden="true" className="size-5" />
          </button>
        </div>
      </div>

      <Sheet
        open={menuOpen}
        onOpenChange={setMenuOpen}
        onOpenChangeComplete={(open) => {
          if (!open) scrollToPendingHash()
        }}
      >
        <SheetContent
          id="mobile-menu"
          side="right"
          finalFocus={menuButtonRef}
          className="w-full gap-0 bg-background p-0 data-[side=right]:sm:max-w-md [&>[data-slot=sheet-close]]:top-4 [&>[data-slot=sheet-close]]:right-4 [&>[data-slot=sheet-close]]:size-11"
        >
          <div className="flex h-(--header-height) items-center border-b border-border px-5">
            <SheetTitle className="eyebrow">{copy.menu}</SheetTitle>
            <SheetDescription className="sr-only">{copy.menu}</SheetDescription>
          </div>
          <nav aria-label={copy.menu} className="flex-1 overflow-y-auto px-5 py-6">
            <ul className="flex flex-col">
              {mobileNav.map((item, index) => (
                <li key={item.id} className="border-b border-border">
                  <a
                    href={item.href}
                    onClick={(event) => {
                      event.preventDefault()
                      pendingHashRef.current = item.href
                      setMenuOpen(false)
                    }}
                    className="flex min-h-16 items-center font-serif text-3xl tracking-[-0.01em]"
                  >
                    {copy.mobileNav[index]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="border-t border-border p-5">
            <LocaleSwitcher />
            <PrimaryCta
              size="lg"
              className="w-full"
              onBeforeOpen={() => setMenuOpen(false)}
              returnFocusTo={() => menuButtonRef.current}
            />
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}
