import type { Metadata } from 'next'
import Link from 'next/link'
import { contactHref } from '@/lib/contact-services'
import { ArrowRight, ArrowUpRight, Rocket, Globe, Zap, Code2, CheckCircle2, Search, Server, XCircle } from 'lucide-react'
import { JsonLd } from '@/components/seo/json-ld'
import { buildPageGraph, buildPageMetadata, type FaqItem } from '@/lib/seo'

export const revalidate = 86400 // Revalidate daily

const path = '/services/wordpress/headless-development'
const pageTitle = 'Headless WordPress + Next.js Development'
const pageDescription =
  'Headless WordPress + Next.js: keep the editor your team knows, ship a fast front end, and keep your SEO. See when it is worth it and how I build it.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path,
  keywords: [
    'headless WordPress development services',
    'headless WordPress Next.js',
    'Next.js WordPress',
    'WordPress headless frontend development with Next.js',
    'headless WordPress agency',
  ],
})

const faqs: FaqItem[] = [
  {
    question: 'What is headless WordPress with Next.js?',
    answer:
      'Headless WordPress keeps WordPress as the content editor and database, but replaces the WordPress theme with a separate Next.js front end. Editors keep writing in wp-admin. Visitors get pages that Next.js renders from the WordPress REST API or GraphQL, cached at the edge.',
  },
  {
    question: 'When is headless WordPress worth it?',
    answer:
      'It is worth it when page speed, a custom front end, or sharing content with an app matters more than drop-in plugins. It is usually not worth it for a small brochure site that depends on page builders or many front-end plugins, because those plugins do not render in a Next.js front end.',
  },
  {
    question: 'Will I lose my SEO when moving to headless WordPress?',
    answer:
      'Not if the migration carries it over. I keep every URL or redirect it, read titles and descriptions from your SEO plugin such as Rank Math, rebuild the sitemap and schema in Next.js, and revalidate pages the moment an editor publishes.',
  },
  {
    question: 'Can my team still use the WordPress editor?',
    answer:
      'Yes. Writers and editors keep the same wp-admin, blocks, and media library. Publishing a post triggers a webhook that refreshes the affected Next.js pages, so changes go live without a redeploy.',
  },
  {
    question: 'Where does a headless WordPress site run?',
    answer:
      'The Next.js front end usually runs on Vercel, and WordPress runs on your existing host or a small VPS behind it. Visitors only hit the fast front end, so the WordPress server can stay small and private.',
  },
]

const structuredData = buildPageGraph({
  path,
  name: pageTitle,
  description: pageDescription,
  breadcrumbs: [
    { name: 'Services', path: '/services' },
    { name: 'WordPress', path: '/services/wordpress' },
    { name: 'Headless Development', path },
  ],
  service: {
    name: 'Headless WordPress development with Next.js',
    serviceType: 'Headless WordPress development',
    description: pageDescription,
    offers: [
      { name: 'Headless WordPress backend setup' },
      { name: 'Next.js front-end development' },
      { name: 'REST API or GraphQL integration' },
      { name: 'Content and URL migration with SEO carried over' },
      { name: 'Webhook revalidation on publish' },
      { name: 'Vercel deployment and caching' },
    ],
  },
  faqs,
})

const proof = [
  {
    title: 'WordPress stays the editor',
    description: 'Content lives in WordPress. Editors publish in wp-admin exactly as they do today.',
    icon: Code2,
  },
  {
    title: 'Next.js renders the pages',
    description: 'Pages are prerendered and cached, so visitors never wait on PHP or the WordPress database.',
    icon: Rocket,
  },
  {
    title: 'Publish triggers a refresh',
    description: 'A webhook revalidates the changed post, the blog index, and the sitemap within seconds.',
    icon: Zap,
  },
  {
    title: 'SEO fields carried over',
    description: 'Titles and descriptions come from Rank Math. Schema, sitemap, and IndexNow run in Next.js.',
    icon: Search,
  },
]

const goodFit = [
  'Content team already lives in WordPress and should keep it',
  'Page speed and Core Web Vitals are costing you traffic or sales',
  'You need a custom front end that a theme cannot deliver',
  'The same content feeds a website and an app',
]

const poorFit = [
  'A small brochure site that works fine today',
  'The site depends on page builders like Elementor or Divi',
  'Many front-end plugins (forms, sliders, shops) must keep working as-is',
  'No developer will maintain the front end after launch',
]

const deliverables = [
  'Headless WordPress backend setup',
  'Next.js front-end development',
  'REST API or GraphQL integration',
  'URL, redirect, and SEO migration',
  'Webhook revalidation on publish',
  'Vercel deployment and caching',
  'Performance and Core Web Vitals tuning',
  'Handover docs for your editors',
]

