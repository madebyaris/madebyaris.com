import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Rocket, Code2, Shield, CheckCircle2, XCircle, FlaskConical } from 'lucide-react'
import { PageHero } from '@/components/page/hero'
import { Faq } from '@/components/page/faq'
import { CtaBand } from '@/components/page/cta-band'
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
})

const linkClass = 'text-[#3A57FC] underline decoration-[#3A57FC]/35 underline-offset-4 hover:text-[#2944E0] hover:decoration-[#3A57FC] transition-colors'

export default function ModernizationPage() {
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
          <li className="font-medium text-[#0B0C0E]" aria-current="page">Modernization</li>
        </ol>
      </nav>

      <PageHero
        eyebrow={{ icon: <Rocket className="w-3.5 h-3.5" />, label: 'Legacy PHP upgrades' }}
        title="Legacy PHP modernization"
        accent="while the app keeps running"
        actions={
          <>
            <Link
              href={contactHref('php')}
              className="btn-primary inline-flex items-center gap-2.5 rounded-md py-3.5 px-6 text-sm font-bold group"
            >
              <span>Send me your old PHP app</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              href="/services/php-development"
              className="btn-secondary inline-flex items-center gap-2 rounded-md py-3.5 px-6 text-sm font-semibold group"
            >
              <span>See all PHP services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </>
        }
      >
        <p className="mb-4">
          For businesses running an old PHP app that nobody wants to touch: an unsupported version, no tests, and the original developer long gone. I’ve written PHP since 2013, back when a lot of today’s legacy code was new.
        </p>
        <p className="text-sm text-white/80">
          Plain PHP in 2013, CodeIgniter in 2015, Laravel today. I can read the era your app was written in.
        </p>
      </PageHero>

      {/* Answer first */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-4">
          How legacy PHP modernization works
        </h2>
        <p className="text-[#4B5563] leading-relaxed mb-4">
          Legacy PHP modernization means moving an old app to a supported PHP version and a structure your team can change safely. I start by adding tests around the parts that earn money, then upgrade in small steps: the PHP version, the dependencies, and, if it pays off, a gradual move to Laravel. The current app keeps serving users while each step ships.
        </p>
        <p className="text-[#4B5563] leading-relaxed">
          Often the reason to upgrade is a new front end. Once the app is on current PHP, it can serve a clean API, as I describe in{' '}
          <Link href="/blog/php-api-development-for-nextjs" className={linkClass}>PHP API development for Next.js</Link>.
        </p>
      </section>

      {/* Fit */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            When to <span className="gradient-text">upgrade an old PHP app</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 md:p-7">
            <h3 className="font-display font-semibold text-[#0B0C0E] mb-4">Time to upgrade</h3>
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
            <h3 className="font-display font-semibold text-[#0B0C0E] mb-4">Probably leave it alone</h3>
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

      {/* Technologies */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            Tools I use for <span className="gradient-text">PHP upgrades</span>
          </h2>
        </div>

        <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 md:p-7">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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
            How the upgrade <span className="gradient-text">runs</span>
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

      <Faq id="legacy-php-faq" title="Legacy PHP modernization FAQ" faqs={faqs} />

      <CtaBand
        title="Scared to touch your old PHP app?"
        body="Send me the repo or tell me what it runs on. I’ll list the biggest risks and what I’d upgrade first, before you commit to anything."
        primary={{ href: contactHref('php'), label: 'Send me your old PHP app' }}
        secondary={{ href: '/services/php-development/database-solutions', label: 'Slow database too? See MySQL fixes' }}
      />
    </>
  )
}
