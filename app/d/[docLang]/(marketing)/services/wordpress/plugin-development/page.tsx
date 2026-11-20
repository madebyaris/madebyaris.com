import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, FileCode, Lock, Rocket, CheckCircle2, XCircle, RefreshCw, Puzzle } from 'lucide-react'
import { PageHero } from '@/components/page/hero'
import { Faq } from '@/components/page/faq'
import { CtaBand } from '@/components/page/cta-band'
import { buildPageGraph, buildPageMetadata, type FaqItem } from '@/lib/seo'
import { JsonLd } from '@/components/seo/json-ld'
import { contactHref } from '@/lib/contact-services'

export const revalidate = 86400 // Revalidate daily

const pageTitle = 'Custom WordPress Plugin Development'
const pagePath = '/services/wordpress/plugin-development'
const pageDescription =
  'Custom WordPress plugin development for jobs no directory plugin does right: API integrations, custom admin screens, and REST endpoints your team owns.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
  keywords: [
    'custom WordPress plugin development',
    'WordPress plugin developer',
    'plugin development',
    'WordPress API integration',
    'custom WordPress REST API endpoint',
  ],
})

const outcomes = [
  {
    title: 'One plugin that does the exact job',
    description: 'Replace a stack of plugins and code snippets with one plugin built around your workflow, so there are fewer things to update and fewer conflicts.',
    icon: FileCode,
  },
  {
    title: 'WordPress talks to your other tools',
    description: 'Connect your CRM, payment provider, or internal API through their APIs and webhooks, so nobody copies data between systems by hand.',
    icon: Rocket,
  },
  {
    title: 'Safe by default',
    description: 'Capability checks, nonces, sanitized input, and escaped output on every screen and endpoint. These are the WordPress basics that stop most plugin holes.',
    icon: Lock,
  },
  {
    title: 'Survives theme changes and updates',
    description: 'Logic lives in a plugin instead of functions.php, so switching themes or updating WordPress does not wipe out your features.',
    icon: RefreshCw,
  },
]

const goodFit = [
  'A directory plugin almost does it and you keep patching around it',
  'You run several plugins and snippets to hold one workflow together',
  'WordPress needs to sync with a CRM, payment, or internal system',
  'A Next.js front end or app needs a custom REST endpoint from WordPress',
]

const poorFit = [
  'A well-maintained plugin already does the job (I will name it)',
  'A small snippet solves it, so a full plugin is overkill',
  'You want a plugin to sell in the directory with public support',
  'The site is going away soon and the feature is temporary',
]

const deliverables = [
  'Custom plugin built to your spec',
  'Admin screens and settings your team can use',
  'Custom database tables or post meta, whichever fits the data',
  'REST API endpoints for apps or a Next.js front end',
  'Third-party API and webhook integrations',
  'Security checks on every input and endpoint',
  'Tested on staging against your theme and plugins',
  'Docs for your team and the next developer',
]

const processSteps = [
  { step: 1, title: 'Spec', desc: 'Write down what the plugin does, who uses it, and what it connects to' },
  { step: 2, title: 'Scope', desc: 'You get the milestones and a price for that spec before code starts' },
  { step: 3, title: 'Build and test', desc: 'Built on staging and tested against your theme and other plugins' },
  { step: 4, title: 'Install and hand over', desc: 'Install on the live site, walk your team through it, leave docs' },
]

const faqs: FaqItem[] = [
  {
    question: 'How much does custom WordPress plugin development cost?',
    answer:
      'I quote after we agree on a written spec, because a settings page and a two-way CRM sync are very different jobs. Tell me what the plugin needs to do, and I will reply with a scope and a price for that scope.',
  },
  {
    question: 'How long does it take to build a custom plugin?',
    answer:
      'It depends on the spec, mostly on how many screens and outside systems are involved. The scope includes milestones and a timeline, and you can test each milestone on staging.',
  },
  {
    question: 'Will a custom plugin conflict with my other plugins?',
    answer:
      'I prefix functions, use WordPress hooks, and load scripts only on the screens that need them, which avoids most conflicts. I also test on a staging copy with your real theme and plugins before anything goes live.',
  },
  {
    question: 'Who maintains the plugin after launch?',
    answer:
      'You own the code. It follows WordPress coding standards and comes with docs, so your team or another developer can maintain it. I can stay on for updates when WordPress or a connected API changes.',
  },
  {
    question: 'Can the plugin work with Elementor or WooCommerce?',
    answer:
      'Yes. A plugin can add Elementor widgets, blocks for the WordPress editor, or hook into WooCommerce orders and products. Tell me which tools your site depends on and I will build around them.',
  },
]

