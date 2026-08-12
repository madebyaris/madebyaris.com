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
} from 'lucide-react'
import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'

export const revalidate = 86400

const pageTitle = 'Build & Level up | Next.js, AI & Cursor Services | Aris Setiawan'

const buildServices = [
  {
    title: 'Next.js development',
    description:
      'Production apps with App Router, TypeScript, and performance that holds up after launch.',
    icon: Code2,
    href: '/services/nextjs-development',
    features: ['Product builds', 'Migrations', 'Performance & SEO', 'Headless CMS'],
    span: 2,
  },
  {
    title: 'AI product development',
    description:
      'Agents, chatbots, and LLM integrations shipped into real Next.js products — not slide decks.',
    icon: Sparkles,
    href: '/services/ai-development',
    features: ['Chatbots & assistants', 'Agent workflows', 'API integrations', 'AI MVPs'],
    span: 2,
  },
  {
    title: 'WordPress / headless',
    description:
      'Custom themes, plugins, and headless WordPress when content teams need familiar tools.',
    icon: Layout,
    href: '/services/wordpress',
    features: ['Custom themes', 'Headless WP', 'Plugin dev', 'Performance'],
    span: 1,
  },
  {
    title: 'PHP development',
    description: 'Legacy PHP apps, APIs, and maintenance when your stack still needs it.',
    icon: Server,
    href: '/services/php-development',
    features: ['Custom apps', 'APIs', 'Maintenance', 'Migrations'],
    span: 1,
    secondary: true,
  },
]

const levelUpServices = [
  {
    title: 'Cursor & AI workflows',
    description:
      'Practical mentoring for Cursor, prompt workflows, and shipping faster without messy code. Vibe Code Friend.',
    icon: Bot,
    href: '/services/vibe-code-friend',
    features: ['Cursor mentoring', 'AI IDE tutoring', 'Workflow coaching', 'Code fixing'],
    span: 2,
  },
]

const wordPressServices = [
  {
    title: 'Custom Theme Development',
    description: 'Pixel-perfect WordPress themes that capture your unique style.',
    href: '/services/wordpress/theme-development',
    benefits: ['Unique Design', 'Mobile-First', 'SEO Optimized'],
  },
  {
    title: 'Plugin Development',
    description: 'Custom WordPress plugins that add exactly the features you need.',
    href: '/services/wordpress/plugin-development',
    benefits: ['Custom Features', 'Integration Ready', 'Scalable'],
  },
  {
    title: 'Headless WordPress',
    description: 'Modern headless WordPress solutions with Next.js frontends.',
    href: '/services/wordpress/headless-development',
    benefits: ['Modern Stack', 'Better Performance', 'API-Driven'],
  },
  {
    title: 'WordPress Optimization',
    description: 'Comprehensive WordPress optimization for peak performance.',
    href: '/services/wordpress/optimization',
    benefits: ['Speed Optimization', 'Security Hardening', 'CDN Setup'],
  },
]

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://madebyaris.com/services/#webpage',
  url: 'https://madebyaris.com/services',
  name: pageTitle,
  description:
    'Hire me to build Next.js and AI-powered products — or level up your team with practical Cursor and AI workflows. 13+ years. Remote worldwide.',
  isPartOf: {
    '@type': 'WebSite',
    '@id': 'https://madebyaris.com/#website',
  },
}

export async function generateMetadata(): Promise<Metadata> {
  const metadata = buildPageMetadata({
    title: 'Build & Level up | Next.js, AI & Cursor Services',
    description:
      'Hire me to build Next.js and AI-powered products — or level up your team with practical Cursor and AI workflows. 13+ years. Remote worldwide.',
    path: '/services',
  })

  return {
    ...metadata,
    title: { absolute: pageTitle },
    openGraph: { ...metadata.openGraph, title: pageTitle },
    twitter: { ...metadata.twitter, title: pageTitle },
    keywords: [
      'Next.js Developer',
      'AI Product Development',
      'Cursor Mentoring',
      'WordPress Development',
      'Remote Full-Stack Developer',
      'Hire Next.js Developer',
      'AI Integration Developer',
      'Cursor Ambassador Indonesia',
    ],
  }
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

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
            Build · Level up · Remote
          </span>
        </div>

        <h1 className="leading-[0.95] lg:text-[4rem] text-4xl font-medium text-zinc-900 tracking-tighter mb-6">
          Two ways to
          <span className="block gradient-text font-light">work with me</span>
        </h1>

        <p className="text-base md:text-lg text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          I build production web products with Next.js, React, and WordPress — and help teams ship
          faster with practical AI workflows. Cursor Ambassador Indonesia.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="#build"
            className="btn-primary hover:scale-[1.02] transition-all inline-flex group shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-0.5 text-sm font-medium text-zinc-900 rounded-full py-3 px-6 gap-3 items-center"
          >
            <span className="text-sm font-medium tracking-tight">Hire me to build</span>
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
              Learn AI workflows
            </span>
            <ArrowRight className="w-4 h-4 text-zinc-500" />
          </Link>
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
              Hire me to <span className="gradient-text">ship products</span>
            </h2>
            <p className="text-sm text-zinc-500 font-medium max-w-xl">
              Solo specialist — 13+ years building for startups and teams worldwide. US, EU, Asia,
              and Middle East friendly. Indonesia still supported.
            </p>
          </div>
          <Link
            href="/contact"
            className="group flex items-center gap-2 hover:text-orange-500 transition-colors text-sm font-medium text-zinc-900"
          >
            Start a build project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="bento-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {buildServices.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className={`bento-card group relative overflow-hidden ${service.span === 2 ? 'md:col-span-2' : ''} ${service.secondary ? 'opacity-90' : ''}`}
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
              Mentoring and tutoring — not product builds. Learn practical workflows from Indonesia&apos;s
              first Cursor Ambassador.
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
                    Structured learning at bootcamp.madebyaris.com — separate from 1:1 mentoring.
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
              Themes, plugins, headless setups, and performance — part of the Build offer.
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
            Clear scope, weekly demos, and code you can maintain — whether building or coaching.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { step: 1, title: 'Discovery', desc: 'Goals, constraints, and what success looks like' },
            { step: 2, title: 'Plan', desc: 'Roadmap, milestones, and honest trade-offs' },
            { step: 3, title: 'Deliver', desc: 'Build or coach with visible progress each week' },
            { step: 4, title: 'Handoff', desc: 'Docs, support options, and next steps' },
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
            Build something — or level up your team
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg font-medium">
            Tell me what you need. I&apos;ll be straight about fit, scope, and timeline.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>Get in touch</span>
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
