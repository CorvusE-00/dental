import { cn } from '@/lib/utils'

type FormFieldProps = {
  id: string
  label: string
  required?: boolean
  error?: string
  hint?: string
  optionalLabel?: string
  className?: string
  children: React.ReactNode
}

export function fieldDescribedBy(id: string, { error, hint }: { error?: string; hint?: string }) {
  return [hint ? `${id}-hint` : null, error ? `${id}-error` : null].filter(Boolean).join(' ') || undefined
}

export const fieldControlClasses =
  'h-12 w-full rounded-[10px] border border-input bg-background px-4 text-[0.9375rem] text-foreground shadow-none transition-colors placeholder:text-muted-foreground/80 focus-visible:border-foreground focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground aria-invalid:border-destructive aria-invalid:ring-0'

export function FormField({ id, label, required, error, hint, optionalLabel = 'optional', className, children }: FormFieldProps) {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
        {required ? (
          <span aria-hidden="true" className="text-muted-foreground">
            {' *'}
          </span>
        ) : (
          <span className="font-normal text-muted-foreground"> ({optionalLabel})</span>
        )}
      </label>
      {children}
      {hint && !error ? (
        <p id={`${id}-hint`} className="text-xs text-muted-foreground">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={`${id}-error`} className="text-sm text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  )
}
