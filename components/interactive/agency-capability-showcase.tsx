'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'

interface CapabilityTrack {
  id: string
  code: string
  title: string
  summary: string
  primaryLink: { href: string; label: string }
  secondaryLink: { href: string; label: string }
  badge: string
  panelTitle: string
  panelSubtitle: string
  metrics: { label: string; value: string }[]
  stack: string[]
  bullets: string[]
}

const CAPABILITIES: CapabilityTrack[] = [
  {
    id: 'ai-agents',
    code: '01',
    title: 'Custom AI & Agents',
    summary:
      'Take an AI pilot to production, or ship custom agents, RAG search, and MCP tools directly inside your repo.',
    primaryLink: { href: '/ai-implementation', label: 'AI Engineering' },
    secondaryLink: { href: '/services/ai-development/ai-integration', label: 'AI Integration' },
    badge: 'PRODUCTION AI',
    panelTitle: 'Production AI Harness & Agents',
    panelSubtitle: 'Built with evals, structured logging, fallback routing, and hard spend caps.',
    metrics: [
      { label: 'Batch Scale', value: '1,000+ / run' },
      { label: 'Safety Gate', value: 'CI Evals' },
      { label: 'Budget', value: 'Hard Cap' },
    ],
    stack: ['OpenAI', 'Anthropic', 'MiniMax', 'Vercel AI SDK', 'MCP Servers', 'PostgreSQL'],
    bullets: [
      'Deterministic tool calling & strict JSON schemas',
      'Per-tenant rate limits and token spend ceilings',
      'Zero-data-retention API routing & full NDA compliance',
    ],
  },
  {
    id: 'geo-seo',
    code: '02',
    title: 'AI Search (GEO & AEO) & SEO',
    summary:
      'Get your brand cited in ChatGPT, Gemini, Perplexity, and Google AI Overviews with schema and code fixes.',
    primaryLink: { href: '/services/ai-search-geo-aeo', label: 'AI Search (GEO & AEO)' },
    secondaryLink: { href: '/services/seo', label: 'Technical SEO' },
    badge: 'SEARCH & AI CITATION',
    panelTitle: 'Entity Schema, llms.txt & RankMySEO',
    panelSubtitle: 'We ship technical SEO directly in your codebase and verify gains in Search Console.',
    metrics: [
      { label: 'Client Lift', value: '700K → 1.8M' },
      { label: 'Window', value: '28 days' },
      { label: 'Tracker', value: 'RankMySEO' },
    ],
    stack: ['JSON-LD Graph', 'llms.txt', 'Core Web Vitals', 'Canonical Architecture', 'RankMySEO'],
    bullets: [
      'Full structured entity graphs for Google & LLM crawlers',
      'Code-level speed, crawl budget, and internal linking fixes',
      'Free initial AI visibility snapshot before any commitment',
    ],
  },
  {
    id: 'product-saas',
    code: '03',
    title: 'AI SaaS & Product Builds',
    summary:
      'End-to-end SaaS platforms, AI MVPs, and Rust CLI or Tauri desktop tools with clean architecture and clear bills.',
    primaryLink: { href: '/product-engineering', label: 'Product Engineering' },
    secondaryLink: { href: '/services/saas-development', label: 'SaaS Development' },
    badge: 'END-TO-END BUILD',
    panelTitle: 'Multi-Tenant SaaS & Rust Systems',
    panelSubtitle: 'Auth, billing, database modeling, and AI layers engineered as one coherent system.',
    metrics: [
      { label: 'Timeline', value: '4 to 12 wks' },
      { label: 'Demos', value: 'Weekly live' },
      { label: 'IP Rights', value: '100% Yours' },
    ],
    stack: ['Next.js 16', 'TypeScript', 'Rust & Tauri', 'Fastify', 'PostgreSQL', 'Stripe'],
    bullets: [
      'Written system spec and milestone schedule before code',
      'Weekly staging links you can click and test immediately',
      'Predictable VPS or edge hosting with zero lock-in',
    ],
  },
  {
    id: 'web-cursor',
    code: '04',
    title: 'Next.js, Headless WP & Cursor',
    summary:
      'High-speed Next.js App Router sites, headless WordPress migrations, and Cursor workflows for in-house teams.',
    primaryLink: { href: '/services/nextjs-development', label: 'Next.js Development' },
    secondaryLink: { href: '/services/vibe-code-friend', label: 'Cursor Team Mentoring' },
    badge: 'WEB & TEAM ENABLEMENT',
    panelTitle: 'Modern Web & AI-Native Engineering',
    panelSubtitle: 'Keep editorial teams on WordPress while shipping fast Next.js frontends and clean AI PRs.',
    metrics: [
      { label: 'Ranking', value: '#1 Next.js ID' },
      { label: 'Open Source', value: '515+ ★' },
      { label: 'Languages', value: 'EN & ID' },
    ],
    stack: ['Next.js App Router', 'Headless WordPress', 'Cursor Rules', 'Spec Kit', 'CI Guardrails'],
    bullets: [
      'Zero-SEO-drop WordPress-to-Next.js rebuilds',
      'Repo-specific .cursor/rules/*.mdc and Spec Kit setup',
      'Hands-on coaching for EU, SG, and Indonesian dev teams',
    ],
  },
]

