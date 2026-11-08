import type { Metadata } from 'next'
import { Zap } from 'lucide-react'
import { SpecialistLanding } from '@/components/page/specialist-landing'
import { buildPageMetadata, type FaqItem } from '@/lib/seo'

export const revalidate = 86400 // Revalidate daily

const path = '/services/vite-development'
const pageTitle = 'Vite development and migration services'
const pageDescription =
  'Move your React app to Vite, or build on it from day one: faster builds, a quicker dev server, and a setup your team can maintain. Projects from $5,000.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path,
  keywords: ['Vite developer', 'migrate to Vite', 'Vite migration', 'Create React App to Vite', 'Vite React'],
})

const faqs: FaqItem[] = [
  {
    question: 'How much does a Vite migration cost?',
    answer:
      'It depends on the size of the app and how custom the current build is. Projects start from $5,000. After a short scoping call you get a written plan and a quote before any code is changed.',
  },
  {
    question: 'Will anything break when we move to Vite?',
    answer:
      'Some things need attention, such as environment variables, imports, and custom build steps. I migrate in a branch, run your tests, and compare the build output before anything goes live.',
  },
  {
    question: 'Should we use Vite or Next.js?',
    answer:
      'Vite suits apps and dashboards that do not depend on search traffic. Next.js suits sites that need server rendering and strong SEO. Tell me what you are building and I give you a straight answer.',
  },
]

export default function ViteDevelopmentPage() {
  return (
    <SpecialistLanding
      path={path}
      name={pageTitle}
      description={pageDescription}
      serviceType="Vite development"
      breadcrumbName="Vite development"
      eyebrow={{ icon: <Zap className="w-4 h-4 text-orange-500" />, label: 'Vite development' }}
      title="Move to Vite,"
      accent="and get your builds back"
      intro={
        <p>
          Vite is the build tool behind many modern React apps. If your builds are slow, your dev server lags, or nobody wants
          to touch the old build setup, I move the app to Vite, or start a new one on it. You get a setup your team can read.
        </p>
      }
      signsTitle="Signs it is time for Vite"
      signs={[
        'Builds or the dev server take minutes',
        'The app still runs on Create React App or an old Webpack setup',
        'The build configuration is a file nobody dares to change',
        'You want a modern base for a new React app',
      ]}
      offersTitle="What I do"
      offers={[
        {
          title: 'Migrate to Vite',
          body: 'Move an app from Create React App or Webpack to Vite, in a branch, with your tests running before and after.',
        },
        {
          title: 'Build and dev-server tuning',
          body: 'Chunking, dependency handling, and build settings, so builds are quick and bundles stay small.',
        },
        {
          title: 'Config and environment cleanup',
          body: 'One clear setup for environment variables, aliases, and scripts, written down for the team.',
        },
        {
          title: 'New apps on Vite',
          body: 'A new React and TypeScript app with tests, linting, and deployment set up from the first commit.',
        },
        {
          title: 'Improve the React app too',
          body: 'A faster build does not fix a slow app. I can measure and fix that as well.',
          href: '/services/react-app-improvement',
          cta: 'See React app improvement',
        },
        {
          title: 'A Node API next to it',
          body: 'If the app needs a back end, I build it on Fastify.',
          href: '/services/fastify-development',
          cta: 'See Fastify development',
        },
      ]}
      sourceNote="x.com's new web app is reported to be built on React, Vite, Fastify, and TypeScript (X engineering report, as covered by iTechPost, 5 November 2026)."
      steps={[
        { title: 'Review', desc: 'I read your current build setup and list what will change.' },
        { title: 'Migrate', desc: 'I move the app to Vite in a branch and run your tests.' },
        { title: 'Compare', desc: 'We compare build time, bundle size, and behavior before going live.' },
        { title: 'Hand over', desc: 'You get notes on the new setup that your team can follow.' },
      ]}
      faqTitle="Questions about Vite"
      faqs={faqs}
      alternate={{ prefix: 'Dalam Bahasa Indonesia:', label: 'lihat halaman Bahasa Indonesia', href: '/services/jasa-vite' }}
      related={[
        { href: '/services/react-app-improvement', label: 'React app improvement' },
        { href: '/services/fastify-development', label: 'Fastify development' },
        { href: '/services/nextjs-development', label: 'Next.js development' },
      ]}
      ctaTitle="Send me your build setup"
      ctaBody="Tell me what you run today and what hurts. I reply within 24 hours with questions or a plain answer on whether Vite is the right move."
      ctaLabel="Send me your build setup"
    />
  )
}
