import type { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
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
  },
  id: {
    home: 'Layanan',
    howItGoes: 'Alur kerjanya',
    related: 'Terkait:',
    seeAll: 'Lihat semua pengembangan produk',
    seeAllHref: '/jasa-pengembangan-produk',
  },
} as const

const linkClass = 'underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors'

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

      <nav className="mb-8" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-zinc-500">
          <li><Link href="/services" className="hover:text-orange-500 transition-colors">{t.home}</Link></li>
          <li><span className="px-2">/</span></li>
          <li className="text-zinc-900">{props.breadcrumbName}</li>
        </ol>
      </nav>

      <PageHero
        eyebrow={props.eyebrow}
        title={props.title}
        accent={props.accent}
        actions={
          <Link
            href={primaryHref}
            className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
          >
            <span className="text-sm font-medium tracking-tight">{props.ctaLabel}</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        }
      >
        {props.intro}
      </PageHero>

      <section className="mb-16 max-w-3xl mx-auto" aria-labelledby="signs">
        <h2 id="signs" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-6">
          {props.signsTitle}
        </h2>
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
          <ul className="space-y-3">
            {props.signs.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-zinc-700">
                <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-16" aria-labelledby="what-i-do">
        <div className="text-center mb-10">
          <h2 id="what-i-do" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            {props.offersTitle}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {props.offers.map((item) => (
            <div key={item.title} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-zinc-900 mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{item.body}</p>
              {item.href && item.cta && (
                <Link href={item.href} className={`${linkClass} text-sm inline-block mt-3`}>
                  {item.cta}
                </Link>
              )}
            </div>
          ))}
        </div>
        {props.sourceNote && (
          <p className="text-xs text-zinc-400 max-w-4xl mx-auto mt-4">{props.sourceNote}</p>
        )}
      </section>

      {props.proof && (
        <section className="mb-16 max-w-3xl mx-auto" aria-labelledby="proof">
          <h2 id="proof" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
            {props.proof.title}
          </h2>
          <div className="text-zinc-600 leading-relaxed">{props.proof.body}</div>
        </section>
      )}

      <section className="mb-16" aria-labelledby="how-it-goes">
        <div className="text-center mb-10">
          <h2 id="how-it-goes" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            {t.howItGoes}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {props.steps.map((item, index) => (
            <div key={item.title} className="bg-zinc-50 rounded-2xl p-5 text-center">
              <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-500 font-bold text-lg flex items-center justify-center mx-auto mb-3">
                {index + 1}
              </div>
              <h3 className="font-semibold text-zinc-900 mb-1">{item.title}</h3>
              <p className="text-sm text-zinc-500">{item.desc}</p>
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
        primary={{ href: primaryHref, label: props.ctaLabel }}
        secondary={{ href: t.seeAllHref, label: t.seeAll }}
      />

      <p className="text-center text-sm text-zinc-600 mb-16 max-w-xl mx-auto">
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
        <p className="text-center text-sm text-zinc-600 mb-16 max-w-xl mx-auto">
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