/**
 * Ahrefs-inspired interactive white platform sheet inside a dramatic black frame:
 * Left vertical accordion/rail with vivid #FF8800 active border and #3A57FC links,
 * Right signature cobalt-to-purple-to-amber gradient showcase card.
 */
export function AgencyCapabilityShowcase() {
  const [activeId, setActiveId] = useState(CAPABILITIES[0].id)
  const reduced = useReducedMotion()
  const active = CAPABILITIES.find((c) => c.id === activeId) ?? CAPABILITIES[0]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
      {/* Left 5 cols: Ahrefs-style vertical capability selector */}
      <div className="lg:col-span-5 flex flex-col divide-y divide-[#E5E7EB]">
        {CAPABILITIES.map((item) => {
          const isActive = item.id === activeId
          return (
            <div
              key={item.id}
              className={`relative py-5 pl-5 transition-colors cursor-pointer ${
                isActive ? 'bg-white' : 'hover:bg-[#F9FAFB]'
              }`}
              onClick={() => setActiveId(item.id)}
            >
              {/* Signature Ahrefs Orange Active Vertical Left Bar */}
              {isActive && (
                <motion.span
                  layoutId="ahrefs-capability-indicator"
                  transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                  className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full bg-[#FF8800]"
                />
              )}

              <button
                type="button"
                aria-expanded={isActive}
                onClick={() => setActiveId(item.id)}
                className="w-full text-left focus-visible:outline-2 focus-visible:outline-[#3A57FC]"
              >
                <h3
                  className={`font-display text-lg sm:text-xl font-bold tracking-tight transition-colors ${
                    isActive ? 'text-[#0B0C0E]' : 'text-[#6B7280] hover:text-[#0B0C0E]'
                  }`}
                >
                  {item.title}
                </h3>
              </button>

              {isActive && (
                <motion.div
                  initial={reduced ? false : { opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.22 }}
                  className="mt-2.5"
                >
                  <p className="text-sm text-[#4B5563] leading-relaxed mb-3.5">
                    {item.summary}
                  </p>
                  <div className="flex flex-col gap-1.5">
                    <Link
                      href={item.primaryLink.href}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#3A57FC] hover:text-[#2944E0] w-fit group"
                    >
                      <span>{item.primaryLink.label}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                    <Link
                      href={item.secondaryLink.href}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#3A57FC] hover:text-[#2944E0] w-fit group"
                    >
                      <span>{item.secondaryLink.label}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </div>
          )
        })}
      </div>

      {/* Right 7 cols: Signature Ahrefs Gradient Showcase Stage */}
      <div className="lg:col-span-7 flex">
        <div className="w-full rounded-2xl p-5 sm:p-7 bg-gradient-to-br from-[#8B5CF6] via-[#5B6CFF] to-[#3A57FC] text-white flex flex-col justify-between shadow-xl">
          <div className="flex items-center justify-between gap-3 mb-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/90">
              {active.code} / {active.badge}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 font-mono text-[10px] text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FFB866]" />
              Founder-led architecture
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={reduced ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="rounded-xl bg-white text-[#0B0C0E] p-5 sm:p-6 shadow-2xl flex-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <h4 className="font-display text-lg sm:text-xl font-bold tracking-tight text-[#0B0C0E]">
                      {active.panelTitle}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#4B5563] mt-1">
                      {active.panelSubtitle}
                    </p>
                  </div>
                  <span className="font-mono text-xs font-bold text-[#3A57FC] bg-[#EEF2FF] border border-[#DDE4FF] rounded-md px-2.5 py-1 shrink-0">
                    TRACK {active.code}
                  </span>
                </div>

                {/* 3 Metric KPI Tiles */}
                <div className="grid grid-cols-3 gap-2.5 mb-5">
                  {active.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-lg bg-[#F8FAFC] border border-[#E5E7EB] p-3"
                    >
                      <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#6B7280]">
                        {m.label}
                      </p>
                      <p className="font-display text-sm sm:text-base font-bold text-[#0B0C0E] mt-0.5">
                        {m.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Key Deliverables */}
                <ul className="space-y-2.5 mb-5">
                  {active.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1F2937]"
                    >
                      <Check strokeWidth={2.5} className="h-4 w-4 text-[#FF8800] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stack Chips + Action */}
              <div className="pt-4 border-t border-[#E5E7EB] flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {active.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-[#F3F5FF] border border-[#DDE4FF] px-2.5 py-1 font-mono text-[10.5px] font-medium text-[#2944E0]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={active.primaryLink.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3A57FC] hover:text-[#FF8800] transition-colors"
                >
                  <span>Explore service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
