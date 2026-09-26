'use client'

import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Info, Loader2 } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { FileUploadField } from '@/components/shared/file-upload-field'
import { FormField, fieldControlClasses, fieldDescribedBy } from '@/components/shared/form-field'
import { treatmentInterestOptions } from '@/lib/data'
import { PROTOTYPE_NOTICE, SIMULATED_SUBMIT_DELAY_MS } from '@/lib/constants'
import {
  treatmentPlanDefaults,
  treatmentPlanSchema,
  type TreatmentPlanValues,
} from '@/lib/treatment-plan-schema'
import { cn } from '@/lib/utils'

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

type TextFieldName = 'fullName' | 'country' | 'email' | 'phone'

const textFields: {
  name: TextFieldName
  label: string
  type: string
  autoComplete: string
  placeholder: string
  inputMode?: 'email' | 'tel'
}[] = [
  { name: 'fullName', label: 'Name', type: 'text', autoComplete: 'name', placeholder: 'Your full name' },
  { name: 'country', label: 'Country', type: 'text', autoComplete: 'country-name', placeholder: 'e.g. United Kingdom' },
  { name: 'email', label: 'Email', type: 'email', autoComplete: 'email', placeholder: 'you@example.com', inputMode: 'email' },
  { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', autoComplete: 'tel', placeholder: '+44 7700 900000', inputMode: 'tel' },
]

export function TreatmentPlanForm({ onSubmitted }: { onSubmitted: () => void }) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TreatmentPlanValues>({
    resolver: zodResolver(treatmentPlanSchema),
    defaultValues: treatmentPlanDefaults,
    shouldFocusError: true,
  })

  async function onSubmit() {
    // Prototype only: nothing is sent anywhere, the delay simulates a request.
    await wait(SIMULATED_SUBMIT_DELAY_MS)
    onSubmitted()
  }

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6" aria-busy={isSubmitting}>
      <div className="grid gap-5 sm:grid-cols-2">
        {textFields.map((field) => {
          const id = `tp-${field.name}`
          const error = errors[field.name]?.message
          return (
            <FormField key={field.name} id={id} label={field.label} required error={error}>
              <input
                id={id}
                type={field.type}
                autoComplete={field.autoComplete}
                inputMode={field.inputMode}
                placeholder={field.placeholder}
                aria-required="true"
                aria-invalid={error ? true : undefined}
                aria-describedby={fieldDescribedBy(id, { error })}
                className={fieldControlClasses}
                {...register(field.name)}
              />
            </FormField>
          )
        })}
      </div>

      <Controller
        control={control}
        name="treatmentInterest"
        render={({ field, fieldState }) => {
          const id = 'tp-treatmentInterest'
          const error = fieldState.error?.message
          return (
            <FormField id={id} label="Treatment interest" required error={error}>
              <Select
                items={treatmentInterestOptions}
                value={field.value || null}
                onValueChange={(value) => field.onChange(value ?? '')}
                name={field.name}
              >
                <SelectTrigger
                  id={id}
                  ref={field.ref}
                  onBlur={field.onBlur}
                  aria-required="true"
                  aria-invalid={error ? true : undefined}
                  aria-describedby={fieldDescribedBy(id, { error })}
                  className={cn(fieldControlClasses, 'data-[size=default]:h-12 w-full pr-3 pl-4')}
                >
                  <SelectValue placeholder="Select a treatment" />
                </SelectTrigger>
                <SelectContent alignItemWithTrigger={false} className="p-1">
                  {treatmentInterestOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value} className="min-h-11 px-3 text-[0.9375rem]">
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormField>
          )
        }}
      />

      <Controller
        control={control}
        name="attachments"
        render={({ field }) => (
          <FileUploadField id="tp-attachments" files={field.value} onChange={field.onChange} />
        )}
      />

      <FormField id="tp-message" label="Additional message" error={errors.message?.message}>
        <textarea
          id="tp-message"
          rows={4}
          placeholder="Anything you would like our clinicians to know"
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={fieldDescribedBy('tp-message', { error: errors.message?.message })}
          className={cn(fieldControlClasses, 'h-auto min-h-28 resize-y py-3 leading-relaxed')}
          {...register('message')}
        />
      </FormField>

      <p className="flex gap-2.5 rounded-[10px] bg-sage-soft px-4 py-3 text-sm leading-relaxed text-foreground">
        <Info aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
        {PROTOTYPE_NOTICE}
      </p>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex h-14 w-full items-center justify-center gap-2.5 rounded-[10px] bg-primary px-7 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-progress disabled:opacity-80"
      >
        {isSubmitting ? (
          <>
            <Loader2 aria-hidden="true" className="size-4 animate-spin" />
            Sending your request…
          </>
        ) : (
          'Request my free plan'
        )}
      </button>
    </form>
  )
}
