import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Search, Zap, Globe, FileCode2, CheckCircle2, Map as MapIcon, Bot, Braces } from 'lucide-react'
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
    offers: [
      { name: 'Technical SEO audit for Next.js' },
      { name: 'App Router metadata setup' },
      { name: 'Schema markup (JSON-LD)' },
      { name: 'Sitemap, robots, and IndexNow' },
      { name: 'Core Web Vitals work' },
      { name: 'SEO-safe migration to Next.js' },
    ],
  },
  faqs,
})

const linkClass = 'underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors'

export default function NextjsSeoPage() {
  return (
    <>
      <JsonLd data={structuredData} />

      {/* Breadcrumb */}
      <nav className="mb-8" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-zinc-500">
          <li><Link href="/services" className="hover:text-orange-500 transition-colors">Services</Link></li>
          <li><span className="px-2">/</span></li>
          <li><Link href="/services/nextjs-development" className="hover:text-orange-500 transition-colors">Next.js Development</Link></li>
          <li><span className="px-2">/</span></li>
          <li className="text-zinc-900">Next.js SEO</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="text-center pt-4 pb-16">
        <div className="inline-flex bg-white/60 rounded-full mb-8 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2">
          <Search className="w-4 h-4 text-orange-500" />
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Technical SEO for Next.js</span>
        </div>

        <h1 className="leading-[0.95] lg:text-[4rem] text-4xl font-medium text-zinc-900 tracking-tighter mb-6">
          Next.js SEO services
          <span className="block gradient-text font-light">for App Router sites</span>
        </h1>

        <p className="text-base md:text-lg text-zinc-500 max-w-2xl mx-auto mb-4 leading-relaxed font-medium">
          For teams whose Next.js site looks fine but doesn&apos;t rank, or who lost traffic after a
          migration. I fix what search engines see in your code, from rendering to schema markup.
        </p>

        <p className="text-sm text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          This site is the proof: its metadata, schema, sitemap, and llms.txt come from the same
          Next.js setup I build for clients.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href={contactHref('seo')}
            className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
          >
            <span className="text-sm font-medium tracking-tight">Get a Next.js SEO check</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <Link
            href="/blog/seo-metadata-in-nextjs-app-router"
            className="btn-secondary hover:bg-zinc-50 transition-all flex text-sm font-medium rounded-full py-3 px-6 gap-2 items-center"
            style={{
              boxShadow: '0 18px 35px rgba(31, 41, 55, 0.15), 0 0 0 1px rgba(209, 213, 219, 0.3)',
            }}
          >
            <span className="text-sm font-medium text-black/60 tracking-tight">Read the App Router metadata guide</span>
            <ArrowRight className="w-4 h-4 text-zinc-500" />
          </Link>
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Answer first */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
          What Next.js SEO services cover
        </h2>
        <p className="text-zinc-600 leading-relaxed">
          Next.js SEO services fix the technical side of ranking for sites built on Next.js. I check
          what Google actually receives: rendered HTML, titles, canonicals, status codes, and
          structured data. Then I fix the gaps in your App Router code, from the Metadata API and
          schema markup to sitemaps, redirects, and Core Web Vitals. Content and link building stay
          with you or your SEO team.
        </p>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Problems */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3 text-center">
          Technical SEO problems <span className="gradient-text">in Next.js sites</span>
        </h2>
        <p className="text-sm text-zinc-500 text-center mb-8">
          If traffic is flat or falling, it is usually one of these.
        </p>
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
          <ul className="space-y-3">
            {problems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-zinc-700">
                <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Outcomes */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            What you <span className="gradient-text">get</span>
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

      {/* Proof */}
      <section className="mb-16 max-w-3xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Bot className="w-5 h-5 text-orange-500" />
            <h2 className="text-xl font-semibold text-zinc-900">Running on this site</h2>
          </div>
          <ul className="space-y-3 mb-4">
            {proof.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-zinc-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-zinc-500 leading-relaxed">
            Wondering how search and AI answers differ? Read{' '}
            <Link href="/blog/seo-for-ai-vs-geo" className={linkClass}>
              SEO for AI vs GEO
            </Link>
            . Moving from WordPress? See{' '}
            <Link href="/services/wordpress/headless-development" className={linkClass}>
              headless WordPress with Next.js
            </Link>
            .
          </p>
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Process */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            How the <span className="gradient-text">work runs</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {processSteps.map((item) => (
            <div key={item.step} className="bg-zinc-50 rounded-2xl p-5 text-center">
              <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-500 font-bold text-lg flex items-center justify-center mx-auto mb-3">
                {item.step}
              </div>
              <h3 className="font-semibold text-zinc-900 mb-1">{item.title}</h3>
              <p className="text-sm text-zinc-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16 max-w-3xl mx-auto" aria-labelledby="nextjs-seo-faq">
        <h2 id="nextjs-seo-faq" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-6">
          Next.js SEO FAQ
        </h2>
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

      {/* CTA Section */}
      <section className="overflow-hidden min-h-[400px] shadow-zinc-900/30 bg-zinc-900 rounded-4xl relative shadow-2xl mb-8">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />

        <div className="flex flex-col items-center justify-center text-center p-8 md:p-12 lg:p-16 min-h-[400px] relative">
          <h2 className="md:text-4xl lg:text-5xl leading-tight text-3xl font-normal text-white tracking-tight mb-6 max-w-2xl">
            Send me the URL that should rank
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg font-medium">
            I&apos;ll look at what Google receives for it and reply with the problems I see and what I
            would fix first. If the code is fine and the gap is content, I&apos;ll tell you.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href={contactHref('seo')}
              className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>Get a Next.js SEO check</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services/nextjs-development"
              className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-all text-white text-sm font-medium rounded-full px-6 py-3"
            >
              <span>Need a full Next.js build?</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
