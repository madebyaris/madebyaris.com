'use client'

import { useRef, useState, useTransition } from 'react'
import { useSearchParams } from 'next/navigation'
import { sendContactEmail } from '@/app/actions/contact'
import { contactServices } from '@/lib/contact-services'

const fieldClass =
  'flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
const labelClass = 'text-sm font-medium leading-none'

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const searchParams = useSearchParams()
  const requested = searchParams.get('service')
  const defaultService = contactServices.some((service) => service.id === requested) ? requested! : ''

  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [isPending, startTransition] = useTransition()

  async function handleSubmit(formData: FormData) {
    setError(null)
    setSuccess(false)

    startTransition(async () => {
      const result = await sendContactEmail(formData)

      if (result.error) {
        setError(result.error)
        return
      }

      setSuccess(true)
      formRef.current?.reset()
    })
  }

  return (
    <form ref={formRef} action={handleSubmit} className="space-y-4 rounded-lg border bg-card p-6">
      <div className="space-y-2">
        <label htmlFor="service" className={labelClass}>
          What do you need?
        </label>
        <select
          id="service"
          name="service"
          key={defaultService}
          defaultValue={defaultService}
          required
          className={`${fieldClass} h-10`}
        >
          <option value="" disabled>
            Pick the closest one
          </option>
          {contactServices.map((service) => (
            <option key={service.id} value={service.id}>
              {service.label}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className={`${fieldClass} h-10`} />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className={labelClass}>
            Work email
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={`${fieldClass} h-10`} />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className={labelClass}>
          Project details
        </label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="What you're building, your current site or repo (if any), and when you need it."
          className={`${fieldClass} min-h-[140px]`}
        />
      </div>

      {error && <div className="text-sm text-destructive">{error}</div>}

      {success && (
        <div className="text-sm text-green-600">
          Got it. I&apos;ll reply within 24 hours with questions or next steps.
        </div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
      >
        {isPending ? 'Sending...' : 'Send my project'}
      </button>
      <p className="text-xs text-zinc-500">
        No sales call required. I&apos;ll tell you plainly if I&apos;m not the right fit.
      </p>
    </form>
  )
}
