import Image from 'next/image'
import type { TeamMember } from '@/lib/data'

export function DoctorCard({ member }: { member: TeamMember }) {
  const meta = [member.credentials, member.experience, member.languages].filter(Boolean)

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
        <p className="text-sm text-foreground/80">{member.role}</p>
        <p className="text-sm text-muted-foreground">{meta.join(' · ')}</p>
      </div>
    </article>
  )
}
