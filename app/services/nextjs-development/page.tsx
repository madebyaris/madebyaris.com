import type { Metadata } from 'next'
import {
  Code2,
  ArrowRight,
  ArrowUpRight,
  Rocket,
  Globe,
  Zap,
  Search,
  Building,
  Users,
  Briefcase,
  Calendar,
  CheckCircle2,
  XCircle,
} from 'lucide-react'
import Link from 'next/link'
import { buildPageGraph, buildPageMetadata, type FaqItem } from '@/lib/seo'
import { JsonLd } from '@/components/seo/json-ld'
import { contactHref } from '@/lib/contact-services'

export const revalidate = 86400 // Revalidate daily

const path = '/services/nextjs-development'
const pageTitle = 'Hire a Next.js developer (13+ years)'
const pageDescription =
  'Hire a Next.js developer with 13+ years of shipping: new builds, WordPress migrations, and App Router work. Send your project and get a written scope.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path,
  keywords: [
    'hire a Next.js developer',
    'Next.js development services',
    'custom Next.js development',
    'Next.js developer for hire',
    'remote Next.js developer',
    'Next.js migration',
  ],
})

const outcomes = [
  {
    title: 'A new product in front of users',
    description: 'An App Router app in TypeScript, from the first slice to production, with APIs and code you own.',
    icon: Rocket,
  },
  {
    title: 'A migration that keeps your rankings',
    description: 'WordPress or older React moved to Next.js, with every URL kept or redirected so search traffic carries over.',
    icon: Globe,
  },
  {
    title: 'Pages that load fast on phones',
    description: 'Server rendering, caching, and image settings tuned so Core Web Vitals stop costing you visitors.',
    icon: Zap,
  },
  {
    title: 'Editors who keep their tools',
    description: 'Headless WordPress with a Next.js front end. Your team keeps wp-admin. This site runs that setup.',
    icon: Code2,
  },
  {
    title: 'A codebase your team can change',
    description: 'Features, refactors, and code review inside your existing repo, with notes the next developer can follow.',
    icon: Briefcase,
  },
]

const pains = [
  'Your last developer went quiet halfway through the build',
  'You moved to a new stack and organic traffic dropped',
  'Pages feel slow on phones and the Core Web Vitals report is red',
  'The codebase grew fast and nobody can explain how it fits together',
]

const poorFit = [
  'You need five developers working in parallel from day one',
  'A ready-made template already does what you need',
  'Nobody on your side can answer product questions during the build',
]

const engagementOptions = [
  {
    title: 'Fixed-scope build',
    description: 'A landing page, marketing site, or MVP slice with a clear deliverable and a price for that scope.',
  },
  {
    title: 'Product sprint',
    description: 'Two to four weeks of focused work on a defined set of features or fixes.',
  },
  {
    title: 'Retainer',
    description: 'Ongoing Next.js work after launch or between releases, for teams that ship every month.',
  },
]

const processSteps = [
  { title: 'Scope', description: 'You send the goal. I reply with questions, a written scope, and what I would leave out.' },
  { title: 'Build', description: 'Weekly demos on a preview URL you can click through and comment on.' },
  { title: 'Harden', description: 'Speed, SEO checks, redirects, and handoff docs before launch.' },
  { title: 'Support', description: 'An optional retainer after launch for new features and fixes.' },
]

const stackItems = [
  'Next.js',
  'React',
  'TypeScript',
  'Tailwind',
  'Node',
  'Prisma',
  'PostgreSQL',
  'Vercel',
  'Headless WordPress',
]

const relatedServices = [
  {
    title: 'Vercel hosting and costs',
    description: 'Deploy Next.js to Vercel, or find out why the bill keeps growing.',
    icon: Rocket,
    href: '/services/nextjs-development/vercel',
  },
  {
    title: 'Next.js SEO services',
    description: 'Metadata, schema markup, sitemaps, and Core Web Vitals for App Router sites.',
    icon: Search,
    href: '/services/nextjs-development/nextjs-seo',
  },
  {
    title: 'Jasa pembuatan website Next.js',
    description: 'The same service explained in Bahasa Indonesia for local businesses.',
    icon: Globe,
    href: '/services/nextjs-development/nextjs-indonesia',
  },
  {
    title: 'Next.js agency Indonesia',
    description: 'For Indonesian companies comparing agencies with a solo specialist.',
    icon: Building,
    href: '/services/nextjs-development/agency-indonesia',
  },
]

