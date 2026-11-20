import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Building,
  CheckCircle2,
  Code2,
  Globe,
  Rocket,
  Search,
  XCircle,
  Zap,
} from 'lucide-react'
import { PageHero } from '@/components/page/hero'
import { Faq } from '@/components/page/faq'
import { CtaBand } from '@/components/page/cta-band'
import { buildPageGraph, buildPageMetadata, type FaqItem } from '@/lib/seo'
import { JsonLd } from '@/components/seo/json-ld'
import { contactHref } from '@/lib/contact-services'

export const revalidate = 86400 // Revalidate daily

const path = '/services/nextjs-development'
const pageTitle = 'Hire a Next.js Developer & AI Engineer'
const pageDescription =
  'Hire a Next.js developer and senior AI software engineer for EU and Indonesian teams: App Router builds, AI features, WordPress migrations, and clean SEO.'

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
    description: 'For Indonesian companies comparing agencies with a senior engineer who leads the build.',
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
    question: 'What if you get sick or too busy?',
    answer:
      'The code lives in your repository and I write handoff docs as I go, so another developer can pick it up. Trusted partners can step in on a project, and I say upfront when I am at capacity and turn down work I cannot finish.',
  },
  {
    question: 'Do you join European and Indonesian engineering teams remotely?',
    answer:
      'Yes. I am based in Sidoarjo, Indonesia (UTC+7) and join European (EU and UK) and Indonesian teams in English or Indonesian. My working hours (Monday to Saturday, 9:00 to 17:00 WIB) overlap European mornings in CET and GMT for standups and PR reviews.',
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
    areaServed: ['Europe', 'Indonesia', 'Worldwide'],
    offers: [
      { name: 'Custom Next.js development', description: 'New App Router apps and marketing sites in TypeScript.' },
      { name: 'Next.js migration', description: 'WordPress or legacy React moved to Next.js with SEO carried over.' },
      { name: 'Next.js performance and SEO', description: 'Core Web Vitals, metadata, and schema work.' },
      { name: 'Headless WordPress with Next.js', description: 'WordPress as the editor, Next.js as the front end.' },
      { name: 'Ongoing Next.js engineering', description: 'Features, refactors, and code review in an existing codebase.' },
    ],
  },
})

const linkClass =
  'text-[#3A57FC] underline decoration-[#DDE4FF] underline-offset-4 hover:text-[#FF8800] hover:decoration-[#FF8800] transition-colors font-medium'

