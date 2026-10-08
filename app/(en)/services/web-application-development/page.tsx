import type { Metadata } from 'next'
import Link from 'next/link'
import { AppWindow } from 'lucide-react'
import { JsonLd } from '@/components/seo/json-ld'
import { ServiceLanding } from '@/components/service-landing'
import { contactHref } from '@/lib/contact-services'
import { buildPageGraph, buildPageMetadata, type FaqItem } from '@/lib/seo'

// TODO(aris): starting price for a web application. No number is approved yet.
// TODO(aris): a typical timeline once you want one published. The written scope holds the dates for now.

export const revalidate = 86400

const path = '/services/web-application-development'
const pageTitle = 'Web application development services'
const pageDescription =
  'Web application development services for dashboards, portals, and tools with login. Next.js or PHP, scoped in writing before I start. One senior developer.'

const linkClass = 'underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors'

const faqs: FaqItem[] = [
  {
    question: 'What is a web application development service here?',
    answer:
      'A browser app with accounts, data, and the screens your team or customers use. I design the scope with you, write the code, and hand over a repository you own.',
  },
  {
    question: 'Do you build iOS or Android apps?',
    answer:
      'I build applications that run in the browser. Native iOS and Android apps are outside this offer. If the job is a phone app, I will say so before any quote.',
  },
  {
    question: 'Which stack do you use?',
    answer:
      'Next.js when the product is new and needs a fast front end. PHP when you already have a PHP system, or when the server should stay on a host you know. The choice goes in the written scope.',
  },
  {
    question: 'How much does a web application cost?',
    answer:
      'Price is scoped per project. You get a written plan and a quote before I start. I do not publish a starting price for this service yet.',
  },
]

const structuredData = buildPageGraph({
  path,
  name: pageTitle,
  description: pageDescription,
  breadcrumbs: [
    { name: 'Services', path: '/services' },
    { name: 'Web application development', path },
  ],
  service: {
    name: 'Web application development',
    description: pageDescription,
    serviceType: 'Web application development services',
    offers: [
      { name: 'Custom web application', description: 'Login, roles, and the screens the work needs.' },
      { name: 'Next.js product', description: 'A new app on the App Router when that stack fits.' },
      { name: 'PHP application', description: 'An app or portal on PHP when that is the better home.' },
    ],
  },
  faqs,
})

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path,
  keywords: [
    'web application development services',
    'custom web application development',
    'web app development services',
  ],
})

export default function WebApplicationDevelopmentPage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <ServiceLanding
        icon={AppWindow}
        badge="Web apps · one developer · remote"
        h1="Web application development services"
        h1Accent="for tools people log in to"
        intro="For founders and operators who need software their team uses every day, with a written scope before the build."
        primaryHref={contactHref('web-app')}
        primaryLabel="Send me the workflow"
        secondaryHref="/services/nextjs-development"
        secondaryLabel="See Next.js development services"
        proof="13+ years · Independent since 2015 · Sidoarjo, remote worldwide · English and Indonesian"
        answerTitle="What web application development services cover"
        answer={
          <p>
            This page owns the stack-neutral job: a custom web application. Next.js development
            services stay on the{' '}
            <Link href="/services/nextjs-development" className={linkClass}>
              Next.js page
            </Link>
            . Custom PHP application development stays on the{' '}
            <Link href="/services/php-development/custom-applications" className={linkClass}>
              PHP applications page
            </Link>
            . If you are in Indonesia, the same offer is on{' '}
            <Link href="/jasa-pembuatan-aplikasi-web" className={linkClass}>
              jasa pembuatan aplikasi web
            </Link>
            .
          </p>
        }
        familiarTitle="Sounds familiar"
        poorFitTitle="A poor fit"
        fitIntro="Tell me the job the software has to do. I will name the stack in the scope."
        pains={[
          'Staff copy the same data between spreadsheets and chat',
          'Customers need an account, and a template site cannot do it',
          'An old tool works, and nobody wants to touch the code',
        ]}
        poorFit={[
          'You need a native app in the App Store and Play Store',
          'You need several developers in parallel from week one',
          'The workflow is still changing every day and nobody can describe it',
        ]}
        outcomesTitle="What you get"
        outcomes={[
          {
            title: 'Accounts and roles',
            description: 'People see the screens they are allowed to use, and the rest stay out.',
          },
          {
            title: 'A place for the data',
            description: 'Records live in a database with a schema another developer can read.',
          },
          {
            title: 'A repository you own',
            description: 'The code is in your Git host, with notes for the next person who edits it.',
          },
          {
            title: 'A stack that matches the job',
            description: 'Next.js for a new product. PHP when the current system should stay.',
          },
        ]}
        stepsTitle="How a build runs"
        steps={[
          { title: 'Scope', description: 'You send the workflow. I ask what must not break.' },
          { title: 'Plan', description: 'A written scope and a quote, before any code.' },
          { title: 'Build', description: 'A preview you can click, updated through the build.' },
          { title: 'Handoff', description: 'Repository, docs, and a list of what I left out on purpose.' },
        ]}
        priceTitle="Price"
        priceBody={
          <p>
            Price is scoped per project. You get a written plan and a quote before I start. I have
            not published a starting price for web applications.
          </p>
        }
        stackTitle="When another stack fits better"
        stackBody={
          <p>
            A marketing site your editors update every week is often WordPress. A public brochure
            with a few forms does not need accounts. I will say that in the first reply. Next.js
            stays the flagship when the product is new and the front end has to be fast.
          </p>
        }
        faqTitle="Questions before you hire"
        faqs={faqs}
        relatedTitle="Related services"
        related={[
          {
            title: 'Next.js development services',
            description: 'The flagship stack for new products and migrations.',
            href: '/services/nextjs-development',
          },
          {
            title: 'Custom PHP applications',
            description: 'PHP and MySQL when the app should stay on that stack.',
            href: '/services/php-development/custom-applications',
          },
          {
            title: 'Jasa pembuatan aplikasi web',
            description: 'The same offer in Bahasa Indonesia.',
            href: '/jasa-pembuatan-aplikasi-web',
          },
          {
            title: 'Website maintenance',
            description: 'Care after launch, separate from the first build.',
            href: '/services/website-maintenance',
          },
        ]}
        closingTitle="Send the workflow, even if it is messy"
        closingBody="A few sentences and a sample screen are enough. I reply within 24 hours and tell you if I am the right fit."
        closingHref={contactHref('web-app')}
        closingLabel="Send me the workflow"
      />
    </>
  )
}
