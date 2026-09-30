'use client'

import { SITE } from '@/lib/constants'
import { footerColumns } from '@/lib/data'
import { useLocale } from '@/lib/i18n'

export function Footer() {
  const { copy } = useLocale()
  return (
    <footer data-hide-sticky-cta className="overflow-hidden border-t border-border bg-background">
      <div className="container-page pt-18 md:pt-24">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col gap-5 lg:col-span-4">
            <p className="font-serif text-3xl leading-none tracking-[-0.01em]">{SITE.name}</p>
            <p className="max-w-xs leading-relaxed text-muted-foreground">
              {copy.footer.description}
            </p>
            <address className="flex flex-col gap-1 text-sm text-muted-foreground not-italic">
              <span>{copy.footer.location}</span>
              <a href={`mailto:${SITE.email}`} className="w-fit py-1 hover:text-foreground">
                {SITE.email}
              </a>
            </address>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-8 lg:justify-items-end">
            {footerColumns.map((column) => (
              <nav key={column.id} aria-labelledby={`footer-${column.id}`} className="flex flex-col gap-4">
                <h2 id={`footer-${column.id}`} className="eyebrow">
                  {copy.footer.columns[column.id]?.title ?? column.title}
                </h2>
                <ul className="flex flex-col">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="inline-flex min-h-10 items-center text-sm text-foreground/85 transition-colors hover:text-foreground"
                      >
                        {copy.footer.columns[column.id]?.links[link.label] ?? link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border py-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            {'© '}
            {SITE.year} {SITE.name}
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2" aria-label={copy.footer.legalLabel}>
            {copy.footer.legal.map((label) => (
              <li key={label}>{label}</li>
            ))}
          </ul>
        </div>
        <p className="pb-10 text-xs text-muted-foreground md:pb-12">
          {copy.footer.prototype}
        </p>
      </div>
    </footer>
  )
}
