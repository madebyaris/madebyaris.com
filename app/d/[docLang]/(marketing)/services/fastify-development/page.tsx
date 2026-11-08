import type { Metadata } from 'next'
import { Server } from 'lucide-react'
import { SpecialistLanding } from '@/components/page/specialist-landing'
import { buildPageMetadata, type FaqItem } from '@/lib/seo'

export const revalidate = 86400 // Revalidate daily

const path = '/services/fastify-development'
const pageTitle = 'Fastify development for fast Node.js APIs'
const pageDescription =
  'Build a new Node.js API on Fastify, or move an Express app to it: validated routes, plugins, logging, and tests, in a structure your team can extend.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path,
  keywords: ['Fastify developer', 'Fastify development', 'Fastify vs Express', 'Node.js API development', 'Express to Fastify'],
})

const faqs: FaqItem[] = [
  {
    question: 'How much does a Fastify API cost?',
    answer:
      'It depends on the number of endpoints and the systems it connects to. Projects start from $5,000. After a short scoping call you get a written plan and a quote before any code is written.',
  },
  {
    question: 'Fastify or Express?',
    answer:
      'Express is fine for a small API. Fastify is a better base when you want validated input, structured logging, and a clear plugin structure as the API grows. Tell me what you have and I say which fits.',
  },
  {
    question: 'Can you move our Express app without a rewrite?',
    answer:
      'Usually, yes. I move it route by route and keep tests passing, so the API keeps working while it changes underneath.',
  },
  {
    question: 'Can you also fix our database?',
    answer: 'Yes. A fast API needs fast queries, and I do database optimization as a separate service.',
  },
]

export default function FastifyDevelopmentPage() {
  return (
    <SpecialistLanding
      path={path}
      name={pageTitle}
      description={pageDescription}
      serviceType="Fastify development"
      breadcrumbName="Fastify development"
      eyebrow={{ icon: <Server className="w-4 h-4 text-orange-500" />, label: 'Fastify development' }}
      title="A fast Node.js API"
      accent="your team can extend"
      intro={
        <p>
          Fastify is a Node.js web framework with built-in input validation, structured logging, and a plugin system. I build
          new APIs on it and move Express apps to it, with tests and a structure that keeps the code readable as it grows.
        </p>
      }
      signsTitle="Signs you need this"
      signs={[
        'Your Node API is slow under load, or response times vary',
        'Request data is not validated, and bad input reaches your database',
        'Routes and middleware have grown into something nobody wants to touch',
        'You are starting a new back end and want a solid base',
      ]}
      offersTitle="What I do"
      offers={[
        {
          title: 'New APIs on Fastify',
          body: 'Routes with schema validation, plugins for shared logic, structured logging, and tests from the first endpoint.',
        },
        {
          title: 'Move from Express',
          body: 'Migrate route by route while tests keep passing, so the API stays live.',
        },
        {
          title: 'Performance and load tests',
          body: 'Find the slow endpoints under realistic load and fix them, including the queries behind them.',
          href: '/services/database-optimization',
          cta: 'See database optimization',
        },
        {
          title: 'TypeScript and structure',
          body: 'Typed routes, a clear folder layout, and conventions written down for your team.',
        },
        {
          title: 'A React front end to match',
          body: 'A Vite and React app that talks to the API, built and deployed together.',
          href: '/services/vite-development',
          cta: 'See Vite development',
        },
        {
          title: 'Clean code for your team and AI',
          body: 'Rules and checks that keep the API tidy as developers and AI agents add routes.',
          href: '/services/clean-code-for-teams-and-ai',
          cta: 'See clean code work',
        },
      ]}
      sourceNote="x.com's new web app server is reported to run on Fastify (X engineering report, as covered by iTechPost, 5 November 2026)."
      steps={[
        { title: 'Scope', desc: 'We agree the endpoints, the data, and what a fast response means for you.' },
        { title: 'Build or move', desc: 'I build the API, or migrate yours route by route, with tests.' },
        { title: 'Load test', desc: 'I test under realistic traffic and fix what is slow.' },
        { title: 'Hand over', desc: 'You get the code in your repo and notes your team can follow.' },
      ]}
      faqTitle="Questions about Fastify"
      faqs={faqs}
      related={[
        { href: '/blog/fastify-vs-express', label: 'Fastify vs Express' },
        { href: '/services/database-optimization', label: 'Database optimization' },
        { href: '/services/vite-development', label: 'Vite development' },
        { href: '/product-engineering', label: 'Product engineering' },
      ]}
      ctaTitle="Send me your API"
      ctaBody="Tell me what the API does and where it hurts. I reply within 24 hours with questions or a plain answer on what I would change first."
      ctaLabel="Send me your API"
    />
  )
}
