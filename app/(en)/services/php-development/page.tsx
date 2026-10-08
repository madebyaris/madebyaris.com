import type { Metadata } from 'next'
import Link from 'next/link'
import { Code2, Database, Server, ArrowRight, ArrowUpRight, Rocket, History, CheckCircle2, XCircle } from 'lucide-react'
import { buildPageGraph, buildPageMetadata, type FaqItem } from '@/lib/seo'
import { JsonLd } from '@/components/seo/json-ld'
import { contactHref } from '@/lib/contact-services'

export const revalidate = 86400 // Revalidate daily

const path = '/services/php-development'
const pageTitle = 'PHP Development Services: Apps and APIs'
const pageDescription =
  'PHP development services from a developer writing PHP and MySQL since 2013: custom apps, APIs for Next.js, slow query fixes, and legacy upgrades.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path,
  keywords: [
    'PHP development services',
    'hire PHP developer',
    'PHP API development services',
    'custom PHP application development',
    'legacy PHP modernization',
    'MySQL database optimization',
    'Laravel developer',
  ],
})

const services = [
  {
    title: 'Custom PHP applications',
    description:
      'Internal tools, portals, and dashboards built around how your team works, so staff stop copying data between spreadsheets.',
    icon: Code2,
    href: '/services/php-development/custom-applications',
    features: ['Laravel or plain PHP', 'Admin dashboards', 'User roles'],
  },
  {
    title: 'PHP API development',
    description:
      'REST APIs for Next.js sites and mobile apps, with auth, validation, and docs your front-end developer can read.',
    icon: Server,
    href: '/services/php-development/api-development',
    features: ['REST and JSON', 'Auth and tokens', 'OpenAPI docs'],
  },
  {
    title: 'MySQL database optimization',
    description:
      'Find the slow queries, add the right indexes, and fix the schema so pages and reports stop timing out.',
    icon: Database,
    href: '/services/php-development/database-solutions',
    features: ['Slow query fixes', 'Indexes', 'Schema design'],
  },
  {
    title: 'Legacy PHP modernization',
    description:
      'Move an old app to a supported PHP version in small steps, while the current version keeps serving users.',
    icon: Rocket,
    href: '/services/php-development/modernization',
    features: ['PHP 8 upgrade', 'Laravel migration', 'Tests first'],
  },
]

const history = [
  {
    year: '2013',
    text: 'Started as a junior backend developer: PHP, MySQL, database design, and client reports.',
  },
  {
    year: '2014',
    text: 'Built PHP and MySQL web applications, and the databases behind them, at SEREWare.',
  },
  {
    year: '2015 and 2016',
    text: 'CodeIgniter sites at PT. DheZign, then WordPress, PHP, and MySQL features at Hongkiat.com.',
  },
  {
    year: 'Since 2015',
    text: 'Running MadeByAris: PHP and WordPress backends, and Next.js front ends on top of them.',
  },
]

const goodFit = [
  'Your business runs on a PHP app and the original developer is gone',
  'A Next.js site or mobile app needs a clean API from your PHP backend',
  'Pages or reports slow down as the MySQL tables grow',
  'The app runs on an old PHP version and everyone is nervous to touch it',
]

const poorFit = [
  'You need several developers working in parallel from day one',
  'A simple brochure site that a website builder would handle fine',
  'You want someone to close tickets without asking why',
]

const processSteps = [
  { step: 1, title: 'Read the code', desc: 'I go through the repo, database, and hosting, then list what is risky.' },
  { step: 2, title: 'Scope', desc: 'You get a written plan and a quote before any work starts.' },
  { step: 3, title: 'Build', desc: 'Small, reviewed changes on a staging copy, with tests where risk is highest.' },
  { step: 4, title: 'Ship and hand over', desc: 'Deploy with a rollback path, plus notes your team can maintain.' },
]

const faqs: FaqItem[] = [
  {
    question: 'How much does it cost to hire a PHP developer for my project?',
    answer:
      'I scope each project on its own, because a small API fix and a legacy upgrade are very different jobs. Send me the repo or a short description. You get a written scope and a quote before any work starts, and you can walk away at that point.',
  },
  {
    question: 'Should I keep my PHP app or rewrite it?',
    answer:
      'Most of the time I recommend keeping it and fixing it in steps. A rewrite makes sense when the code blocks every change or runs on something that cannot be upgraded. I read the code first and tell you which way I would go and why.',
  },
  {
    question: 'Will my app go down during a migration or upgrade?',
    answer:
      'I plan for it to stay up. Changes go to a staging copy first, and each release is a deploy you can roll back. If a step needs a maintenance window, it is written in the plan and we pick a quiet hour together.',
  },
  {
    question: 'Do you work in Laravel or plain PHP?',
    answer:
      'Both. I started with plain PHP in 2013, built CodeIgniter sites in 2015, and work in Laravel today. If your app is plain PHP, I follow its style and only add a framework where it pays for itself.',
  },
  {
    question: 'Who maintains the code after launch?',
    answer:
      'You own the code and the repo. I leave notes on how it is built and deployed, so your team or another developer can take over. If you would rather I keep maintaining it, we agree on that after launch.',
  },
]

const structuredData = buildPageGraph({
  path,
  name: pageTitle,
  description: pageDescription,
  breadcrumbs: [
    { name: 'Services', path: '/services' },
    { name: 'PHP Development', path },
  ],
  service: {
    name: 'PHP development services',
    description: pageDescription,
    serviceType: 'PHP Development',
    offers: services.map((service) => ({ name: service.title, description: service.description })),
  },
  faqs,
})

const linkClass = 'underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors'

