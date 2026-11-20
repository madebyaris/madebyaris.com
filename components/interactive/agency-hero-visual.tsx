'use client'

import { useEffect, useState, type ReactNode } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Check, Terminal } from 'lucide-react'
import arisPortrait from '@/public/aris.png'
import agencyHeroArt from '@/public/images/agency-hero-art.jpg'

const EASE = [0.22, 1, 0.36, 1] as const

interface PipelineStage {
  step: string
  tabLabel: string
  headline: string
  detail: string
  metricKey: string
  metricValue: string
  secondaryKey: string
  secondaryValue: string
  command: string
  deliverables: string[]
}

const STAGES: PipelineStage[] = [
  {
    step: '01',
    tabLabel: 'Architecture & Spec',
    headline: 'Written system plan before any code is billed',
    detail:
      'Model trade-offs, latency targets, data boundaries, and expected monthly cloud or API spend documented in 48 hours.',
    metricKey: 'SPEC TURNAROUND',
    metricValue: '48 hours',
    secondaryKey: 'DELIVERABLE',
    secondaryValue: 'Fixed milestone plan',
    command: '$ madebyaris spec --scope production-ai --budget capped',
    deliverables: [
      'System architecture & model routing diagram',
      'Written milestone scope with clear risks & trade-offs',
      'Projected token & hosting budget before kickoff',
    ],
  },
  {
    step: '02',
    tabLabel: 'Agents, RAG & MCP',
    headline: 'Production AI shipped directly inside your repo',
    detail:
      'Typed tool calling, custom MCP servers, RAG search, and full-stack Next.js or Rust workflows built to your code standards.',
    metricKey: 'CORE RUNTIME',
    metricValue: 'TS · Rust · Next.js',
    secondaryKey: 'INTEGRATION',
    secondaryValue: 'Direct PRs in your repo',
    command: '$ nca agent run --mcp=verified --repo=client/prod',
    deliverables: [
      'Custom AI agents with deterministic tool schemas',
      'MCP servers connecting your internal APIs & data',
      'Zero-bloat Next.js, Fastify, or Rust backend wiring',
    ],
  },
  {
    step: '03',
    tabLabel: 'Evals & Spend Caps',
    headline: 'Accuracy tests in CI and hard LLM cost ceilings',
    detail:
      'Golden evaluation suites catch prompt regressions before merge while per-tenant rate limits keep token bills predictable.',
    metricKey: 'SAFETY GATE',
    metricValue: 'CI enforced',
    secondaryKey: 'COST CONTROL',
    secondaryValue: 'Hard token spend caps',
    command: '$ pnpm eval:ci --threshold 0.98 --hard-cap-usd',
    deliverables: [
      'Golden eval suite running automatically on every PR',
      'Structured trace logging & fallback model routing',
      'Per-tenant daily/monthly API budget ceilings',
    ],
  },
  {
    step: '04',
    tabLabel: 'Launch & Full IP',
    headline: 'Zero-downtime deploy, GEO schema, and 100% ownership',
    detail:
      'Deployed to your own cloud or VPS with Core Web Vitals tuning, AI search (GEO/AEO) schema, runbooks, and full IP transfer.',
    metricKey: 'OWNERSHIP',
    metricValue: '100% Client IP',
    secondaryKey: 'HANDOFF',
    secondaryValue: 'Docs & team walkthrough',
    command: '$ deploy --zero-downtime --geo-schema verified',
    deliverables: [
      '100% repository, cloud, and IP ownership from day one',
      'JSON-LD entity schema, llms.txt & speed optimization',
      'Live staging demos plus full engineering runbooks',
    ],
  },
]

