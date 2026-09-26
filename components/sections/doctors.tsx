import { DoctorCard } from '@/components/shared/doctor-card'
import { Reveal } from '@/components/shared/reveal'
import { SectionHeading } from '@/components/shared/section-heading'
import { team } from '@/lib/data'

export function Doctors() {
  return (
    <section id="doctors" aria-labelledby="doctors-title" className="section-y bg-card">
      <div className="container-page flex flex-col gap-12 md:gap-16">
        <SectionHeading
          id="doctors-title"
          eyebrow="Our doctors"
          title="The team behind your plan."
          description="Every treatment plan is reviewed by a clinician, and every patient is supported by a coordinator who speaks their language."
        />
        <ul className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <li key={member.id}>
              <Reveal delay={index * 0.06}>
                <DoctorCard member={member} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
