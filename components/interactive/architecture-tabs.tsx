'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowUpRight,
  Cpu,
  Layers,
  Code2,
  Wrench,
  Terminal,
  CheckCircle2,
} from 'lucide-react'
import { SpotlightSurface } from '@/components/motion/architectural-motion'

interface StackTrack {
  id: string
  index: string
  shortLabel: string
  title: string
  summary: string
  skills: string[]
  href: string
  ctaLabel: string
  blueprintFile: string
  blueprintBadge: string
  blueprintLines: { label: string; value: string; accent?: boolean }[]
  deliverables: string[]
}

const STACK_TRACKS: StackTrack[] = [
  {
    id: 'ai-agents',
    index: '01',
    shortLabel: 'AI & Agents',
    title: 'AI and agent systems',
    summary:
      'Production LLM harnesses, evals, and guardrails built for real user traffic inside your own codebase.',
    skills: [
      'OpenAI, Anthropic, MiniMax',
      'Vercel AI SDK',
      'AI agents & RAG',
      'MCP servers',
      'Evals & spend caps',
    ],
    href: '/ai-implementation',
    ctaLabel: 'Explore AI implementation',
    blueprintFile: 'harness/agent-runtime.ts',
    blueprintBadge: 'PRODUCTION GUARDRAILS',
    blueprintLines: [
      { label: 'models', value: 'Claude / GPT / MiniMax (fallback router)' },
      { label: 'tools', value: 'Typed MCP server + Zod schema validation' },
      { label: 'evals', value: 'Golden dataset regression on every PR', accent: true },
      { label: 'budget', value: 'Per-tenant token cap + latency circuit breaker' },
      { label: 'telemetry', value: 'Trace IDs, prompt diffing, cost per request' },
    ],
    deliverables: [
      'Prompt and tool eval suite running in CI',
      'Hard spend ceilings and provider failover',
      'Full handoff with readable docs for your team',
    ],
  },
  {
    id: 'frontend-geo',
    index: '02',
    shortLabel: 'Web & GEO',
    title: 'Frontend, web architecture, and GEO',
    summary:
      'Fast server-rendered apps and structured content engineered to rank in Google and get cited by AI search.',
    skills: [
      'TypeScript',
      'Next.js App Router',
      'React & Vite',
      'Tailwind CSS',
      'Technical SEO & GEO',
    ],
    href: '/services/ai-search-geo-aeo',
    ctaLabel: 'See GEO & AEO service',
    blueprintFile: 'seo/entity-graph.jsonld',
    blueprintBadge: 'AI SEARCH VISIBILITY',
    blueprintLines: [
      { label: 'rendering', value: 'Next.js 16 SSR + ISR with zero hydration bloat' },
      { label: 'crawlers', value: 'llms.txt + clean canonicals + robots parity' },
      { label: 'schema', value: 'Linked Person, Service, FAQ, Article JSON-LD', accent: true },
      { label: 'tracking', value: 'ChatGPT, Gemini & Perplexity checks in RankMySEO' },
      { label: 'vitals', value: 'Sub-second LCP, static blurred media, AVIF/WebP' },
    ],
    deliverables: [
      'Free RankMySEO AI visibility snapshot on key buyer queries',
      'Entity schema and machine-readable llms.txt in code',
      'Mobile Core Web Vitals and indexation cleanup',
    ],
  },
  {
    id: 'backend-rust',
    index: '03',
    shortLabel: 'Backend & Rust',
    title: 'Backend, systems, and data',
    summary:
      'High-throughput services, native Rust CLI and Tauri binaries, and databases tuned for real load and low bills.',
    skills: [
      'Rust & Tauri',
      'Node.js & Fastify',
      'PHP & Laravel',
      'PostgreSQL & MySQL',
      'VPS & Vercel',
    ],
    href: '/product-engineering',
    ctaLabel: 'Explore product engineering',
    blueprintFile: 'infra/topology.toml',
    blueprintBadge: 'LOW-LATENCY SYSTEMS',
    blueprintLines: [
      { label: 'native', value: 'Rust CLI (nca) & Tauri desktop apps (Chaca)' },
      { label: 'apis', value: 'Fastify / Node.js with strict schema validation' },
      { label: 'data', value: 'PostgreSQL / MySQL indexing + query profiling', accent: true },
      { label: 'hosting', value: 'Scale-from-zero Vercel or tuned Linux VPS' },
      { label: 'cost_model', value: 'Expected monthly infra bill in the written plan' },
    ],
    deliverables: [
      'Architecture blueprint with clear trade-offs before code',
      'Benchmarked queries and predictable monthly hosting costs',
      'CI pipelines, monitoring, and zero vendor lock-in',
    ],
  },
  {
    id: 'cms-cursor',
    index: '04',
    shortLabel: 'CMS & Cursor',
    title: 'CMS and AI dev workflows',
    summary:
      'Editorial systems teams already know, paired with Cursor project rules and PR review workflows that keep code clean.',
    skills: [
      'Headless WordPress',
      'Custom themes & plugins',
      'WooCommerce',
      'Cursor project rules',
      'AI PR review',
    ],
    href: '/services/vibe-code-friend',
    ctaLabel: 'See Cursor mentoring',
    blueprintFile: '.cursor/rules/engineering.mdc',
    blueprintBadge: 'TEAM WORKFLOW',
    blueprintLines: [
      { label: 'cms', value: 'Headless WordPress + Next.js ISR (like this site)' },
      { label: 'rules', value: 'Scoped .mdc rules grounded in your actual repo', accent: true },
      { label: 'review', value: 'AI PR checklist catching silent regressions early' },
      { label: 'specs', value: '/specify -> /plan -> /tasks via Spec Kit for Cursor' },
      { label: 'adoption', value: 'Hands-on coaching in English or Bahasa Indonesia' },
    ],
    deliverables: [
      'Repo-specific Cursor rules and team review checklist',
      'Headless CMS pipelines with fast previews and SEO parity',
      'Weekly coaching on real production PRs',
    ],
  },
]

