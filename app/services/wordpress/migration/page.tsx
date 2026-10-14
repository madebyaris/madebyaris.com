import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  FileInput,
  Globe,
  Link2,
  Rocket,
  Server,
  Truck,
  XCircle,
} from 'lucide-react'
import { PageHero } from '@/components/page/hero'
import { HeroImage } from '@/components/page/hero-image'
import { Faq } from '@/components/page/faq'
import { CtaBand } from '@/components/page/cta-band'
import { buildPageGraph, buildPageMetadata, type FaqItem } from '@/lib/seo'
import { JsonLd } from '@/components/seo/json-ld'
import { contactHref } from '@/lib/contact-services'

export const revalidate = 86400 // Revalidate daily

const pagePath = '/services/wordpress/migration'
const pageTitle = 'WordPress migration service without losing SEO'
const pageDescription =
  'WordPress migration service for new hosts, new domains, and moves from other CMSs. Redirect maps, staging tests, and Search Console checks after the switch.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
  image: '/images/services/wordpress.jpg',
  keywords: [
    'WordPress migration service',
    'migrate WordPress to a new host',
    'move WordPress site without losing SEO',
    'WordPress to Next.js migration',
    'migrate to WordPress',
    'WordPress domain change',
  ],
})

const migrationTypes = [
  {
    title: 'Host to host',
    description:
      'Your host is slow, expensive, or ending your plan. The domain and URLs stay the same, so the risk sits in the database copy and the DNS switch.',
    icon: Server,
  },
  {
    title: 'Domain change',
    description:
      'A rebrand or a new domain. Every old URL gets a 301 redirect to its new address, and I file the change of address in Search Console.',
    icon: Globe,
  },
  {
    title: 'HTTPS or URL structure change',
    description:
      'Moving from HTTP to HTTPS, changing permalinks, or merging sections. The site stays put while the URLs change, so the redirect map is most of the job.',
    icon: Link2,
  },
  {
    title: 'Another CMS into WordPress',
    description:
      'Your site runs on Wix, Squarespace, Blogger, or custom PHP and you want WordPress. I import the posts, pages, and media, and redirect the old URLs.',
    icon: FileInput,
  },
  {
    title: 'WordPress to headless or Next.js',
    description:
      'Keep wp-admin for your editors and serve the pages from Next.js. The SEO checks are the same, with a new front end built on top.',
    icon: Rocket,
  },
]

const checklist = [
  'A full crawl of the old site and an inventory of every URL that gets traffic or links',
  'A 301 redirect map for every URL that changes, tested on staging before launch',
  'Titles, meta descriptions, canonicals, and schema carried over page by page',
  'Database search-replace for the old domain, including serialized plugin data',
  'Every image and file checked so nothing points at the old server',
  'Forms, order and contact emails, logins, and checkout tested on staging',
  'The search engine visibility setting and robots.txt checked, so staging rules stay on staging',
  'DNS switched in a quiet hour, with the old site still running until the new one is checked',
  'XML sitemap submitted in Search Console, then the 404 and indexing reports watched in the weeks after',
  'Your keywords tracked in RankMySEO before and after the move, so a drop is caught early',
]

const goodFit = [
  'Your host is slow, raising prices, or ending your plan, and you want to move',
  'You are changing domains or permalinks and search traffic matters to you',
  'Your site is on Wix, Squarespace, Blogger, or custom PHP and you want WordPress',
  'A previous move went badly and Search Console is full of 404s',
]

const poorFit = [
  'The site is small, gets little search traffic, and your new host offers a free migration plugin',
  'You need a promise that rankings will not move at all',
  'You want your email hosting moved and managed for you (that stays with your email provider)',
]

const processSteps = [
  { step: 1, title: 'Send the site', desc: 'The URL, where it is going, and what has to change' },
  { step: 2, title: 'Inventory', desc: 'A crawl, a URL list, a backup, and a written scope' },
  { step: 3, title: 'Move on staging', desc: 'Database, media, redirects, and tests on the new host' },
  { step: 4, title: 'Switch and watch', desc: 'DNS in a quiet hour, then Search Console and rank checks' },
]

const topics = [
  {
    title: 'How to pick a VPS for WordPress',
    description: 'What to compare before you pay for the new host.',
    href: '/blog/how-to-pick-vps-for-wordpress',
  },
  {
    title: 'Technical SEO audit checklist',
    description: 'The checks I run on a site before and after a move.',
    href: '/blog/technical-seo-audit-checklist',
  },
  {
    title: 'Technical SEO services',
    description: 'Redirect cleanup and Search Console work when a past migration already cost you traffic.',
    href: '/services/seo',
  },
  {
    title: 'Headless WordPress with Next.js',
    description: 'How this site keeps WordPress as the editor and serves pages from Next.js.',
    href: '/blog/headless-wordpress-with-nextjs',
  },
  {
    title: 'Migrasi WordPress ke Next.js untuk bisnis',
    description: 'Kapan pindah ke Next.js masuk akal, dalam Bahasa Indonesia.',
    href: '/blog/migrasi-wordpress-ke-nextjs-bisnis',
  },
  {
    title: 'WordPress maintenance',
    description: 'Updates, backups, and checks after the new site is live.',
    href: '/services/wordpress/maintenance',
  },
]

