'use client'

import { useRef, useState, useTransition } from 'react'
import { useSearchParams } from 'next/navigation'
import { sendContactEmail } from '@/app/actions/contact'
import { contactServices } from '@/lib/contact-services'
import {
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ChevronDown,
} from 'lucide-react'
import {
  ReuiAlert,
  ReuiAlertDescription,
  ReuiAlertTitle,
} from '@/components/reui/alert'

const fieldClass =
  'flex w-full rounded-lg border border-[#D1D5DB] bg-[#F8FAFC] px-3.5 py-2.5 text-sm text-[#0B0C0E] placeholder:text-[#9CA3AF] transition-colors focus:border-[#3A57FC] focus:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3A57FC]/20 disabled:cursor-not-allowed disabled:opacity-50'
const labelClass =
  'block font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-[#4B5563]'

const QUICK_PICKS = [
  { id: 'ai-implementation', title: 'AI System / Pilot', hint: 'Agents, MCP, evals' },
  { id: 'geo-aeo', title: 'GEO & AI Snapshot', hint: 'RankMySEO audit' },
  { id: 'product', title: 'Product / SaaS Build', hint: 'Next.js, Rust, APIs' },
  { id: 'cursor-mentoring', title: 'Cursor Mentoring', hint: 'Rules & PR review' },
] as const

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const searchParams = useSearchParams()
  const requested = searchParams.get('service')
  const initialService = contactServices.some((s) => s.id === requested)
    ? requested!
    : 'ai-implementation'

  const [selectedService, setSelectedService] = useState<string>(initialService)
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
      setSelectedService(initialService)
    })
  }

  return (
    <form ref={formRef} action={handleSubmit} className="space-y-6">
      {/* Quick-pick track chips */}
      <div className="space-y-2.5">
        <span className={labelClass}>Quick select track</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {QUICK_PICKS.map((item) => {
            const active = selectedService === item.id
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedService(item.id)}
                className={`text-left rounded-xl border px-3.5 py-3 transition-all cursor-pointer ${
                  active
                    ? 'border-[#3A57FC] bg-[#3A57FC] text-white shadow-[0_10px_24px_-12px_rgba(58,87,252,0.55)]'
                    : 'border-[#E5E7EB] bg-[#F8FAFC] text-[#0B0C0E] hover:border-[#3A57FC]/50 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-display text-sm font-semibold">{item.title}</span>
                  <span
                    className={`h-2 w-2 rounded-full ${
                      active ? 'bg-[#FF8800]' : 'bg-[#D1D5DB]'
                    }`}
                  />
                </div>
                <p
                  className={`mt-0.5 font-mono text-[11px] ${
                    active ? 'text-white/80' : 'text-[#6B7280]'
                  }`}
                >
                  {item.hint}
                </p>
              </button>
            )
          })}
        </div>
      </div>

      {/* Full service selector (synced with quick picks + supports all 16 deep-linked IDs) */}
      <div className="space-y-2">
        <label htmlFor="service" className={labelClass}>
          What do you need?
        </label>
        <div className="relative">
          <select
            id="service"
            name="service"
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            required
            className={`${fieldClass} h-11 appearance-none pr-10 cursor-pointer`}
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
          <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6B7280]" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className={`${fieldClass} h-11`}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className={labelClass}>
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className={`${fieldClass} h-11`}
          />
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
          className={`${fieldClass} min-h-[150px] resize-y leading-relaxed`}
        />
      </div>

      {error && (
        <ReuiAlert variant="destructive">
          <AlertCircle />
          <ReuiAlertTitle>Could not send your request</ReuiAlertTitle>
          <ReuiAlertDescription>{error}</ReuiAlertDescription>
        </ReuiAlert>
      )}

      {success && (
        <ReuiAlert variant="success">
          <CheckCircle2 />
          <ReuiAlertTitle>Request received</ReuiAlertTitle>
          <ReuiAlertDescription>
            Got it. I&apos;ll reply within 24 hours with questions or next steps.
          </ReuiAlertDescription>
        </ReuiAlert>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#E5E7EB]">
        <button
          type="submit"
          disabled={isPending}
          className="inline-flex items-center justify-center gap-2 rounded-md bg-[#FF8800] hover:bg-[#E67600] text-white font-bold px-6 py-3.5 text-sm shadow-[0_12px_28px_-10px_rgba(255,136,0,0.45)] transition-all hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-50 cursor-pointer group"
        >
          {isPending ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Sending request...</span>
            </>
          ) : (
            <>
              <span>Send my project</span>
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </>
          )}
        </button>

        <p className="font-mono text-[11px] text-[#6B7280]">
          No sales call required. Plain answer within 24h.
        </p>
      </div>
    </form>
  )
}
