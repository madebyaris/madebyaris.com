import type { Metadata } from 'next'
import { Mail, MapPin, Clock, Send, ArrowUpRight, Bot, Rocket, Sparkles, Check } from 'lucide-react'
import Link from 'next/link'
import { Suspense } from 'react'
import { ContactForm } from '@/components/contact-form'
import { GithubIcon } from '@/components/icons/github'
import { LinkedinIcon } from '@/components/icons/linkedin'
import { UpworkIcon } from '@/components/icons/upwork'
import { JsonLd } from '@/components/seo/json-ld'
import { buildPageGraph, buildPageMetadata } from '@/lib/seo'
import { CtaBand } from '@/components/page/cta-band'
import { TimezoneOverlap } from '@/components/interactive/timezone-overlap'

const pageTitle = 'Start an AI or Full-Stack Project'
const pageDescription =
  'Send your AI engineering, full-stack product, or Cursor mentoring request to Aris Setiawan. Reply within 24 hours. English or Indonesian, remote worldwide.'

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: '/contact',
  keywords: [
    'Hire AI Engineer',
    'Hire AI Developer',
    'AI Implementation Partner',
    'Cursor Mentoring',
    'Hire Next.js Developer',
    'Remote AI Engineer',
    'Full Stack Software Architect',
    'Contact Aris Setiawan',
  ],
})

const structuredData = buildPageGraph({
  path: '/contact',
  name: pageTitle,
  description: pageDescription,
  type: 'ContactPage',
  breadcrumbs: [{ name: 'Contact', path: '/contact' }],
})

const scopingChecklist = [
  'Your current site URL, repo context, or the workflow you want to build.',
  'Whether you need an AI sprint, a full product build, or Cursor mentoring.',
  'Your target launch window and preferred timezone (EU, UK, SG, or ID).',
]