const linkClass = 'underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors'

const faqs: FaqItem[] = [
  {
    question: 'How much does a WordPress migration service cost?',
    answer:
      'I price each move after a first look. A host move for a small blog and a domain change for a large store are different jobs. Send me the URL, where it is going, and what has to change. I reply with the risks I see and a price for the move.',
  },
  {
    question: 'Will I lose my Google rankings after a migration?',
    answer:
      'When the URLs stay the same, a host move carries little SEO risk. Domain and URL changes carry more, and rankings can shift while Google recrawls. Nobody can promise zero movement. I redirect every changed URL, keep titles and schema intact, and track your keywords so a drop gets fixed early.',
  },
  {
    question: 'Will my site go down during the move?',
    answer:
      'I plan the DNS switch for a quiet hour, and the old site stays up until the new one is checked. DNS changes take a while to reach every visitor, so for a short time some people reach the old server. I ask you to pause content edits during that window, and for stores we agree on how to handle orders.',
  },
  {
    question: 'Can you move my email too?',
    answer:
      'Email hosting is your email provider’s job, and that account stays with them. When I move DNS, I copy the MX and other mail records exactly, so email keeps working after the switch. If your email lives on the old web host, I tell you before the move so you can set up a new provider first.',
  },
  {
    question: 'What do you need from me to migrate my site?',
    answer:
      'Logins for the old host, the new host, and wherever your DNS is managed. A recent backup if you have one, though I take my own before I touch anything. And a list of what must keep working, like forms, payments, or member logins.',
  },
  {
    question: 'What if my old host is slow or locks me out?',
    answer:
      'A slow host makes the copy take longer, and I can still pull files and the database over SFTP or SSH. If the host blocks access entirely, ask their support for a full backup and I restore it on the new server. I tell you early if the old host is what is holding the move up.',
  },
]

const structuredData = buildPageGraph({
  path: pagePath,
  name: pageTitle,
  description: pageDescription,
  breadcrumbs: [
    { name: 'Services', path: '/services' },
    { name: 'WordPress', path: '/services/wordpress' },
    { name: 'Migration', path: pagePath },
  ],
  service: {
    name: 'WordPress migration service',
    description: pageDescription,
    serviceType: 'WordPress Migration',
    offers: [
      { name: 'WordPress host to host migration' },
      { name: 'WordPress domain change' },
      { name: 'HTTPS and URL structure migration' },
      { name: 'Migration to WordPress from another CMS' },
      { name: 'WordPress to Next.js migration' },
      { name: 'Post-migration SEO monitoring' },
    ],
  },
  faqs,
})