export function HeroStagger({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const reduced = useReducedMotion()
  if (reduced) return <div className={className}>{children}</div>

  return (
    <motion.div
      initial={{ opacity: 0.99, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/**
 * Ahrefs-inspired gradient-bezel interactive floating agency console.
 * Pairs a crisp white SaaS-grade interactive delivery blueprint with
 * the founder's featured editorial portrait and bespoke obsidian AI artwork.
 */
export function AgencyHeroVisual() {
  const reduced = useReducedMotion()
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (reduced || isPaused) return
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % STAGES.length)
    }, 4200)
    return () => clearInterval(id)
  }, [reduced, isPaused])

  const active = STAGES[activeIndex]

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0.99, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.12, ease: EASE }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="w-full"
    >
      {/* Signature Ahrefs Cobalt-to-Amber Gradient Outer Bezel */}
      <div className="rounded-2xl p-2.5 sm:p-4 bg-gradient-to-br from-[#6278FF] via-[#7A5AF8] to-[#FF8800] shadow-[0_36px_90px_-24px_rgba(9,14,41,0.55)]">
        {/* Crisp White Product-Grade Inner Canvas */}
        <div className="rounded-xl bg-white text-[#0B0C0E] border border-white/80 overflow-hidden shadow-inner">
          {/* Console Top Header + Ahrefs-style Segmented Pill Bar */}
          <div className="px-5 sm:px-8 pt-6 pb-5 border-b border-[#E5E7EB] bg-[#FAFBFF] text-center">
            <div className="flex items-center justify-center gap-2 mb-1.5">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <p className="font-display text-base sm:text-lg font-bold tracking-tight text-[#0B0C0E]">
                Agency Delivery Control Center
              </p>
            </div>
            <p className="text-xs sm:text-sm text-[#6B7280] mb-4">
              Inspect how Aris Setiawan and MadeByAris take AI products from scoping call to production.
            </p>

            {/* Segmented Tab Strip (Ahrefs Brand Radar style) */}
            <div
              role="tablist"
              aria-label="Agency delivery pipeline stages"
              className="inline-flex flex-wrap justify-center gap-1 rounded-lg bg-[#F1F3F9] p-1 border border-[#E5E7EB]"
            >
              {STAGES.map((stage, index) => {
                const isActive = index === activeIndex
                return (
                  <button
                    key={stage.step}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveIndex(index)}
                    className={`relative px-3 sm:px-4 py-1.5 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
                      isActive
                        ? 'text-[#B45309]'
                        : 'text-[#4B5563] hover:text-[#0B0C0E]'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="ahrefs-console-tab"
                        transition={{ type: 'spring', stiffness: 450, damping: 34 }}
                        className="absolute inset-0 rounded-md bg-[#FFF3DF] border border-[#FDBA74] shadow-xs"
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1.5">
                      <span className="font-mono text-[10px] opacity-70">{stage.step}</span>
                      <span>{stage.tabLabel}</span>
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Console Split Body: Left Featured Founder Portrait + Right Interactive Blueprint & Bespoke AI Art */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 p-5 sm:p-7 items-stretch">
            {/* Left 5 cols: Featured Founder & Agency Owner Editorial Portrait */}
            <div className="lg:col-span-5 flex flex-col lg:relative lg:min-h-[380px] rounded-xl overflow-hidden border border-[#E5E7EB] bg-[#12100E] group">
              {/* Unobstructed portrait frame on mobile/tablet; full-bleed backdrop on desktop */}
              <div className="relative w-full aspect-[4/4] sm:aspect-[5/4] lg:aspect-auto lg:absolute lg:inset-0 overflow-hidden">
                <Image
                  src={arisPortrait}
                  alt="Aris Setiawan, Founder and Owner of MadeByAris AI Development Agency"
                  fill
                  priority
                  placeholder="blur"
                  sizes="(max-width: 1024px) 100vw, 440px"
                  className="object-cover object-[50%_20%] lg:object-[50%_24%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0C0E]/60 via-transparent to-transparent lg:from-[#0B0C0E] lg:via-[#0B0C0E]/20"
                />

                {/* Top Owner Badge */}
                <div className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 rounded-full bg-[#0B0C0E]/80 backdrop-blur-md border border-white/15 px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF8800]" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-white">
                    Agency Owner &amp; Lead Architect
                  </span>
                </div>
              </div>

              {/* Owner Plate: Stacked cleanly below photo on mobile/tablet so face is never covered; floating glass plate on desktop */}
              <div className="relative lg:absolute lg:inset-x-3.5 lg:bottom-3.5 lg:rounded-lg bg-[#0B0C0E] lg:bg-[#0B0C0E]/85 lg:backdrop-blur-md border-t border-white/10 lg:border lg:border-white/15 p-4 lg:p-3.5 text-white">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <p className="font-display text-base font-bold tracking-tight">
                    Aris Setiawan
                  </p>
                  <span className="rounded bg-[#3A57FC] px-2 py-0.5 font-mono text-[10px] font-semibold text-white">
                    13+ YRS
                  </span>
                </div>
                <p className="text-xs text-zinc-300 leading-snug">
                  First Cursor Ambassador in Indonesia · Creator of RankMySEO. Founder-led architecture on every build.
                </p>
              </div>
            </div>

            {/* Right 7 cols: Interactive Pipeline Detail + Bespoke Obsidian AI Artwork Header */}
            <div className="lg:col-span-7 flex flex-col justify-between gap-4">
              {/* Compact Atmospheric Banner featuring Bespoke Obsidian AI Artwork + Live Stage Metrics */}
              <div className="relative rounded-xl overflow-hidden border border-[#1E2230] bg-[#0B0C0E] p-4 sm:p-5 text-white min-h-[126px] flex flex-col justify-between">
                <motion.div
                  aria-hidden="true"
                  animate={
                    reduced
                      ? undefined
                      : { scale: [1.02, 1.08, 1.02], x: [0, -6, 0] }
                  }
                  transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-0"
                >
                  <Image
                    src={agencyHeroArt}
                    alt="Electric cobalt and amber geometric architecture grid representing production AI systems"
                    fill
                    priority
                    placeholder="blur"
                    sizes="(max-width: 1024px) 100vw, 620px"
                    className="object-cover object-center opacity-80"
                  />
                </motion.div>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0B0C0E]/92 via-[#0B0C0E]/68 to-[#0B0C0E]/30"
                />

                <div className="relative z-10 flex items-center justify-between gap-3 mb-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-[#FFB866]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FF8800]" />
                    Stage {active.step} of 04
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-300">
                    EU · UK · SG · ID
                  </span>
                </div>

                <div className="relative z-10 grid grid-cols-2 gap-3">
                  <div className="rounded-lg bg-[#0B0C0E]/75 backdrop-blur-md border border-white/12 px-3 py-2">
                    <p className="font-mono text-[9.5px] uppercase tracking-[0.12em] text-zinc-400">
                      {active.metricKey}
                    </p>
                    <p className="font-display text-sm sm:text-base font-bold text-white mt-0.5">
                      {active.metricValue}
                    </p>
                  </div>
                  <div className="rounded-lg bg-[#0B0C0E]/75 backdrop-blur-md border border-white/12 px-3 py-2">
                    <p className="font-mono text-[9.5px] uppercase tracking-[0.12em] text-zinc-400">
                      {active.secondaryKey}
                    </p>
                    <p className="font-display text-sm sm:text-base font-bold text-[#FFB866] mt-0.5">
                      {active.secondaryValue}
                    </p>
                  </div>
                </div>
              </div>

              {/* Dynamic Stage Details & Checklist */}
              <div className="flex-1 rounded-xl border border-[#E5E7EB] bg-[#FAFBFF] p-4 sm:p-5 flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.step}
                    initial={reduced ? false : { opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduced ? undefined : { opacity: 0, y: -6 }}
                    transition={{ duration: 0.24, ease: EASE }}
                  >
                    <h2 className="font-display text-base sm:text-lg font-bold text-[#0B0C0E] tracking-tight mb-1.5">
                      {active.headline}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed mb-4">
                      {active.detail}
                    </p>
                    <ul className="space-y-2">
                      {active.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-xs text-[#1F2937] font-medium"
                        >
                          <Check strokeWidth={2.5} className="h-3.5 w-3.5 text-[#3A57FC] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>

                {/* Live Command Strip + Progress Bar */}
                <div className="mt-4 pt-3.5 border-t border-[#E5E7EB] flex flex-col gap-2.5">
                  <div className="rounded-md bg-[#0B0C0E] px-3 py-2 flex items-center gap-2 overflow-hidden">
                    <Terminal className="h-3.5 w-3.5 text-[#FF8800] shrink-0" />
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={active.step}
                        initial={reduced ? false : { opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={reduced ? undefined : { opacity: 0, y: -4 }}
                        transition={{ duration: 0.2 }}
                        className="font-mono text-[11px] text-zinc-200 truncate"
                      >
                        {active.command}
                      </motion.p>
                    </AnimatePresence>
                  </div>

                  <div className="grid grid-cols-4 gap-1.5" aria-hidden="true">
                    {STAGES.map((s, idx) => (
                      <div
                        key={s.step}
                        className="h-1 rounded-full bg-[#E5E7EB] overflow-hidden"
                      >
                        <motion.div
                          className="h-full bg-[#3A57FC]"
                          initial={false}
                          animate={{
                            width:
                              idx < activeIndex
                                ? '100%'
                                : idx === activeIndex
                                  ? '100%'
                                  : '0%',
                            opacity: idx <= activeIndex ? 1 : 0.25,
                          }}
                          transition={{
                            duration: idx === activeIndex && !isPaused ? 4.0 : 0.25,
                            ease: 'linear',
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
