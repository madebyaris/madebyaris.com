import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  CalendarClock,
  CheckCircle2,
  FileSearch,
  LineChart,
  Search,
  Wrench,
  XCircle,
} from 'lucide-react'
import { PageHero } from '@/components/page/hero'
import { HeroImage } from '@/components/page/hero-image'
import { Faq } from '@/components/page/faq'
import { CtaBand } from '@/components/page/cta-band'
import { buildPageGraph, buildPageMetadata, type FaqItem } from '@/lib/seo'
import { JsonLd } from '@/components/seo/json-ld'
import { contactHref } from '@/lib/contact-services'

export const revalidate = 86400 // Revalidate daily

const pagePath = '/services/seo'
const pageTitle = 'Technical SEO services: audits, research, fixes'
const pageDescription =
  'Technical SEO services from a developer: SEO audits, keyword and competitor research, fixes in your code, and monthly SEO with rank tracking in RankMySEO.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
  image: '/images/services/seo.jpg',
  keywords: [
    'technical SEO services',
    'SEO audit services',
    'technical SEO audit services',
    'technical SEO consultant',
    'freelance SEO consultant',
    'keyword research services',
    'monthly SEO services',
  ],
})

const offers = [
  {
    title: 'Technical SEO audit',
    description:
      'I crawl the site, read Search Console, and check the code. You get a fix list ranked by traffic at risk, with the file or setting behind each problem.',
    icon: FileSearch,
  },
  {
    title: 'Keyword and competitor research',
    description:
      'Which searches your buyers type, what each one is worth, and which competitor pages win them. You get one primary keyword per page and a list of pages to write.',
    icon: Search,
  },
  {
    title: 'Fixes in your code',
    description:
      'I make the changes myself: redirects, canonicals, schema, sitemaps, internal links, and Core Web Vitals. Your developers get a pull request instead of a PDF.',
    icon: Wrench,
  },
  {
    title: 'Monthly SEO',
    description:
      'Each month I fix the next items on the list, plan content, and track your keywords in RankMySEO. The report shows what changed and what I will do next.',
    icon: CalendarClock,
  },
]

const auditChecks = [
  'Crawling and indexing: robots.txt, noindex tags, and pages Google skipped',
  'Redirects and broken links, especially after a redesign or migration',
  'Canonical tags and duplicate pages competing for the same search',
  'Titles, meta descriptions, and headings on the pages that bring revenue',
  'Core Web Vitals on real phones, from Search Console field data',
  'Structured data: Organization, Service, Article, FAQ, and breadcrumbs',
  'XML sitemaps, hreflang for English and Indonesian pages, and pagination',
  'Internal links and orphan pages that no menu or post points to',
  'JavaScript rendering, so Google sees the same content your visitors see',
  'Access for AI crawlers and an llms.txt file for AI search engines',
]

const clientResults = [
  {
    title: 'High-traffic content site',
    description:
      'Google impressions grew from 700K to 1.8M per 28 days, at a 2% average click-through rate. Across all their sites, the client now gets about 20 million search impressions a month. Page load time dropped from about 4 seconds to under 1 second.',
  },
  {
    title: 'International factory equipment brand',
    description:
      'A very narrow niche, with buyers in Singapore, China, Italy, Germany, and the US. Impressions grew from 2K to 20K, and click-through rate rose from 0.1% to 1%.',
  },
  {
    title: 'Search reputation management',
    description:
      'For a private client, I worked on what people see when they search the client’s name: accurate pages the client owns, built and ranked so negative results sit lower.',
  },
]

const goodFit = [
  'Traffic dropped after a redesign, migration, or theme change',
  'Search Console shows pages crawled but not indexed and nobody knows why',
  'You publish content but rank for the wrong searches, or none',
  'You want SEO fixed in the code, by someone who can open a pull request',
]

const poorFit = [
  'You want guaranteed first place on Google by a set date',
  'You only want links bought in bulk',
  'You need someone to write dozens of posts a month at a fixed price per word',
]

const topics = [
  {
    title: 'Technical SEO audit checklist',
    description: 'The checks I run before I touch a client site, in the order I run them.',
    href: '/blog/technical-seo-audit-checklist',
  },
  {
    title: 'SEO for AI search vs GEO',
    description: 'What changes when ChatGPT and AI Overviews answer before the blue links.',
    href: '/blog/seo-for-ai-vs-geo',
  },
  {
    title: 'Next.js SEO services',
    description: 'Metadata, schema, and rendering for sites built on the Next.js App Router.',
    href: '/services/nextjs-development/nextjs-seo',
  },
  {
    title: 'SEO metadata in the Next.js App Router',
    description: 'How I set titles, canonicals, and Open Graph tags on this site.',
    href: '/blog/seo-metadata-in-nextjs-app-router',
  },
  {
    title: 'WordPress speed and Core Web Vitals',
    description: 'When a slow WordPress site is the reason pages do not rank.',
    href: '/services/wordpress/optimization',
  },
  {
    title: 'Moving from WordPress without losing traffic',
    description: 'Redirect maps, URL checks, and what to watch in Search Console after launch.',
    href: '/services/wordpress/migration',
  },
  {
    title: 'Jasa SEO dalam Bahasa Indonesia',
    description: 'Audit SEO, riset keyword, dan SEO bulanan untuk bisnis di Indonesia.',
    href: '/services/seo/jasa-seo',
  },
  {
    title: 'RankMySEO: hosted or open source',
    description: 'The rank tracker I built, and which version fits your team.',
    href: '/blog/rankmyseo-saas-vs-open-source',
  },
]