export default function WordPressMigrationPage() {
  return (
    <>
      <JsonLd data={structuredData} />

      <nav className="mb-8" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-zinc-500">
          <li><Link href="/services" className="hover:text-orange-500 transition-colors">Services</Link></li>
          <li><span className="px-2">/</span></li>
          <li><Link href="/services/wordpress" className="hover:text-orange-500 transition-colors">WordPress</Link></li>
          <li><span className="px-2">/</span></li>
          <li className="text-zinc-900">Migration</li>
        </ol>
      </nav>

      <PageHero
        eyebrow={{ icon: <Truck className="w-4 h-4 text-orange-500" />, label: 'Moving a WordPress site' }}
        title="WordPress migration service"
        accent="planned around your SEO"
        actions={
          <>
            <Link
              href={contactHref('wordpress')}
              className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
            >
              <span className="text-sm font-medium tracking-tight">Send me the site you want to move</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <a
              href="#checklist"
              className="btn-secondary hover:bg-zinc-50 transition-all flex text-sm font-medium rounded-full py-3 px-6 gap-2 items-center"
              style={{ boxShadow: '0 18px 35px rgba(31, 41, 55, 0.15), 0 0 0 1px rgba(209, 213, 219, 0.3)' }}
            >
              <span className="text-sm font-medium text-black/60 tracking-tight">See the migration checklist</span>
              <ArrowRight className="w-4 h-4 text-zinc-500" />
            </a>
          </>
        }
      >
        <p className="mb-4">
          For site owners moving to a new host, a new domain, or into WordPress from another CMS. I copy the site to
          staging, map every URL, and switch over only after the new site checks out.
        </p>
        <p className="text-sm text-zinc-500 font-normal">
          13+ years building WordPress sites, themes, and plugins. I also do technical SEO and built RankMySEO, a rank tracker with daily Google ranking history.
        </p>
      </PageHero>

      <HeroImage src="/images/services/wordpress.jpg" alt="Illustration of a WordPress site layout being updated, with a security shield, maintenance tools, and a migration box" />

      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
          What my WordPress migration service covers
        </h2>
        <p className="text-zinc-600 leading-relaxed mb-4">
          A WordPress migration service moves your files, database, and media to a new home and keeps every URL Google
          knows working. I copy the site to staging first and build a redirect map for anything that changes. Forms,
          email, and checkout get tested before the switch, and the old site stays up until the new one is checked.
        </p>
        <p className="text-zinc-600 leading-relaxed">
          I check hardest for two mistakes: URLs that change without a redirect, and a staging setting that hides the
          site from search engines. Both are easy to prevent and slow to recover from. After the switch I watch Search
          Console and your rankings, so a problem shows up while it is still small.
        </p>
      </section>

      <section className="mb-16" aria-labelledby="types">
        <div className="text-center mb-10">
          <h2 id="types" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Migrate WordPress to a new host, <span className="gradient-text">domain, or stack</span>
          </h2>
          <p className="text-sm text-zinc-500 max-w-xl mx-auto">
            Each kind of move breaks in a different place. Tell me which one you have and I will tell you where the risk is.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {migrationTypes.map((item) => (
            <div key={item.title} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all group">
              <div className="p-3 bg-zinc-100 rounded-xl w-fit mb-4 group-hover:bg-orange-100 transition-colors">
                <item.icon className="w-5 h-5 text-zinc-600 group-hover:text-orange-500 transition-colors" />
              </div>
              <h3 className="font-semibold text-zinc-900 mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-zinc-500 text-center mt-6 max-w-2xl mx-auto">
          Still choosing the new host? Read{' '}
          <Link href="/blog/how-to-pick-vps-for-wordpress" className={linkClass}>
            how to pick a VPS for WordPress
          </Link>{' '}
          first, because a slow server on the new side defeats the point of moving.
        </p>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      <section id="checklist" className="mb-16 max-w-3xl mx-auto scroll-mt-32">
        <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
          How I move a WordPress site without losing SEO
        </h2>
        <p className="text-zinc-600 leading-relaxed mb-6">
          Every move follows this checklist, whatever the size of the site. The crawl comes first, because I cannot
          redirect a URL I do not know exists. The audit side of it is in my{' '}
          <Link href="/blog/technical-seo-audit-checklist" className={linkClass}>
            technical SEO audit checklist
          </Link>
          .
        </p>
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
          <ul className="space-y-3">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-zinc-700">
                <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-16 max-w-3xl mx-auto" aria-labelledby="nextjs">
        <h2 id="nextjs" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
          WordPress to Next.js migration
        </h2>
        <p className="text-zinc-600 leading-relaxed mb-4">
          Some moves change the front end. With{' '}
          <Link href="/services/wordpress/headless-development" className={linkClass}>
            headless WordPress
          </Link>
          , your editors keep wp-admin and the pages are served from Next.js. This site runs that way, on Vercel. The
          redirect map and SEO checks above still apply, with a new front end built on top.
        </p>
        <p className="text-zinc-600 leading-relaxed">
          It is a bigger job than a host move, so read{' '}
          <Link href="/blog/wordpress-vs-nextjs-when-worth-it" className={linkClass}>
            WordPress vs Next.js: when it’s worth it
          </Link>{' '}
          before you commit. If speed is the real complaint, a{' '}
          <Link href="/services/wordpress/optimization" className={linkClass}>
            speed fix on your current site
          </Link>{' '}
          may cost less and get you most of the way.
        </p>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      <section className="mb-16" aria-labelledby="fit">
        <div className="text-center mb-10">
          <h2 id="fit" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Do you need a <span className="gradient-text">migration service?</span>
          </h2>
          <p className="text-sm text-zinc-500 max-w-xl mx-auto">
            If a free plugin can move your site safely, I will say so.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-zinc-900 mb-4">Good fit</h3>
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
            <h3 className="font-semibold text-zinc-900 mb-4">Look elsewhere</h3>
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

      <section className="mb-16" aria-labelledby="process">
        <div className="text-center mb-10">
          <h2 id="process" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            How a WordPress migration <span className="gradient-text">runs</span>
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

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      <section className="mb-16" aria-labelledby="topics">
        <div className="text-center mb-10">
          <h2 id="topics" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Migration guides <span className="gradient-text">and related services</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {topics.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all group"
            >
              <h3 className="font-semibold text-zinc-900 mb-1 flex items-center justify-between gap-3">
                {item.title}
                <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-orange-500 group-hover:translate-x-0.5 transition-all shrink-0" />
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <Faq id="migration-faq" title="WordPress migration FAQ" faqs={faqs} />

      <CtaBand
        title="Planning to move your WordPress site?"
        body="Send me the URL and where it is going. I reply with what could break, what I would check first, and a price for the move. If a free plugin can do it safely, I will tell you."
        primary={{ href: contactHref('wordpress'), label: 'Send me the site you want to move' }}
        secondary={{ href: '/services/wordpress', label: 'Other WordPress services' }}
      />
    </>
  )
}
