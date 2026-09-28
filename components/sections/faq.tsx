'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { SectionHeading } from '@/components/shared/section-heading'
import { SITE } from '@/lib/constants'
import { faqs } from '@/lib/data'
import { useLocale } from '@/lib/i18n'

export function Faq() {
  const { copy } = useLocale()
  return (
    <section id="faq" aria-labelledby="faq-title" className="section-y scroll-mt-[calc(var(--header-height)+1rem)] bg-card">
      <div className="container-page grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-16">
        <div className="flex max-w-md flex-col gap-6 lg:col-span-5 lg:self-start lg:pt-1">
          <SectionHeading
            id="faq-title"
            eyebrow={copy.sections.faq.eyebrow}
            title={copy.sections.faq.title}
          />
          <p className="text-sm leading-relaxed text-muted-foreground">
            {copy.sections.faq.contactIntro}{' '}
            <a href={`mailto:${SITE.email}`} className="text-foreground underline underline-offset-4">
              {SITE.email}
            </a>
            .
          </p>
        </div>

        <Accordion className="lg:col-span-7 lg:pt-1">
          {faqs.map((faq) => {
            const localized = copy.faq[faq.id] ?? faq
            return (
            <AccordionItem key={faq.id} value={faq.id} className="border-b border-foreground/15 first:border-t">
              <AccordionTrigger className="min-h-16 items-center rounded-none py-5 text-left text-base font-medium hover:no-underline md:text-lg">
                {localized.question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
                <p className="max-w-xl">{localized.answer}</p>
              </AccordionContent>
            </AccordionItem>
            )
          })}
        </Accordion>
      </div>
    </section>
  )
}
