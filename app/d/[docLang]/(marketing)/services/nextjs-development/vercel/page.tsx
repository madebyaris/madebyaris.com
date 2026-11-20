import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Globe,
  Image as ImageIcon,
  RefreshCw,
  Rocket,
  Server,
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

const path = '/services/nextjs-development/vercel'
const pageTitle = 'Vercel pricing for Next.js: lower your bill'
const pageDescription =
  'What drives Vercel pricing for a Next.js app: functions, ISR writes, image optimization, and bandwidth. I trace your usage to the code and fix the waste.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path,
  keywords: [
    'Vercel pricing for Next.js',
    'Vercel pricing',
    'Vercel hosting',
    'deploy Next.js to Vercel',
    'Vercel cost optimization',
    'Next.js ISR cost',
  ],
})

const costDrivers = [
  {
    title: 'Function invocations and duration',
    description: 'Every dynamic render, API route, and server action runs a function. Slow database calls make each one run longer.',
    icon: Server,
  },
  {
    title: 'ISR reads and writes',
    description: 'Pages on a short revalidate timer write a fresh cache entry each time the timer runs out and a visitor arrives, even when nothing changed.',
    icon: RefreshCw,
  },
  {
    title: 'Image optimization',
    description: 'Each source image and size served through next/image adds transformations. Big galleries and user uploads add up.',
    icon: ImageIcon,
  },
  {
    title: 'Bandwidth',
    description: 'Heavy pages, large scripts, and bots crawling every URL all send bytes that count toward your usage.',
    icon: Globe,
  },
]

const goodFit = [
  'Your Vercel bill grew faster than your traffic',
  'Pages revalidate on a timer and nobody remembers why',
  'You want to deploy Next.js to Vercel and set caching right the first time',
  'Your team gets usage alerts but cannot tell which route causes them',
]

const poorFit = [
  'A small static site that already sits well inside its plan',
  'You need someone to negotiate an enterprise contract with Vercel',
]

const outcomes = [
  'A usage review that names your top cost drivers and the routes behind them',
  'Caching and revalidation set per route, so pages rebuild when content changes',
  'Image settings that keep transformations to the sizes you actually use',
  'Functions that finish faster, with slow calls cached or moved off the request',
  'A clean Vercel setup: preview deployments, environment variables, and custom domains',
  'Spend alerts and a short doc so your team knows which numbers to watch',
]

const processSteps = [
  { step: 1, title: 'Share usage', desc: 'Send a screenshot of the usage page or give read access to the project.' },
  { step: 2, title: 'Trace', desc: 'I match each growing meter to the routes and code that drive it.' },
  { step: 3, title: 'Fix', desc: 'Caching, revalidation, image, and function changes in a PR you can review.' },
  { step: 4, title: 'Check', desc: 'Compare usage in the next billing cycle and adjust what is left.' },
]

const faqs: FaqItem[] = [
  {
    question: 'How much does Vercel cost for a Next.js app?',
    answer:
      'It depends on your plan and your usage, and Vercel updates its pricing, so check vercel.com/pricing for current numbers. What drives the usage side is the same for most Next.js apps: function invocations and duration, ISR reads and writes, image optimization, and bandwidth.',
  },
  {
    question: 'What do you charge to review my Vercel bill?',
    answer:
      'Price is scoped per project. A usage review is smaller work than a caching rework, so I quote after I see your usage and the repo. If the fix is a small config change, I will tell you that and you can make it yourself.',
  },
  {
    question: 'Will changing caching break my SEO or show stale pages?',
    answer:
      'Caching changes decide when a page rebuilds. URLs, metadata, and sitemaps stay the same. With webhook revalidation, a page refreshes when its content is published, so visitors and crawlers see the current version.',
  },
  {
    question: 'Should I move off Vercel to a VPS?',
    answer:
      'Sometimes. A VPS gives you a flat monthly cost, but you then run the server, cache, and image pipeline yourself. For most small Next.js teams I would fix caching on Vercel first and compare after one billing cycle.',
  },
  {
    question: 'Can you deploy Next.js to Vercel from scratch?',
    answer:
      'Yes. I set up the project, environment variables, custom domains, preview deployments for pull requests, and caching per route. You get a short doc so your team can run it without me.',
  },
]

const structuredData = buildPageGraph({
  path,
  name: pageTitle,
  description: pageDescription,
  breadcrumbs: [
    { name: 'Services', path: '/services' },
    { name: 'Next.js Development', path: '/services/nextjs-development' },
    { name: 'Vercel', path },
  ],
  service: {
    name: 'Vercel cost optimization and deployment for Next.js',
    description: pageDescription,
    serviceType: 'Vercel Deployment',
    areaServed: ['Europe', 'Indonesia', 'Worldwide'],
    offers: [
      { name: 'Vercel usage and cost review' },
      { name: 'Caching and ISR revalidation setup' },
      { name: 'Webhook revalidation on publish' },
      { name: 'Image optimization settings' },
      { name: 'Deploy Next.js to Vercel' },
      { name: 'Spend alerts and handover doc' },
    ],
  },
})

