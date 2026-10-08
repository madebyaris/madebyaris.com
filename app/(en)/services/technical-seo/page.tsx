import type { Metadata } from 'next'
import Link from 'next/link'
import { Search } from 'lucide-react'
import { JsonLd } from '@/components/seo/json-ld'
import { ServiceLanding } from '@/components/service-landing'
import { contactHref } from '@/lib/contact-services'
import { buildPageGraph, buildPageMetadata, type FaqItem } from '@/lib/seo'

// TODO(aris): USD fee for a technical SEO audit, and a public client cap.
// The only approved price is the WordPress SEO audit: mulai Rp1.500.000, on /jasa-seo-wordpress.

export const revalidate = 86400

const path = '/services/technical-seo'
const pageTitle = 'Technical SEO services'
const pageDescription =
  'Technical SEO services for crawl, index, and speed. Metadata, schema, redirects, and Core Web Vitals. No content writing and no link building.'

const linkClass = 'underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors'

const faqs: FaqItem[] = [
  {
    question: 'What do technical SEO services include?',
    answer:
      'I audit how the site is crawled and indexed, then fix metadata, canonicals, sitemaps, schema, redirects, and the speed issues that show up in Core Web Vitals. You get a written list of fixes.',
  },
  {
    question: 'Do you write articles or build links?',
    answer:
      'No. I do the technical work. Content writing and link building stay with you or with a writer you already trust. I explain each fix so they can build on it.',
  },
  {
    question: 'Do you guarantee a ranking?',
    answer:
      'No. I fix the technical issues I can measure. Rankings also depend on the content, the links, and the competitors. I will not promise a position.',
  },
  {
    question: 'How much does an SEO audit cost?',
    answer:
      'A WordPress SEO audit starts at Rp1.500.000. That is a starting price, and the final quote follows the scope. Other audits are scoped per site. I have not published a USD fee yet.',
  },
]

const structuredData = buildPageGraph({
  path,
  name: pageTitle,
  description: pageDescription,
  breadcrumbs: [
    { name: 'Services', path: '/services' },
    { name: 'Technical SEO', path },
  ],
  service: {
    name: 'Technical SEO',
    description: pageDescription,
    serviceType: 'Technical SEO services',
    offers: [
      {
        name: 'Technical SEO audit',
        description: 'A written list of crawl, index, metadata, and speed issues.',
      },
      {
        name: 'WordPress SEO audit',
        description: 'Audit SEO WordPress, mulai Rp1.500.000. Harga akhir mengikuti scope.',
      },
      {
        name: 'Next.js SEO',
        description: 'App Router metadata, sitemaps, schema, and Core Web Vitals.',
      },
    ],
  },
  faqs,
})

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path,
  keywords: ['technical seo services', 'seo audit services', 'next.js seo services'],
})

export default function TechnicalSeoPage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <ServiceLanding
        icon={Search}
        badge="Technical SEO · no ranking promise"
        h1="Technical SEO services"
        h1Accent="for the parts I can measure"
        intro="For site owners who need the technical side fixed: crawl, index, metadata, redirects, and speed. I am one senior developer, and I do this work myself."
        primaryHref={contactHref('technical-seo')}
        primaryLabel="Send me the site URL"
        secondaryHref="/services/nextjs-development/nextjs-seo"
        secondaryLabel="Next.js SEO services"
        proof="This site is the sample: headless WordPress, Next.js, a sitemap, schema, and llms.txt."
        answerTitle="What technical SEO services cover"
        answer={
          <>
            <p>
              This is the general SEO page. Next.js work has its own page,{' '}
              <Link href="/services/nextjs-development/nextjs-seo" className={linkClass}>
                Next.js SEO services
              </Link>
              . WordPress audits in Indonesian, including the published starting price, are on{' '}
              <Link href="/jasa-seo-wordpress" className={linkClass}>
                jasa SEO WordPress
              </Link>
              .
            </p>
            <p>
              I check ranks after a launch with RankMySEO, the tracker I built. The offer here is
              the fixes, plus a way to see whether they held.
            </p>
          </>
        }
        familiarTitle="Sounds familiar"
        poorFitTitle="A poor fit"
        fitIntro="If the pages cannot be crawled or the old URLs 404 after a redesign, this is the work."
        pains={[
          'A redesign went live and organic traffic dropped',
          'Search Console is full of 404s and duplicate titles',
          'The site is slow on phones and the Core Web Vitals report is red',
        ]}
        poorFit={[
          'You want articles, landing page copy, or a link building campaign',
          'You want a promise of page-one rankings by a date',
          'Nobody can give me Search Console or hosting access',
        ]}
        outcomesTitle="What you get"
        outcomes={[
          {
            title: 'A written audit',
            description: 'What is broken, why it matters, and the order I would fix it.',
          },
          {
            title: 'The fixes in the codebase',
            description: 'Metadata, canonicals, redirects, sitemap, schema, and the speed items I can change.',
          },
          {
            title: 'A trail in Search Console',
            description: 'Old URLs mapped, then checked after launch so 404s do not sit there.',
          },
          {
            title: 'Limits in writing',
            description: 'No articles and no paid or guest links. You always know what I will not do.',
          },
        ]}
        stepsTitle="How an audit runs"
        steps={[
          { title: 'Access', description: 'The URL, Search Console, and the repo or wp-admin.' },
          { title: 'Audit', description: 'A written list before I change production.' },
          { title: 'Fix', description: 'The items you approve, shipped where the site actually runs.' },
          { title: 'Check', description: 'Search Console after the change, so we see what moved.' },
        ]}
        priceTitle="Price"
        priceBody={
          <p>
            A WordPress SEO audit starts at Rp1.500.000. That is a starting price. The final quote
            follows the scope. I have not published a USD fee for other audits.
          </p>
        }
        stackTitle="When a narrower page fits better"
        stackBody={
          <p>
            An App Router site should start on the Next.js SEO page, where metadata and rendering
            are the whole job. A WordPress site for an Indonesian company should start on the jasa
            SEO WordPress page. This page is the front door when the stack is still open.
          </p>
        }
        faqTitle="Questions before an audit"
        faqs={faqs}
        relatedTitle="Related services"
        related={[
          {
            title: 'Next.js SEO services',
            description: 'App Router metadata, schema, sitemaps, and Core Web Vitals.',
            href: '/services/nextjs-development/nextjs-seo',
          },
          {
            title: 'Vercel pricing for Next.js',
            description: 'Hosting cost and the setup that sits under a fast Next.js site.',
            href: '/services/nextjs-development/vercel',
          },
          {
            title: 'Jasa SEO WordPress',
            description: 'Audit WordPress mulai Rp1.500.000.',
            href: '/jasa-seo-wordpress',
          },
          {
            title: 'Web development services',
            description: 'The full list, with Next.js as the flagship stack.',
            href: '/services',
          },
        ]}
        closingTitle="Send the URL and what changed last"
        closingBody="A redesign, a migration, or a slow mobile report is enough context. I reply within 24 hours."
        closingHref={contactHref('technical-seo')}
        closingLabel="Send me the site URL"
      />
    </>
  )
}