const structuredData = buildPageGraph({
  path: pagePath,
  name: pageTitle,
  description: pageDescription,
  breadcrumbs: [
    { name: 'Services', path: '/services' },
    { name: 'WordPress', path: '/services/wordpress' },
    { name: 'Plugin Development', path: pagePath },
  ],
  service: {
    name: pageTitle,
    description: pageDescription,
    serviceType: 'WordPress Plugin Development',
    offers: deliverables.map((name) => ({ name })),
  },
})

const linkClass = 'text-[#3A57FC] underline decoration-[#3A57FC]/35 underline-offset-4 hover:text-[#2944E0] hover:decoration-[#3A57FC] transition-colors'

const displayFaqs = faqs.map((faq) =>
  faq.question === 'Can the plugin work with Elementor or WooCommerce?'
    ? {
        question: faq.question,
        answer: (
          <>
            Yes. A plugin can add Elementor widgets, blocks for the WordPress editor, or hook into{' '}
            <Link href="/services/wordpress/woocommerce" className={linkClass}>
              WooCommerce orders and products
            </Link>
            . Tell me which tools your site depends on and I will build around them.
          </>
        ),
      }
    : faq,
)

export default function PluginDevelopmentPage() {
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
          <li className="font-medium text-[#0B0C0E]" aria-current="page">Plugin Development</li>
        </ol>
      </nav>

      <PageHero
        eyebrow={{ icon: <FileCode className="w-3.5 h-3.5" />, label: 'WordPress plugin developer' }}
        title="Custom WordPress plugin"
        accent="development"
        actions={
          <>
            <Link
              href={contactHref('wordpress')}
              className="btn-primary inline-flex items-center gap-2.5 rounded-md py-3.5 px-6 text-sm font-bold group"
            >
              <span>Get a plugin scope</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              href="/services/wordpress"
              className="btn-secondary inline-flex items-center gap-2 rounded-md py-3.5 px-6 text-sm font-semibold group"
            >
              <span>See all WordPress services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </>
        }
      >
        <p className="mb-4">
          For teams whose WordPress site needs a feature no directory plugin handles well. You get one plugin that does the job and connects to the tools you already use.
        </p>
        <p className="text-sm text-white/80">
          13+ years shipping web products, including WordPress, PHP, and MySQL feature work at Hongkiat.com.
        </p>
      </PageHero>

      {/* Answer first */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-4">
          What custom WordPress plugin development gets you
        </h2>
        <p className="text-[#4B5563] leading-relaxed mb-4">
          Custom WordPress plugin development means writing a plugin for one job on your site: a booking flow, a CRM sync, a members area, or an API endpoint. It runs alongside your theme and other plugins, uses WordPress hooks, and keeps your data in your own database. You get the feature you need without stacking general plugins that each do part of it.
        </p>
        <p className="text-[#4B5563] leading-relaxed">
          Need WordPress data in an app or a Next.js site? See{' '}
          <Link href="/blog/php-api-development-for-nextjs" className={linkClass}>
            PHP API development for Next.js
          </Link>
          .
        </p>
      </section>

      {/* Outcomes Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-md border border-[#DDE4FF] bg-[#EEF2FF] px-3 py-1 mb-4">
            <Puzzle className="w-3.5 h-3.5 text-[#3A57FC]" />
            <span className="font-mono text-[11px] font-semibold tracking-[0.12em] uppercase text-[#3A57FC]">What changes for you</span>
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            What a WordPress plugin developer <span className="gradient-text">should deliver</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {outcomes.map((item) => (
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
            Do you need a <span className="gradient-text">custom plugin?</span>
          </h2>
          <p className="text-sm text-[#4B5563] max-w-xl mx-auto">
            If an existing plugin does the job, I will point you to it and save you the build.
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
        <p className="text-sm text-[#4B5563] text-center mt-6">
          Planning a Next.js front end on top? Read{' '}
          <Link href="/blog/headless-wordpress-with-nextjs" className={linkClass}>
            how I wire headless WordPress to Next.js
          </Link>
          {' '}or see{' '}
          <Link href="/services/wordpress/headless-development" className={linkClass}>
            headless WordPress development
          </Link>
          .
        </p>
      </section>

      {/* Process Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            How the plugin <span className="gradient-text">gets built</span>
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

      <Faq id="plugin-faq" title="Custom WordPress plugin FAQ" faqs={displayFaqs} />

      <CtaBand
        title="Describe the feature your site is missing"
        body="Tell me what it should do and what it connects to. I will reply with a spec and a price, or the name of an existing plugin if one already does it."
        primary={{ href: contactHref('wordpress'), label: 'Get a plugin scope' }}
        secondary={{ href: '/services/wordpress', label: 'Other WordPress services' }}
      />
    </>
  )
}
