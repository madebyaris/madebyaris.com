import type { Metadata } from 'next'
import {
  Code2,
  Layout,
  Server,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Briefcase,
  Bot,
  GraduationCap,
  Hammer,
  TrendingUp,
  AppWindow,
  Wrench,
  Search,
} from 'lucide-react'
import Link from 'next/link'
import { contactHref } from '@/lib/contact-services'
import { buildPageGraph, buildPageMetadata } from '@/lib/seo'
import { JsonLd } from '@/components/seo/json-ld'

export const revalidate = 86400

const problems = [
  {
    title: 'A new website',
    description: 'Next.js is the stack I use first. Migrations keep the URLs that already rank.',
    href: '/services/nextjs-development',
  },
  {
    title: 'A web app people log into',
    description: 'Accounts, dashboards, and data in the browser.',
    href: '/services/web-application-development',
  },
  {
    title: 'Editors who stay in WordPress',
    description: 'Themes, plugins, or a headless Next.js front end. The team keeps wp-admin.',
    href: '/services/wordpress',
  },
  {
    title: 'A site that should rank',
    description: 'Technical SEO for crawl, index, metadata, and speed.',
    href: '/services/technical-seo',
  },
  {
    title: 'Care after launch',
    description: 'Updates and small fixes, with a written list of what is included.',
    href: '/services/website-maintenance',
  },
  {
    title: 'A team learning Cursor',
    description: 'Project rules and a review habit on one real repo.',
    href: '/services/vibe-code-friend',
  },
]

const buildServices = [
  {
    title: 'Next.js development',
    description:
      'The flagship stack for new products and migrations that stay fast and keep their rankings.',
    icon: Code2,
    href: '/services/nextjs-development',
    features: ['Product builds', 'Migrations', 'App Router', 'Headless CMS'],
    span: 2,
  },
  {
    title: 'Web application development',
    description: 'Login, dashboards, and data. Next.js or PHP, chosen for the job.',
    icon: AppWindow,
    href: '/services/web-application-development',
    features: ['Accounts', 'Dashboards', 'APIs'],
    span: 1,
  },
  {
    title: 'WordPress / headless',
    description:
      'Keep the WordPress editor your team knows, with custom themes, plugins, or a headless Next.js front end.',
    icon: Layout,
    href: '/services/wordpress',
    features: ['Custom themes', 'Headless WP', 'Plugin dev', 'Performance'],
    span: 1,
  },
  {
    title: 'Website maintenance',
    description: 'Ongoing care after launch. One-off speed work stays on the WordPress optimization page.',
    icon: Wrench,
    href: '/services/website-maintenance',
    features: ['Updates', 'Small fixes', 'Written scope'],
    span: 1,
  },
  {
    title: 'Technical SEO',
    description: 'Crawl, index, metadata, and speed. No content writing and no link building.',
    icon: Search,
    href: '/services/technical-seo',
    features: ['Audits', 'Metadata', 'Core Web Vitals'],
    span: 1,
  },
  {
    title: 'PHP development',
    description: 'Keep a legacy PHP app running, add an API to it, or plan its move to a modern stack.',
    icon: Server,
    href: '/services/php-development',
    features: ['Custom apps', 'APIs', 'Maintenance', 'Migrations'],
    span: 1,
  },
  {
    title: 'AI product development',
    description: 'Agents, chatbots, and LLM features that run inside the product and reach real users.',
    icon: Sparkles,
    href: '/services/ai-development',
    features: ['Chatbots', 'Agent workflows', 'API integrations'],
    span: 1,
  },
]

const flagshipLinks = [
  {
    title: 'Next.js SEO',
    description: 'Metadata, schema, sitemaps, and Core Web Vitals for App Router sites.',
    href: '/services/nextjs-development/nextjs-seo',
  },
  {
    title: 'Vercel hosting',
    description: 'Deploy Next.js on Vercel, or trace a bill that keeps growing.',
    href: '/services/nextjs-development/vercel',
  },
  {
    title: 'Jasa pembuatan website',
    description: 'The same offer in Bahasa Indonesia, with Next.js as one option.',
    href: '/jasa-pembuatan-website',
  },
]

const levelUpServices = [
  {
    title: 'Cursor & AI workflows',
    description:
      'Your team bought Cursor seats and the PRs got messier. I set up project rules and a review habit on one real repo, then help the rest of the team adopt it.',
    icon: Bot,
    href: '/services/vibe-code-friend',
    features: ['Cursor mentoring', 'AI IDE tutoring', 'Workflow coaching', 'Code fixing'],
    span: 2,
  },
]

