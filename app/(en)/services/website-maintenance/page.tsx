import type { Metadata } from 'next'
import Link from 'next/link'
import { Wrench } from 'lucide-react'
import { JsonLd } from '@/components/seo/json-ld'
import { ServiceLanding } from '@/components/service-landing'
import { contactHref } from '@/lib/contact-services'
import { buildPageGraph, buildPageMetadata, type FaqItem } from '@/lib/seo'

// TODO(aris): monthly starting price for website maintenance, in USD.
// TODO(aris): what a month includes (hours, response window beyond the 24-hour reply, backup policy).

export const revalidate = 86400

const path = '/services/website-maintenance'
const pageTitle = 'Website maintenance services'
const pageDescription =
  'Website maintenance services after launch: updates, breakages, and small fixes on WordPress, Next.js, or PHP. Ongoing care, separate from a one-off speed job.'

const linkClass = 'underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors'

const faqs: FaqItem[] = [
  {
    question: 'What do website maintenance services include?',
    answer:
      'I keep a live site healthy: platform and plugin updates, fixes when something breaks, and small changes you send in writing. The exact list goes in the scope before we start.',
  },
  {
    question: 'Is this the same as a speed optimization?',
    answer:
      'No. Maintenance is ongoing care. A one-off speed and security pass lives on the WordPress speed optimization page. I will point you there when that is the job.',
  },
  {
    question: 'Which sites can you maintain?',
    answer:
      'WordPress, Next.js, and PHP sites I can read and deploy. If the host or the codebase blocks that, I say so before a quote.',
  },
  {
    question: 'How much does maintenance cost?',
    answer:
      'Price is scoped per site. You get a written plan and a quote before I start. I have not published a monthly starting price yet.',
  },
]

const structuredData = buildPageGraph({
  path,
  name: pageTitle,
  description: pageDescription,
  breadcrumbs: [
    { name: 'Services', path: '/services' },
    { name: 'Website maintenance', path },
  ],
  service: {
    name: 'Website maintenance',
    description: pageDescription,
    serviceType: 'Website maintenance services',
    offers: [
      { name: 'WordPress maintenance', description: 'Updates and fixes on a WordPress site.' },
      { name: 'Next.js maintenance', description: 'Fixes and small releases on a Next.js app.' },
      { name: 'PHP maintenance', description: 'Care for a PHP app that still serves the business.' },
    ],
  },
  faqs,
})

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path,
  keywords: ['website maintenance services', 'wordpress maintenance services'],
})

export default function WebsiteMaintenancePage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <ServiceLanding
        icon={Wrench}
        badge="After launch · WordPress, Next.js, PHP"
        h1="Website maintenance services"
        h1Accent="so the site keeps working"
        intro="For owners who already have a site and need one developer to update it, fix what breaks, and make the small changes."
        primaryHref={contactHref('maintenance')}
        primaryLabel="Send me the site URL"
        secondaryHref="/jasa-maintenance-website"
        secondaryLabel="Baca dalam Bahasa Indonesia"
        proof="13+ years · Independent since 2015 · I reply within 24 hours"
        answerTitle="What website maintenance services cover"
        answer={
          <p>
            This page is ongoing care. A one-time speed job stays on{' '}
            <Link href="/services/wordpress/optimization" className={linkClass}>
              WordPress speed optimization
            </Link>
            . PHP upkeep also sits under{' '}
            <Link href="/services/php-development" className={linkClass}>
              PHP development
            </Link>
            . Indonesian buyers can start at{' '}
            <Link href="/jasa-maintenance-website" className={linkClass}>
              jasa maintenance website
            </Link>
            .
          </p>
        }
        familiarTitle="Sounds familiar"
        poorFitTitle="A poor fit"
        fitIntro="Send the URL and what broke last. I will tell you if a retainer fits, or if the site needs a rebuild first."
        pains={[
          'A plugin update took the site down and nobody knew how to roll it back',
          'Small text changes wait weeks because the last developer left',
          'You are afraid to touch the host in case the site goes offline',
        ]}
        poorFit={[
          'You want a new product built from a blank repository',
          'You need a 24-hour on-call rota with several people',
          'The site has no repository and no one can share hosting access',
        ]}
        outcomesTitle="What you get"
        outcomes={[
          {
            title: 'Updates with a way back',
            description: 'I update what is safe to update, and I can undo a change that breaks the site.',
          },
          {
            title: 'A place to send small fixes',
            description: 'You write the change. I ship it and tell you when it is live.',
          },
          {
            title: 'A stack I already work in',
            description: 'WordPress, Next.js, or PHP. If I cannot maintain the host, I say so.',
          },
          {
            title: 'A written boundary',
            description: 'The scope says what a month includes, so a new feature does not sneak in as a fix.',
          },
        ]}
        stepsTitle="How maintenance starts"
        steps={[
          { title: 'Look', description: 'I read the site, the host, and the last thing that broke.' },
          { title: 'Scope', description: 'A written list of what the retainer covers, and a quote.' },
          { title: 'Care', description: 'Updates and the fixes you send, on the cadence we agreed.' },
          { title: 'Stop cleanly', description: 'You can end it. The code and the host stay yours.' },
        ]}
        priceTitle="Price"
        priceBody={
          <p>
            Price is scoped per site. You get a written plan and a quote before I start. I have not
            published a monthly starting price for maintenance.
          </p>
        }
        stackTitle="When another offer fits better"
        stackBody={
          <p>
            If the pages are slow and you want that fixed once, start with speed optimization. If
            the codebase cannot be deployed safely, the first job is a cleanup or a migration, then
            maintenance. I will say which one in the first reply.
          </p>
        }
        faqTitle="Questions before you start"
        faqs={faqs}
        relatedTitle="Related services"
        related={[
          {
            title: 'WordPress speed optimization',
            description: 'A one-off speed and security pass, separate from monthly care.',
            href: '/services/wordpress/optimization',
          },
          {
            title: 'PHP development',
            description: 'APIs, custom apps, and legacy PHP that still runs the business.',
            href: '/services/php-development',
          },
          {
            title: 'Jasa maintenance website',
            description: 'Perawatan website, dalam Bahasa Indonesia.',
            href: '/jasa-maintenance-website',
          },
          {
            title: 'Next.js development',
            description: 'When the right move is a rebuild on Next.js, the flagship stack.',
            href: '/services/nextjs-development',
          },
        ]}
        closingTitle="Send the URL and what broke last"
        closingBody="I reply within 24 hours. If maintenance is the wrong shape for the site, I will say so."
        closingHref={contactHref('maintenance')}
        closingLabel="Send me the site URL"
      />
    </>
  )
}
