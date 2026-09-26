import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  id?: string
  eyebrow: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: 'start' | 'center'
  tone?: 'ink' | 'light'
  className?: string
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = 'start',
  tone = 'ink',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex max-w-2xl flex-col gap-5',
        align === 'center' && 'mx-auto items-center text-center',
        className,
      )}
    >
      <p className={cn('eyebrow', tone === 'light' && 'text-primary-foreground/70')}>{eyebrow}</p>
      <h2
        id={id}
        className="font-serif text-4xl leading-[1.05] font-normal tracking-[-0.015em] text-balance sm:text-5xl lg:text-[3.5rem]"
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'max-w-xl text-base leading-relaxed text-pretty md:text-lg',
            tone === 'light' ? 'text-primary-foreground/75' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