export default function PhpDevelopmentPage() {
  return (
    <>
      <JsonLd data={structuredData} />

      {/* Breadcrumb */}
      <nav className="mb-8" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-zinc-500">
          <li><Link href="/services" className="hover:text-orange-500 transition-colors">Services</Link></li>
          <li><span className="px-2">/</span></li>
          <li className="text-zinc-900">PHP Development</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="text-center pt-4 pb-16">
        <div className="inline-flex bg-white/60 rounded-full mb-8 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2">
          <Server className="w-4 h-4 text-orange-500" />
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">PHP and MySQL since 2013</span>
        </div>

        <h1 className="leading-[0.95] lg:text-[4rem] text-4xl font-medium text-zinc-900 tracking-tighter mb-6">
          PHP development services
          <span className="block gradient-text font-light">for apps your business runs on</span>
        </h1>

        <p className="text-base md:text-lg text-zinc-600 max-w-2xl mx-auto mb-4 leading-relaxed font-medium">
          For founders and teams with a PHP app, API, or MySQL database that needs new features, a fix, or an upgrade. I started as a backend PHP and MySQL developer in 2013 and have shipped web products for 13+ years since.
        </p>

        <p className="text-sm text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          The blog on this site runs on WordPress, a PHP backend, with a Next.js front end on top. I build the same pairing for clients.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href={contactHref('php')}
            className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
          >
            <span className="text-sm font-medium tracking-tight">Send me your PHP app</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <Link
            href="/blog/php-api-development-for-nextjs"
            className="btn-secondary hover:bg-zinc-50 transition-all flex text-sm font-medium rounded-full py-3 px-6 gap-2 items-center"
            style={{ boxShadow: '0 18px 35px rgba(31, 41, 55, 0.15), 0 0 0 1px rgba(209, 213, 219, 0.3)' }}
          >
            <span className="text-sm font-medium text-black/60 tracking-tight">Read how I build PHP APIs</span>
            <ArrowRight className="w-4 h-4 text-zinc-500" />
          </Link>
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Answer first */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
          What my PHP development services cover
        </h2>
        <p className="text-zinc-600 leading-relaxed mb-4">
          I build and fix PHP applications, REST APIs, and MySQL databases. That covers new custom apps, APIs that feed a Next.js or mobile front end, slow queries, and old codebases that need a supported PHP version or a move to Laravel. You work with me directly, from reading the code to deploying the change.
        </p>
        <p className="text-zinc-600 leading-relaxed">
          When a rewrite isn’t worth it, I say so and fix what you have. If you’re weighing PHP against a JavaScript backend, I wrote about{' '}
          <Link href="/blog/tentang-next-js-dan-php" className={linkClass}>how Next.js and PHP work together</Link>{' '}
          (in Indonesian).
        </p>
      </section>

      {/* Services Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <div className="inline-flex bg-white/60 rounded-full mb-4 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2">
            <Code2 className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Four kinds of PHP work</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Pick the job that <span className="gradient-text">matches yours</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service) => (
            <Link key={service.title} href={service.href} className="group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-0.5 h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-zinc-100 rounded-xl group-hover:bg-orange-100 transition-colors">
                    <service.icon className="w-5 h-5 text-zinc-600 group-hover:text-orange-500 transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-zinc-900 mb-1 group-hover:text-orange-500 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">{service.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {service.features.map((feature) => (
                    <span key={feature} className="px-2 py-0.5 bg-zinc-100 rounded text-[10px] text-zinc-600 font-medium">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Track record */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <div className="inline-flex bg-white/60 rounded-full mb-4 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2">
            <History className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Track record</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            13+ years of PHP work <span className="gradient-text">you can check</span>
          </h2>
          <p className="text-sm text-zinc-500 max-w-xl mx-auto">
            The full timeline is on my <Link href="/about" className={linkClass}>about page</Link>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {history.map((item) => (
            <div key={item.year} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
              <p className="text-sm font-semibold text-orange-500 mb-2">{item.year}</p>
              <p className="text-sm text-zinc-600 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-zinc-50 rounded-2xl p-6">
          <p className="text-sm text-zinc-600 leading-relaxed">
            I also write up how I work. For PHP, start with{' '}
            <Link href="/blog/php-api-development-for-nextjs" className={linkClass}>PHP API development for Next.js products</Link>
            , which walks through the API layer I put between a PHP backend and a Next.js front end.
          </p>
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Fit */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Hire a PHP developer <span className="gradient-text">who reads the code first</span>
          </h2>
          <p className="text-sm text-zinc-500 max-w-xl mx-auto">I’m one developer, so here’s who I’m a good match for.</p>
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
            <h3 className="font-semibold text-zinc-900 mb-4">Probably someone else</h3>
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

      {/* Process Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            How a PHP project <span className="gradient-text">runs with me</span>
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
      <section className="mb-16 max-w-3xl mx-auto" aria-labelledby="php-faq">
        <h2 id="php-faq" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-6">
          PHP development FAQ
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
            backgroundSize: '40px 40px',
          }}
        />

        <div className="flex flex-col items-center justify-center text-center p-8 md:p-12 lg:p-16 min-h-[400px] relative">
          <h2 className="md:text-4xl lg:text-5xl leading-tight text-3xl font-normal text-white tracking-tight mb-6 max-w-2xl">
            Have a PHP app nobody wants to touch?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg font-medium">
            Send me the repo or a short description. I’ll read it and reply with what I’d fix first and a quote, before you commit to anything.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href={contactHref('php')}
              className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>Send me your PHP app</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services/php-development/modernization"
              className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-all text-white text-sm font-medium rounded-full px-6 py-3"
            >
              <span>See how I upgrade old PHP</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
