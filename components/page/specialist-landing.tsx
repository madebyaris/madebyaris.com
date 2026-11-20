import type { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Check } from 'lucide-react'
import { PageHero } from '@/components/page/hero'
import { Faq } from '@/components/page/faq'
import { CtaBand } from '@/components/page/cta-band'
import { OpenSourceProjects } from '@/components/page/open-source-projects'
import { JsonLd } from '@/components/seo/json-ld'
import { buildPageGraph, type FaqItem } from '@/lib/seo'
import { contactHref } from '@/lib/contact-services'

export interface SpecialistOffer {
  title: string
  body: string
  href?: string
  cta?: string
}

export interface SpecialistRelated {
  href: string
  label: string
}

export interface SpecialistLandingProps {
  locale?: 'en' | 'id'
  path: string
  name: string
  description: string
  serviceType: string
  breadcrumbName: string
  eyebrow: { icon: ReactNode; label: string }
  title: string
  accent: string
  intro: ReactNode
  signsTitle: string
  signs: string[]
  offersTitle: string
  offers: SpecialistOffer[]
  steps: { title: string; desc: string }[]
  proof?: { title: string; body: ReactNode }
  sourceNote?: string
  showOpenSource?: boolean
  faqs: FaqItem[]
  faqTitle: string
  openSource?: { title: string; intro: string; starsLabel: string }
  related: SpecialistRelated[]
  alternate?: { href: string; label: string; prefix: string }
  ctaTitle: string
  ctaBody: string
  ctaLabel: string
}

const labels = {
  en: {
    home: 'Services',
    howItGoes: 'How it goes',
    related: 'Related:',
    seeAll: 'See all product engineering',
    seeAllHref: '/product-engineering',
    diagnosisIndex: '01 / Diagnosis',
    scopeIndex: '02 / Scope & Deliverables',
    proofEyebrow: 'Production Proof',
    processIndex: '03 / Delivery Process',
    stepPrefix: 'STEP',
    ctaBadge: 'Direct founder inquiry · 24h reply',
  },
  id: {
    home: 'Layanan',
    howItGoes: 'Alur kerjanya',
    related: 'Layanan terkait:',
    seeAll: 'Lihat semua pengembangan produk',
    seeAllHref: '/jasa-pengembangan-produk',
    diagnosisIndex: '01 / Tanda Masalah',
    scopeIndex: '02 / Ruang Lingkup',
    proofEyebrow: 'Bukti Produksi',
    processIndex: '03 / Alur Kerja',
    stepPrefix: 'TAHAP',
    ctaBadge: 'Diskusi langsung · Balas dalam 24 jam',
  },
} as const

const linkClass =
  'font-medium text-[#3A57FC] underline decoration-[#DDE4FF] underline-offset-4 hover:text-[#FF8800] transition-colors'

