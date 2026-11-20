import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Server, Code2, Shield, Zap, CheckCircle2, XCircle } from 'lucide-react'
import { PageHero } from '@/components/page/hero'
import { Faq } from '@/components/page/faq'
import { CtaBand } from '@/components/page/cta-band'
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
})

const linkClass = 'text-[#3A57FC] underline decoration-[#3A57FC]/35 underline-offset-4 hover:text-[#2944E0] hover:decoration-[#3A57FC] transition-colors'

export default function ApiDevelopmentPage() {
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
          <li className="font-medium text-[#0B0C0E]" aria-current="page">API Development</li>
        </ol>
      </nav>

      <PageHero
        eyebrow={{ icon: <Server className="w-3.5 h-3.5" />, label: 'REST APIs in PHP' }}
        title="PHP API development"
        accent="for Next.js and mobile apps"
        actions={
          <>
            <Link
              href={contactHref('php')}
              className="btn-primary inline-flex items-center gap-2.5 rounded-md py-3.5 px-6 text-sm font-bold group"
            >
              <span>Get an API plan</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              href="/blog/php-api-development-for-nextjs"
              className="btn-secondary inline-flex items-center gap-2 rounded-md py-3.5 px-6 text-sm font-semibold group"
            >
              <span>Read the PHP API guide</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </>
        }
      >
        <p className="mb-4">
          For teams whose data lives in a PHP app or MySQL database and now needs to reach a Next.js site or a mobile app. I’ve built PHP backends since 2013 and wrote up how I do it for Next.js products.
        </p>
        <p className="text-sm text-white/80">
          This site works the same way: WordPress, written in PHP, serves posts over its REST API, and Next.js renders them.
        </p>
      </PageHero>

      {/* Answer first */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-4">
          What PHP API development means for a Next.js product
        </h2>
        <p className="text-[#4B5563] leading-relaxed mb-4">
          PHP API development means exposing your data and business rules through HTTP endpoints that other apps call. For a Next.js product, that usually means a REST API in Laravel or plain PHP that returns JSON, checks who is asking, and validates every input. Your PHP backend keeps doing what it does well, and the front end can change without touching it.
        </p>
        <p className="text-[#4B5563] leading-relaxed">
          I walk through the whole approach in{' '}
          <Link href="/blog/php-api-development-for-nextjs" className={linkClass}>PHP API development for Next.js</Link>.
        </p>
      </section>

      {/* Fit */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            When a PHP REST API <span className="gradient-text">is the right call</span>
          </h2>
          <p className="text-sm text-[#4B5563] max-w-xl mx-auto">
            If you have no PHP backend yet, a Next.js route handler may be enough. I explain that option in{' '}
            <Link href="/blog/nextjs-app-router-api" className={linkClass}>building APIs with the Next.js App Router</Link>.
          </p>
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
            <h3 className="font-display font-semibold text-[#0B0C0E] mb-4">Probably skip the PHP API</h3>
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

        <p className="text-sm text-[#4B5563] text-center mt-6">
          If the slow part is the database itself, see{' '}
          <Link href="/services/php-development/database-solutions" className={linkClass}>MySQL database optimization</Link>.
        </p>
      </section>

      {/* Technologies */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            Laravel API <span className="gradient-text">and the rest of the stack</span>
          </h2>
        </div>

        <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 md:p-7">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="p-3 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-center text-sm font-medium text-[#0B0C0E]"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            How an API project <span className="gradient-text">runs</span>
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

      <Faq id="php-api-faq" title="PHP API development FAQ" faqs={faqs} />

      <CtaBand
        title="Need your PHP data in a Next.js app?"
        body="Tell me what the front end needs and where the data lives. I’ll send back an endpoint plan and a quote before you commit to anything."
        primary={{ href: contactHref('php'), label: 'Get an API plan' }}
        secondary={{ href: '/services/php-development', label: 'See all PHP services' }}
      />
    </>
  )
}
