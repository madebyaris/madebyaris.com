import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Rocket, Code2, Shield, CheckCircle2, XCircle, FlaskConical } from 'lucide-react'
import { buildPageGraph, buildPageMetadata, type FaqItem } from '@/lib/seo'
import { JsonLd } from '@/components/seo/json-ld'
import { contactHref } from '@/lib/contact-services'

export const revalidate = 86400 // Revalidate daily

const pagePath = '/services/php-development/modernization'
const pageTitle = 'Legacy PHP Modernization: Upgrade Old Apps'
const pageDescription =
  'Legacy PHP modernization for old PHP 5 and 7 apps: move to a supported version or to Laravel in small steps, while the current app keeps running.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
  keywords: [
    'legacy PHP modernization',
    'upgrade old PHP app',
    'PHP to Laravel migration',
    'PHP 8 upgrade',
    'legacy PHP refactoring',
  ],
})

const outcomes = [
  {
    title: 'A supported PHP version',
    description: 'Security fixes from PHP itself again, and no surprise breakage when your host drops the old version.',
    icon: Shield,
  },
  {
    title: 'Tests around what earns money',
    description: 'Checkout, login, or whatever matters most gets tests first, so later changes stop breaking it quietly.',
    icon: FlaskConical,
  },
  {
    title: 'A gradual PHP to Laravel migration',
    description: 'Routes move to Laravel one at a time next to the old code, so there is never a big-bang rewrite.',
    icon: Rocket,
  },
  {
    title: 'Code your team can change',
    description: 'Composer for dependencies, a clear folder structure, and notes, so the next developer can work without fear.',
    icon: Code2,
  },
]

const goodFit = [
  'The app runs on a PHP version that no longer gets security fixes',
  'Your host wants you to upgrade PHP and the app breaks when you try',
  'Every small change breaks something else, and there are no tests',
  'You want an API or a Next.js front end, and the old code is in the way',
]

const poorFit = [
  'The app is small, stable, patched, and nobody needs to change it',
  'You need a full rewrite by a fixed date with no room to test',
]

const technologies = ['PHP 8', 'Composer', 'Laravel', 'PHPUnit', 'Static analysis', 'Docker', 'Git', 'CI/CD']

const processSteps = [
  { step: 1, title: 'Audit', desc: 'Read the code and list the PHP version, dependencies, and risky parts.' },
  { step: 2, title: 'Safety net', desc: 'Add tests and error logging around the flows that matter most.' },
  { step: 3, title: 'Upgrade in steps', desc: 'Move the PHP version and libraries in small releases you can roll back.' },
  { step: 4, title: 'Refactor or migrate', desc: 'Where it pays off, move parts to Laravel one route at a time.' },
]

const faqs: FaqItem[] = [
  {
    question: 'How much does legacy PHP modernization cost?',
    answer:
      'It depends on how big and how old the codebase is, so I read it before quoting. You get a plan that splits the work into steps, each with its own quote, so you can stop after any step and still have a working app.',
  },
  {
    question: 'Should we modernize the old PHP app or rewrite it from scratch?',
    answer:
      'Usually modernize. The old code holds years of business rules that a rewrite has to rediscover, often through bugs in production. A rewrite makes sense when the app is small or truly cannot be upgraded, and I will tell you if yours is one of those.',
  },
  {
    question: 'Will the app go down during the upgrade?',
    answer:
      'Each step is tested on a staging copy and released as a deploy you can roll back, so users keep working. If a database change needs a short maintenance window, it is in the plan and we pick the time together.',
  },
  {
    question: 'Do we have to move to Laravel?',
    answer:
      'No. Many apps only need a supported PHP version, Composer, and tests. A PHP to Laravel migration makes sense when you plan a lot of new features. If you do move, it happens route by route next to the old code.',
  },
  {
    question: 'Who maintains the app after the upgrade?',
    answer:
      'You own the code. After the upgrade it has tests, a documented setup, and a supported PHP version, so your team or any PHP developer can take over. I can stay on for further steps if you want.',
  },
]

