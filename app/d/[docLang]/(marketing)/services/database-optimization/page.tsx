import type { Metadata } from 'next'
import Link from 'next/link'
import { Database } from 'lucide-react'
import { SpecialistLanding } from '@/components/page/specialist-landing'
import { buildPageMetadata, type FaqItem } from '@/lib/seo'

export const revalidate = 86400 // Revalidate daily

const path = '/services/database-optimization'
const pageTitle = 'Database optimization and performance tuning'
const pageDescription =
  'Find the slow queries, add the right indexes, and fix schema and connection problems so your database stays fast as data grows. Projects from $5,000.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path,
  keywords: [
    'database performance tuning',
    'database optimization services',
    'slow query optimization',
    'PostgreSQL performance tuning',
    'MySQL optimization',
  ],
})

const linkClass = 'underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors'

const faqs: FaqItem[] = [
  {
    question: 'How much does database optimization cost?',
    answer:
      'It depends on the size of the database and how many queries are slow. Projects start from $5,000. After a short scoping call you get a written plan and a quote before anything is changed.',
  },
  {
    question: 'Which databases do you work with?',
    answer: 'PostgreSQL and MySQL. If you run something else, tell me and I say whether I am the right fit.',
  },
  {
    question: 'Will the work cause downtime?',
    answer:
      'I test every change on a copy first and take a backup before it touches production. Most index and query changes need no downtime. If one does, I tell you before we start.',
  },
  {
    question: 'How do we know it worked?',
    answer: 'I measure the same queries and workload before and after, and give you both sets of numbers.',
  },
]

export default function DatabaseOptimizationPage() {
  return (
    <SpecialistLanding
      path={path}
      name={pageTitle}
      description={pageDescription}
      serviceType="Database optimization"
      breadcrumbName="Database optimization"
      eyebrow={{ icon: <Database className="w-4 h-4 text-orange-500" />, label: 'Database optimization' }}
      title="A database that stays fast"
      accent="as your data grows"
      intro={
        <p>
          Your app slows down as the data grows, or one report holds everything up. I find the slow queries with real
          measurements, fix them with indexes, query changes, and schema fixes, and check the result on the same workload.
        </p>
      }
      signsTitle="Signs your database needs tuning"
      signs={[
        'Pages and reports got slower as the tables grew',
        'One heavy query slows the whole app down',
        'The database server is busy even when traffic is low',
        'A batch job that handles a thousand records in one run takes too long or fails',
      ]}
      offersTitle="What I do"
      offers={[
        {
          title: 'Find the slow queries',
          body: 'I read query plans and slow-query logs to see which queries cost the most, so we fix those first.',
        },
        {
          title: 'Indexes and query rewrites',
          body: 'The right indexes, and rewritten queries where the plan shows wasted work.',
        },
        {
          title: 'Schema and data types',
          body: 'Fix table design and column types that make queries slower than they need to be.',
        },
        {
          title: 'Connections and caching',
          body: 'Connection pooling and caching in the right places, so the database does less repeated work.',
        },
        {
          title: 'Batch and bulk work',
          body: 'Tune jobs that process many records in one go, such as a thousand at a time.',
        },
        {
          title: 'The API in front of it',
          body: 'A fast database also needs a fast API. I build and tune Node.js APIs on Fastify.',
          href: '/services/fastify-development',
          cta: 'See Fastify development',
        },
      ]}
      steps={[
        { title: 'Measure', desc: 'I capture slow queries and load on your real workload.' },
        { title: 'Rank', desc: 'You get a list of fixes ordered by how much time each saves.' },
        { title: 'Fix', desc: 'I test each change on a copy, then apply it with a backup in place.' },
        { title: 'Verify', desc: 'We re-run the same workload and compare the numbers.' },
      ]}
      proof={{
        title: 'Running a PHP app on MySQL?',
        body: (
          <p>
            I also have a page for MySQL tuning on PHP apps, including WordPress and Laravel:{' '}
            <Link href="/services/php-development/database-solutions" className={linkClass}>
              MySQL database optimization for PHP apps
            </Link>
            .
          </p>
        ),
      }}
      faqTitle="Questions about database optimization"
      faqs={faqs}
      related={[
        { href: '/services/fastify-development', label: 'Fastify development' },
        { href: '/services/php-development/database-solutions', label: 'MySQL for PHP apps' },
        { href: '/product-engineering', label: 'Product engineering' },
      ]}
      ctaTitle="Send me your slow queries"
      ctaBody="Tell me what is slow and which database you run. I reply within 24 hours with questions or a plain answer on what I would measure first."
      ctaLabel="Send me your slow queries"
    />
  )
}