const processSteps = [
  { step: 1, title: 'Read the data', desc: 'Search Console, analytics, and a full crawl of the site' },
  { step: 2, title: 'Rank the fixes', desc: 'Each problem sorted by the traffic or revenue it puts at risk' },
  { step: 3, title: 'Fix and ship', desc: 'Changes on staging first, then live with a short change log' },
  { step: 4, title: 'Track', desc: 'Keywords tracked in RankMySEO so you see what moved' },
]

const linkClass = 'underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors'

const faqs: FaqItem[] = [
  {
    question: 'How much do technical SEO services cost?',
    answer:
      'I price each job after a first look, because a fix list for a 20 page site and a migration cleanup for 5,000 URLs are different work. Send me your URL and what changed recently. I reply with what I would check first and a price for the audit.',
  },
  {
    question: 'What is the difference between an SEO audit and technical SEO services?',
    answer:
      'An SEO audit is the diagnosis: a ranked list of what is wrong and why. Technical SEO services include the fixes. Many audits stop at a PDF that nobody implements. I can do the audit alone, or audit and fix the code myself.',
  },
  {
    question: 'What does monthly SEO include?',
    answer:
      'Each month I work through the next fixes on the list, plan or brief new content from the keyword research, and check rankings and Search Console. You get a short report with what I changed, what moved, and the plan for next month.',
  },
  {
    question: 'Do you guarantee rankings?',
    answer:
      'No. Google decides rankings and nobody controls them. I can promise that the site is crawlable, fast, and clear about what each page is for, and that you will see the rank history for every tracked keyword.',
  },
  {
    question: 'Can you help with negative search results about my brand?',
    answer:
      'Yes. Search reputation management means building and ranking accurate pages you own, such as your site, profiles, and articles, so they show up above negative or outdated results. I cannot delete other people’s pages from Google unless they break Google’s removal policies.',
  },
  {
    question: 'Which platforms do you work on?',
    answer:
      'Mostly WordPress, Next.js, and custom PHP sites, because I build on all three. For other platforms I can still audit and research, and I write the fixes for your developer.',
  },
  {
    question: 'How long until SEO fixes show results?',
    answer:
      'Google has to recrawl a page before a fix counts. Indexing and redirect fixes can show up within weeks on pages Google visits often. Content and authority take longer. Rank tracking shows you which changes moved which keywords.',
  },
]

const structuredData = buildPageGraph({
  path: pagePath,
  name: pageTitle,
  description: pageDescription,
  breadcrumbs: [
    { name: 'Services', path: '/services' },
    { name: 'SEO', path: pagePath },
  ],
  service: {
    name: 'Technical SEO services',
    description: pageDescription,
    serviceType: 'Search Engine Optimization',
    offers: [
      { name: 'Technical SEO audit' },
      { name: 'Keyword and competitor research' },
      { name: 'Technical SEO implementation' },
      { name: 'Monthly SEO retainer' },
    ],
  },
})