const faqs: FaqItem[] = [
  {
    question: 'How much does it cost to hire a Next.js developer?',
    answer:
      'I scope and price each project after I see what you need. Send the goal, the current site if there is one, and any deadline. You get a written scope and a price for that scope before any work starts.',
  },
  {
    question: 'How long does a Next.js build take?',
    answer:
      'It depends on the scope, so the timeline goes into the written scope before you commit. A marketing site moves faster than a product with accounts and payments. Weekly demos show you where things stand the whole way.',
  },
  {
    question: 'Will moving to Next.js hurt my SEO?',
    answer:
      'It should not if the migration is planned. I keep every URL or redirect it, carry over titles, descriptions, and schema, rebuild the sitemap, and watch Search Console after launch.',
  },
  {
    question: 'You work solo. What if you get sick or too busy?',
    answer:
      'The code lives in your repository and I write handoff docs as I go, so another developer can pick it up. I also say upfront when I am at capacity and turn down work I cannot finish.',
  },
  {
    question: 'Do you work with teams outside Indonesia?',
    answer:
      'Yes. I am based in Sidoarjo, Indonesia, and work remotely with clients worldwide in English or Indonesian. Communication is async-first in writing, with call overlap hours agreed at the start.',
  },
]

const structuredData = buildPageGraph({
  path,
  name: pageTitle,
  description: pageDescription,
  breadcrumbs: [
    { name: 'Services', path: '/services' },
    { name: 'Next.js Development', path },
  ],
  service: {
    name: 'Next.js development',
    description: pageDescription,
    serviceType: 'Next.js Development',
    offers: [
      { name: 'Custom Next.js development', description: 'New App Router apps and marketing sites in TypeScript.' },
      { name: 'Next.js migration', description: 'WordPress or legacy React moved to Next.js with SEO carried over.' },
      { name: 'Next.js performance and SEO', description: 'Core Web Vitals, metadata, and schema work.' },
      { name: 'Headless WordPress with Next.js', description: 'WordPress as the editor, Next.js as the front end.' },
      { name: 'Ongoing Next.js engineering', description: 'Features, refactors, and code review in an existing codebase.' },
    ],
  },
  faqs,
})

const badgeStyle = {
  position: 'relative',
  '--border-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0))',
  '--border-radius-before': '9999px',
} as React.CSSProperties

const linkClass = 'underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors'

