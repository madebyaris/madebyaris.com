import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Server, Code2, Shield, Zap, CheckCircle2, XCircle } from 'lucide-react'
import { buildPageGraph, buildPageMetadata, type FaqItem } from '@/lib/seo'
import { JsonLd } from '@/components/seo/json-ld'
import { contactHref } from '@/lib/contact-services'

export const revalidate = 86400 // Revalidate daily

const pagePath = '/services/php-development/api-development'
const pageTitle = 'PHP API Development for Next.js Products'
const pageDescription =
  'PHP API development for Next.js sites and mobile apps: REST endpoints in Laravel or plain PHP, with auth, validation, caching, and docs your team can use.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
  keywords: [
    'PHP API development',
    'PHP API development services',
    'REST API for Next.js',
    'Laravel API',
    'PHP REST API',
  ],
})

const outcomes = [
  {
    title: 'Endpoints shaped around your screens',
    description: 'Each endpoint returns what a page needs, so the front end makes fewer calls and loads faster.',
    icon: Server,
  },
  {
    title: 'Auth and validation on every route',
    description: 'Token or session auth, role checks, and input validation, so callers can only do what they are allowed to.',
    icon: Shield,
  },
  {
    title: 'Caching where the load is',
    description: 'Cache headers and Redis for heavy reads, so a traffic spike hits the cache before it hits MySQL.',
    icon: Zap,
  },
  {
    title: 'Docs your front-end developer can read',
    description: 'An OpenAPI spec with example requests, so nobody guesses field names or error formats.',
    icon: Code2,
  },
]

const goodFit = [
  'Your data and business rules already live in a PHP app or MySQL database',
  'A new Next.js front end or mobile app needs that data',
  'Partners or internal tools need controlled access to the same records',
  'The current API has no docs and nobody is sure what it returns',
]

const poorFit = [
  'There is no PHP code yet and your team writes TypeScript',
  'You only need a contact form or a handful of static pages',
]

const technologies = ['PHP 8', 'Laravel', 'Symfony', 'REST and JSON', 'GraphQL', 'OAuth 2.0', 'JWT', 'OpenAPI', 'Redis']

const processSteps = [
  { step: 1, title: 'Map the screens', desc: 'List what each page or app screen needs from your data.' },
  { step: 2, title: 'Agree the contract', desc: 'Endpoints and fields written as an OpenAPI spec you approve first.' },
  { step: 3, title: 'Build and test', desc: 'Laravel or your existing PHP, with tests against the spec.' },
  { step: 4, title: 'Connect and ship', desc: 'Wire it to your Next.js app, deploy, and hand over the docs.' },
]

const faqs: FaqItem[] = [
  {
    question: 'How much does PHP API development cost?',
    answer:
      'It depends on how many endpoints you need and how tangled the existing code is, so I scope each project separately. Tell me what the front end needs and where the data lives. You get an endpoint plan and a quote before any work starts.',
  },
  {
    question: 'Can you build the API on my existing PHP app, or does it need a rewrite?',
    answer:
      'Usually on top of what you have. I add an API layer next to your current code and reuse its models and rules. A rewrite only makes sense when the existing code cannot be tested or changed safely, and I will tell you if that is the case after reading it.',
  },
  {
    question: 'Will the current app go down while you add the API?',
    answer:
      'The API ships as new routes next to the running app, so current users keep working. I test it on a staging copy first and switch the front end over once it passes.',
  },
  {
    question: 'Should the API be in Laravel or plain PHP?',
    answer:
      'For a new API I use Laravel, because routing, validation, and auth come built in. If your app is plain PHP or CodeIgniter, I can add a small API layer in the same style so your team does not have to learn a new framework.',
  },
  {
    question: 'Who maintains the API after launch?',
    answer:
      'You own the code. The OpenAPI spec and a short README explain every endpoint, so your team or another developer can extend it. I can stay on for changes if you want.',
  },
]

const structuredData = buildPageGraph({
  path: pagePath,
  name: pageTitle,
  description: pageDescription,
  breadcrumbs: [
    { name: 'Services', path: '/services' },
    { name: 'PHP Development', path: '/services/php-development' },
    { name: 'API Development', path: pagePath },
  ],
  service: {
    name: 'PHP API development',
    description: pageDescription,
    serviceType: 'PHP API Development',
    offers: outcomes.map((item) => ({ name: item.title, description: item.description })),
  },
  faqs,
})