const wordPressServices = [
  {
    title: 'Custom theme development',
    description: 'A theme built from your design that loads fast on phones and stays easy for editors to update.',
    href: '/services/wordpress/theme-development',
    benefits: ['Your design', 'Mobile first', 'SEO ready'],
  },
  {
    title: 'Plugin development',
    description: 'A plugin for the feature no off-the-shelf plugin does, or for connecting WordPress to your other tools.',
    href: '/services/wordpress/plugin-development',
    benefits: ['Custom features', 'Integrations', 'Maintainable code'],
  },
  {
    title: 'Headless WordPress',
    description: 'Editors keep wp-admin. Visitors get a fast Next.js front end. This site runs that way.',
    href: '/services/wordpress/headless-development',
    benefits: ['Next.js front end', 'SEO carried over', 'Publish-to-live refresh'],
  },
  {
    title: 'WordPress speed and security',
    description: 'Find what makes the site slow or exposed, fix it, and keep plugins from undoing the work.',
    href: '/services/wordpress/optimization',
    benefits: ['Speed', 'Security hardening', 'CDN setup'],
  },
]

const pageTitle = 'Web development services'
const pageDescription =
  'Web development services for a new site, a web app, WordPress, PHP, maintenance, or technical SEO. Next.js is the stack I use first. One senior developer.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: '/services',
  keywords: [
    'web development services',
    'website development service',
    'Next.js development',
    'WordPress development',
    'website maintenance',
    'technical SEO',
  ],
})

