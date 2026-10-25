import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Database, Zap, BarChart, CheckCircle2, XCircle, Code2, ShoppingCart } from 'lucide-react'
import { buildPageGraph, buildPageMetadata, type FaqItem } from '@/lib/seo'
import { JsonLd } from '@/components/seo/json-ld'
import { contactHref } from '@/lib/contact-services'

export const revalidate = 86400 // Revalidate daily

const pagePath = '/services/php-development/database-solutions'
const pageTitle = 'MySQL Database Optimization for PHP Apps | Aris Setiawan'
const pageDescription =
  'Slow PHP or Laravel app? I find the slow MySQL queries. I fix indexes, schema and code on a copy first. I tell you if the database is not the cause.'

const pageMetadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
  brand: false,
  keywords: [
    'MySQL database optimization',
    'slow MySQL queries',
    'PHP database design',
    'MySQL query tuning',
    'MySQL indexing',
  ],
})

export const metadata: Metadata = {
  ...pageMetadata,
  title: { absolute: pageTitle },
  openGraph: pageMetadata.openGraph
    ? { ...pageMetadata.openGraph, title: pageTitle }
    : undefined,
  twitter: pageMetadata.twitter ? { ...pageMetadata.twitter, title: pageTitle } : undefined,
}

const fixItems = [
  {
    title: 'Slow queries',
    description: 'Each fix targets a query from your own logs. You can see which page got faster and why.',
    icon: Zap,
  },
  {
    title: 'Indexes',
    description:
      'I build indexes for your real WHERE and JOIN clauses. I do not add extra indexes that slow down every write.',
    icon: Database,
  },
  {
    title: 'Table structure',
    description: 'I change the schema and write migrations that fit the features you plan.',
    icon: BarChart,
  },
  {
    title: 'Code logic',
    description:
      'In Laravel, I fix Eloquent code that loads too much, such as missing eager loading. In plain PHP apps, I tune the raw SQL. A loop that sends one query per row is a common cause.',
    icon: Code2,
  },
  {
    title: 'WordPress and WooCommerce',
    description: 'woocommerce-link',
    icon: ShoppingCart,
  },
]

const goodFit = [
  'Pages that were fast at launch now take seconds to load.',
  'Reports or exports time out when the date range grows.',
  'The database server runs at high CPU during normal traffic.',
  'A planned feature is difficult because of how the tables are laid out.',
]

const poorFit = [
  'The slow part is the front end, such as large images or heavy scripts.',
  'You need a database administrator on call at all hours. I do not offer that service.',
]

const processSteps = [
  {
    step: 1,
    title: 'Measure',
    desc: 'I turn on the slow query log and collect a baseline from real traffic.',
  },
  {
    step: 2,
    title: 'Diagnose',
    desc: 'I run EXPLAIN on the worst queries and trace them back to the PHP code.',
  },
  {
    step: 3,
    title: 'Fix on a copy',
    desc: 'I test indexes, query rewrites and schema changes on a copy of your data. I do not change the live database first.',
  },
  {
    step: 4,
    title: 'Roll out',
    desc: 'I apply the changes with a backup and a rollback path. Then I compare the result with the baseline.',
  },
]