export default function ContactPage() {
  return (
    <>
      <JsonLd data={structuredData} />

      {/* ================================================================
          BAND 1: FULL-BLEED ELECTRIC COBALT CONTACT HERO
          ================================================================ */}
      <section className="w-full bg-[#3A57FC] text-white pt-10 sm:pt-14 pb-16 md:pb-24 overflow-x-clip">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-md bg-[#0B0C0E] border border-white/15 px-3.5 py-1.5 mb-6">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
                  START A PROJECT · 24H DIRECT REPLY
                </span>
              </div>

              <h1 className="font-display leading-[1.02] lg:text-[4rem] sm:text-5xl text-4xl font-bold text-white tracking-[-0.03em] mb-5">
                Tell me what
                <span className="block text-[#DBE4FF] font-semibold">you&apos;re building</span>
              </h1>

              <p className="text-base sm:text-xl text-white/90 max-w-2xl leading-relaxed">
                Send a few lines about what you need. I read every request myself and reply within 24 hours
                with questions or a plain answer on whether I&apos;m the right fit. English or Indonesian.
              </p>
            </div>

            {/* Scoping Checklist Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/20 bg-[#0B0C0E]/35 backdrop-blur-md p-6 sm:p-7">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FFB866] block mb-3">
                  Helpful to include
                </span>
                <ul className="space-y-3 text-sm text-white/90 leading-relaxed">
                  {scopingChecklist.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#FFB866] shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 pt-4 border-t border-white/15 font-mono text-[11px] text-white/75">
                  NDA ready · Direct reply from Aris in English or Bahasa Indonesia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          BAND 2: CONTACT FORM & DIRECT CHANNELS (WHITE)
          ================================================================ */}
      <section
        id="contact-form"
        className="w-full bg-white py-16 md:py-24 scroll-mt-20"
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Contact Form Panel */}
            <div className="lg:col-span-8">
              <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 sm:p-8 shadow-xs">
                <div className="flex items-center justify-between gap-4 pb-6 mb-6 border-b border-[#E5E7EB]">
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#DDE4FF] bg-[#EEF2FF] text-[#3A57FC]">
                      <Send className="w-4 h-4" />
                    </div>
                    <div>
                      <h2 className="font-display text-xl font-bold text-[#0B0C0E] tracking-tight">
                        Tell me about your project
                      </h2>
                      <p className="text-xs text-[#4B5563]">
                        Takes about two minutes. Goes straight to Aris.
                      </p>
                    </div>
                  </div>
                  <span className="hidden sm:inline-flex rounded-md border border-[#DDE4FF] bg-[#EEF2FF] px-2.5 py-1 font-mono text-[11px] font-semibold text-[#2944E0]">
                    EN · ID
                  </span>
                </div>

                <Suspense
                  fallback={
                    <div className="h-[460px] animate-pulse rounded-xl bg-[#F8FAFC]" />
                  }
                >
                  <ContactForm />
                </Suspense>
              </div>
            </div>

            {/* Right Rail: What Happens Next + Direct Details + Public Profiles */}
            <div className="lg:col-span-4 space-y-6">
              {/* What Happens Next (Obsidian Card) */}
              <div className="rounded-2xl border border-[#1F2433] bg-[#0B0C0E] text-white p-6 shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <span className="h-2 w-2 rounded-full bg-[#FF8800]" />
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FFB866]">
                    What happens next
                  </span>
                </div>
                <ol className="space-y-3.5 text-sm text-zinc-200 leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="font-mono text-xs font-semibold text-[#FFB866] mt-0.5">01</span>
                    <span>I read your request and reply within 24 hours.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-mono text-xs font-semibold text-[#FFB866] mt-0.5">02</span>
                    <span>If it fits, we book a short scoping call.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-mono text-xs font-semibold text-[#FFB866] mt-0.5">03</span>
                    <span>You get a written plan with milestones before any code.</span>
                  </li>
                </ol>
                <p className="font-mono text-[11px] text-zinc-400 mt-5 pt-4 border-t border-white/10">
                  Urgent launch or outage? Mention it in your note.
                </p>
              </div>

              {/* Direct Contact Details */}
              <div className="rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] p-6">
                <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#4B5563] mb-5">
                  Other ways to reach me
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded-lg border border-[#DDE4FF] bg-white text-[#3A57FC] shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-[#6B7280] mb-0.5">
                        Email
                      </p>
                      <Link
                        href="mailto:arissetia.m@gmail.com"
                        className="text-sm text-[#0B0C0E] hover:text-[#3A57FC] transition-colors font-semibold"
                      >
                        arissetia.m@gmail.com
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded-lg border border-[#DDE4FF] bg-white text-[#3A57FC] shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-[#6B7280] mb-0.5">
                        Base
                      </p>
                      <p className="text-sm text-[#0B0C0E] font-semibold">
                        Sidoarjo, Indonesia (UTC+7)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded-lg border border-[#DDE4FF] bg-white text-[#3A57FC] shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-[#6B7280] mb-0.5">
                        Working hours
                      </p>
                      <p className="text-sm text-[#0B0C0E] font-semibold">
                        Mon to Sat, 09:00 to 17:00 WIB
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Public Profiles */}
              <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6">
                <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#4B5563] mb-4">
                  Check my background first
                </h3>
                <div className="flex flex-col gap-2">
                  {[
                    {
                      href: 'https://www.linkedin.com/in/arissetia/',
                      label: 'LinkedIn',
                      icon: LinkedinIcon,
                    },
                    {
                      href: 'https://github.com/madebyaris',
                      label: 'GitHub',
                      icon: GithubIcon,
                    },
                    {
                      href: 'https://www.upwork.com/freelancers/~0117c4a4c888d9e9fe',
                      label: 'Upwork',
                      icon: UpworkIcon,
                    },
                  ].map((profile) => (
                    <Link
                      key={profile.label}
                      href={profile.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl border border-[#E5E7EB] bg-[#F8FAFC] hover:border-[#3A57FC] hover:bg-[#F3F5FF] transition-colors group"
                    >
                      <profile.icon className="w-4 h-4 text-[#4B5563] group-hover:text-[#3A57FC]" />
                      <span className="text-sm font-semibold text-[#0B0C0E]">{profile.label}</span>
                      <ArrowUpRight className="w-4 h-4 text-[#6B7280] ml-auto group-hover:text-[#FF8800] transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          BAND 3: LIVE TIMEZONE OVERLAP (OBSIDIAN DARK BAND)
          ================================================================ */}
      <section className="w-full ahrefs-dark-band text-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="max-w-2xl mb-8">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#FFB866] block mb-2">
              Timezone Overlap
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
              Live working hours across <span className="text-[#93A8FF]">Asia and Europe</span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Full-day overlap with Indonesia and Singapore, plus a daily morning call slot with European and UK engineering teams.
            </p>
          </div>
          <TimezoneOverlap theme="dark" />
        </div>
      </section>

      {/* ================================================================
          BAND 4: COMMON STARTING POINTS (SLATE)
          ================================================================ */}
      <section className="w-full bg-[#F8FAFC] border-y border-[#E5E7EB] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="max-w-2xl mb-10">
            <span className="section-index block mb-2">Common starting points</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0B0C0E] tracking-tight mb-2">
              How I can <span className="gradient-text">help</span>
            </h2>
            <p className="text-base text-[#4B5563]">
              Not sure what to ask for? Start with the closest one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                code: '01',
                title: 'Take an AI pilot or feature to production',
                description:
                  'AI agents, chatbots, MCP servers, and LLM harnesses wired into your real stack with evals, logging, and spend caps.',
                icon: Bot,
                href: '/ai-implementation',
              },
              {
                code: '02',
                title: 'Build a full-stack product or web app',
                description:
                  'SaaS, Next.js, React, Vite, Fastify, Rust tooling, database tuning, or headless WordPress built for speed and clean SEO.',
                icon: Rocket,
                href: '/product-engineering',
              },
              {
                code: '03',
                title: 'Train your engineering team on Cursor',
                description:
                  'Project rules and a review habit on one real repo, so AI-written code stops breaking your PRs.',
                icon: Sparkles,
                href: '/services/vibe-code-friend',
              },
            ].map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="bg-white border border-[#E5E7EB] hover:border-[#3A57FC] hover:shadow-[0_20px_50px_-24px_rgba(58,87,252,0.22)] rounded-2xl p-6 md:p-7 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-2.5 bg-[#EEF2FF] border border-[#DDE4FF] rounded-lg text-[#3A57FC] group-hover:border-[#3A57FC] group-hover:bg-[#3A57FC] group-hover:text-white transition-all">
                      <service.icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#6B7280] group-hover:text-[#3A57FC] transition-colors">
                      {service.code}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#0B0C0E] mb-2 group-hover:text-[#3A57FC] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#4B5563] leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E5E7EB] flex items-center justify-between font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-[#0B0C0E]">
                  <span className="group-hover:text-[#3A57FC] transition-colors">Read details</span>
                  <ArrowUpRight className="w-4 h-4 text-[#6B7280] group-hover:text-[#FF8800] transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          BAND 5: FINAL CTA BAND (WHITE)
          ================================================================ */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <CtaBand
            className="mb-0"
            title="Have a site, a repo, or just an idea?"
            body="Send whatever you have. A URL and two sentences is enough for me to tell you what it would take."
            primary={{ href: '#contact-form', label: 'Start my project request' }}
            secondary={{ href: '/services', label: 'Compare services first' }}
          />
        </div>
      </section>
    </>
  )
}
