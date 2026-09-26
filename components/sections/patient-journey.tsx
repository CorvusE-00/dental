import Image from 'next/image'
import { PrimaryCta } from '@/components/shared/primary-cta'
import { SectionHeading } from '@/components/shared/section-heading'
import { patientJourney } from '@/lib/data'

export function PatientJourney() {
  return (
    <section id="journey" aria-labelledby="journey-title" className="section-y">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="flex flex-col gap-10 lg:col-span-7">
          <SectionHeading
            id="journey-title"
            eyebrow="Patient journey"
            title="From first photo to aftercare at home."
          />

          <ol className="flex flex-col">
            {patientJourney.map((step, index) => (
              <li
                key={step.id}
                className="grid grid-cols-[3.5rem_1fr] gap-4 border-t border-foreground/15 py-7 last:border-b md:grid-cols-[5rem_1fr]"
              >
                <span className="font-serif text-2xl leading-none text-muted-foreground tabular-nums md:text-3xl">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-medium tracking-[-0.01em] md:text-xl">{step.title}</h3>
                  <p className="max-w-md leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>

          <PrimaryCta size="lg" className="w-full sm:w-fit" />
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted lg:sticky lg:top-[calc(var(--header-height)+2rem)] lg:col-span-5 lg:self-start">
          <Image
            src="/images/clinic.png"
            alt="A calm, light-filled treatment room at the Luma clinic."
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
