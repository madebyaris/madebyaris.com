import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Braces,
  CheckCircle2,
  FileCode2,
  Globe,
  Map as MapIcon,
  Search,
  Zap,
} from 'lucide-react'
import { PageHero } from '@/components/page/hero'
import { Faq } from '@/components/page/faq'
import { CtaBand } from '@/components/page/cta-band'
import { buildPageGraph, buildPageMetadata, type FaqItem } from '@/lib/seo'
import { JsonLd } from '@/components/seo/json-ld'
import { contactHref } from '@/lib/contact-services'

export const revalidate = 86400 // Revalidate daily

const path = '/services/nextjs-development/nextjs-seo'
const pageTitle = 'Next.js SEO services for App Router sites'
const pageDescription =
  'Next.js SEO services: technical audits, App Router metadata, schema markup, sitemaps, and Core Web Vitals. Send your URL and see what holds it back.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path,
  keywords: [
    'Next.js SEO services',
    'technical SEO for Next.js',
    'Next.js App Router SEO',
    'schema markup',
    'Next.js SEO audit',
    'Next.js metadata',
  ],
})

const problems = [
  'Content loads only in the browser, so crawlers get a thin HTML shell',
  'Every page shares one title, description, or canonical',
  'Rankings dropped after a migration because old URLs now return 404',
  'No structured data, so no rich results in search',
  'A slow LCP from a heavy hero image or too much client JavaScript',
]

const outcomes = [
  {
    title: 'An audit you can act on',
    description: 'Issues ranked by impact on traffic, each tied to the file or route that causes it.',
    icon: Search,
  },
  {
    title: 'Correct metadata on every route',
    description: 'Titles, descriptions, canonicals, and Open Graph from the App Router Metadata API, so each page shows up with its own snippet.',
    icon: FileCode2,
  },
  {
    title: 'Schema markup Google can read',
    description: 'JSON-LD for your organization, services, articles, breadcrumbs, and FAQs, matched to what is visible on the page.',
    icon: Braces,
  },
  {
    title: 'New pages found quickly',
    description: 'Sitemap, robots, and IndexNow set up so search engines hear about new and updated URLs.',
    icon: MapIcon,
  },
  {
    title: 'Faster pages',
    description: 'Work on LCP, CLS, and INP so Core Web Vitals stop dragging your rankings and conversions.',
    icon: Zap,
  },
  {
    title: 'A migration that keeps its rankings',
    description: 'Every old URL mapped to a redirect before launch, then checked in Search Console after.',
    icon: Globe,
  },
]

const proof = [
  'One JSON-LD graph per page, with Service, breadcrumb, and FAQ nodes',
  'Blog titles and descriptions read from Rank Math in WordPress',
  'Sitemap and llms.txt refresh when a post is published',
  'IndexNow ping sent on every publish',
]

const processSteps = [
  { step: 1, title: 'Crawl', desc: 'I check what Google receives: rendered HTML, metadata, schema, and status codes.' },
  { step: 2, title: 'Prioritize', desc: 'You get the list ranked by impact, with what I would fix first.' },
  { step: 3, title: 'Fix', desc: 'Changes land as reviewable PRs in your Next.js repo.' },
  { step: 4, title: 'Verify', desc: 'Rich results tests and Search Console confirm the fixes were picked up.' },
]

const faqs: FaqItem[] = [
  {
    question: 'How much do Next.js SEO services cost?',
    answer:
      'Price is scoped per project. An audit of one site is smaller work than an audit plus fixes across a large App Router codebase. Send the URL and I will quote after I have looked at it.',
  },
  {
    question: 'Is Next.js good for SEO?',
    answer:
      'Yes, when pages render on the server or at build time. The App Router gives you server components, the Metadata API, and file-based sitemaps and robots. Problems start when content loads only in the browser or metadata stays at the defaults.',
  },
  {
    question: 'Can you add schema markup and fix App Router metadata?',
    answer:
      'Yes. I set per-route metadata with generateMetadata, add JSON-LD that matches the visible content, and check it with the Rich Results Test. This site uses the same setup.',
  },
  {
    question: 'Will a migration to Next.js hurt my rankings?',
    answer:
      'It should not if every old URL is kept or redirected before launch. I map redirects, carry over titles and descriptions, rebuild the sitemap, and watch Search Console for 404s after the switch.',
  },
  {
    question: 'Do you write content or build links?',
    answer:
      'No. I handle technical SEO for Next.js: rendering, metadata, schema, sitemaps, redirects, and speed. I work alongside your writer or SEO agency and explain each fix so they can build on it.',
  },
]

const structuredData = buildPageGraph({
  path,
  name: pageTitle,
  description: pageDescription,
  breadcrumbs: [
    { name: 'Services', path: '/services' },
    { name: 'Next.js Development', path: '/services/nextjs-development' },
    { name: 'Next.js SEO', path },
  ],
  service: {
    name: 'Next.js SEO services',
    description: pageDescription,
    serviceType: 'Technical SEO',
    areaServed: ['Europe', 'Indonesia', 'Worldwide'],
    offers: [
      { name: 'Technical SEO audit for Next.js' },
      { name: 'App Router metadata setup' },
      { name: 'Schema markup (JSON-LD)' },
      { name: 'Sitemap, robots, and IndexNow' },
      { name: 'Core Web Vitals work' },
      { name: 'SEO-safe migration to Next.js' },
    ],
  },
})

const linkClass =
  'text-[#3A57FC] underline decoration-[#DDE4FF] underline-offset-4 hover:text-[#FF8800] hover:decoration-[#FF8800] transition-colors font-medium'
const darkLinkClass =
  'text-[#93A8FF] underline decoration-[#93A8FF]/40 underline-offset-4 hover:text-[#FFB866] hover:decoration-[#FFB866] transition-colors font-medium'