const faqs: FaqItem[] = [
  {
    question: 'How much does MySQL database optimization cost?',
    answer:
      'The price depends on the size of the database and the number of slow queries. I scope each job separately. You get a scope and a quote before I change anything.',
  },
  {
    question: 'Do we need a new database, or can you fix the one we have?',
    answer:
      'You can keep the one you have in most cases. Most slow MySQL setups need better indexes, rewritten queries or some schema changes. If a move to a different database is necessary, I tell you plainly.',
  },
  {
    question: 'Will the site go down while you change the database?',
    answer:
      'Most index and query fixes run while the site stays online. Large table changes can lock writes. I test those on a copy of the data first. I schedule them for a quiet hour, with a backup ready.',
  },
  {
    question: 'Is the fix in Laravel Eloquent or in raw SQL?',
    answer:
      'It can be in either place. In my example above, the fix was in both the table structure and the code logic.',
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
    offers: fixItems.map((item) => ({
      name: item.title,
      description:
        item.description === 'woocommerce-link'
          ? 'I also tune WordPress and WooCommerce databases, such as WooCommerce stores with slow product queries.'
          : item.description,
    })),
  },
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
          {' '}<span className="block gradient-text font-light">for PHP apps that got slow</span>
        </h1>

        <p className="text-base md:text-lg text-zinc-600 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          This page is for teams whose PHP app gets slower as the tables grow. I find the slow MySQL queries in your app. I fix each one at the source. I scope each job separately before I quote a price.
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

      {/* Fit */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Is it the database or <span className="gradient-text">something else?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <p className="text-sm text-zinc-600 mb-4 leading-relaxed">
              The database is a likely cause when you see these signs:
            </p>
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
            <p className="text-sm text-zinc-600 mb-4 leading-relaxed">
              The cause is probably something else in these cases:
            </p>
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

      {/* What I need */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
          What I need from you
        </h2>
        <p className="text-zinc-600 leading-relaxed mb-4">
          Before I start, I need access to three things:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-zinc-600 leading-relaxed mb-4">
          <li>the server</li>
          <li>the database</li>
          <li>the source code</li>
        </ul>
        <p className="text-zinc-600 leading-relaxed">
          Client work can stay private under an NDA. I do not share client names.
        </p>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* What I fix */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            What I <span className="gradient-text">fix</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {fixItems.map((item) => (
            <div key={item.title} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all group">
              <div className="p-3 bg-zinc-100 rounded-xl w-fit mb-4 group-hover:bg-orange-100 transition-colors">
                <item.icon className="w-5 h-5 text-zinc-600 group-hover:text-orange-500 transition-colors" />
              </div>
              <h3 className="font-semibold text-zinc-900 mb-2">{item.title}</h3>
              {item.description === 'woocommerce-link' ? (
                <p className="text-sm text-zinc-500 leading-relaxed">
                  I also tune WordPress and WooCommerce databases, such as{' '}
                  <Link href="/services/wordpress/woocommerce" className={linkClass}>
                    WooCommerce stores with slow product queries
                  </Link>
                  .
                </p>
              ) : (
                <p className="text-sm text-zinc-500 leading-relaxed">{item.description}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* One example */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
          One example
        </h2>
        <p className="text-zinc-600 leading-relaxed">
          One app had slow queries because the SQL used too many joins. I changed the table structure. I also changed the logic in the code that sent those queries. After these two changes, the app ran faster.
        </p>
      </section>

      {/* Databases and tools */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
          Databases and tools I use
        </h2>
        <p className="text-zinc-600 leading-relaxed">
          I work with MySQL, MariaDB, PostgreSQL and Redis. To find slow queries, I use the slow query log and EXPLAIN. In PHP code, I work with Eloquent and Doctrine. I have designed MySQL databases since 2013. At SEREWare, I built PHP and MySQL web applications and their databases.
        </p>
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

      {/* What you get */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
          What you get at the end
        </h2>
        <p className="text-zinc-600 leading-relaxed">
          You get a short report. It tells you what was slow, what changed, and which queries to watch. Keep the slow query log on, so new problems show early. I can check again later if you want.
        </p>
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
      <section className="overflow-hidden shadow-zinc-900/30 bg-zinc-900 rounded-4xl relative shadow-2xl mb-8">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="flex flex-col items-center justify-center text-center px-6 py-12 md:px-12 md:py-14 relative">
          <h2 className="md:text-4xl lg:text-5xl leading-tight text-3xl font-normal text-white tracking-tight mb-6 max-w-2xl">
            Pages getting slower every month?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg font-medium">
            Send me the slow pages or your slow query log. I will tell you where the time goes and what I would fix first. You decide before you commit to anything.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link href={contactHref('php')} className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              <span>Ask about your slow queries</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/services/php-development/modernization" className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-all text-white text-sm font-medium rounded-full px-6 py-3">
              <span>Old PHP version too? See PHP version upgrades</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/services/php-development/api-development" className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-all text-white text-sm font-medium rounded-full px-6 py-3">
              <span>Data behind an API? See PHP API development</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
