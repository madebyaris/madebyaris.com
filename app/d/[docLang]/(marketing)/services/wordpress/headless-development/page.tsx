import type { Metadata } from 'next'
import Link from 'next/link'
import { contactHref } from '@/lib/contact-services'
import { ArrowRight, ArrowUpRight, Rocket, Zap, Code2, CheckCircle2, Search, Server, XCircle } from 'lucide-react'
import { PageHero } from '@/components/page/hero'
import { Faq } from '@/components/page/faq'
import { CtaBand } from '@/components/page/cta-band'
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

const linkClass = 'text-[#3A57FC] underline decoration-[#3A57FC]/35 underline-offset-4 hover:text-[#2944E0] hover:decoration-[#3A57FC] transition-colors'

export default function HeadlessWordPressPage() {
  return (
    <>
      <JsonLd data={structuredData} />

      {/* Breadcrumb */}
      <nav className="mb-6" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-[#4B5563]">
          <li><Link href="/services" className="hover:text-[#3A57FC] transition-colors">Services</Link></li>
          <li aria-hidden="true" className="text-[#9CA3AF]">/</li>
          <li><Link href="/services/wordpress" className="hover:text-[#3A57FC] transition-colors">WordPress</Link></li>
          <li aria-hidden="true" className="text-[#9CA3AF]">/</li>
          <li className="font-medium text-[#0B0C0E]" aria-current="page">Headless Development</li>
        </ol>
      </nav>

      <PageHero
        eyebrow={{ icon: <Rocket className="w-3.5 h-3.5" />, label: 'Headless WordPress + Next.js' }}
        title="Headless WordPress"
        accent="with Next.js"
        actions={
          <>
            <Link
              href={contactHref('headless-wordpress')}
              className="btn-primary inline-flex items-center gap-2.5 rounded-md py-3.5 px-6 text-sm font-bold group"
            >
              <span>Ask if headless fits your site</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              href="/blog/headless-wordpress-with-nextjs"
              className="btn-secondary inline-flex items-center gap-2 rounded-md py-3.5 px-6 text-sm font-semibold group"
            >
              <span>Read how I wire it</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </>
        }
      >
        <p className="mb-4">
          Keep the WordPress editor your team already knows. Get a Next.js front end that loads fast, ranks, and doesn’t break when a plugin updates.
        </p>
        <p className="text-sm text-white/80">
          You’re reading one right now: this site’s blog is written in WordPress and served by Next.js on Vercel.
        </p>
      </PageHero>

      {/* Answer first */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-4">
          What headless WordPress with Next.js means
        </h2>
        <p className="text-[#4B5563] leading-relaxed mb-4">{faqs[0].answer}</p>
        <p className="text-[#4B5563] leading-relaxed">
          The payoff is speed and control over the front end. The cost is that WordPress themes and front-end plugins stop rendering, so the decision depends on how your site is built today.
        </p>
      </section>

      {/* How this site does it */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-md border border-[#DDE4FF] bg-[#EEF2FF] px-3 py-1 mb-4">
            <Server className="w-3.5 h-3.5 text-[#3A57FC]" />
            <span className="font-mono text-[11px] font-semibold tracking-[0.12em] uppercase text-[#3A57FC]">Running in production</span>
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            How this site runs <span className="gradient-text">headless</span>
          </h2>
          <p className="text-sm text-[#4B5563] max-w-xl mx-auto">
            The same setup I build for clients, running on the page you’re reading.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {proof.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#3A57FC] hover:shadow-[0_20px_50px_-24px_rgba(58,87,252,0.22)] transition-all p-6 md:p-7 group"
            >
              <div className="p-3 bg-[#EEF2FF] text-[#3A57FC] rounded-xl w-fit mb-4 group-hover:bg-[#3A57FC] group-hover:text-white transition-colors">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="font-display font-semibold text-[#0B0C0E] mb-2">{item.title}</h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-[#E5E7EB] mb-16" />

      {/* Fit */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            Is headless worth it <span className="gradient-text">for you?</span>
          </h2>
          <p className="text-sm text-[#4B5563] max-w-xl mx-auto">
            I’ll tell you if it isn’t. More detail in{' '}
            <Link href="/blog/wordpress-vs-nextjs-when-worth-it" className={linkClass}>
              WordPress vs Next.js: when it’s worth it
            </Link>
            .
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 md:p-7">
            <h3 className="font-display font-semibold text-[#0B0C0E] mb-4">Good fit</h3>
            <ul className="space-y-3">
              {goodFit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#4B5563]">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 md:p-7">
            <h3 className="font-display font-semibold text-[#0B0C0E] mb-4">Probably not worth it</h3>
            <ul className="space-y-3">
              {poorFit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#4B5563]">
                  <XCircle className="w-5 h-5 text-[#9CA3AF] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-[#E5E7EB] mb-16" />

      {/* Deliverables Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            What you <span className="gradient-text">get</span>
          </h2>
        </div>

        <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 md:p-7">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {deliverables.map((item) => (
              <div key={item} className="flex items-center gap-3 p-3.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-[#3A57FC] shrink-0" />
                <span className="text-sm text-[#0B0C0E] font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            How the <span className="gradient-text">project runs</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {processSteps.map((item) => (
            <div
              key={item.step}
              className="rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] hover:border-[#3A57FC] transition-colors p-6 text-center"
            >
              <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] border border-[#DDE4FF] text-[#3A57FC] font-mono font-bold text-sm flex items-center justify-center mx-auto mb-4">
                {String(item.step).padStart(2, '0')}
              </div>
              <h3 className="font-display font-semibold text-[#0B0C0E] mb-1.5">{item.title}</h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Faq id="headless-faq" title="Headless WordPress FAQ" faqs={faqs} />

      <CtaBand
        title="Not sure headless is right for your site?"
        body="Send me the URL. I’ll tell you whether headless is worth it, what would break, and what it would take, before you commit to anything."
        primary={{ href: contactHref('headless-wordpress'), label: 'Send me your site' }}
        secondary={{ href: '/services/wordpress', label: 'Other WordPress services' }}
      />
    </>
  )
}
