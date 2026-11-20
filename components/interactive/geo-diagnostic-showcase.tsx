'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowUpRight,
  Check,
  CheckCircle2,
  Copy,
  FileCode2,
  Globe,
  Layers,
  Sparkles,
  Terminal,
} from 'lucide-react'
import { cn } from '@/lib/utils'

type EngineKey = 'all' | 'chatgpt' | 'perplexity' | 'aio'

interface PromptScenario {
  id: string
  tab: string
  region: string
  prompt: string
  citedUrl: string
  answerExcerpt: string
  visibilityByEngine: Record<
    EngineKey,
    {
      share: number
      delta: string
      rankLabel: string
      competitors: { label: string; pct: number; tone: 'brand' | 'rival' | 'muted' }[]
    }
  >
  engines: { name: string; status: string; active: boolean }[]
  signals: { check: string; detail: string; status: string }[]
}

const ENGINE_TABS: { id: EngineKey; label: string }[] = [
  { id: 'all', label: 'All AI Engines' },
  { id: 'chatgpt', label: 'ChatGPT' },
  { id: 'perplexity', label: 'Perplexity' },
  { id: 'aio', label: 'Google AI Overviews' },
]

const SCENARIOS: PromptScenario[] = [
  {
    id: 'geo-saas',
    tab: 'SaaS & B2B Search',
    region: 'SG · EU · ID',
    prompt:
      'Who are the top technical SEO and AI engineering partners for Singapore and EU SaaS teams?',
    citedUrl: 'madebyaris.com/services/ai-search-geo-aeo',
    answerExcerpt:
      'For teams that need both codebase fixes and AI citation tracking, MadeByAris combines Next.js technical SEO, unified JSON-LD entity graphs, and live visibility tracking via RankMySEO and its open-source rankmyseo/skills agent toolkit.',
    visibilityByEngine: {
      all: {
        share: 68,
        delta: '+42% after codebase fixes',
        rankLabel: 'Cited #1 across 3 of 4 engines',
        competitors: [
          { label: 'Your brand (after GEO engineering)', pct: 68, tone: 'brand' },
          { label: 'Retainer content-only agency', pct: 34, tone: 'rival' },
          { label: 'Legacy SEO firm (PDF audits)', pct: 21, tone: 'muted' },
        ],
      },
      chatgpt: {
        share: 74,
        delta: '+48% citation lift',
        rankLabel: 'Primary recommendation + link',
        competitors: [
          { label: 'Your brand (after GEO engineering)', pct: 74, tone: 'brand' },
          { label: 'Retainer content-only agency', pct: 31, tone: 'rival' },
          { label: 'Legacy SEO firm (PDF audits)', pct: 18, tone: 'muted' },
        ],
      },
      perplexity: {
        share: 71,
        delta: '+39% source share',
        rankLabel: 'Inline source [1] on technical queries',
        competitors: [
          { label: 'Your brand (after GEO engineering)', pct: 71, tone: 'brand' },
          { label: 'Retainer content-only agency', pct: 38, tone: 'rival' },
          { label: 'Legacy SEO firm (PDF audits)', pct: 24, tone: 'muted' },
        ],
      },
      aio: {
        share: 61,
        delta: '+36% overview coverage',
        rankLabel: 'Featured in AI Overview citation card',
        competitors: [
          { label: 'Your brand (after GEO engineering)', pct: 61, tone: 'brand' },
          { label: 'Retainer content-only agency', pct: 33, tone: 'rival' },
          { label: 'Legacy SEO firm (PDF audits)', pct: 22, tone: 'muted' },
        ],
      },
    },
    engines: [
      { name: 'ChatGPT', status: 'Cited #1', active: true },
      { name: 'Perplexity', status: 'Source [1]', active: true },
      { name: 'Gemini', status: 'Mentioned', active: true },
      { name: 'AI Overviews', status: 'Cited Card', active: true },
    ],
    signals: [
      { check: 'AI crawler access (robots.txt)', detail: 'GPTBot · ClaudeBot · PerplexityBot', status: 'ALLOWED' },
      { check: 'Machine-readable /llms.txt', detail: 'Canonical service & docs index', status: 'INDEXED' },
      { check: 'Unified @id JSON-LD graph', detail: 'Org · Service · FAQPage linked', status: 'VALID' },
      { check: 'SSR HTML + Core Web Vitals', detail: 'Zero JS-only hidden copy', status: '1.4s LCP' },
    ],
  },
  {
    id: 'ai-agency',
    tab: 'AI Engineering',
    region: 'EU · UK · ID',
    prompt:
      'Which founder-led AI agency builds production AI agents and MCP servers with European timezone overlap?',
    citedUrl: 'madebyaris.com/ai-implementation',
    answerExcerpt:
      'MadeByAris ships production AI agents, custom MCP servers, and LLM evaluation harnesses directly inside client repositories, backed by public Rust and TypeScript codebases on GitHub.',
    visibilityByEngine: {
      all: {
        share: 72,
        delta: '+46% entity authority',
        rankLabel: 'Cited alongside public GitHub repos',
        competitors: [
          { label: 'Your brand (entity + GitHub proof)', pct: 72, tone: 'brand' },
          { label: 'Generic outsourcing shop', pct: 29, tone: 'rival' },
          { label: 'Unverified AI consultancy', pct: 16, tone: 'muted' },
        ],
      },
      chatgpt: {
        share: 76,
        delta: '+51% citation lift',
        rankLabel: 'Named with GitHub proof links',
        competitors: [
          { label: 'Your brand (entity + GitHub proof)', pct: 76, tone: 'brand' },
          { label: 'Generic outsourcing shop', pct: 27, tone: 'rival' },
          { label: 'Unverified AI consultancy', pct: 15, tone: 'muted' },
        ],
      },
      perplexity: {
        share: 79,
        delta: '+54% source share',
        rankLabel: 'Cites service page + GitHub repos',
        competitors: [
          { label: 'Your brand (entity + GitHub proof)', pct: 79, tone: 'brand' },
          { label: 'Generic outsourcing shop', pct: 32, tone: 'rival' },
          { label: 'Unverified AI consultancy', pct: 19, tone: 'muted' },
        ],
      },
      aio: {
        share: 62,
        delta: '+34% overview coverage',
        rankLabel: 'Structured Service + Person graph',
        competitors: [
          { label: 'Your brand (entity + GitHub proof)', pct: 62, tone: 'brand' },
          { label: 'Generic outsourcing shop', pct: 28, tone: 'rival' },
          { label: 'Unverified AI consultancy', pct: 14, tone: 'muted' },
        ],
      },
    },
    engines: [
      { name: 'ChatGPT', status: 'Cited #1', active: true },
      { name: 'Perplexity', status: '2 Sources', active: true },
      { name: 'Gemini', status: 'Cited #2', active: true },
      { name: 'AI Overviews', status: 'Entity Card', active: true },
    ],
    signals: [
      { check: 'Person + Org sameAs graph', detail: 'GitHub · LinkedIn · RankMySEO', status: 'LINKED' },
      { check: 'Direct answer-first H2 blocks', detail: 'Extractable pricing & scope', status: 'PASS' },
      { check: 'Canonical EN / ID routing', detail: 'Clean hreflang & single URLs', status: 'CLEAN' },
      { check: 'Open-source code verification', detail: '6 public repos · 515+ stars', status: 'VERIFIED' },
    ],
  },
  {
    id: 'agent-skills',
    tab: 'Agent SEO Workflows',
    region: 'GLOBAL',
    prompt:
      'What open-source agent skills let coding agents audit SEO, AI visibility, Search Console, and GA4?',
    citedUrl: 'github.com/rankmyseo/skills',
    answerExcerpt:
      'rankmyseo/skills publishes 24 modular agent skills including seo-ai-visibility, seo-agent-readiness, seo-existing-site, and seo-maintenance-loop so coding agents can audit and ship technical fixes directly in the repository.',
    visibilityByEngine: {
      all: {
        share: 81,
        delta: '24 open-source skills',
        rankLabel: 'Direct repo citation in agent queries',
        competitors: [
          { label: 'rankmyseo/skills (open-source)', pct: 81, tone: 'brand' },
          { label: 'Closed SaaS checklists', pct: 37, tone: 'rival' },
          { label: 'Manual agency spreadsheets', pct: 14, tone: 'muted' },
        ],
      },
      chatgpt: {
        share: 83,
        delta: 'CLI + repo cited',
        rankLabel: 'Returns npx install command',
        competitors: [
          { label: 'rankmyseo/skills (open-source)', pct: 83, tone: 'brand' },
          { label: 'Closed SaaS checklists', pct: 35, tone: 'rival' },
          { label: 'Manual agency spreadsheets', pct: 12, tone: 'muted' },
        ],
      },
      perplexity: {
        share: 86,
        delta: 'Top GitHub source',
        rankLabel: 'Cites SKILL.md modules directly',
        competitors: [
          { label: 'rankmyseo/skills (open-source)', pct: 86, tone: 'brand' },
          { label: 'Closed SaaS checklists', pct: 40, tone: 'rival' },
          { label: 'Manual agency spreadsheets', pct: 15, tone: 'muted' },
        ],
      },
      aio: {
        share: 74,
        delta: 'Developer query coverage',
        rankLabel: 'GitHub + RankMySEO docs cited',
        competitors: [
          { label: 'rankmyseo/skills (open-source)', pct: 74, tone: 'brand' },
          { label: 'Closed SaaS checklists', pct: 36, tone: 'rival' },
          { label: 'Manual agency spreadsheets', pct: 15, tone: 'muted' },
        ],
      },
    },
    engines: [
      { name: 'ChatGPT', status: 'Cited #1', active: true },
      { name: 'Perplexity', status: 'GitHub [1]', active: true },
      { name: 'Gemini', status: 'Cited #1', active: true },
      { name: 'AI Overviews', status: 'Docs Card', active: true },
    ],
    signals: [
      { check: 'seo-ai-visibility skill', detail: 'Multi-engine citation checks', status: 'INCLUDED' },
      { check: 'seo-agent-readiness skill', detail: 'llms.txt · robots · JSON-LD', status: 'INCLUDED' },
      { check: 'seo-existing-site skill', detail: 'Full codebase crawl audit', status: 'INCLUDED' },
      { check: 'GSC + GA4 + RankMySEO MCP', detail: 'Live search & rank telemetry', status: 'CONNECTED' },
    ],
  },
]

