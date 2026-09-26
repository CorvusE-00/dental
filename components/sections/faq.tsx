import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { SectionHeading } from '@/components/shared/section-heading'
import { SITE } from '@/lib/constants'
import { faqs } from '@/lib/data'

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="section-y bg-card">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="flex flex-col gap-6 lg:col-span-5">
          <SectionHeading
            id="faq-title"
            eyebrow="FAQ"
            title="Questions, answered honestly."
          />
          <p className="text-sm leading-relaxed text-muted-foreground">
            Something else on your mind? Write to{' '}
            <a href={`mailto:${SITE.email}`} className="text-foreground underline underline-offset-4">
              {SITE.email}
            </a>
            .
          </p>
        </div>

        <Accordion className="lg:col-span-7">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id} className="border-b border-foreground/15 first:border-t">
              <AccordionTrigger className="min-h-16 items-center rounded-none py-5 text-left text-base font-medium hover:no-underline md:text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
                <p className="max-w-xl">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
