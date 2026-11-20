import type { Metadata } from 'next'
import Link from 'next/link'
import { Code2, Database, Server, ArrowRight, ArrowUpRight, Rocket, History, CheckCircle2, XCircle } from 'lucide-react'
import { PageHero } from '@/components/page/hero'
import { Faq } from '@/components/page/faq'
import { CtaBand } from '@/components/page/cta-band'
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
})

const linkClass = 'text-[#3A57FC] underline decoration-[#3A57FC]/35 underline-offset-4 hover:text-[#2944E0] hover:decoration-[#3A57FC] transition-colors'

export default function PhpDevelopmentPage() {
  return (
    <>
      <JsonLd data={structuredData} />

      {/* Breadcrumb */}
      <nav className="mb-6" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-[#4B5563]">
          <li><Link href="/services" className="hover:text-[#3A57FC] transition-colors">Services</Link></li>
          <li aria-hidden="true" className="text-[#9CA3AF]">/</li>
          <li className="font-medium text-[#0B0C0E]" aria-current="page">PHP Development</li>
        </ol>
      </nav>

      <PageHero
        eyebrow={{ icon: <Server className="w-3.5 h-3.5" />, label: 'PHP and MySQL since 2013' }}
        title="PHP development services"
        accent="for apps your business runs on"
        actions={
          <>
            <Link
              href={contactHref('php')}
              className="btn-primary inline-flex items-center gap-2.5 rounded-md py-3.5 px-6 text-sm font-bold group"
            >
              <span>Send me your PHP app</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              href="/blog/php-api-development-for-nextjs"
              className="btn-secondary inline-flex items-center gap-2 rounded-md py-3.5 px-6 text-sm font-semibold group"
            >
              <span>Read how I build PHP APIs</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </>
        }
      >
        <p className="mb-4">
          For founders and teams with a PHP app, API, or MySQL database that needs new features, a fix, or an upgrade. I started as a backend PHP and MySQL developer in 2013 and have shipped web products for 13+ years since.
        </p>
        <p className="text-sm text-white/80">
          The blog on this site runs on WordPress, a PHP backend, with a Next.js front end on top. I build the same pairing for clients.
        </p>
      </PageHero>

      {/* Answer first */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-4">
          What my PHP development services cover
        </h2>
        <p className="text-[#4B5563] leading-relaxed mb-4">
          I build and fix PHP applications, REST APIs, and MySQL databases. That covers new custom apps, APIs that feed a Next.js or mobile front end, slow queries, and old codebases that need a supported PHP version or a move to Laravel. You work with me directly, from reading the code to deploying the change.
        </p>
        <p className="text-[#4B5563] leading-relaxed">
          When a rewrite isn’t worth it, I say so and fix what you have. If you’re weighing PHP against a JavaScript backend, I wrote about{' '}
          <Link href="/blog/tentang-next-js-dan-php" className={linkClass}>how Next.js and PHP work together</Link>{' '}
          (in Indonesian).
        </p>
      </section>

      {/* Services Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-md border border-[#DDE4FF] bg-[#EEF2FF] px-3 py-1 mb-4">
            <Code2 className="w-3.5 h-3.5 text-[#3A57FC]" />
            <span className="font-mono text-[11px] font-semibold tracking-[0.12em] uppercase text-[#3A57FC]">Four kinds of PHP work</span>
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            Pick the job that <span className="gradient-text">matches yours</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <Link key={service.title} href={service.href} className="group">
              <div className="rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#3A57FC] hover:shadow-[0_20px_50px_-24px_rgba(58,87,252,0.22)] transition-all p-6 md:p-7 h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-[#EEF2FF] text-[#3A57FC] rounded-xl group-hover:bg-[#3A57FC] group-hover:text-white transition-colors shrink-0">
                    <service.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-semibold text-[#0B0C0E] mb-1 group-hover:text-[#3A57FC] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#4B5563] leading-relaxed">{service.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-2.5 py-1 bg-[#F8FAFC] border border-[#E5E7EB] rounded-md text-[11px] text-[#4B5563] font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-[#E5E7EB] mb-16" />

      {/* Track record */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-md border border-[#DDE4FF] bg-[#EEF2FF] px-3 py-1 mb-4">
            <History className="w-3.5 h-3.5 text-[#3A57FC]" />
            <span className="font-mono text-[11px] font-semibold tracking-[0.12em] uppercase text-[#3A57FC]">Track record</span>
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            13+ years of PHP work <span className="gradient-text">you can check</span>
          </h2>
          <p className="text-sm text-[#4B5563] max-w-xl mx-auto">
            The full timeline is on my <Link href="/about" className={linkClass}>about page</Link>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {history.map((item) => (
            <div
              key={item.year}
              className="rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#3A57FC] hover:shadow-[0_20px_50px_-24px_rgba(58,87,252,0.22)] transition-all p-6 md:p-7"
            >
              <p className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-[#3A57FC] mb-2">{item.year}</p>
              <p className="text-sm text-[#4B5563] leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] p-6">
          <p className="text-sm text-[#4B5563] leading-relaxed">
            I also write up how I work. For PHP, start with{' '}
            <Link href="/blog/php-api-development-for-nextjs" className={linkClass}>PHP API development for Next.js products</Link>
            , which walks through the API layer I put between a PHP backend and a Next.js front end.
          </p>
        </div>
      </section>

      <div className="w-full h-px bg-[#E5E7EB] mb-16" />

      {/* Fit */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            Hire a PHP developer <span className="gradient-text">who reads the code first</span>
          </h2>
          <p className="text-sm text-[#4B5563] max-w-xl mx-auto">I’m one developer, so here’s who I’m a good match for.</p>
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
            <h3 className="font-display font-semibold text-[#0B0C0E] mb-4">Probably someone else</h3>
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

      {/* Process Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            How a PHP project <span className="gradient-text">runs with me</span>
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

      <Faq id="php-faq" title="PHP development FAQ" faqs={faqs} />

      <CtaBand
        title="Have a PHP app nobody wants to touch?"
        body="Send me the repo or a short description. I’ll read it and reply with what I’d fix first and a quote, before you commit to anything."
        primary={{ href: contactHref('php'), label: 'Send me your PHP app' }}
        secondary={{ href: '/services/php-development/modernization', label: 'See how I upgrade old PHP' }}
      />
    </>
  )
}
