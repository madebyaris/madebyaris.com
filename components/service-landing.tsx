import type { ReactNode } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  XCircle,
  Wrench,
  type LucideIcon,
} from 'lucide-react'
import type { FaqItem } from '@/lib/seo'

export interface LandingLink {
  title: string
  description: string
  href: string
}

export interface ServiceLandingProps {
  icon: LucideIcon
  badge: string
  h1: string
  h1Accent: string
  intro: string
  primaryHref: string
  primaryLabel: string
  secondaryHref?: string
  secondaryLabel?: string
  proof: string
  answerTitle: string
  answer: ReactNode
  familiarTitle: string
  poorFitTitle: string
  fitIntro: string
  pains: string[]
  poorFit: string[]
  outcomesTitle: string
  outcomes: { title: string; description: string }[]
  stepsTitle: string
  steps: { title: string; description: string }[]
  priceTitle: string
  priceBody: ReactNode
  stackTitle?: string
  stackBody?: ReactNode
  faqTitle: string
  faqs: FaqItem[]
  relatedTitle: string
  related: LandingLink[]
  closingTitle: string
  closingBody: string
  closingHref: string
  closingLabel: string
}

const badgeStyle = {
  position: 'relative' as const,
  '--border-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0))',
  '--border-radius-before': '9999px',
}

const secondaryButtonStyle = {
  boxShadow: '0 18px 35px rgba(31, 41, 55, 0.15), 0 0 0 1px rgba(209, 213, 219, 0.3)',
  position: 'relative' as const,
  '--border-gradient':
    'linear-gradient(180deg, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.2), rgba(255, 255, 255, 0.8))',
  '--border-radius-before': '9999px',
}

export function ServiceLanding({
  icon: Icon,
  badge,
  h1,
  h1Accent,
  intro,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  proof,
  answerTitle,
  answer,
  familiarTitle,
  poorFitTitle,
  fitIntro,
  pains,
  poorFit,
  outcomesTitle,
  outcomes,
  stepsTitle,
  steps,
  priceTitle,
  priceBody,
  stackTitle,
  stackBody,
  faqTitle,
  faqs,
  relatedTitle,
  related,
  closingTitle,
  closingBody,
  closingHref,
  closingLabel,
}: ServiceLandingProps) {
  return (
    <>
      <section className="text-center pt-8 pb-16">
        <div
          className="inline-flex bg-white/60 rounded-full mb-8 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2"
          style={badgeStyle}
        >
          <Icon className="w-4 h-4 text-orange-500" />
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">{badge}</span>
        </div>

        <h1 className="leading-[0.95] lg:text-[4rem] text-4xl font-medium text-zinc-900 tracking-tighter mb-6">
          {h1}
          <span className="block gradient-text font-light">{h1Accent}</span>
        </h1>

        <p className="text-base md:text-lg text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          {intro}
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <Link
            href={primaryHref}
            className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
          >
            <span className="text-sm font-medium tracking-tight">{primaryLabel}</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          {secondaryHref && secondaryLabel ? (
            <Link
              href={secondaryHref}
              className="btn-secondary hover:bg-zinc-50 transition-all flex text-sm font-medium rounded-full py-3 px-6 gap-2 items-center"
              style={secondaryButtonStyle}
            >
              <span className="text-sm font-medium text-black/60 tracking-tight">{secondaryLabel}</span>
              <ArrowRight className="w-4 h-4 text-zinc-500" />
            </Link>
          ) : null}
        </div>

        <p className="text-xs md:text-sm text-zinc-500 font-medium max-w-3xl mx-auto leading-relaxed">{proof}</p>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">{answerTitle}</h2>
        <div className="text-zinc-600 leading-relaxed space-y-4">{answer}</div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">{outcomesTitle}</h2>
          <p className="text-sm text-zinc-500 max-w-xl mx-auto">{fitIntro}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-zinc-900 mb-4">{familiarTitle}</h3>
            <ul className="space-y-3">
              {pains.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-zinc-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-zinc-900 mb-4">{poorFitTitle}</h3>
            <ul className="space-y-3">
              {poorFit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-zinc-700">
                  <XCircle className="w-5 h-5 text-zinc-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {outcomes.map((item) => (
            <div key={item.title} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm">
              <h3 className="font-semibold text-zinc-900 mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">{stepsTitle}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {steps.map((step, index) => (
            <div key={step.title} className="bg-zinc-50 rounded-2xl p-5 text-center">
              <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-500 font-bold text-lg flex items-center justify-center mx-auto mb-3">
                {index + 1}
              </div>
              <h3 className="font-semibold text-zinc-900 mb-1">{step.title}</h3>
              <p className="text-sm text-zinc-500">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16 max-w-3xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-3 text-zinc-400">
            <Wrench className="w-5 h-5" />
            <h2 className="text-xl font-semibold text-zinc-900">{priceTitle}</h2>
          </div>
          <div className="text-sm text-zinc-600 leading-relaxed space-y-3">{priceBody}</div>
        </div>
      </section>

      {stackTitle && stackBody ? (
        <section className="mb-16 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">{stackTitle}</h2>
          <div className="text-zinc-600 leading-relaxed space-y-4">{stackBody}</div>
        </section>
      ) : null}

      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-6">{faqTitle}</h2>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm open:shadow-md"
            >
              <summary className="cursor-pointer list-none font-semibold text-zinc-900 flex items-center justify-between gap-4">
                {faq.question}
                <span className="text-orange-500 transition-transform group-open:rotate-45 text-xl leading-none">+</span>
              </summary>
              <p className="mt-3 text-sm text-zinc-600 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-8 text-center">
          {relatedTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {related.map((item) => (
            <Link key={item.href} href={item.href} className="group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-0.5 h-full">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-zinc-900 mb-1 group-hover:text-orange-500 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">{item.description}</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="overflow-hidden min-h-[360px] shadow-zinc-900/30 bg-zinc-900 rounded-[2rem] relative shadow-2xl mb-8">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="flex flex-col items-center justify-center text-center p-8 md:p-12 lg:p-16 min-h-[360px] relative">
          <h2 className="md:text-4xl leading-tight text-3xl font-normal text-white tracking-tight mb-6 max-w-2xl">
            {closingTitle}
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg font-medium">{closingBody}</p>
          <Link
            href={closingHref}
            className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <span>{closingLabel}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  )
}
