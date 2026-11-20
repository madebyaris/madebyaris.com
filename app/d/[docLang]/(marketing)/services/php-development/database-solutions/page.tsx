import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Database, Zap, BarChart, CheckCircle2, XCircle, Code2, ShoppingCart } from 'lucide-react'
import { PageHero } from '@/components/page/hero'
import { Faq } from '@/components/page/faq'
import { CtaBand } from '@/components/page/cta-band'
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

const linkClass = 'text-[#3A57FC] underline decoration-[#3A57FC]/35 underline-offset-4 hover:text-[#2944E0] hover:decoration-[#3A57FC] transition-colors'

export default function DatabaseSolutionsPage() {
  return (
    <>
      <JsonLd data={structuredData} />

      {/* Breadcrumb */}
      <nav className="mb-6" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-[#4B5563]">
          <li><Link href="/services" className="hover:text-[#3A57FC] transition-colors">Services</Link></li>
          <li aria-hidden="true" className="text-[#9CA3AF]">/</li>
          <li><Link href="/services/php-development" className="hover:text-[#3A57FC] transition-colors">PHP Development</Link></li>
          <li aria-hidden="true" className="text-[#9CA3AF]">/</li>
          <li className="font-medium text-[#0B0C0E]" aria-current="page">MySQL Optimization</li>
        </ol>
      </nav>

      <PageHero
        eyebrow={{ icon: <Database className="w-3.5 h-3.5" />, label: 'MySQL for PHP apps' }}
        title="MySQL database optimization"
        accent="for PHP apps that got slow"
        actions={
          <>
            <Link
              href={contactHref('php')}
              className="btn-primary inline-flex items-center gap-2.5 rounded-md py-3.5 px-6 text-sm font-bold group"
            >
              <span>Ask about your slow queries</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              href="/services/php-development"
              className="btn-secondary inline-flex items-center gap-2 rounded-md py-3.5 px-6 text-sm font-semibold group"
            >
              <span>See all PHP services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </>
        }
      >
        <p>
          This page is for teams whose PHP app gets slower as the tables grow. I find the slow MySQL queries in your app. I fix each one at the source. I scope each job separately before I quote a price.
        </p>
      </PageHero>

      {/* Fit */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            Is it the database or <span className="gradient-text">something else?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 md:p-7">
            <p className="text-sm font-medium text-[#0B0C0E] mb-4 leading-relaxed">
              The database is a likely cause when you see these signs:
            </p>
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
            <p className="text-sm font-medium text-[#0B0C0E] mb-4 leading-relaxed">
              The cause is probably something else in these cases:
            </p>
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

      {/* What I need */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-4">
          What I need from you
        </h2>
        <p className="text-[#4B5563] leading-relaxed mb-4">
          Before I start, I need access to three things:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-[#4B5563] leading-relaxed mb-4">
          <li>the server</li>
          <li>the database</li>
          <li>the source code</li>
        </ul>
        <p className="text-[#4B5563] leading-relaxed">
          Client work can stay private under an NDA. I do not share client names.
        </p>
      </section>

      <div className="w-full h-px bg-[#E5E7EB] mb-16" />

      {/* What I fix */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            What I <span className="gradient-text">fix</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {fixItems.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#3A57FC] hover:shadow-[0_20px_50px_-24px_rgba(58,87,252,0.22)] transition-all p-6 md:p-7 group"
            >
              <div className="p-3 bg-[#EEF2FF] text-[#3A57FC] rounded-xl w-fit mb-4 group-hover:bg-[#3A57FC] group-hover:text-white transition-colors">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="font-display font-semibold text-[#0B0C0E] mb-2">{item.title}</h3>
              {item.description === 'woocommerce-link' ? (
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  I also tune WordPress and WooCommerce databases, such as{' '}
                  <Link href="/services/wordpress/woocommerce" className={linkClass}>
                    WooCommerce stores with slow product queries
                  </Link>
                  .
                </p>
              ) : (
                <p className="text-sm text-[#4B5563] leading-relaxed">{item.description}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* One example */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-4">
          One example
        </h2>
        <p className="text-[#4B5563] leading-relaxed">
          One app had slow queries because the SQL used too many joins. I changed the table structure. I also changed the logic in the code that sent those queries. After these two changes, the app ran faster.
        </p>
      </section>

      {/* Databases and tools */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-4">
          Databases and tools I use
        </h2>
        <p className="text-[#4B5563] leading-relaxed">
          I work with MySQL, MariaDB, PostgreSQL and Redis. To find slow queries, I use the slow query log and EXPLAIN. In PHP code, I work with Eloquent and Doctrine. I have designed MySQL databases since 2013. At SEREWare, I built PHP and MySQL web applications and their databases.
        </p>
      </section>

      {/* Process */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            How the tuning <span className="gradient-text">runs</span>
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

      {/* What you get */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-4">
          What you get at the end
        </h2>
        <p className="text-[#4B5563] leading-relaxed">
          You get a short report. It tells you what was slow, what changed, and which queries to watch. Keep the slow query log on, so new problems show early. I can check again later if you want.
        </p>
      </section>

      <Faq id="mysql-faq" title="MySQL optimization FAQ" faqs={faqs} />

      <CtaBand
        title="Pages getting slower every month?"
        body="Send me the slow pages or your slow query log. I will tell you where the time goes and what I would fix first. You decide before you commit to anything."
        primary={{ href: contactHref('php'), label: 'Ask about your slow queries' }}
        secondary={{ href: '/services/php-development/modernization', label: 'Old PHP version too? See PHP version upgrades' }}
      />

      <p className="text-center text-sm text-[#4B5563] mb-16 max-w-xl mx-auto leading-relaxed">
        Data behind an API? See{' '}
        <Link href="/services/php-development/api-development" className={linkClass}>
          PHP API development
        </Link>
        . Running PostgreSQL, or tuning the API in front of the database? See{' '}
        <Link href="/services/database-optimization" className={linkClass}>
          database optimization
        </Link>
        .
      </p>
    </>
  )
}