export default function NextjsDevelopmentPage() {
  return (
    <>
      <JsonLd data={structuredData} />

      <nav className="mb-8" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-[0.08em] text-[#525660]">
          <li>
            <Link href="/services" className="hover:text-[#3A57FC] transition-colors">
              Services
            </Link>
          </li>
          <li className="text-[#CBD5E1]">/</li>
          <li className="text-[#0B0C0E] font-semibold">Next.js Development</li>
        </ol>
      </nav>

      <PageHero
        eyebrow={{ icon: <Code2 className="w-3.5 h-3.5" />, label: 'Next.js developer, remote, taking projects' }}
        title="Hire a Next.js developer"
        accent="for your next build"
        actions={
          <>
            <Link
              href={contactHref('nextjs')}
              className="btn-primary rounded-md py-3.5 px-6 text-sm font-bold inline-flex items-center gap-2.5 group"
            >
              <span>Send me your project</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              href="/blog/hire-a-next-js-developer-what-good-looks-like-in-2026"
              className="btn-secondary rounded-md py-3.5 px-6 text-sm font-semibold inline-flex items-center gap-2 group"
            >
              <span>What a good hire looks like</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </>
        }
      >
        <p className="mb-4">
          For European (EU and UK) and Indonesian product teams that need a Next.js App Router app,
          AI feature integration, or WordPress migration shipped cleanly. I&apos;m Aris Setiawan, a senior
          AI software engineer with 13+ years shipping production web apps.
        </p>
        <p className="font-mono text-xs text-white/80 tracking-wide">
          13+ years · Senior AI software engineer · First Cursor Ambassador in Indonesia · UTC+7 with European morning overlap
        </p>
      </PageHero>

      <section className="mb-16 max-w-3xl mx-auto">
        <span className="section-index block mb-2">Direct engineering</span>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-4">
          What happens when you hire a Next.js developer like me
        </h2>
        <p className="text-[#374151] leading-relaxed">
          You work with the engineer who leads the build, from scope to launch. I direct the App
          Router code, TypeScript, and APIs, with AI agents and trusted partners helping, deploy on
          Vercel, and carry your SEO over if you&apos;re migrating. You get a written scope before the build starts and a codebase another developer
          can pick up later. Price is scoped per project once I know what you need.
        </p>
      </section>

      <div className="w-full h-px bg-[#E5E7EB] mb-16" />

      <section className="mb-16" aria-labelledby="fit-title">
        <div className="text-center mb-10">
          <span className="section-index block mb-2">Qualification</span>
          <h2 id="fit-title" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            Why teams look for a <span className="gradient-text">Next.js developer for hire</span>
          </h2>
          <p className="text-sm md:text-base text-[#4B5563] max-w-xl mx-auto">
            If one of these sounds like your week, we should talk. If the right column fits better, I&apos;ll
            say so.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-[#DDE4FF] bg-[#F3F5FF]/70 p-6 md:p-7">
            <h3 className="font-display font-bold text-[#0B0C0E] mb-4">Sounds familiar</h3>
            <ul className="space-y-3">
              {pains.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#1F2937]">
                  <CheckCircle2 className="w-5 h-5 text-[#3A57FC] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] p-6 md:p-7">
            <h3 className="font-display font-bold text-[#0B0C0E] mb-4">Probably a poor fit</h3>
            <ul className="space-y-3">
              {poorFit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#374151]">
                  <XCircle className="w-5 h-5 text-[#64748B] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-[#E5E7EB] mb-16" />

      <section className="mb-16" aria-labelledby="outcomes-title">
        <div className="text-center mb-10">
          <span className="section-index block mb-2">What you get</span>
          <h2 id="outcomes-title" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            Custom Next.js development, <span className="gradient-text">measured by what ships</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#3A57FC] hover:shadow-[0_20px_50px_-24px_rgba(58,87,252,0.22)] transition-all p-6 md:p-7 group"
            >
              <div className="p-3 bg-[#EEF2FF] text-[#3A57FC] rounded-xl w-fit mb-4 group-hover:bg-[#3A57FC] group-hover:text-white transition-colors">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-[#0B0C0E] mb-2">{item.title}</h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-[#E5E7EB] mb-16" />

      <section className="mb-16" aria-labelledby="process-title">
        <div className="text-center mb-10">
          <span className="section-index block mb-2">Workflow</span>
          <h2 id="process-title" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            How a project <span className="gradient-text">runs</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] hover:bg-white hover:border-[#3A57FC] hover:shadow-[0_20px_50px_-24px_rgba(58,87,252,0.22)] transition-all p-6"
            >
              <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#0B0C0E] text-[#FFB866] font-mono text-xs font-bold mb-4">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="font-display font-bold text-[#0B0C0E] mb-1.5">{step.title}</h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16" aria-labelledby="engagement-title">
        <div className="text-center mb-10">
          <span className="section-index block mb-2">Ways to work</span>
          <h2 id="engagement-title" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            Pick the shape that <span className="gradient-text">fits the work</span>
          </h2>
          <p className="text-sm md:text-base text-[#4B5563] max-w-xl mx-auto">
            Not sure which one? Read{' '}
            <Link href="/blog/cost-to-hire-nextjs-developer" className={linkClass}>
              what it costs to hire a Next.js developer
            </Link>{' '}
            first.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {engagementOptions.map((option) => (
            <div
              key={option.title}
              className="rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#3A57FC] hover:shadow-[0_20px_50px_-24px_rgba(58,87,252,0.22)] transition-all p-6 md:p-7"
            >
              <h3 className="font-display font-bold text-[#0B0C0E] mb-2">{option.title}</h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">{option.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl bg-[#0B0C0E] text-white border border-white/10 p-6 md:p-8 shadow-[0_24px_60px_-24px_rgba(11,12,14,0.45)]">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#93A8FF] text-center mb-5">
            Stack I use most
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {stackItems.map((tech) => (
              <div
                key={tech}
                className="p-3 rounded-xl border border-white/10 bg-white/[0.04] hover:border-[#FFB866]/60 hover:text-[#FFB866] text-center font-mono text-xs font-medium text-white/90 transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-[#E5E7EB] mb-16" />

      <Faq id="nextjs-faq" title="Before you hire a Next.js developer" faqs={faqs} />

      <section className="mb-16" aria-labelledby="related-services">
        <div className="text-center mb-10">
          <span className="section-index block mb-2">Specialized tracks</span>
          <h2 id="related-services" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight">
            Related Next.js <span className="gradient-text">services</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {relatedServices.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="block rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#3A57FC] hover:shadow-[0_20px_50px_-24px_rgba(58,87,252,0.22)] transition-all p-6 md:p-7 group h-full"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#EEF2FF] text-[#3A57FC] rounded-xl group-hover:bg-[#3A57FC] group-hover:text-white transition-colors shrink-0">
                  <service.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-bold text-[#0B0C0E] mb-1 group-hover:text-[#3A57FC] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#4B5563] leading-relaxed">{service.description}</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#64748B] group-hover:text-[#3A57FC] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand
        title="Tell me what you need built"
        body="Send the goal, the current site or repo, and any deadline. I'll reply with questions or a rough scope. If Next.js is the wrong tool for the job, I'll tell you."
        primary={{ href: contactHref('nextjs'), label: 'Send me your project' }}
        secondary={{ href: '/services/nextjs-development/nextjs-indonesia', label: 'Baca dalam Bahasa Indonesia' }}
      />

      <p className="text-center text-sm text-[#4B5563] mb-16 max-w-xl mx-auto">
        Already have a React app that is slow or hard to change? See{' '}
        <Link href="/services/react-app-improvement" className={linkClass}>
          React app improvement
        </Link>
        .
      </p>
    </>
  )
}
