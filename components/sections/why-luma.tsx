import Image from 'next/image'
import { Reveal } from '@/components/shared/reveal'
import { SectionHeading } from '@/components/shared/section-heading'
import { internationalFeatures } from '@/lib/data'

export function WhyLuma() {
  return (
    <section id="why-luma" aria-labelledby="why-luma-title" className="section-y bg-secondary">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted lg:col-span-5">
          <Image
            src="/images/international.png"
            alt="A patient coordinator welcoming an international patient at the clinic reception."
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center gap-12 lg:col-span-7">
          <SectionHeading
            id="why-luma-title"
            eyebrow="Why Luma"
            title="Designed around international patients."
            description="Travelling for treatment should feel considered, not complicated. Every detail of your visit is coordinated around your plan."
          />

          <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {internationalFeatures.map((feature, index) => (
              <li key={feature.id}>
                <Reveal delay={index * 0.06} className="flex flex-col gap-3 border-t border-foreground/15 pt-5">
                  <h3 className="text-lg font-medium tracking-[-0.01em]">{feature.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{feature.description}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
