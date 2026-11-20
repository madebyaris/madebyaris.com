import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Code2, Database, Shield, Server, CheckCircle2, XCircle } from 'lucide-react'
import { PageHero } from '@/components/page/hero'
import { Faq } from '@/components/page/faq'
import { CtaBand } from '@/components/page/cta-band'
import { buildPageGraph, buildPageMetadata, type FaqItem } from '@/lib/seo'
import { JsonLd } from '@/components/seo/json-ld'
import { contactHref } from '@/lib/contact-services'

export const revalidate = 86400 // Revalidate daily

const pagePath = '/services/php-development/custom-applications'
const pageTitle = 'Custom PHP Application Development'
const pageDescription =
  'Custom PHP application development for internal tools, portals, and dashboards, built in Laravel or plain PHP by a developer shipping PHP since 2013.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
  keywords: [
    'custom PHP application development',
    'PHP web application developer',
    'custom PHP development',
    'Laravel development',
    'internal tool development',
  ],
})

const outcomes = [
  {
    title: 'Built around your process',
    description: 'Screens and rules follow how your team already works, so there is less training and fewer workarounds.',
    icon: Code2,
  },
  {
    title: 'Logins and roles',
    description: 'Each person sees only what they should, from the admin to a customer checking an order.',
    icon: Shield,
  },
  {
    title: 'Reports from your own data',
    description: 'Dashboards and exports on your MySQL database, so nobody assembles the weekly report by hand.',
    icon: Database,
  },
  {
    title: 'Connects to what you use',
    description: 'Links to your email, payment, or accounting tools, plus an API of its own if a Next.js front end comes later.',
    icon: Server,
  },
]

const goodFit = [
  'Your team copies the same data between spreadsheets every week',
  'An off-the-shelf tool forces a workaround for your core process',
  'Customers or staff need a portal with their own logins',
  'You already run PHP hosting and want the app to live there',
]

const poorFit = [
  'An existing SaaS tool already covers your process well',
  'You need a native mobile app before anything else',
]

const processSteps = [
  { step: 1, title: 'Map the workflow', desc: 'Walk me through the process and the data behind it.' },
  { step: 2, title: 'Scope version one', desc: 'The smallest version that removes the biggest pain, with a quote.' },
  { step: 3, title: 'Build in steps', desc: 'You click through working screens on a staging copy as each part lands.' },
  { step: 4, title: 'Launch and hand over', desc: 'Deploy to your hosting, import the data, and hand over the docs.' },
]

const faqs: FaqItem[] = [
  {
    question: 'How much does a custom PHP application cost?',
    answer:
      'It depends on how many screens, roles, and integrations the first version needs, so I quote each project separately. Describe the process and who uses it. You get a written scope and a quote before any work starts.',
  },
  {
    question: 'We already have an old PHP app. Should you extend it or start over?',
    answer:
      'I read the existing code before deciding. If it runs on a supported PHP version and has a sane structure, extending it is usually faster and cheaper. If it blocks every change, I suggest a step-by-step upgrade first, and only a rebuild when that would cost more.',
  },
  {
    question: 'Will our current system go down while the new app is built?',
    answer:
      'The new app is built and tested on a separate staging copy while your current system keeps running. Switching over is a planned step, usually with a data import, and we schedule it together.',
  },
  {
    question: 'Will you build it in Laravel or plain PHP?',
    answer:
      'Laravel for most new apps, because logins, roles, queues, and database migrations come built in. Plain PHP makes sense when the app has to live inside an existing plain PHP system. Either way, it runs on a MySQL database you own.',
  },
  {
    question: 'Who maintains the app after launch?',
    answer:
      'You own the code, the repo, and the database. I hand over notes on how the app is built and deployed, so your team or another developer can take over. If you want me to keep adding features, we agree on that after launch.',
  },
]