export function SpecialistLanding(props: SpecialistLandingProps) {
  const locale = props.locale ?? 'en'
  const t = labels[locale]
  const structuredData = buildPageGraph({
    inLanguage: locale,
    path: props.path,
    name: props.name,
    description: props.description,
    breadcrumbs: [
      { name: t.home, path: '/services' },
      { name: props.breadcrumbName, path: props.path },
    ],
    service: {
      name: props.name,
      description: props.description,
      serviceType: props.serviceType,
      areaServed: locale === 'id' ? 'Indonesia' : 'Worldwide',
    },
  })

  const primaryHref = contactHref('engineering-specialist')

  return (
    <div lang={locale}>
      <JsonLd data={structuredData} />

      <nav className="mb-6" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 font-mono text-xs text-[#6B7280]">
          <li>
            <Link href="/services" className="hover:text-[#3A57FC] transition-colors">
              {t.home}
            </Link>
          </li>
          <li>
            <span className="px-1">/</span>
          </li>
          <li className="text-[#0B0C0E] font-medium">{props.breadcrumbName}</li>
        </ol>
      </nav>

      <PageHero
        eyebrow={props.eyebrow}
        title={props.title}
        accent={props.accent}
        actions={
          <Link
            href={primaryHref}
            className="btn-primary inline-flex items-center gap-2.5 text-sm font-bold rounded-md py-3.5 px-6 group"
          >
            <span>{props.ctaLabel}</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        }
      >
        {props.intro}
      </PageHero>

      {/* Signs / When teams call */}
      <section className="mb-16" aria-labelledby="signs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4">
            <span className="section-index block mb-2">{t.diagnosisIndex}</span>
            <h2
              id="signs"
              className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight"
            >
              {props.signsTitle}
            </h2>
          </div>
          <div className="lg:col-span-8 rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] p-6 md:p-8">
            <ul className="space-y-3.5">
              {props.signs.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm sm:text-base text-[#1F2937] leading-relaxed"
                >
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#EEF2FF] text-[#3A57FC]">
                    <Check strokeWidth={2.5} className="w-3.5 h-3.5" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Deliverables Grid */}
      <section className="mb-16" aria-labelledby="what-i-do">
        <div className="mb-10 max-w-2xl">
          <span className="section-index block mb-2">{t.scopeIndex}</span>
          <h2
            id="what-i-do"
            className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B0C0E] tracking-tight"
          >
            {props.offersTitle}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {props.offers.map((item, idx) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#3A57FC] hover:shadow-[0_20px_50px_-24px_rgba(58,87,252,0.25)] transition-all p-6 md:p-7 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-bold text-[#3A57FC] bg-[#EEF2FF] border border-[#DDE4FF] rounded-md px-2 py-0.5 inline-block mb-3">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-lg sm:text-xl font-bold text-[#0B0C0E] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">{item.body}</p>
              </div>
              {item.href && item.cta && (
                <Link
                  href={item.href}
                  className="mt-5 pt-4 border-t border-[#E5E7EB] inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-[#3A57FC] hover:text-[#FF8800] transition-colors"
                >
                  {item.cta}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </div>
          ))}
        </div>
        {props.sourceNote && (
          <p className="font-mono text-xs text-[#6B7280] mt-4">{props.sourceNote}</p>
        )}
      </section>

      {props.proof && (
        <section
          className="mb-16 rounded-2xl border border-[#E5E7EB] bg-[#0B0C0E] text-white p-6 sm:p-8 md:p-10"
          aria-labelledby="proof"
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#FFB866] block mb-2">
            {t.proofEyebrow}
          </span>
          <h2
            id="proof"
            className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight mb-4"
          >
            {props.proof.title}
          </h2>
          <div className="text-zinc-300 leading-relaxed max-w-3xl [&_a]:text-[#93A8FF] [&_a]:underline [&_strong]:text-white">
            {props.proof.body}
          </div>
        </section>
      )}

      {/* Process */}
      <section className="mb-16" aria-labelledby="how-it-goes">
        <div className="mb-10 max-w-2xl">
          <span className="section-index block mb-2">{t.processIndex}</span>
          <h2
            id="how-it-goes"
            className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B0C0E] tracking-tight"
          >
            {t.howItGoes}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#E5E7EB] rounded-2xl bg-white divide-y lg:divide-y-0 lg:divide-x divide-[#E5E7EB] overflow-hidden">
          {props.steps.map((item, index) => (
            <div key={item.title} className="p-6 hover:bg-[#F8FAFC] transition-colors">
              <span className="font-mono text-xs font-bold text-[#3A57FC] block mb-3">
                {t.stepPrefix} {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display text-base font-bold text-[#0B0C0E] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {props.showOpenSource && (
        <OpenSourceProjects
          title={props.openSource?.title}
          intro={props.openSource?.intro}
          starsLabel={props.openSource?.starsLabel}
        />
      )}

      <Faq id={`${props.path.split('/').pop()}-faq`} title={props.faqTitle} faqs={props.faqs} />

      <CtaBand
        title={props.ctaTitle}
        body={props.ctaBody}
        badge={t.ctaBadge}
        primary={{ href: primaryHref, label: props.ctaLabel }}
        secondary={{ href: t.seeAllHref, label: t.seeAll }}
      />

      <p className="text-center text-sm text-[#4B5563] mb-6 max-w-xl mx-auto">
        {t.related}{' '}
        {props.related.map((item, index) => (
          <span key={item.href}>
            {index > 0 && ', '}
            <Link href={item.href} className={linkClass}>
              {item.label}
            </Link>
          </span>
        ))}
        .
      </p>

      {props.alternate && (
        <p className="text-center text-sm text-[#4B5563] max-w-xl mx-auto">
          {props.alternate.prefix}{' '}
          <Link href={props.alternate.href} className={linkClass}>
            {props.alternate.label}
          </Link>
          .
        </p>
      )}
    </div>
  )
}
