import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Database, Zap, Shield, BarChart, CheckCircle2, XCircle } from 'lucide-react'
import { buildPageGraph, buildPageMetadata, type FaqItem } from '@/lib/seo'
import { JsonLd } from '@/components/seo/json-ld'
import { contactHref } from '@/lib/contact-services'

export const revalidate = 86400 // Revalidate daily

const pagePath = '/services/php-development/database-solutions'
const pageTitle = 'MySQL Database Optimization for PHP Apps'
const pageDescription =
  'MySQL database optimization for PHP apps: find the slow queries, add the right indexes, and fix the schema so pages and reports stop timing out.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
  keywords: [
    'MySQL database optimization',
    'slow MySQL queries',
    'PHP database design',
    'MySQL query tuning',
    'MySQL indexing',
  ],
})

const outcomes = [
  {
    title: 'Slow queries found and fixed',
    description: 'Each fix targets a query from your own logs, so you can see which page got faster and why.',
    icon: Zap,
  },
  {
    title: 'Indexes that match how you query',
    description: 'Indexes built for your real WHERE and JOIN clauses, without extra ones that slow down every write.',
    icon: Database,
  },
  {
    title: 'A schema ready for what is next',
    description: 'Schema changes and migrations that fit the features you plan, so new work stops needing workarounds.',
    icon: BarChart,
  },
  {
    title: 'Changes that are safe to apply',
    description: 'A backup before every change and migrations tested on a copy of your data first.',
    icon: Shield,
  },
]

const goodFit = [
  'Pages that were fast at launch now take seconds to load',
  'Reports or exports time out once the date range grows',
  'The database server runs at high CPU during normal traffic',
  'A planned feature is awkward because of how the tables are laid out',
]

const poorFit = [
  'The slow part is the front end, like large images or heavy scripts',
  'You need a database administrator on call around the clock',
]

const technologies = ['MySQL', 'MariaDB', 'PostgreSQL', 'Redis', 'Slow query log', 'EXPLAIN', 'Eloquent', 'Doctrine']

const processSteps = [
  { step: 1, title: 'Measure', desc: 'Turn on the slow query log and collect a baseline from real traffic.' },
  { step: 2, title: 'Diagnose', desc: 'Run EXPLAIN on the worst queries and trace them back to the PHP code.' },
  { step: 3, title: 'Fix on a copy', desc: 'Test indexes, rewrites, and schema changes against a copy of your data.' },
  { step: 4, title: 'Roll out', desc: 'Apply with a backup and a rollback path, then compare against the baseline.' },
]

const faqs: FaqItem[] = [
  {
    question: 'How much does MySQL database optimization cost?',
    answer:
      'It depends on the size of the database and how many queries are slow, so I scope each job separately. Send me your slow query log or a list of the slow pages. You get a scope and a quote before I change anything.',
  },
  {
    question: 'Do we need a new database, or can you fix the one we have?',
    answer:
      'Almost always the one you have. Most slow MySQL setups need better indexes, rewritten queries, or a few schema changes. Moving to a different database is rarely the fix, and I will tell you plainly if yours is the exception.',
  },
  {
    question: 'Will the site go down while you change the database?',
    answer:
      'Most index and query fixes run while the site stays online. Large table changes can lock writes, so I test them on a copy first, schedule them for a quiet hour, and keep a backup ready.',
  },
  {
    question: 'Is the fix in Laravel Eloquent or in raw SQL?',
    answer:
      'Either. In Laravel I fix Eloquent code that loads too much, like missing eager loading. In plain PHP apps I tune the raw SQL directly. The aim is the same: fewer queries, and faster ones.',
  },
  {
    question: 'Who keeps the database fast after you finish?',
    answer:
      'You get a short report on what was slow, what changed, and which queries to watch. Keep the slow query log on, and new problems show up early. I can check in again later if you want.',
  },
]

const structuredData = buildPageGraph({
  path: pagePath,
  name: pageTitle,
  description: pageDescription,
  breadcrumbs: [
    { name: 'Services', path: '/services' },
    { name: 'PHP Development', path: '/services/php-development' },
    { name: 'MySQL Optimization', path: pagePath },
  ],
  service: {
    name: 'MySQL database optimization',
    description: pageDescription,
    serviceType: 'MySQL Database Optimization',
    offers: outcomes.map((item) => ({ name: item.title, description: item.description })),
  },
  faqs,
})

