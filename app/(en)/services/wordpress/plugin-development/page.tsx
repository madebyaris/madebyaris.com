import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, FileCode, Lock, Rocket, CheckCircle2, XCircle, RefreshCw, Puzzle } from 'lucide-react'
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
  faqs,
})

export default function PluginDevelopmentPage() {
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
          <li className="text-zinc-900">Plugin Development</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="text-center pt-4 pb-16">
        <div className="inline-flex bg-white/60 rounded-full mb-8 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2">
          <FileCode className="w-4 h-4 text-orange-500" />
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">WordPress plugin developer</span>
        </div>

        <h1 className="leading-[0.95] lg:text-[4rem] text-4xl font-medium text-zinc-900 tracking-tighter mb-6">
          Custom WordPress plugin
          <span className="block gradient-text font-light">development</span>
        </h1>

        <p className="text-base md:text-lg text-zinc-600 max-w-2xl mx-auto mb-4 leading-relaxed font-medium">
          For teams whose WordPress site needs a feature no directory plugin handles well. You get one plugin that does the job and connects to the tools you already use.
        </p>

        <p className="text-sm text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          13+ years shipping web products, including WordPress, PHP, and MySQL feature work at Hongkiat.com.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href={contactHref('wordpress')}
            className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
          >
            <span className="text-sm font-medium tracking-tight">Get a plugin scope</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <Link
            href="/services/wordpress"
            className="btn-secondary hover:bg-zinc-50 transition-all flex text-sm font-medium rounded-full py-3 px-6 gap-2 items-center"
            style={{ boxShadow: '0 18px 35px rgba(31, 41, 55, 0.15), 0 0 0 1px rgba(209, 213, 219, 0.3)' }}
          >
            <span className="text-sm font-medium text-black/60 tracking-tight">See all WordPress services</span>
            <ArrowRight className="w-4 h-4 text-zinc-500" />
          </Link>
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Answer first */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
          What custom WordPress plugin development gets you
        </h2>
        <p className="text-zinc-600 leading-relaxed mb-4">
          Custom WordPress plugin development means writing a plugin for one job on your site: a booking flow, a CRM sync, a members area, or an API endpoint. It runs alongside your theme and other plugins, uses WordPress hooks, and keeps your data in your own database. You get the feature you need without stacking general plugins that each do part of it.
        </p>
        <p className="text-zinc-600 leading-relaxed">
          Need WordPress data in an app or a Next.js site? See{' '}
          <Link href="/blog/php-api-development-for-nextjs" className="underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors">
            PHP API development for Next.js
          </Link>
          .
        </p>
      </section>

      {/* Outcomes Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <div className="inline-flex bg-white/60 rounded-full mb-4 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2">
            <Puzzle className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">What changes for you</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            What a WordPress plugin developer <span className="gradient-text">should deliver</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {outcomes.map((item) => (
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
            Do you need a <span className="gradient-text">custom plugin?</span>
          </h2>
          <p className="text-sm text-zinc-500 max-w-xl mx-auto">
            If an existing plugin does the job, I will point you to it and save you the build.
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
        <p className="text-sm text-zinc-500 text-center mt-6">
          Planning a Next.js front end on top? Read{' '}
          <Link href="/blog/headless-wordpress-with-nextjs" className="underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors">
            how I wire headless WordPress to Next.js
          </Link>
          {' '}or see{' '}
          <Link href="/services/wordpress/headless-development" className="underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors">
            headless WordPress development
          </Link>
          .
        </p>
      </section>

      {/* Process Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            How the plugin <span className="gradient-text">gets built</span>
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
      <section className="mb-16 max-w-3xl mx-auto" aria-labelledby="plugin-faq">
        <h2 id="plugin-faq" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-6">
          Custom WordPress plugin FAQ
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
          <h2 className="md:text-4xl lg:text-5xl leading-tight text-3xl font-normal text-white tracking-tight mb-6 max-w-2xl">
            Describe the feature your site is missing
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg font-medium">
            Tell me what it should do and what it connects to. I will reply with a spec and a price, or the name of an existing plugin if one already does it.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link href={contactHref('wordpress')} className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              <span>Get a plugin scope</span>
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
