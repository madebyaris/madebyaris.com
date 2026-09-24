import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Rocket, Globe, Zap, Server, CheckCircle2, XCircle, Image as ImageIcon, RefreshCw } from 'lucide-react'
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
    offers: [
      { name: 'Vercel usage and cost review' },
      { name: 'Caching and ISR revalidation setup' },
      { name: 'Webhook revalidation on publish' },
      { name: 'Image optimization settings' },
      { name: 'Deploy Next.js to Vercel' },
      { name: 'Spend alerts and handover doc' },
    ],
  },
  faqs,
})

const linkClass = 'underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors'

export default function VercelDeploymentPage() {
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
          <li className="text-zinc-900">Vercel</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="text-center pt-4 pb-16">
        <div className="inline-flex bg-white/60 rounded-full mb-8 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2">
          <Rocket className="w-4 h-4 text-orange-500" />
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Vercel hosting for Next.js</span>
        </div>

        <h1 className="leading-[0.95] lg:text-[4rem] text-4xl font-medium text-zinc-900 tracking-tighter mb-6">
          Vercel pricing
          <span className="block gradient-text font-light">for Next.js, under control</span>
        </h1>

        <p className="text-base md:text-lg text-zinc-500 max-w-2xl mx-auto mb-4 leading-relaxed font-medium">
          For teams whose Vercel bill grew faster than their traffic, or who want to deploy Next.js to
          Vercel without surprises later. I find which routes drive the cost and change the code
          behind them.
        </p>

        <p className="text-sm text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          This site runs Next.js on Vercel. I cut its ISR writes by replacing 5-minute timed
          revalidation with publish webhooks.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href={contactHref('vercel')}
            className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
          >
            <span className="text-sm font-medium tracking-tight">Ask about your Vercel bill</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <Link
            href="/blog/nextjs-cache-on-vercel"
            className="btn-secondary hover:bg-zinc-50 transition-all flex text-sm font-medium rounded-full py-3 px-6 gap-2 items-center"
            style={{
              boxShadow: '0 18px 35px rgba(31, 41, 55, 0.15), 0 0 0 1px rgba(209, 213, 219, 0.3)',
            }}
          >
            <span className="text-sm font-medium text-black/60 tracking-tight">How Next.js caching works on Vercel</span>
            <ArrowRight className="w-4 h-4 text-zinc-500" />
          </Link>
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Answer first */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
          What drives Vercel pricing for Next.js
        </h2>
        <p className="text-zinc-600 leading-relaxed">
          Vercel pricing for Next.js is your plan plus usage. The usage meters that grow fastest are
          function invocations and duration, ISR reads and writes, image optimization, and bandwidth.
          The usual causes are pages that revalidate on a timer, uncached API routes, and more image
          sizes than the site needs. Fix those and the bill tracks your real traffic more closely.
        </p>
      </section>

      {/* Cost drivers */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {costDrivers.map((item) => (
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

      {/* Proof */}
      <section className="mb-16 max-w-3xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <Zap className="w-5 h-5 text-orange-500" />
            <h2 className="text-xl font-semibold text-zinc-900">How I cut ISR writes on this site</h2>
          </div>
          <p className="text-zinc-600 leading-relaxed mb-3">
            The blog here used to revalidate every 5 minutes, so pages were rebuilt each time the window
            ran out and someone visited, whether I had published or not. Now WordPress calls a webhook
            when a post goes live. Only that post,
            the blog index, the sitemap, and llms.txt refresh, and search engines get an IndexNow ping.
          </p>
          <p className="text-zinc-600 leading-relaxed">
            Pages stay current and the cache only writes when content changes. The full setup is on
            my{' '}
            <Link href="/services/wordpress/headless-development" className={linkClass}>
              headless WordPress page
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Fit */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Vercel cost optimization: <span className="gradient-text">worth it for you?</span>
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
            <h3 className="font-semibold text-zinc-900 mb-4">Probably not worth it</h3>
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
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            What you <span className="gradient-text">get</span>
          </h2>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {outcomes.map((item) => (
              <div key={item} className="flex items-center gap-3 p-3 bg-zinc-50 rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                <span className="text-sm text-zinc-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            How the <span className="gradient-text">review runs</span>
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
      <section className="mb-16 max-w-3xl mx-auto" aria-labelledby="vercel-faq">
        <h2 id="vercel-faq" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-6">
          Vercel hosting FAQ
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
            Send me your Vercel usage
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg font-medium">
            A screenshot of the usage page is enough to start. I&apos;ll tell you which meters drive the
            bill and what I would change first. If the bill already fits your traffic, I&apos;ll say so.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href={contactHref('vercel')}
              className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>Ask about your Vercel bill</span>
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