const darkLinkClass =
  'text-[#93A8FF] underline decoration-[#93A8FF]/40 underline-offset-4 hover:text-[#FFB866] hover:decoration-[#FFB866] transition-colors font-medium'

export default function VercelDeploymentPage() {
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
          <li className="text-[#0B0C0E] font-semibold">Vercel</li>
        </ol>
      </nav>

      <PageHero
        eyebrow={{ icon: <Rocket className="w-3.5 h-3.5" />, label: 'Vercel hosting for Next.js' }}
        title="Vercel pricing"
        accent="for Next.js, under control"
        actions={
          <>
            <Link
              href={contactHref('vercel')}
              className="btn-primary rounded-md py-3.5 px-6 text-sm font-bold inline-flex items-center gap-2.5 group"
            >
              <span>Ask about your Vercel bill</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              href="/blog/nextjs-cache-on-vercel"
              className="btn-secondary rounded-md py-3.5 px-6 text-sm font-semibold inline-flex items-center gap-2 group"
            >
              <span>How Next.js caching works on Vercel</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </>
        }
      >
        <p className="mb-4">
          For European and Indonesian engineering teams whose Vercel bill grew faster than traffic,
          or who want to deploy Next.js and AI routes to Vercel without surprise compute costs. I
          trace the usage back to the exact routes and fix it in code.
        </p>
        <p className="font-mono text-xs text-white/80 tracking-wide">
          This site runs Next.js on Vercel. I cut its ISR writes by replacing 5-minute timed
          revalidation with publish webhooks.
        </p>
      </PageHero>

      <section className="mb-16 max-w-3xl mx-auto">
        <span className="section-index block mb-2">Cost breakdown</span>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-4">
          What drives Vercel pricing for Next.js
        </h2>
        <p className="text-[#374151] leading-relaxed">
          Vercel pricing for Next.js is your plan plus usage. The usage meters that grow fastest are
          function invocations and duration, ISR reads and writes, image optimization, and bandwidth.
          The usual causes are pages that revalidate on a timer, uncached API routes, and more image
          sizes than the site needs. Fix those and the bill tracks your real traffic more closely.
        </p>
      </section>

      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {costDrivers.map((item) => (
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

      <section className="mb-16 max-w-3xl mx-auto">
        <div className="rounded-2xl bg-[#0B0C0E] text-white border border-white/10 p-6 md:p-8 shadow-[0_24px_60px_-24px_rgba(11,12,14,0.45)]">
          <div className="flex items-center gap-2.5 mb-3">
            <Zap className="w-5 h-5 text-[#FFB866]" />
            <h2 className="font-display text-xl md:text-2xl font-bold text-white">How I cut ISR writes on this site</h2>
          </div>
          <p className="text-sm md:text-base text-white/85 leading-relaxed mb-3">
            The blog here used to revalidate every 5 minutes, so pages were rebuilt each time the window
            ran out and someone visited, whether I had published or not. Now WordPress calls a webhook
            when a post goes live. Only that post,
            the blog index, the sitemap, and llms.txt refresh, and search engines get an IndexNow ping.
          </p>
          <p className="text-sm md:text-base text-white/80 leading-relaxed">
            Pages stay current and the cache only writes when content changes. The full setup is on
            my{' '}
            <Link href="/services/wordpress/headless-development" className={darkLinkClass}>
              headless WordPress page
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="mb-16" aria-labelledby="fit-title">
        <div className="text-center mb-10">
          <span className="section-index block mb-2">Qualification</span>
          <h2 id="fit-title" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            Vercel cost optimization: <span className="gradient-text">worth it for you?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-[#DDE4FF] bg-[#F3F5FF]/70 p-6 md:p-7">
            <h3 className="font-display font-bold text-[#0B0C0E] mb-4">Good fit</h3>
            <ul className="space-y-3">
              {goodFit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#1F2937]">
                  <CheckCircle2 className="w-5 h-5 text-[#3A57FC] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] p-6 md:p-7">
            <h3 className="font-display font-bold text-[#0B0C0E] mb-4">Probably not worth it</h3>
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
          <span className="section-index block mb-2">Deliverables</span>
          <h2 id="outcomes-title" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            What you <span className="gradient-text">get</span>
          </h2>
        </div>

        <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 md:p-7">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {outcomes.map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-[#3A57FC] shrink-0" />
                <span className="text-sm text-[#1F2937] font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-16" aria-labelledby="process-title">
        <div className="text-center mb-10">
          <span className="section-index block mb-2">Workflow</span>
          <h2 id="process-title" className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            How the <span className="gradient-text">review runs</span>
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

      <Faq id="vercel-faq" title="Vercel hosting FAQ" faqs={faqs} />

      <CtaBand
        title="Send me your Vercel usage"
        body="A screenshot of the usage page is enough to start. I'll tell you which meters drive the bill and what I would change first. If the bill already fits your traffic, I'll say so."
        primary={{ href: contactHref('vercel'), label: 'Ask about your Vercel bill' }}
        secondary={{ href: '/services/nextjs-development', label: 'Need a full Next.js build?' }}
      />
    </>
  )
}