export default function NextjsSeoPage() {
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
          <li>
            <Link href="/services/nextjs-development" className="hover:text-[#3A57FC] transition-colors">
              Next.js Development
            </Link>
          </li>
          <li className="text-[#CBD5E1]">/</li>
          <li className="text-[#0B0C0E] font-semibold">Next.js SEO</li>
        </ol>
      </nav>

      <PageHero
        eyebrow={{ icon: <Search className="w-3.5 h-3.5" />, label: 'Technical SEO for Next.js' }}
        title="Next.js SEO services"
        accent="for App Router sites"
        actions={
          <>
            <Link
              href={contactHref('seo')}
              className="btn-primary rounded-md py-3.5 px-6 text-sm font-bold inline-flex items-center gap-2.5 group"
            >
              <span>Get a Next.js SEO check</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              href="/blog/seo-metadata-in-nextjs-app-router"
              className="btn-secondary rounded-md py-3.5 px-6 text-sm font-semibold inline-flex items-center gap-2 group"
            >
              <span>Read the App Router metadata guide</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </>
        }
      >
        <p className="mb-4">
          For European and Indonesian teams whose Next.js site looks sharp for users yet misses
          Google and AI search rankings. I fix rendering, App Router metadata, JSON-LD schema,
          llms.txt, and Core Web Vitals directly in your repository.
        </p>
        <p className="font-mono text-xs text-white/80 tracking-wide">
          This site is the proof: its metadata, schema, sitemap, and llms.txt come from the same
          Next.js setup I build for clients.
        </p>
      </PageHero>

      <section className="mb-16 max-w-3xl mx-auto">
        <span className="section-index block mb-2">Overview</span>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-4">
          What Next.js SEO services cover
        </h2>
        <p className="text-[#374151] leading-relaxed">
          Next.js SEO services fix the technical side of ranking for sites built on Next.js. I check
          what Google actually receives: rendered HTML, titles, canonicals, status codes, and
          structured data. Then I fix the gaps in your App Router code, from the Metadata API and
          schema markup to sitemaps, redirects, and Core Web Vitals. For keyword research, content
          planning, or monthly SEO on any platform, see my{' '}
          <Link href="/services/seo" className={linkClass}>
            technical SEO services
          </Link>
          .
        </p>
      </section>

      <div className="w-full h-px bg-[#E5E7EB] mb-16" />

      <section className="mb-16 max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <span className="section-index block mb-2">Common blockers</span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            Technical SEO problems <span className="gradient-text">in Next.js sites</span>
          </h2>
          <p className="text-sm md:text-base text-[#4B5563]">
            If traffic is flat or falling, it is usually one of these.
          </p>
        </div>
        <div className="rounded-2xl border border-[#DDE4FF] bg-[#F3F5FF]/70 p-6 md:p-7">
          <ul className="space-y-3.5">
            {problems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-[#1F2937]">
                <CheckCircle2 className="w-5 h-5 text-[#3A57FC] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="w-full h-px bg-[#E5E7EB] mb-16" />

      <section className="mb-16" aria-labelledby="outcomes-title">
        <div className="text-center mb-10">
          <span className="section-index block mb-2">Deliverables</span>
          <h2 id="outcomes-title" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            What you <span className="gradient-text">get</span>
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

      <section className="mb-16 max-w-3xl mx-auto">
        <div className="rounded-2xl bg-[#0B0C0E] text-white border border-white/10 p-6 md:p-8 shadow-[0_24px_60px_-24px_rgba(11,12,14,0.45)]">
          <div className="flex items-center gap-2.5 mb-4">
            <Bot className="w-5 h-5 text-[#FFB866]" />
            <h2 className="font-display text-xl md:text-2xl font-bold text-white">Running on this site</h2>
          </div>
          <ul className="space-y-3 mb-5">
            {proof.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-white/85">
                <CheckCircle2 className="w-5 h-5 text-[#93A8FF] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-white/75 leading-relaxed pt-4 border-t border-white/10">
            Wondering how search and AI answers differ? Read{' '}
            <Link href="/blog/seo-for-ai-vs-geo" className={darkLinkClass}>
              SEO for AI vs GEO
            </Link>
            . Moving from WordPress? See{' '}
            <Link href="/services/wordpress/headless-development" className={darkLinkClass}>
              headless WordPress with Next.js
            </Link>
            .
          </p>
        </div>
      </section>

      <div className="w-full h-px bg-[#E5E7EB] mb-16" />

      <section className="mb-16" aria-labelledby="process-title">
        <div className="text-center mb-10">
          <span className="section-index block mb-2">Workflow</span>
          <h2 id="process-title" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            How the <span className="gradient-text">work runs</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {processSteps.map((item) => (
            <div
              key={item.step}
              className="rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] hover:bg-white hover:border-[#3A57FC] hover:shadow-[0_20px_50px_-24px_rgba(58,87,252,0.22)] transition-all p-6"
            >
              <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#0B0C0E] text-[#FFB866] font-mono text-xs font-bold mb-4">
                {String(item.step).padStart(2, '0')}
              </div>
              <h3 className="font-display font-bold text-[#0B0C0E] mb-1.5">{item.title}</h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Faq id="nextjs-seo-faq" title="Next.js SEO FAQ" faqs={faqs} />

      <CtaBand
        title="Send me the URL that should rank"
        body="I'll look at what Google receives for it and reply with the problems I see and what I would fix first. If the code is fine and the gap is content, I'll tell you."
        primary={{ href: contactHref('seo'), label: 'Get a Next.js SEO check' }}
        secondary={{ href: '/services/nextjs-development', label: 'Need a full Next.js build?' }}
      />
    </>
  )
}
