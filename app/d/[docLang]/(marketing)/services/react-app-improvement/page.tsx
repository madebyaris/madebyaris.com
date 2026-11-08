import type { Metadata } from 'next'
import Link from 'next/link'
import { Gauge } from 'lucide-react'
import { SpecialistLanding } from '@/components/page/specialist-landing'
import { buildPageMetadata, type FaqItem } from '@/lib/seo'

export const revalidate = 86400 // Revalidate daily

const path = '/services/react-app-improvement'
const pageTitle = 'React performance optimization services'
const pageDescription =
  'Make a slow or messy React app fast and easier to change: bundle size, load time, rendering, and structure. Measured before and after. Projects from $5,000.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path,
  keywords: [
    'React performance optimization',
    'React app optimization',
    'hire React developer',
    'React bundle size',
    'React code review',
  ],
})

const linkClass = 'underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors'

const faqs: FaqItem[] = [
  {
    question: 'How much does React performance work cost?',
    answer:
      'It depends on the size of the app and how many screens are slow. Projects start from $5,000. After a short scoping call you get a written plan and a quote before any code is changed.',
  },
  {
    question: 'Do you rewrite the app?',
    answer:
      'Usually not. I fix the biggest causes first, in your existing code, and we stop when the numbers are good enough for your users.',
  },
  {
    question: 'How do we know it worked?',
    answer:
      'I run the same test before and after, on a throttled connection, and give you both sets of numbers. If a change did not help, I say so.',
  },
  {
    question: 'Do you also work on Next.js apps?',
    answer: 'Yes. See my Next.js development page, or send me the app and I tell you which fixes apply.',
  },
]

export default function ReactAppImprovementPage() {
  return (
    <SpecialistLanding
      path={path}
      name={pageTitle}
      description={pageDescription}
      serviceType="React performance optimization"
      breadcrumbName="React app improvement"
      eyebrow={{ icon: <Gauge className="w-4 h-4 text-orange-500" />, label: 'React app improvement' }}
      title="Make your React app faster,"
      accent="and easier to change"
      intro={
        <p>
          Your React app loads slowly, feels slow to use, or is hard for your team to change. I measure where the time goes, fix
          the biggest causes first, and show you the before and after numbers. I work in your repo, so you keep the code.
        </p>
      }
      signsTitle="Signs your React app needs work"
      signs={[
        'Pages take seconds to show on a phone or a slow connection',
        'The JavaScript bundle keeps growing with every release',
        'Screens re-render for no clear reason, and typing or scrolling lags',
        'Every change breaks something somewhere else',
      ]}
      offersTitle="What I do"
      offers={[
        {
          title: 'Measure first',
          body: 'Tests on a throttled connection and a bundle analysis, so we fix what is actually slow and skip what is not.',
        },
        {
          title: 'Ship less JavaScript',
          body: 'Split the app by route, load heavy code only when it is needed, and remove libraries you do not use.',
        },
        {
          title: 'Fix rendering',
          body: 'Find components that re-render too often and state that lives in the wrong place.',
        },
        {
          title: 'Simplify the structure',
          body: 'Break up very large components and agree conventions, so the next change is small.',
        },
        {
          title: 'Move to Vite when it helps',
          body: 'If your build tool is slow or out of date, I can move the app to Vite.',
          href: '/services/vite-development',
          cta: 'See Vite development',
        },
        {
          title: 'Clean code for your team and AI',
          body: 'Rules and checks that keep the app tidy as developers and AI agents add code.',
          href: '/services/clean-code-for-teams-and-ai',
          cta: 'See clean code work',
        },
      ]}
      proof={{
        title: 'A result from my own product',
        body: (
          <p>
            In one of my own products I cut the sign-in first contentful paint from 7.4 to 1.6 seconds in a Slow 4G lab test,
            using lazy routes and smaller images. This is a lab number from one app, so your result will differ.{' '}
            <Link href="/blog/how-we-made-a-dashboard-fast-on-slow-networks" className={linkClass}>
              Read the write-up
            </Link>
            .
          </p>
        ),
      }}
      steps={[
        { title: 'Audit', desc: 'I measure load time, bundle size, and rendering on your real app.' },
        { title: 'Plan', desc: 'You get a ranked list of fixes with the expected effect of each.' },
        { title: 'Fix', desc: 'I change the code in your repo, one fix at a time, and re-test.' },
        { title: 'Hand over', desc: 'You get the before and after numbers and notes your team can follow.' },
      ]}
      faqTitle="Questions about React performance work"
      faqs={faqs}
      related={[
        { href: '/services/vite-development', label: 'Vite development' },
        { href: '/services/nextjs-development', label: 'Next.js development' },
        { href: '/product-engineering', label: 'Product engineering' },
      ]}
      ctaTitle="Send me your React app"
      ctaBody="Share a link or the repo and tell me what feels slow. I reply within 24 hours with questions or a plain answer on what I would check first."
      ctaLabel="Send me your React app"
    />
  )
}