const structuredData = buildPageGraph({
  path: pagePath,
  name: pageTitle,
  description: pageDescription,
  breadcrumbs: [
    { name: 'Services', path: '/services' },
    { name: 'PHP Development', path: '/services/php-development' },
    { name: 'Custom Applications', path: pagePath },
  ],
  service: {
    name: 'Custom PHP application development',
    description: pageDescription,
    serviceType: 'Custom PHP Application Development',
    offers: outcomes.map((item) => ({ name: item.title, description: item.description })),
  },
})

const linkClass = 'text-[#3A57FC] underline decoration-[#3A57FC]/35 underline-offset-4 hover:text-[#2944E0] hover:decoration-[#3A57FC] transition-colors'

export default function CustomApplicationsPage() {
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
          <li className="font-medium text-[#0B0C0E]" aria-current="page">Custom Applications</li>
        </ol>
      </nav>

      <PageHero
        eyebrow={{ icon: <Code2 className="w-3.5 h-3.5" />, label: 'Custom PHP apps' }}
        title="Custom PHP application development"
        accent="built around how your team works"
        actions={
          <>
            <Link
              href={contactHref('php')}
              className="btn-primary inline-flex items-center gap-2.5 rounded-md py-3.5 px-6 text-sm font-bold group"
            >
              <span>Describe the app you need</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              href="/services/php-development/api-development"
              className="btn-secondary inline-flex items-center gap-2 rounded-md py-3.5 px-6 text-sm font-semibold group"
            >
              <span>Need an API instead?</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </>
        }
      >
        <p className="mb-4">
          For businesses that outgrew spreadsheets or an off-the-shelf tool and need an app that fits their process. I built my first PHP and MySQL web applications at SEREWare in 2014 and have shipped web products for 13+ years.
        </p>
        <p className="text-sm text-white/80">
          You work with me directly, from the first workflow sketch to the deploy.
        </p>
      </PageHero>

      {/* Answer first */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-4">
          What custom PHP application development gets you
        </h2>
        <p className="text-[#4B5563] leading-relaxed mb-4">
          Custom PHP application development means building a web app around your own process: the forms, rules, roles, and reports your team uses every day. I build it in Laravel, or in plain PHP when it has to sit next to an existing system, on{' '}
          <Link href="/services/php-development/database-solutions" className={linkClass}>
            a MySQL database you own
          </Link>
          . You get software that matches how you work, in code another developer can pick up later.
        </p>
        <p className="text-[#4B5563] leading-relaxed">
          If a Next.js front end is on your roadmap, the app can expose its own API from day one. I explain how the two fit in{' '}
          <Link href="/blog/tentang-next-js-dan-php" className={linkClass}>Tentang Next.js dan PHP</Link> (in Indonesian).
        </p>
      </section>

      {/* Fit */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            When to hire a <span className="gradient-text">PHP web application developer</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 md:p-7">
            <h3 className="font-display font-semibold text-[#0B0C0E] mb-4">Good fit</h3>
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
            <h3 className="font-display font-semibold text-[#0B0C0E] mb-4">Probably not worth building</h3>
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

      <div className="w-full h-px bg-[#E5E7EB] mb-16" />

      {/* Outcomes */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            What you <span className="gradient-text">get</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {outcomes.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#3A57FC] hover:shadow-[0_20px_50px_-24px_rgba(58,87,252,0.22)] transition-all p-6 md:p-7 group"
            >
              <div className="p-3 bg-[#EEF2FF] text-[#3A57FC] rounded-xl w-fit mb-4 group-hover:bg-[#3A57FC] group-hover:text-white transition-colors">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="font-display font-semibold text-[#0B0C0E] mb-2">{item.title}</h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            How the build <span className="gradient-text">runs</span>
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

      <Faq id="custom-php-faq" title="Custom PHP application FAQ" faqs={faqs} />

      <CtaBand
        title="Still running the business on spreadsheets?"
        body="Describe the process and who uses it. I’ll reply with what version one would include and a quote, and I’ll tell you if an existing tool would do the job."
        primary={{ href: contactHref('php'), label: 'Describe the app you need' }}
        secondary={{ href: '/services/php-development/modernization', label: 'Upgrading an old app instead?' }}
      />
    </>
  )
}