export default function NextjsDevelopmentPage() {
  return (
    <>
      <JsonLd data={structuredData} />

      {/* Hero Section */}
      <section className="text-center pt-8 pb-16">
        <div
          className="inline-flex bg-white/60 rounded-full mb-8 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2"
          style={badgeStyle}
        >
          <Code2 className="w-4 h-4 text-orange-500" />
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">
            Next.js developer, remote, taking projects
          </span>
        </div>

        <h1 className="leading-[0.95] lg:text-[4rem] text-4xl font-medium text-zinc-900 tracking-tighter mb-6">
          Hire a Next.js developer
          <span className="block gradient-text font-light">for your next build</span>
        </h1>

        <p className="text-base md:text-lg text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          For founders, agencies, and marketing teams that need a Next.js site or app built, migrated,
          or fixed. I&apos;m Aris Setiawan. I&apos;ve shipped web products for 13+ years and worked
          independently since 2015.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <Link
            href={contactHref('nextjs')}
            className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
          >
            <span className="text-sm font-medium tracking-tight">Send me your project</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <Link
            href="/blog/hire-a-next-js-developer-what-good-looks-like-in-2026"
            className="btn-secondary hover:bg-zinc-50 transition-all flex text-sm font-medium rounded-full py-3 px-6 gap-2 items-center"
            style={{
              boxShadow:
                '0 18px 35px rgba(31, 41, 55, 0.15), 0 0 0 1px rgba(209, 213, 219, 0.3)',
              position: 'relative',
              // @ts-expect-error CSS custom properties
              '--border-gradient':
                'linear-gradient(180deg, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.2), rgba(255, 255, 255, 0.8))',
              '--border-radius-before': '9999px',
            }}
          >
            <span className="text-sm font-medium text-black/60 tracking-tight">
              What a good hire looks like
            </span>
            <ArrowRight className="w-4 h-4 text-zinc-500" />
          </Link>
        </div>

        <p className="text-xs md:text-sm text-zinc-500 font-medium max-w-3xl mx-auto leading-relaxed">
          13+ years · First Cursor Ambassador in Indonesia · MiniMax Dev Community Expert · English
          and Indonesian
        </p>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Answer first */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
          What happens when you hire a Next.js developer like me
        </h2>
        <p className="text-zinc-600 leading-relaxed">
          You work with one senior engineer from scope to launch. I write the App Router code,
          TypeScript, and APIs myself, deploy on Vercel, and carry your SEO over if you&apos;re
          migrating. You get a written scope before the build starts and a codebase another developer
          can pick up later. Price is scoped per project once I know what you need.
        </p>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Pain and fit */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Why teams look for a <span className="gradient-text">Next.js developer for hire</span>
          </h2>
          <p className="text-sm text-zinc-500 max-w-xl mx-auto">
            If one of these sounds like your week, we should talk. If the right column fits better, I&apos;ll
            say so.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-zinc-900 mb-4">Sounds familiar</h3>
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
            <h3 className="font-semibold text-zinc-900 mb-4">Probably a poor fit</h3>
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
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Outcomes */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <div
            className="inline-flex bg-white/60 rounded-full mb-4 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2"
            style={badgeStyle}
          >
            <Briefcase className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">
              What you get
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Custom Next.js development, <span className="gradient-text">measured by what ships</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {outcomes.map((item) => (
            <div
              key={item.title}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all group"
            >
              <div className="p-3 bg-zinc-100 rounded-xl w-fit mb-4 group-hover:bg-orange-100 transition-colors">
                <item.icon className="w-5 h-5 text-zinc-600 group-hover:text-orange-500 transition-colors" />
              </div>
              <h3 className="font-semibold text-zinc-900 mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Process */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            How a project <span className="gradient-text">runs</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {processSteps.map((step, index) => (
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

      {/* Engagement options */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <div
            className="inline-flex bg-white/60 rounded-full mb-4 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2"
            style={badgeStyle}
          >
            <Calendar className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">
              Ways to work
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Pick the shape that <span className="gradient-text">fits the work</span>
          </h2>
          <p className="text-sm text-zinc-500 max-w-xl mx-auto">
            Not sure which one? Read{' '}
            <Link href="/blog/cost-to-hire-nextjs-developer" className={linkClass}>
              what it costs to hire a Next.js developer
            </Link>{' '}
            first.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {engagementOptions.map((option) => (
            <div key={option.title} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm">
              <h3 className="font-semibold text-zinc-900 mb-1">{option.title}</h3>
              <p className="text-sm text-zinc-500">{option.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-white/80 backdrop-blur-sm rounded-2xl p-6">
          <p className="text-sm text-zinc-500 text-center mb-4 font-medium">Stack I use most</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {stackItems.map((tech) => (
              <div
                key={tech}
                className="p-3 bg-zinc-50 rounded-xl text-center text-xs font-medium text-zinc-600 hover:bg-orange-50 hover:text-orange-600 transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* FAQ */}
      <section className="mb-16 max-w-3xl mx-auto" aria-labelledby="nextjs-faq">
        <div className="text-center mb-8">
          <div
            className="inline-flex bg-white/60 rounded-full mb-4 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2"
            style={badgeStyle}
          >
            <Users className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">FAQ</span>
          </div>
          <h2 id="nextjs-faq" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter">
            Before you hire a <span className="gradient-text">Next.js developer</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="group bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm open:shadow-md">
              <summary className="cursor-pointer list-none font-semibold text-zinc-900 flex items-center justify-between gap-4">
                {faq.question}
                <span className="text-orange-500 transition-transform group-open:rotate-45 text-xl leading-none">+</span>
              </summary>
              <p className="mt-3 text-sm text-zinc-600 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Related services */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter">
            Related Next.js <span className="gradient-text">services</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {relatedServices.map((service) => (
            <Link key={service.title} href={service.href} className="group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-0.5 h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-zinc-100 rounded-xl group-hover:bg-orange-100 transition-colors">
                    <service.icon className="w-5 h-5 text-zinc-600 group-hover:text-orange-500 transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-zinc-900 mb-1 group-hover:text-orange-500 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">{service.description}</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="overflow-hidden min-h-[400px] shadow-zinc-900/30 bg-zinc-900 rounded-4xl relative shadow-2xl mb-8">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="flex flex-col items-center justify-center text-center p-8 md:p-12 lg:p-16 min-h-[400px] relative">
          <h2 className="md:text-4xl lg:text-5xl leading-tight text-3xl font-normal text-white tracking-tight mb-6 max-w-2xl">
            Tell me what you need built
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg font-medium">
            Send the goal, the current site or repo, and any deadline. I&apos;ll reply with questions or
            a rough scope. If Next.js is the wrong tool for the job, I&apos;ll tell you.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href={contactHref('nextjs')}
              className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>Send me your project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services/nextjs-development/nextjs-indonesia"
              className="group flex items-center gap-3 bg-zinc-800 hover:bg-zinc-700 transition-all text-white text-sm font-medium rounded-full px-6 py-3 border border-zinc-700 hover:-translate-y-0.5"
            >
              <span>Baca dalam Bahasa Indonesia</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