const processSteps = [
  { step: 1, title: 'Audit', desc: 'Map content types, plugins, URLs, and what must not break' },
  { step: 2, title: 'API', desc: 'Expose content through REST or GraphQL with SEO fields' },
  { step: 3, title: 'Front end', desc: 'Build the Next.js pages, cache, and revalidation' },
  { step: 4, title: 'Launch', desc: 'Redirects, sitemap, Search Console, then monitor ranks' },
]

export default function HeadlessWordPressPage() {
  return (
    <>
      <JsonLd data={structuredData} />

      {/* Breadcrumb */}
      <nav className="mb-8" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-zinc-500">
          <li><Link href="/services" className="hover:text-orange-500 transition-colors">Services</Link></li>
          <li><span className="px-2">/</span></li>
          <li><Link href="/services/wordpress" className="hover:text-orange-500 transition-colors">WordPress</Link></li>
          <li><span className="px-2">/</span></li>
          <li className="text-zinc-900">Headless Development</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="text-center pt-4 pb-16">
        <div className="inline-flex bg-white/60 rounded-full mb-8 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2">
          <Rocket className="w-4 h-4 text-orange-500" />
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Headless WordPress + Next.js</span>
        </div>

        <h1 className="leading-[0.95] lg:text-[4rem] text-4xl font-medium text-zinc-900 tracking-tighter mb-6">
          Headless WordPress
          <span className="block gradient-text font-light">with Next.js</span>
        </h1>

        <p className="text-base md:text-lg text-zinc-600 max-w-2xl mx-auto mb-4 leading-relaxed font-medium">
          Keep the WordPress editor your team already knows. Get a Next.js front end that loads fast, ranks, and doesn’t break when a plugin updates.
        </p>

        <p className="text-sm text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          You’re reading one right now: this site’s blog is written in WordPress and served by Next.js on Vercel.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href={contactHref('headless-wordpress')}
            className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
          >
            <span className="text-sm font-medium tracking-tight">Ask if headless fits your site</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <Link
            href="/blog/headless-wordpress-with-nextjs"
            className="btn-secondary hover:bg-zinc-50 transition-all flex text-sm font-medium rounded-full py-3 px-6 gap-2 items-center"
            style={{ boxShadow: '0 18px 35px rgba(31, 41, 55, 0.15), 0 0 0 1px rgba(209, 213, 219, 0.3)' }}
          >
            <span className="text-sm font-medium text-black/60 tracking-tight">Read how I wire it</span>
            <ArrowRight className="w-4 h-4 text-zinc-500" />
          </Link>
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Answer first */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
          What headless WordPress with Next.js means
        </h2>
        <p className="text-zinc-600 leading-relaxed mb-4">{faqs[0].answer}</p>
        <p className="text-zinc-600 leading-relaxed">
          The payoff is speed and control over the front end. The cost is that WordPress themes and front-end plugins stop rendering, so the decision depends on how your site is built today.
        </p>
      </section>

      {/* How this site does it */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <div className="inline-flex bg-white/60 rounded-full mb-4 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2">
            <Server className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Running in production</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            How this site runs <span className="gradient-text">headless</span>
          </h2>
          <p className="text-sm text-zinc-500 max-w-xl mx-auto">
            The same setup I build for clients, running on the page you’re reading.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {proof.map((item) => (
            <div key={item.title} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all group">
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

      {/* Fit */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Is headless worth it <span className="gradient-text">for you?</span>
          </h2>
          <p className="text-sm text-zinc-500 max-w-xl mx-auto">
            I’ll tell you if it isn’t. More detail in{' '}
            <Link href="/blog/wordpress-vs-nextjs-when-worth-it" className="underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors">
              WordPress vs Next.js: when it’s worth it
            </Link>
            .
          </p>
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

      {/* Deliverables Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            What you <span className="gradient-text">get</span>
          </h2>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {deliverables.map((item) => (
              <div key={item} className="flex items-center gap-3 p-3 bg-zinc-50 rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                <span className="text-sm text-zinc-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            How the <span className="gradient-text">project runs</span>
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
      <section className="mb-16 max-w-3xl mx-auto" aria-labelledby="headless-faq">
        <h2 id="headless-faq" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-6">
          Headless WordPress FAQ
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
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="flex flex-col items-center justify-center text-center p-8 md:p-12 lg:p-16 min-h-[400px] relative">
          <Globe className="w-8 h-8 text-orange-400 mb-6" />
          <h2 className="md:text-4xl lg:text-5xl leading-tight text-3xl font-normal text-white tracking-tight mb-6 max-w-2xl">
            Not sure headless is right for your site?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg font-medium">
            Send me the URL. I’ll tell you whether headless is worth it, what would break, and what it would take, before you commit to anything.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link href={contactHref('headless-wordpress')} className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              <span>Send me your site</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/services/wordpress" className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-all text-white text-sm font-medium rounded-full px-6 py-3">
              <span>Other WordPress services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