export default function SeoServicesPage() {
  return (
    <>
      <JsonLd data={structuredData} />

      <nav className="mb-8" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-zinc-500">
          <li><Link href="/services" className="hover:text-orange-500 transition-colors">Services</Link></li>
          <li><span className="px-2">/</span></li>
          <li className="text-zinc-900">SEO</li>
        </ol>
      </nav>

      <PageHero
        eyebrow={{ icon: <LineChart className="w-4 h-4 text-orange-500" />, label: 'SEO audits, research, and fixes' }}
        title="Technical SEO services"
        accent="from the developer who fixes them"
        actions={
          <>
            <Link
              href={contactHref('seo')}
              className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
            >
              <span className="text-sm font-medium tracking-tight">Send me your site for an SEO audit</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <a
              href="#audit"
              className="btn-secondary hover:bg-zinc-50 transition-all flex text-sm font-medium rounded-full py-3 px-6 gap-2 items-center"
              style={{ boxShadow: '0 18px 35px rgba(31, 41, 55, 0.15), 0 0 0 1px rgba(209, 213, 219, 0.3)' }}
            >
              <span className="text-sm font-medium text-black/60 tracking-tight">See what the audit checks</span>
              <ArrowRight className="w-4 h-4 text-zinc-500" />
            </a>
          </>
        }
      >
        <p className="mb-4">
          For site owners and marketing teams whose traffic stalled or dropped after a redesign. I audit the site, research
          the keywords your buyers use, and fix the code myself.
        </p>
        <p className="text-sm text-zinc-500 font-normal">
          I grew one client site from 700K to 1.8M Google impressions per 28 days. I also built RankMySEO, a rank tracker that keeps daily Google ranking history.
        </p>
      </PageHero>

      <HeroImage src="/images/services/seo.jpg" alt="Illustration of a search results page with the top result highlighted, a magnifying glass, and a rising ranking chart" />

      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
          What my technical SEO services include
        </h2>
        <p className="text-zinc-600 leading-relaxed mb-4">
          Technical SEO services make sure Google can crawl, render, and understand every page you want found. I start with an
          SEO audit of the site and your Search Console data, rank each problem by the traffic it puts at risk, and then fix
          it in the code. Keyword research decides what each page should target. Monthly SEO keeps the list moving and
          tracks every keyword so you can see what changed.
        </p>
        <p className="text-zinc-600 leading-relaxed">
          Most SEO consultants hand you a report and leave the fixes to a developer. I am the developer, so the redirect map,
          the schema, and the slow template get fixed in the same job.
        </p>
      </section>

      <section className="mb-16" aria-labelledby="offers">
        <div className="text-center mb-10">
          <h2 id="offers" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Four ways <span className="gradient-text">to work with me</span>
          </h2>
          <p className="text-sm text-zinc-500 max-w-xl mx-auto">
            Start with one. An audit is the cheapest way to find out whether the rest is worth paying for.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {offers.map((item) => (
            <div key={item.title} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all group">
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

      <section id="audit" className="mb-16 max-w-3xl mx-auto scroll-mt-32">
        <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
          What a technical SEO audit checks
        </h2>
        <p className="text-zinc-600 leading-relaxed mb-6">
          Every SEO audit covers these, in this order, because a page Google cannot crawl gains nothing from a better title.
          The full list with the tools I use is in my{' '}
          <Link href="/blog/technical-seo-audit-checklist" className={linkClass}>
            technical SEO audit checklist
          </Link>
          .
        </p>
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
          <ul className="space-y-3">
            {auditChecks.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-zinc-700">
                <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-16 max-w-3xl mx-auto" aria-labelledby="proof">
        <h2 id="proof" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
          Proof you can check before you hire me
        </h2>
        <div className="space-y-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-zinc-900 mb-1">Client results</h3>
            <p className="text-sm text-zinc-500 mb-4">I keep client names private to protect their data.</p>
            <ul className="space-y-4">
              {clientResults.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <LineChart className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-zinc-900">{item.title}</p>
                    <p className="text-sm text-zinc-600 leading-relaxed">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-zinc-900 mb-2">I built RankMySEO</h3>
            <p className="text-sm text-zinc-600 leading-relaxed">
              RankMySEO stores daily Google rankings for each keyword, so you can see where a page stood last week and last
              month. There is a{' '}
              <a href="https://github.com/madebyaris/rankmyseo" className={linkClass} target="_blank" rel="noopener noreferrer">
                public open-source toolkit
              </a>{' '}
              and a{' '}
              <a href="https://rankmyseo.com" className={linkClass} target="_blank" rel="noopener noreferrer">
                hosted version
              </a>
              . On monthly SEO, your keywords are tracked there.
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-zinc-900 mb-2">This site is the demo</h3>
            <p className="text-sm text-zinc-600 leading-relaxed">
              View the source of any page here. Each one has a single structured data graph, a canonical URL, and a title cut to
              fit Google. The site also publishes an XML sitemap, an RSS feed, and an{' '}
              <a href="/llms.txt" className={linkClass}>
                llms.txt
              </a>{' '}
              for AI search. Posts refresh in the cache within seconds of publishing.
            </p>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      <section className="mb-16" aria-labelledby="fit">
        <div className="text-center mb-10">
          <h2 id="fit" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Is a technical SEO consultant <span className="gradient-text">what you need?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-zinc-900 mb-4">Good fit</h3>
            <ul className="space-y-3">
              {goodFit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-zinc-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-zinc-900 mb-4">Look elsewhere</h3>
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

      <section className="mb-16" aria-labelledby="process">
        <div className="text-center mb-10">
          <h2 id="process" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            How an SEO audit <span className="gradient-text">turns into fixes</span>
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

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      <section className="mb-16" aria-labelledby="topics">
        <div className="text-center mb-10">
          <h2 id="topics" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            SEO guides <span className="gradient-text">and related services</span>
          </h2>
          <p className="text-sm text-zinc-500 max-w-xl mx-auto">
            What I have written about SEO, grouped with the services that put it into practice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {topics.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all group"
            >
              <h3 className="font-semibold text-zinc-900 mb-1 flex items-center justify-between gap-3">
                {item.title}
                <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-orange-500 group-hover:translate-x-0.5 transition-all shrink-0" />
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <Faq id="seo-faq" title="Technical SEO services FAQ" faqs={faqs} />

      <CtaBand
        title="Want to know what is holding your rankings back?"
        body="Send me your URL and what changed recently. I reply with the first three things I would check and a price for the audit. If your SEO is in good shape, I will tell you."
        primary={{ href: contactHref('seo'), label: 'Send me your site for an SEO audit' }}
        secondary={{ href: '/services/seo/jasa-seo', label: 'Jasa SEO (Bahasa Indonesia)' }}
      />
    </>
  )
}
