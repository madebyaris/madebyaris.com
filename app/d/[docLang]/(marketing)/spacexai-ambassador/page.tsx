import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Users, Sparkles, Code2, Shield } from 'lucide-react'
import { PageHero } from '@/components/page/hero'
import { CtaBand } from '@/components/page/cta-band'
import { JsonLd } from '@/components/seo/json-ld'
import { buildPageGraph, buildPageMetadata } from '@/lib/seo'
import { contactHref } from '@/lib/contact-services'

export const revalidate = 86400

const path = '/spacexai-ambassador'
const pageTitle = 'SpaceXAI Ambassador'
const pageDescription =
  'Aris Setiawan is a SpaceXAI Ambassador in Indonesia. Cursor is part of SpaceX. I help builders ship with practical AI coding workflows in English or Indonesian.'

const structuredData = buildPageGraph({
  path,
  type: 'ProfilePage',
  name: `${pageTitle} | Aris Setiawan`,
  description: pageDescription,
  breadcrumbs: [{ name: pageTitle, path }],
})

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path,
})

const highlights = [
  {
    title: 'Practical AI coding',
    description: 'Workflows your team can keep running on its own codebase after I leave.',
    icon: Code2,
  },
  {
    title: 'Community',
    description: 'Clear answers for Indonesia and remote builders who ask how to start.',
    icon: Users,
  },
  {
    title: 'Honest scope',
    description: 'What Cursor and related tools are good for, and when to stop.',
    icon: Shield,
  },
]

const whatIDo = [
  'Share workflows that survive a real repo',
  'Point people to the right door: mentoring vs a product build',
  'Keep my Cursor Ambassador guides up to date for teams already using Cursor',
]

export default function SpaceXAIAmbassadorPage() {
  return (
    <>
      <JsonLd data={structuredData} />

      {/* Breadcrumb */}
      <nav className="mb-6" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-[#4B5563]">
          <li>
            <Link href="/" className="hover:text-[#3A57FC] transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true" className="text-[#9CA3AF]">/</li>
          <li className="font-medium text-[#0B0C0E]" aria-current="page">SpaceXAI Ambassador</li>
        </ol>
      </nav>

      <PageHero
        eyebrow={{ icon: <Sparkles className="w-3.5 h-3.5" />, label: 'SpaceXAI Ambassador' }}
        title="SpaceXAI"
        accent="Ambassador"
        actions={
          <>
            <Link
              href={contactHref('cursor-mentoring')}
              className="btn-primary inline-flex items-center gap-2.5 rounded-md py-3.5 px-6 text-sm font-bold group"
            >
              <span>Get Cursor mentoring for your team</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              href="/cursor-ambassador"
              className="btn-secondary inline-flex items-center gap-2 rounded-md py-3.5 px-6 text-sm font-semibold group"
            >
              <span>See Cursor Ambassador</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </>
        }
      >
        <p className="mb-4">
          I am a SpaceXAI Ambassador. Cursor is now part of SpaceX, and SpaceXAI is the AI side of that story. This page is that role. My Cursor Ambassador page stays at{' '}
          <Link
            href="/cursor-ambassador"
            className="text-white underline decoration-white/60 underline-offset-4 hover:decoration-white transition-colors"
          >
            /cursor-ambassador
          </Link>
          .
        </p>
        <p className="text-sm text-white/80">
          On August 14, 2026{' '}
          <a
            href="https://cursor.com/blog/joining-spacex"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline decoration-white/60 underline-offset-4 hover:decoration-white transition-colors"
          >
            Cursor announced it is part of SpaceX
          </a>
          , continuing the SpaceXAI partnership. I keep teaching practical shipping with Cursor and the wider AI coding stack, based on client work I ship every week.
        </p>
      </PageHero>

      {/* Highlights */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-md border border-[#DDE4FF] bg-[#EEF2FF] px-3 py-1 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#3A57FC]" />
            <span className="font-mono text-[11px] font-semibold tracking-[0.12em] uppercase text-[#3A57FC]">What I focus on</span>
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B0C0E] tracking-tight mb-3">
            Ambassador <span className="gradient-text">highlights</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item) => (
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

      <div className="w-full h-px bg-[#E5E7EB] mb-16" />

      {/* What I do */}
      <section className="mb-16">
        <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 md:p-8">
          <h2 className="font-display text-xl md:text-2xl font-bold text-[#0B0C0E] tracking-tight mb-6">
            What I do as a SpaceXAI Ambassador
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whatIDo.map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl">
                <ArrowRight className="w-4 h-4 text-[#3A57FC] mt-0.5 shrink-0" />
                <span className="text-sm text-[#0B0C0E] font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Need help shipping faster with Cursor?"
        body="Tell me how your team uses Cursor today. I’ll reply with where mentoring would help first, and I’ll tell you if it isn’t worth it."
        primary={{ href: contactHref('cursor-mentoring'), label: 'Get Cursor mentoring for your team' }}
        secondary={{ href: '/services/vibe-code-friend', label: 'See how mentoring works' }}
      />
    </>
  )
}
