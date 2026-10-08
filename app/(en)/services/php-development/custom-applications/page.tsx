import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Code2, Database, Shield, Server, CheckCircle2, XCircle } from 'lucide-react'
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
  faqs,
})

const linkClass = 'underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors'

export default function CustomApplicationsPage() {
  return (
    <>
      <JsonLd data={structuredData} />

      {/* Breadcrumb */}
      <nav className="mb-8" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-zinc-500">
          <li><Link href="/services" className="hover:text-orange-500 transition-colors">Services</Link></li>
          <li><span className="px-2">/</span></li>
          <li><Link href="/services/php-development" className="hover:text-orange-500 transition-colors">PHP Development</Link></li>
          <li><span className="px-2">/</span></li>
          <li className="text-zinc-900">Custom Applications</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="text-center pt-4 pb-16">
        <div className="inline-flex bg-white/60 rounded-full mb-8 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2">
          <Code2 className="w-4 h-4 text-orange-500" />
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Custom PHP apps</span>
        </div>

        <h1 className="leading-[0.95] lg:text-[4rem] text-4xl font-medium text-zinc-900 tracking-tighter mb-6">
          Custom PHP application development
          <span className="block gradient-text font-light">built around how your team works</span>
        </h1>

        <p className="text-base md:text-lg text-zinc-600 max-w-2xl mx-auto mb-4 leading-relaxed font-medium">
          For businesses that outgrew spreadsheets or an off-the-shelf tool and need an app that fits their process. I built my first PHP and MySQL web applications at SEREWare in 2014 and have shipped web products for 13+ years.
        </p>

        <p className="text-sm text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          You work with me directly, from the first workflow sketch to the deploy.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href={contactHref('php')}
            className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
          >
            <span className="text-sm font-medium tracking-tight">Describe the app you need</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <Link
            href="/services/php-development/api-development"
            className="btn-secondary hover:bg-zinc-50 transition-all flex text-sm font-medium rounded-full py-3 px-6 gap-2 items-center"
            style={{ boxShadow: '0 18px 35px rgba(31, 41, 55, 0.15), 0 0 0 1px rgba(209, 213, 219, 0.3)' }}
          >
            <span className="text-sm font-medium text-black/60 tracking-tight">Need an API instead?</span>
            <ArrowRight className="w-4 h-4 text-zinc-500" />
          </Link>
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Answer first */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
          What custom PHP application development gets you
        </h2>
        <p className="text-zinc-600 leading-relaxed mb-4">
          Custom PHP application development means building a web app around your own process: the forms, rules, roles, and reports your team uses every day. I build it in Laravel, or in plain PHP when it has to sit next to an existing system, on a MySQL database you own. You get software that matches how you work, in code another developer can pick up later.
        </p>
        <p className="text-zinc-600 leading-relaxed">
          If a Next.js front end is on your roadmap, the app can expose its own API from day one. I explain how the two fit in{' '}
          <Link href="/blog/tentang-next-js-dan-php" className={linkClass}>Tentang Next.js dan PHP</Link> (in Indonesian).
        </p>
      </section>

      {/* Fit */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            When to hire a <span className="gradient-text">PHP web application developer</span>
          </h2>
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
            <h3 className="font-semibold text-zinc-900 mb-4">Probably not worth building</h3>
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

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Outcomes */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            What you <span className="gradient-text">get</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {outcomes.map((item) => (
            <div key={item.title} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all group">
              <div className="p-3 bg-zinc-100 rounded-xl w-fit mb-4 group-hover:bg-orange-100 transition-colors">
                <item.icon className="w-5 h-5 text-zinc-600 group-hover:text-orange-500 transition-colors" />
              </div>
              <h3 className="font-semibold text-zinc-900 mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            How the build <span className="gradient-text">runs</span>
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

      {/* FAQ */}
      <section className="mb-16 max-w-3xl mx-auto" aria-labelledby="custom-php-faq">
        <h2 id="custom-php-faq" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-6">
          Custom PHP application FAQ
        </h2>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="group bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm open:shadow-md">
              <summary className="cursor-pointer list-none font-semibold text-zinc-900 flex items-center justify-between gap-4">
                {faq.question}
                <span className="text-orange-500 transition-transform group-open:rotate-45 text-xl leading-none">+</span>
              </summary>
              <p className="mt-3 text-sm text-zinc-600 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="overflow-hidden min-h-[400px] shadow-zinc-900/30 bg-zinc-900 rounded-4xl relative shadow-2xl mb-8">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="flex flex-col items-center justify-center text-center p-8 md:p-12 lg:p-16 min-h-[400px] relative">
          <h2 className="md:text-4xl lg:text-5xl leading-tight text-3xl font-normal text-white tracking-tight mb-6 max-w-2xl">
            Still running the business on spreadsheets?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg font-medium">
            Describe the process and who uses it. I’ll reply with what version one would include and a quote, and I’ll tell you if an existing tool would do the job.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link href={contactHref('php')} className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              <span>Describe the app you need</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/services/php-development/modernization" className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-all text-white text-sm font-medium rounded-full px-6 py-3">
              <span>Upgrading an old app instead?</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
