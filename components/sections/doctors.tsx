'use client'

import { DoctorCard } from '@/components/shared/doctor-card'
import { Reveal } from '@/components/shared/reveal'
import { SectionHeading } from '@/components/shared/section-heading'
import { team } from '@/lib/data'
import { useLocale } from '@/lib/i18n'

export function Doctors() {
  const { copy } = useLocale()
  return (
    <section id="doctors" aria-labelledby="doctors-title" className="section-y bg-card">
      <div className="container-page flex flex-col gap-12 md:gap-16">
        <SectionHeading
          id="doctors-title"
          eyebrow={copy.sections.doctors.eyebrow}
          title={copy.sections.doctors.title}
          description={copy.sections.doctors.description}
        />
        <Reveal>
          <ul className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <li key={member.id}>
                <DoctorCard member={member} />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