const linkClass = 'underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors'

export default function DatabaseSolutionsPage() {
  return (
    <>
      <JsonLd data={structuredData} />

      {/* Breadcrumb */}
      <nav className="mb-8" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-zinc-500">
          <li><Link href="/services" className="hover:text-orange-500 transition-colors">Services</Link></li>
          <li><span className="px-2">/</span></li>
          <li><Link href="/services/php-development" className="hover:text-orange-500 transition-colors">PHP Development</Link></li>
          <li><span className="px-2">/</span></li>
          <li className="text-zinc-900">MySQL Optimization</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="text-center pt-4 pb-16">
        <div className="inline-flex bg-white/60 rounded-full mb-8 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2">
          <Database className="w-4 h-4 text-orange-500" />
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">MySQL for PHP apps</span>
        </div>

        <h1 className="leading-[0.95] lg:text-[4rem] text-4xl font-medium text-zinc-900 tracking-tighter mb-6">
          MySQL database optimization
          <span className="block gradient-text font-light">for PHP apps that got slow</span>
        </h1>

        <p className="text-base md:text-lg text-zinc-600 max-w-2xl mx-auto mb-4 leading-relaxed font-medium">
          For teams whose PHP app gets slower as the tables grow: pages that hang, reports that time out, a database server stuck at full CPU. I’ve designed MySQL databases since my first backend job in 2013.
        </p>

        <p className="text-sm text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          In 2014 I built PHP and MySQL web applications, and the databases behind them, at SEREWare.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href={contactHref('php')}
            className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
          >
            <span className="text-sm font-medium tracking-tight">Ask about your slow queries</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <Link
            href="/services/php-development"
            className="btn-secondary hover:bg-zinc-50 transition-all flex text-sm font-medium rounded-full py-3 px-6 gap-2 items-center"
            style={{ boxShadow: '0 18px 35px rgba(31, 41, 55, 0.15), 0 0 0 1px rgba(209, 213, 219, 0.3)' }}
          >
            <span className="text-sm font-medium text-black/60 tracking-tight">See all PHP services</span>
            <ArrowRight className="w-4 h-4 text-zinc-500" />
          </Link>
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Answer first */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
          What MySQL database optimization involves
        </h2>
        <p className="text-zinc-600 leading-relaxed mb-4">
          MySQL database optimization means finding the queries that make your app slow and fixing them at the source. I read the slow query log, run EXPLAIN on the worst offenders, then add indexes, rewrite queries, or change the schema. In a PHP app the fix often sits in the code too, like a loop that runs one query per row.
        </p>
        <p className="text-zinc-600 leading-relaxed">
          If the database feeds a Next.js front end through an API, caching at the API layer helps as well. See{' '}
          <Link href="/services/php-development/api-development" className={linkClass}>PHP API development</Link>.
        </p>
      </section>

      {/* Fit */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Signs of <span className="gradient-text">slow MySQL queries</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-zinc-900 mb-4">Sounds like the database</h3>
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
            <h3 className="font-semibold text-zinc-900 mb-4">Probably something else</h3>
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
            What you get from <span className="gradient-text">PHP database design work</span>
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

      {/* Technologies */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Databases and <span className="gradient-text">tools I use</span>
          </h2>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {technologies.map((tech) => (
              <div key={tech} className="p-3 bg-zinc-50 rounded-xl text-center text-sm font-medium text-zinc-600">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            How the tuning <span className="gradient-text">runs</span>
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
      <section className="mb-16 max-w-3xl mx-auto" aria-labelledby="mysql-faq">
        <h2 id="mysql-faq" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-6">
          MySQL optimization FAQ
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
            Pages getting slower every month?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg font-medium">
            Send me the slow pages or your slow query log. I’ll tell you where the time goes and what I’d fix first, before you commit to anything.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link href={contactHref('php')} className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              <span>Ask about your slow queries</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/services/php-development/modernization" className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-all text-white text-sm font-medium rounded-full px-6 py-3">
              <span>Old PHP version too? See upgrades</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