const linkClass = 'underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors'

export default function ApiDevelopmentPage() {
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
          <li className="text-zinc-900">API Development</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="text-center pt-4 pb-16">
        <div className="inline-flex bg-white/60 rounded-full mb-8 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2">
          <Server className="w-4 h-4 text-orange-500" />
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">REST APIs in PHP</span>
        </div>

        <h1 className="leading-[0.95] lg:text-[4rem] text-4xl font-medium text-zinc-900 tracking-tighter mb-6">
          PHP API development
          <span className="block gradient-text font-light">for Next.js and mobile apps</span>
        </h1>

        <p className="text-base md:text-lg text-zinc-600 max-w-2xl mx-auto mb-4 leading-relaxed font-medium">
          For teams whose data lives in a PHP app or MySQL database and now needs to reach a Next.js site or a mobile app. I’ve built PHP backends since 2013 and wrote up how I do it for Next.js products.
        </p>

        <p className="text-sm text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          This site works the same way: WordPress, written in PHP, serves posts over its REST API, and Next.js renders them.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href={contactHref('php')}
            className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
          >
            <span className="text-sm font-medium tracking-tight">Get an API plan</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <Link
            href="/blog/php-api-development-for-nextjs"
            className="btn-secondary hover:bg-zinc-50 transition-all flex text-sm font-medium rounded-full py-3 px-6 gap-2 items-center"
            style={{ boxShadow: '0 18px 35px rgba(31, 41, 55, 0.15), 0 0 0 1px rgba(209, 213, 219, 0.3)' }}
          >
            <span className="text-sm font-medium text-black/60 tracking-tight">Read the PHP API guide</span>
            <ArrowRight className="w-4 h-4 text-zinc-500" />
          </Link>
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Answer first */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
          What PHP API development means for a Next.js product
        </h2>
        <p className="text-zinc-600 leading-relaxed mb-4">
          PHP API development means exposing your data and business rules through HTTP endpoints that other apps call. For a Next.js product, that usually means a REST API in Laravel or plain PHP that returns JSON, checks who is asking, and validates every input. Your PHP backend keeps doing what it does well, and the front end can change without touching it.
        </p>
        <p className="text-zinc-600 leading-relaxed">
          I walk through the whole approach in{' '}
          <Link href="/blog/php-api-development-for-nextjs" className={linkClass}>PHP API development for Next.js</Link>.
        </p>
      </section>

      {/* Fit */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            When a PHP REST API <span className="gradient-text">is the right call</span>
          </h2>
          <p className="text-sm text-zinc-500 max-w-xl mx-auto">
            If you have no PHP backend yet, a Next.js route handler may be enough. I explain that option in{' '}
            <Link href="/blog/nextjs-app-router-api" className={linkClass}>building APIs with the Next.js App Router</Link>.
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
            <h3 className="font-semibold text-zinc-900 mb-4">Probably skip the PHP API</h3>
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

        <p className="text-sm text-zinc-500 text-center mt-6">
          If the slow part is the database itself, see{' '}
          <Link href="/services/php-development/database-solutions" className={linkClass}>MySQL database optimization</Link>.
        </p>
      </section>

      {/* Technologies */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Laravel API <span className="gradient-text">and the rest of the stack</span>
          </h2>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {technologies.map((tech) => (
              <div key={tech} className="p-3 bg-zinc-50 rounded-xl text-center text-sm font-medium text-zinc-600">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            How an API project <span className="gradient-text">runs</span>
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
      <section className="mb-16 max-w-3xl mx-auto" aria-labelledby="php-api-faq">
        <h2 id="php-api-faq" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-6">
          PHP API development FAQ
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
            Need your PHP data in a Next.js app?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg font-medium">
            Tell me what the front end needs and where the data lives. I’ll send back an endpoint plan and a quote before you commit to anything.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link href={contactHref('php')} className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              <span>Get an API plan</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/services/php-development" className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-all text-white text-sm font-medium rounded-full px-6 py-3">
              <span>See all PHP services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
