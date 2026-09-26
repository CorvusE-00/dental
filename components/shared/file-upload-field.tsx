'use client'

import { useId, useRef, useState } from 'react'
import { FileText, ImageIcon, Upload, X } from 'lucide-react'
import { UPLOAD_RULES } from '@/lib/constants'

type FileUploadFieldProps = {
  id: string
  files: File[]
  onChange: (files: File[]) => void
}

function formatSize(bytes: number) {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

function isAcceptedType(file: File) {
  const name = file.name.toLowerCase()
  return (
    (UPLOAD_RULES.acceptedMimeTypes as readonly string[]).includes(file.type) ||
    UPLOAD_RULES.acceptedExtensions.some((extension) => name.endsWith(extension))
  )
}

export function FileUploadField({ id, files, onChange }: FileUploadFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [errors, setErrors] = useState<string[]>([])
  const hintId = useId()
  const errorId = useId()

  function handleSelect(selected: FileList | null) {
    if (!selected) return
    const nextErrors: string[] = []
    const accepted: File[] = [...files]

    for (const file of Array.from(selected)) {
      if (!isAcceptedType(file)) {
        nextErrors.push(`${file.name} is not a supported file type. Use JPG, PNG or PDF.`)
      } else if (file.size > UPLOAD_RULES.maxFileSizeBytes) {
        nextErrors.push(`${file.name} is larger than 10 MB.`)
      } else if (accepted.some((existing) => existing.name === file.name && existing.size === file.size)) {
        nextErrors.push(`${file.name} has already been added.`)
      } else if (accepted.length >= UPLOAD_RULES.maxFiles) {
        nextErrors.push(`${file.name} was not added. You can attach up to ${UPLOAD_RULES.maxFiles} files.`)
      } else {
        accepted.push(file)
      }
    }

    setErrors(nextErrors)
    onChange(accepted)
    if (inputRef.current) inputRef.current.value = ''
  }

  function removeFile(index: number) {
    onChange(files.filter((_, fileIndex) => fileIndex !== index))
    setErrors([])
    inputRef.current?.focus()
  }

  const limitReached = files.length >= UPLOAD_RULES.maxFiles

  return (
    <div className="flex flex-col gap-2">
      <span id={`${id}-label`} className="text-sm font-medium text-foreground">
        Photos / X-rays <span className="font-normal text-muted-foreground">(optional)</span>
      </span>

      <div className="relative">
        <input
          ref={inputRef}
          id={id}
          type="file"
          multiple
          accept={UPLOAD_RULES.acceptedExtensions.join(',')}
          disabled={limitReached}
          aria-labelledby={`${id}-label ${id}-action`}
          aria-describedby={[hintId, errors.length ? errorId : null].filter(Boolean).join(' ')}
          aria-invalid={errors.length > 0 || undefined}
          onChange={(event) => handleSelect(event.target.files)}
          className="peer sr-only"
        />
        <label
          htmlFor={id}
          className="flex min-h-24 cursor-pointer flex-col items-center justify-center gap-2 rounded-[10px] border border-dashed border-input bg-background px-4 py-5 text-center transition-colors peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-60 hover:border-foreground/40 hover:bg-sage-soft/50"
        >
          <Upload aria-hidden="true" className="size-5 text-muted-foreground" />
          <span id={`${id}-action`} className="text-sm font-medium">
            {limitReached ? 'File limit reached' : 'Choose files'}
          </span>
        </label>
      </div>

      <p id={hintId} className="text-xs text-muted-foreground">
        JPG, PNG or PDF · Up to {UPLOAD_RULES.maxFiles} files · 10 MB each
      </p>

      <div id={errorId} aria-live="polite">
        {errors.length > 0 ? (
          <ul className="flex flex-col gap-1 text-sm text-destructive">
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        ) : null}
      </div>

      {files.length > 0 ? (
        <ul className="flex flex-col divide-y divide-border rounded-[10px] border border-border" aria-label="Selected files">
          {files.map((file, index) => {
            const Icon = file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf') ? FileText : ImageIcon
            return (
              <li key={`${file.name}-${file.size}`} className="flex items-center gap-3 py-1 pr-1 pl-4">
                <Icon aria-hidden="true" className="size-4 shrink-0 text-muted-foreground" />
                <span className="min-w-0 flex-1 truncate text-sm">{file.name}</span>
                <span className="shrink-0 text-xs text-muted-foreground">{formatSize(file.size)}</span>
                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  aria-label={`Remove ${file.name}`}
                  className="flex size-11 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-sage-soft hover:text-foreground"
                >
                  <X aria-hidden="true" className="size-4" />
                </button>
              </li>
            )
          })}
        </ul>
      ) : null}
    </div>
  )
}