const structuredData = buildPageGraph({
  path: '/services',
  name: pageTitle,
  description: pageDescription,
  breadcrumbs: [{ name: 'Services', path: '/services' }],
})

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={structuredData} />

      {/* Hero Section */}
      <section className="text-center pt-8 pb-16">
        <div
          className="inline-flex bg-white/60 rounded-full mb-8 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2"
          style={{
            position: 'relative',
            // @ts-expect-error CSS custom properties
            '--border-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0))',
            '--border-radius-before': '9999px',
          }}
        >
          <Briefcase className="w-4 h-4 text-orange-500" />
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">
            One senior developer · Remote
          </span>
        </div>

        <h1 className="leading-[0.95] lg:text-[4rem] text-4xl font-medium text-zinc-900 tracking-tighter mb-6">
          Web development services
          <span className="block gradient-text font-light">for the job you have</span>
        </h1>

        <p className="text-base md:text-lg text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          Web development services for a new site, a web app, WordPress, PHP, maintenance, or
          technical SEO. Next.js is the stack I use first for new products. I’m Aris Setiawan, one
          senior developer, with 13+ years of shipping. Untuk pembeli di Indonesia, lihat{' '}
          <Link href="/jasa-pembuatan-website" className="underline decoration-zinc-300 underline-offset-4 hover:text-orange-500">
            jasa pembuatan website
          </Link>
          .
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="#build"
            className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
          >
            <span className="text-sm font-medium tracking-tight">See what I build</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <Link
            href="#level-up"
            className="btn-secondary hover:bg-zinc-50 transition-all flex text-sm font-medium rounded-full py-3 px-6 gap-2 items-center"
            style={{
              boxShadow:
                '0 18px 35px rgba(31, 41, 55, 0.15), 0 0 0 1px rgba(209, 213, 219, 0.3)',
              position: 'relative',
              // @ts-expect-error CSS custom properties
              '--border-gradient':
                'linear-gradient(180deg, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.2), rgba(255, 255, 255, 0.8))',
              '--border-radius-before': '9999px',
            }}
          >
            <span className="text-sm font-medium text-black/60 tracking-tight">
              See Cursor mentoring
            </span>
            <ArrowRight className="w-4 h-4 text-zinc-500" />
          </Link>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            Web development services, <span className="gradient-text">by the job</span>
          </h2>
          <p className="text-sm text-zinc-500 max-w-xl mx-auto font-medium">
            Start from the problem. The page you open names the stack and what you get.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((problem) => (
            <Link
              key={problem.href}
              href={problem.href}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-0.5 group"
            >
              <h3 className="text-base font-semibold text-zinc-900 mb-2 group-hover:text-orange-500 transition-colors">
                {problem.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{problem.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Build Section */}
      <section id="build" className="mb-16 scroll-mt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div
              className="inline-flex bg-white/60 rounded-full mb-4 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2"
              style={{
                position: 'relative',
                // @ts-expect-error CSS custom properties
                '--border-gradient':
                  'linear-gradient(180deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0))',
                '--border-radius-before': '9999px',
              }}
            >
              <Hammer className="w-4 h-4 text-orange-500" />
              <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">
                Build
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-2">
              The stack for <span className="gradient-text">each job</span>
            </h2>
            <p className="text-sm text-zinc-500 font-medium max-w-xl">
              You work with me directly, from the first call to launch. I work with startups and
              teams in the US, EU, Asia, and the Middle East, and with Indonesian companies in
              Bahasa Indonesia.
            </p>
          </div>
          <Link
            href={contactHref('build')}
            className="group flex items-center gap-2 hover:text-orange-500 transition-colors text-sm font-medium text-zinc-900"
          >
            Tell me what you need built
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="bento-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {buildServices.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className={`bento-card group relative overflow-hidden ${service.span === 2 ? 'md:col-span-2' : ''}`}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3 text-zinc-400">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 mb-2 tracking-tight group-hover:text-orange-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-zinc-500 font-medium leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-2 py-1 bg-zinc-100 rounded text-[10px] text-zinc-600 font-medium uppercase tracking-wide"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-5 h-5 text-orange-500" />
              </div>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {flagshipLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-0.5 group"
            >
              <h3 className="text-base font-semibold text-zinc-900 mb-2 group-hover:text-orange-500 transition-colors">
                {link.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{link.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Level up Section */}
      <section id="level-up" className="mb-16 scroll-mt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div
              className="inline-flex bg-white/60 rounded-full mb-4 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2"
              style={{
                position: 'relative',
                // @ts-expect-error CSS custom properties
                '--border-gradient':
                  'linear-gradient(180deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0))',
                '--border-radius-before': '9999px',
              }}
            >
              <TrendingUp className="w-4 h-4 text-orange-500" />
              <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">
                Level up
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-2">
              Cursor & AI <span className="gradient-text">workflow coaching</span>
            </h2>
            <p className="text-sm text-zinc-500 font-medium max-w-xl">
              Coaching for developers who already ship. You keep writing the code; I help you and your
              team get reliable results from Cursor. Taught by Indonesia&apos;s first Cursor Ambassador.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {levelUpServices.map((service) => (
            <Link key={service.href} href={service.href} className="group md:col-span-2">
              <div className="bento-card relative overflow-hidden h-full">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3 text-zinc-400">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-900 mb-2 tracking-tight group-hover:text-orange-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-zinc-500 font-medium leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-1 bg-zinc-100 rounded text-[10px] text-zinc-600 font-medium uppercase tracking-wide"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-5 h-5 text-orange-500" />
                </div>
              </div>
            </Link>
          ))}

          <a
            href="https://bootcamp.madebyaris.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group md:col-span-2"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-0.5 h-full border border-dashed border-zinc-200">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-zinc-100 rounded-xl group-hover:bg-orange-100 transition-colors">
                  <GraduationCap className="w-5 h-5 text-zinc-600 group-hover:text-orange-500 transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-zinc-900 mb-1 group-hover:text-orange-500 transition-colors">
                    Bootcamp (external)
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    Prefer a structured course? The bootcamp at bootcamp.madebyaris.com runs separately
                    from 1:1 mentoring.
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </a>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* WordPress Services Section */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div
              className="inline-flex bg-white/60 rounded-full mb-4 py-1.5 pr-4 pl-3 shadow-sm backdrop-blur-sm items-center gap-2"
              style={{
                position: 'relative',
                // @ts-expect-error CSS custom properties
                '--border-gradient':
                  'linear-gradient(180deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0))',
                '--border-radius-before': '9999px',
              }}
            >
              <Layout className="w-4 h-4 text-orange-500" />
              <span className="text-xs font-semibold tracking-wider uppercase text-zinc-600">
                WordPress
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-2">
              WordPress <span className="gradient-text">specialties</span>
            </h2>
            <p className="text-sm text-zinc-500 font-medium">
              Themes, plugins, headless setups, and speed work, all part of the Build offer.
            </p>
          </div>
          <Link
            href="/services/wordpress"
            className="group flex items-center gap-2 hover:text-orange-500 transition-colors text-sm font-medium text-zinc-900"
          >
            View all WordPress services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {wordPressServices.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-0.5 group"
            >
              <h3 className="text-base font-semibold text-zinc-900 mb-2 group-hover:text-orange-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed mb-4">{service.description}</p>
              <div className="flex flex-wrap gap-1">
                {service.benefits.map((benefit) => (
                  <span
                    key={benefit}
                    className="px-2 py-0.5 bg-orange-50 rounded text-[10px] text-orange-600 font-medium"
                  >
                    {benefit}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mb-16 opacity-60" />

      {/* Process Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
            How I <span className="gradient-text">work</span>
          </h2>
          <p className="text-sm text-zinc-500 max-w-lg mx-auto font-medium">
            The same four steps whether I’m building for you or coaching your team. You see progress
            every week.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { step: 1, title: 'Scoping call', desc: 'What you need, what must not break, and what done looks like' },
            { step: 2, title: 'Written plan', desc: 'Milestones and the trade-offs I’d make, before any code' },
            { step: 3, title: 'Weekly progress', desc: 'A working demo or a coaching session every week' },
            { step: 4, title: 'Handoff', desc: 'Docs your team can use, and support if you want it' },
          ].map((item) => (
            <div key={item.step} className="bg-zinc-50 rounded-2xl p-6 text-center">
              <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-500 font-bold text-lg flex items-center justify-center mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="font-semibold text-zinc-900 mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="overflow-hidden min-h-[400px] shadow-zinc-900/30 bg-zinc-900 rounded-[2rem] relative shadow-2xl mb-8">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="flex flex-col items-center justify-center text-center p-8 md:p-12 lg:p-16 min-h-[400px] relative">
          <h2 className="md:text-4xl lg:text-5xl leading-tight text-3xl font-normal text-white tracking-tight mb-6 max-w-2xl">
            Tell me what you’re building
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg font-medium">
            Send a few lines about the project or your team. I’ll reply within 24 hours and tell you
            plainly whether I’m the right fit.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href={contactHref('other')}
              className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>Send me your project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/projects"
              className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-all text-white text-sm font-medium rounded-full px-6 py-3"
            >
              <span>See my work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