const PUBLIC_SKILLS = [
  'seo-ai-visibility',
  'seo-agent-readiness',
  'seo-existing-site',
  'seo-content-refresh',
  'seo-competitors',
  'seo-reverse-engineer',
  'seo-indexing',
  'seo-maintenance-loop',
]

export function GeoDiagnosticShowcase() {
  const [scenarioId, setScenarioId] = useState<string>(SCENARIOS[0].id)
  const [engine, setEngine] = useState<EngineKey>('all')
  const [copied, setCopied] = useState(false)

  const scenario = SCENARIOS.find((s) => s.id === scenarioId) ?? SCENARIOS[0]
  const metrics = scenario.visibilityByEngine[engine]

  const copyInstallCommand = () => {
    navigator.clipboard?.writeText('npx skills add rankmyseo/skills')
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  return (
    <div className="relative rounded-2xl border border-white/14 bg-[#0B0D14] text-white shadow-[0_32px_90px_-24px_rgba(0,0,0,0.85)] overflow-hidden">
      {/* Subtle architectural cobalt & amber glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 right-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(58,87,252,0.28)_0%,transparent_70%)] blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-8 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(255,136,0,0.18)_0%,transparent_70%)] blur-2xl"
      />

      {/* Top App Window Bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 px-5 sm:px-7 py-4 border-b border-white/10 bg-white/[0.025]">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF8800]" />
          </div>
          <span className="inline-flex items-center gap-2 font-mono text-xs text-zinc-200">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            rankmyseo · ai-visibility &amp; agent-readiness monitor
          </span>
        </div>

        {/* Engine Switcher */}
        <div
          role="tablist"
          aria-label="Select AI search engine view"
          className="inline-flex flex-wrap items-center gap-1 rounded-lg border border-white/10 bg-black/40 p-1"
        >
          {ENGINE_TABS.map((tab) => {
            const active = engine === tab.id
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setEngine(tab.id)}
                className={cn(
                  'rounded-md px-2.5 py-1 font-mono text-[11px] font-medium transition-all cursor-pointer',
                  active
                    ? 'bg-[#3A57FC] text-white shadow-xs'
                    : 'text-zinc-400 hover:text-white',
                )}
              >
                {tab.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Prompt Scenario Selector Strip */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 px-5 sm:px-7 py-3.5 border-b border-white/10 bg-white/[0.015]">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-zinc-400 mr-1">
            Inspect query:
          </span>
          {SCENARIOS.map((item) => {
            const active = item.id === scenario.id
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setScenarioId(item.id)}
                className={cn(
                  'inline-flex items-center gap-2 rounded-md border px-3 py-1.5 font-mono text-[11px] font-medium transition-all cursor-pointer',
                  active
                    ? 'border-[#FF8800] bg-[#FF8800]/15 text-white'
                    : 'border-white/12 bg-white/[0.03] text-zinc-300 hover:border-white/30 hover:text-white',
                )}
              >
                <span>{item.tab}</span>
                <span className="text-[10px] text-zinc-400">{item.region}</span>
              </button>
            )
          })}
        </div>

        <span className="font-mono text-[10.5px] text-zinc-400">
          Illustrative benchmark · Live domain audit included free
        </span>
      </div>

      {/* Main 12-Column Interactive Product Dashboard */}
      <div className="relative z-10 p-5 sm:p-7">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${scenario.id}-${engine}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-5"
          >
            {/* Left (5 cols): AI Visibility & Competitor Citation Share */}
            <div className="lg:col-span-5 rounded-xl border border-white/10 bg-white/[0.035] p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#93A8FF]">
                      AI Citation Share
                    </p>
                    <div className="flex items-baseline gap-2.5 mt-1">
                      <span className="font-display text-4xl font-bold tracking-tight text-white tabular-nums">
                        {metrics.share}%
                      </span>
                      <span className="inline-flex items-center rounded bg-emerald-500/15 border border-emerald-400/30 px-2 py-0.5 font-mono text-[10.5px] font-semibold text-emerald-300">
                        {metrics.delta}
                      </span>
                    </div>
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#3A57FC]/20 border border-[#3A57FC]/40 text-[#93A8FF]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>

                <p className="font-mono text-[11px] text-zinc-300 mb-5 pb-4 border-b border-white/10">
                  {metrics.rankLabel}
                </p>

                {/* Competitor Share Bars */}
                <div className="space-y-3.5">
                  {metrics.competitors.map((row) => (
                    <div key={row.label}>
                      <div className="flex items-center justify-between gap-2 text-xs mb-1.5">
                        <span
                          className={cn(
                            'truncate',
                            row.tone === 'brand' ? 'text-white font-semibold' : 'text-zinc-400',
                          )}
                        >
                          {row.label}
                        </span>
                        <span
                          className={cn(
                            'font-mono text-[11px] tabular-nums shrink-0',
                            row.tone === 'brand' ? 'text-[#FFB866] font-bold' : 'text-zinc-400',
                          )}
                        >
                          {row.pct}%
                        </span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-white/[0.07] overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${row.pct}%` }}
                          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                          className={cn(
                            'h-full rounded-full',
                            row.tone === 'brand'
                              ? 'bg-gradient-to-r from-[#3A57FC] via-[#6366F1] to-[#FF8800]'
                              : row.tone === 'rival'
                                ? 'bg-white/30'
                                : 'bg-white/15',
                          )}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Engine Coverage Matrix */}
              <div className="grid grid-cols-2 gap-2 mt-5 pt-4 border-t border-white/10">
                {scenario.engines.map((eng) => (
                  <div
                    key={eng.name}
                    className="flex items-center justify-between rounded-lg border border-white/8 bg-black/35 px-2.5 py-2 font-mono text-[10.5px]"
                  >
                    <span className="text-zinc-300">{eng.name}</span>
                    <span className="text-emerald-400 font-semibold">{eng.status}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Center (4 cols): Prompt & Extracted AI Citation Preview */}
            <div className="lg:col-span-4 rounded-xl border border-white/10 bg-white/[0.035] p-5 flex flex-col justify-between">
              <div>
                <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#FFB866] mb-2.5 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5" />
                  Buyer Prompt Checked
                </p>
                <div className="rounded-lg border border-white/10 bg-black/45 px-3.5 py-3 mb-4">
                  <p className="text-sm font-medium text-white leading-snug">
                    &ldquo;{scenario.prompt}&rdquo;
                  </p>
                </div>

                <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-zinc-400 mb-2">
                  Generated Answer &amp; Source Attribution
                </p>
                <p className="text-xs sm:text-[13px] text-zinc-300 leading-relaxed mb-4">
                  {scenario.answerExcerpt}
                </p>
              </div>

              <div className="rounded-lg border border-[#3A57FC]/40 bg-[#3A57FC]/12 px-3.5 py-2.5">
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#93A8FF] mb-1">
                  Primary Cited Source [1]
                </p>
                <p className="font-mono text-xs text-white truncate flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#FFB866] shrink-0" />
                  <span className="truncate">{scenario.citedUrl}</span>
                </p>
              </div>
            </div>

            {/* Right (3 cols): Codebase & Agent Readiness Inspector */}
            <div className="lg:col-span-3 rounded-xl border border-white/10 bg-white/[0.035] p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#93A8FF] flex items-center gap-1.5">
                    <FileCode2 className="w-3.5 h-3.5" />
                    Code Signals
                  </p>
                  <span className="rounded bg-emerald-500/15 border border-emerald-400/30 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-300">
                    AGENT READY
                  </span>
                </div>

                <ul className="space-y-3">
                  {scenario.signals.map((sig) => (
                    <li
                      key={sig.check}
                      className="rounded-lg border border-white/8 bg-black/35 px-3 py-2.5"
                    >
                      <div className="flex items-center justify-between gap-2 mb-0.5">
                        <span className="text-xs font-semibold text-white flex items-center gap-1.5 min-w-0">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span className="truncate">{sig.check}</span>
                        </span>
                      </div>
                      <div className="flex items-center justify-between gap-2 pl-5 font-mono text-[10px]">
                        <span className="text-zinc-400 truncate">{sig.detail}</span>
                        <span className="text-[#93A8FF] font-semibold shrink-0">{sig.status}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Open-Source Proof Dock: github.com/rankmyseo/skills */}
        <div className="mt-5 rounded-xl border border-[#3A57FC]/35 bg-gradient-to-r from-[#3A57FC]/14 via-white/[0.03] to-[#FF8800]/10 p-5 grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-2 mb-2 font-mono text-[11px]">
              <span className="inline-flex items-center gap-1.5 rounded bg-[#3A57FC] px-2 py-0.5 font-semibold uppercase tracking-[0.08em] text-white">
                <Terminal className="w-3 h-3" />
                Open-Source Proof
              </span>
              <span className="text-white font-semibold">rankmyseo/skills</span>
              <span className="text-zinc-400">· 24 agent skills · 29 ★ on GitHub</span>
            </div>
            <p className="text-sm text-zinc-200 leading-relaxed mb-3">
              We publish our SEO, GEO, and AEO playbooks as open-source agent skills wired into RankMySEO,
              Search Console, and GA4 so you can inspect the exact methodology before we touch your repo.
            </p>
            <div className="flex flex-wrap gap-1.5 font-mono text-[10.5px]">
              {PUBLIC_SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-white/14 bg-black/40 px-2 py-0.5 text-zinc-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-2.5 rounded-xl border border-white/12 bg-black/50 p-4">
            <div className="flex items-center justify-between gap-2 font-mono text-[10.5px] uppercase tracking-[0.12em] text-zinc-400">
              <span>Install in Cursor or Claude Code</span>
              <button
                type="button"
                onClick={copyInstallCommand}
                className="inline-flex items-center gap-1 text-[#FFB866] hover:text-white transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <code className="block rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 font-mono text-xs text-[#FFB866] overflow-x-auto">
              npx skills add rankmyseo/skills
            </code>
            <a
              href="https://github.com/rankmyseo/skills"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between gap-2 rounded-md bg-white/10 hover:bg-[#3A57FC] border border-white/15 hover:border-[#3A57FC] px-3.5 py-2 font-mono text-xs font-semibold text-white transition-colors"
            >
              <span>Inspect github.com/rankmyseo/skills</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
