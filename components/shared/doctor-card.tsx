'use client'

import Image from 'next/image'
import type { TeamMember } from '@/lib/data'
import { useLocale } from '@/lib/i18n'

export function DoctorCard({ member }: { member: TeamMember }) {
  const { locale, copy } = useLocale()
  const localized = copy.doctors[member.id] ?? {}
  const experience = locale === 'tr' ? member.experience?.replace('years experience', 'yıl deneyim') : member.experience
  const meta = [member.credentials, experience, localized.languages ?? member.languages].filter(Boolean)

  return (
    <article className="flex flex-col gap-5">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted">
        <Image
          src={member.image}
          alt={member.imageAlt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <h3 className="text-lg font-medium tracking-[-0.01em]">{member.name}</h3>
        <p className="text-sm text-foreground/80">{localized.role ?? member.role}</p>
        <p className="text-sm text-muted-foreground">{meta.join(' · ')}</p>
      </div>
    </article>
  )
}