const structuredData = buildPageGraph({
  path: pagePath,
  name: pageTitle,
  description: pageDescription,
  breadcrumbs: [
    { name: 'Services', path: '/services' },
    { name: 'PHP Development', path: '/services/php-development' },
    { name: 'Modernization', path: pagePath },
  ],
  service: {
    name: 'Legacy PHP modernization',
    description: pageDescription,
    serviceType: 'Legacy PHP Modernization',
    offers: outcomes.map((item) => ({ name: item.title, description: item.description })),
  },
  faqs,
})

const linkClass = 'underline decoration-zinc-300 underline-offset-4 hover:text-orange-500 transition-colors'

export default function ModernizationPage() {
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
          <li className="text-zinc-900">Modernization</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="text-center pt-4 pb-16">
        <div className="inline-flex bg-white/60 rounded-full mb-8 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2">
          <Rocket className="w-4 h-4 text-orange-500" />
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">Legacy PHP upgrades</span>
        </div>

        <h1 className="leading-[0.95] lg:text-[4rem] text-4xl font-medium text-zinc-900 tracking-tighter mb-6">
          Legacy PHP modernization
          <span className="block gradient-text font-light">while the app keeps running</span>
        </h1>

        <p className="text-base md:text-lg text-zinc-600 max-w-2xl mx-auto mb-4 leading-relaxed font-medium">
          For businesses running an old PHP app that nobody wants to touch: an unsupported version, no tests, and the original developer long gone. I’ve written PHP since 2013, back when a lot of today’s legacy code was new.
        </p>

        <p className="text-sm text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Plain PHP in 2013, CodeIgniter in 2015, Laravel today. I can read the era your app was written in.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href={contactHref('php')}
            className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
          >
            <span className="text-sm font-medium tracking-tight">Send me your old PHP app</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <Link
            href="/services/php-development"
            className="btn-secondary hover:bg-zinc-50 transition-all flex text-sm font-medium rounded-full py-3 px-6 gap-2 items-center"
            style={{ boxShadow: '0 18px 35px rgba(31, 41, 55, 0.15), 0 0 0 1px rgba(209, 213, 219, 0.3)' }}
          >
            <span className="text-sm font-medium text-black/60 tracking-tight">See all PHP services</span>
            <ArrowRight className="w-4 h-4 text-zinc-500" />
          </Link>
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Answer first */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
          How legacy PHP modernization works
        </h2>
        <p className="text-zinc-600 leading-relaxed mb-4">
          Legacy PHP modernization means moving an old app to a supported PHP version and a structure your team can change safely. I start by adding tests around the parts that earn money, then upgrade in small steps: the PHP version, the dependencies, and, if it pays off, a gradual move to Laravel. The current app keeps serving users while each step ships.
        </p>
        <p className="text-zinc-600 leading-relaxed">
          Often the reason to upgrade is a new front end. Once the app is on current PHP, it can serve a clean API, as I describe in{' '}
          <Link href="/blog/php-api-development-for-nextjs" className={linkClass}>PHP API development for Next.js</Link>.
        </p>
      </section>

      {/* Fit */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            When to <span className="gradient-text">upgrade an old PHP app</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-zinc-900 mb-4">Time to upgrade</h3>
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
            <h3 className="font-semibold text-zinc-900 mb-4">Probably leave it alone</h3>
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

      {/* Technologies */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Tools I use for <span className="gradient-text">PHP upgrades</span>
          </h2>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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
            How the upgrade <span className="gradient-text">runs</span>
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
      <section className="mb-16 max-w-3xl mx-auto" aria-labelledby="legacy-php-faq">
        <h2 id="legacy-php-faq" className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-6">
          Legacy PHP modernization FAQ
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
            Scared to touch your old PHP app?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg font-medium">
            Send me the repo or tell me what it runs on. I’ll list the biggest risks and what I’d upgrade first, before you commit to anything.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link href={contactHref('php')} className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              <span>Send me your old PHP app</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/services/php-development/database-solutions" className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-all text-white text-sm font-medium rounded-full px-6 py-3">
              <span>Slow database too? See MySQL fixes</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