const ICONS: Record<string, typeof Cpu> = {
  'ai-agents': Cpu,
  'frontend-geo': Layers,
  'backend-rust': Code2,
  'cms-cursor': Wrench,
}

export function ArchitectureTabs() {
  const [activeId, setActiveId] = useState<string>(STACK_TRACKS[0].id)
  const active = STACK_TRACKS.find((t) => t.id === activeId) ?? STACK_TRACKS[0]
  const ActiveIcon = ICONS[active.id] ?? Cpu

  return (
    <div className="space-y-6">
      {/* Animated tab rail */}
      <div
        role="tablist"
        aria-label="Production engineering stack areas"
        className="inline-flex flex-wrap gap-1.5 rounded-xl border border-[#E5E7EB] bg-[#F8FAFC] p-1.5"
      >
        {STACK_TRACKS.map((track) => {
          const isActive = track.id === active.id
          const Icon = ICONS[track.id] ?? Cpu
          return (
            <button
              key={track.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`stack-panel-${track.id}`}
              id={`stack-tab-${track.id}`}
              type="button"
              onClick={() => setActiveId(track.id)}
              className={`relative inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-medium transition-colors cursor-pointer ${
                isActive ? 'text-white' : 'text-[#4B5563] hover:text-[#0B0C0E]'
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="architecture-tab-pill"
                  transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                  className="absolute inset-0 rounded-lg bg-[#3A57FC]"
                />
              )}
              <span className="relative z-10 inline-flex items-center gap-2">
                <span
                  className={`font-mono text-[10px] ${
                    isActive ? 'text-[#FFB866]' : 'text-[#3A57FC]'
                  }`}
                >
                  {track.index}
                </span>
                <Icon className="h-3.5 w-3.5" />
                <span>{track.shortLabel}</span>
              </span>
            </button>
          )
        })}
      </div>

      {/* Two-column architectural inspection surface */}
      <div
        role="tabpanel"
        id={`stack-panel-${active.id}`}
        aria-labelledby={`stack-tab-${active.id}`}
        className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch"
      >
        {/* Left: Light editorial spec panel */}
        <div className="lg:col-span-5 rounded-2xl border border-[#E5E7EB] bg-white p-6 md:p-7 flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#DDE4FF] bg-[#EEF2FF] text-[#3A57FC]">
                    <ActiveIcon className="h-4 w-4" />
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#3A57FC]">
                    Track {active.index} / 04
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold tracking-tight text-[#0B0C0E] mb-3">
                  {active.title}
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed mb-6">
                  {active.summary}
                </p>

                <div className="mb-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#6B7280] mb-2.5">
                    Core toolkit
                  </p>
                  <ul className="flex flex-wrap gap-1.5">
                    {active.skills.map((skill) => (
                      <li
                        key={skill}
                        className="px-2.5 py-1 rounded-md border border-[#E5E7EB] bg-[#F8FAFC] font-mono text-[11px] text-[#374151]"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2 pt-4 border-t border-[#E5E7EB]">
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#6B7280] mb-2">
                    What you get in production
                  </p>
                  {active.deliverables.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-xs text-[#374151]">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#3A57FC] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-7 pt-5 border-t border-[#E5E7EB]">
                <Link
                  href={active.href}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.1em] text-[#3A57FC] hover:text-[#2944E0] transition-colors group"
                >
                  <span>{active.ctaLabel}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right: Obsidian Blueprint Spec Console */}
        <SpotlightSurface
          tone="obsidian"
          className="lg:col-span-7 rounded-2xl blueprint-surface border border-white/10 text-white"
        >
          <div className="flex flex-col justify-between h-full p-6 md:p-8">
            {/* Console header bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF8800]" />
                </div>
                <span className="font-mono text-xs text-zinc-300 inline-flex items-center gap-1.5">
                  <Terminal className="h-3.5 w-3.5 text-[#93A8FF]" />
                  {active.blueprintFile}
                </span>
              </div>
              <span className="rounded-md border border-[#3A57FC]/40 bg-[#3A57FC]/15 px-2.5 py-0.5 font-mono text-[10px] tracking-[0.12em] text-[#93A8FF]">
                {active.blueprintBadge}
              </span>
            </div>

            {/* Animated spec lines */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                className="my-6 space-y-2.5"
              >
                {active.blueprintLines.map((line, i) => (
                  <div
                    key={line.label}
                    className={`grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4 rounded-xl border px-4 py-3 ${
                      line.accent
                        ? 'border-[#3A57FC]/45 bg-[#3A57FC]/15'
                        : 'border-white/8 bg-white/[0.03]'
                    }`}
                  >
                    <div className="sm:col-span-4 flex items-center gap-2 font-mono text-[11px]">
                      <span className="text-zinc-500">0{i + 1}</span>
                      <span className={line.accent ? 'text-[#FFB866]' : 'text-zinc-400'}>
                        {line.label}
                      </span>
                    </div>
                    <div className="sm:col-span-8 font-mono text-xs text-zinc-100 leading-relaxed">
                      {line.value}
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Footer telemetry line */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-4 border-t border-white/10 font-mono text-[11px] text-zinc-400">
              <span>Written plan + architecture trade-offs before code</span>
              <span className="text-emerald-400 inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Direct senior ownership
              </span>
            </div>
          </div>
        </SpotlightSurface>
      </div>

      {/* Crawlable full stack overview (compact summary strip below interactive view) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
        {STACK_TRACKS.map((track) => {
          const isActive = track.id === active.id
          return (
            <button
              key={track.id}
              type="button"
              onClick={() => setActiveId(track.id)}
              className={`text-left rounded-xl border px-4 py-3 transition-all cursor-pointer ${
                isActive
                  ? 'border-[#3A57FC] bg-[#EEF2FF]/60'
                  : 'border-[#E5E7EB] bg-[#F8FAFC] hover:border-[#3A57FC]/50 hover:bg-white'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono text-[10px] text-[#3A57FC]">{track.index}</span>
                {isActive && (
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF8800]" />
                )}
              </div>
              <p className="font-display text-xs font-semibold text-[#0B0C0E]">{track.title}</p>
              <p className="mt-1 text-[11px] text-[#4B5563] line-clamp-1">
                {track.skills.slice(0, 3).join(' · ')}
              </p>
            </button>
          )
        })}
      </div>
    </div>
  )
}
