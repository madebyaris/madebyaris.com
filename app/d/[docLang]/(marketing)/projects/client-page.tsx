'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Briefcase, ExternalLink } from 'lucide-react'
import { projects } from './server-page'
import { OpenSourceProjects } from '@/components/page/open-source-projects'
import { CtaBand } from '@/components/page/cta-band'
import { contactHref } from '@/lib/contact-services'
import { Reveal } from '@/components/motion/architectural-motion'

const aiProjectNotes = [
  {
    code: '01',
    title: 'AI SEO that researches, writes, and tests itself',
    problem:
      'Content teams guess which topics and headlines will work, and learn slowly because every test takes manual work.',
    built:
      'An AI system that researches a topic on its own, writes the content, runs A/B tests across versions, and uses each result to pick better next time.',
  },
  {
    code: '02',
    title: 'Indonesian legal AI grounded in expert knowledge',
    problem:
      'A general model answers Indonesian legal questions from memory alone, which is too unreliable for legal work.',
    built:
      'An AI application built with input from Indonesian law lecturers and professors, so answers draw on structured expert knowledge alongside the base model.',
  },
  {
    code: '03',
    title: 'Full architecture for a high-volume AI product',
    problem:
      'An AI workflow that handles a handful of records smoothly falls over when it has to process a thousand at once.',
    built:
      'The full stack, network, VPS, and LLM harness (prompts, tools, and retries) tuned to process a thousand records in a single run.',
  },
]

const whatToCheck = [
  {
    code: '01',
    title: 'Public AI and Rust code',
    desc: 'Inspect my open-source repos on GitHub to see how I structure agents, MCP servers, and Rust tools.',
  },
  {
    code: '02',
    title: 'Speed on a phone',
    desc: 'Open any client web build on mobile data. That is how most users experience production apps.',
  },
  {
    code: '03',
    title: 'Breadth of stacks',
    desc: 'From Rust CLIs and AI systems to Next.js, Laravel, PostgreSQL, and WordPress, across 13+ years.',
  },
]

const heroProofStats = [
  {
    value: '515+ ★',
    label: 'GitHub stars',
    note: 'Public AI, Rust & SEO tools',
  },
  {
    value: '6 repos',
    label: 'Open-source projects',
    note: 'nca, Spec Kit, rankmyseo/skills',
  },
  {
    value: 'RankMySEO',
    label: 'In-house AI SaaS',
    note: 'Rank & AI search tracking',
  },
  {
    value: '13+ yrs',
    label: 'Production engineering',
    note: `${projects.length} live client web builds`,
  },
]

export default function ClientProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = [...new Set(projects.map((p) => p.category))]
  const filteredProjects = selectedCategory
    ? projects.filter((p) => p.category === selectedCategory)
    : projects

  return (
    <>
      {/* ================================================================
          BAND 1: FULL-BLEED ELECTRIC COBALT PORTFOLIO HERO
          ================================================================ */}
      <section className="w-full bg-[#3A57FC] text-white pt-10 sm:pt-14 pb-16 md:pb-24 overflow-x-clip">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 rounded-md bg-[#0B0C0E] border border-white/15 px-3.5 py-1.5 mb-6">
              <span className="h-2 w-2 rounded-full bg-[#FF8800]" />
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
                PROOF OF WORK · PUBLIC CODE &amp; LIVE BUILDS
              </span>
            </div>

            <h1 className="font-display leading-[1.02] lg:text-[4rem] sm:text-5xl text-4xl font-bold text-white tracking-[-0.03em] mb-6">
              AI tools, open source
              <span className="block text-[#DBE4FF] font-semibold">and live client work</span>
            </h1>

            <p className="text-base sm:text-xl text-white/90 max-w-2xl leading-relaxed mb-8">
              My recent client AI work is under NDA, so this page starts with public open-source AI and
              Rust code you can read today, followed by generalized AI architecture notes and {projects.length} live
              web apps shipped over 13+ years.
            </p>

            <div className="flex flex-wrap items-center gap-3.5">
              <Link
                href={contactHref('ai-implementation')}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#FF8800] hover:bg-[#E67600] text-white font-bold text-sm px-6 py-3.5 shadow-[0_12px_28px_-10px_rgba(0,0,0,0.35)] transition-all hover:-translate-y-0.5 group"
              >
                <span>Send me your project</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <a
                href="#live-work"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/50 hover:border-white bg-white/10 hover:bg-white/18 text-white font-semibold text-sm px-6 py-3.5 transition-all"
              >
                <span>Browse live client builds</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 4-Column Stat Proof Strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm divide-y lg:divide-y-0 divide-x divide-white/15 overflow-hidden">
            {heroProofStats.map((stat) => (
              <div key={stat.label} className="p-5 md:p-6">
                <p className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white tabular-nums mb-1">
                  {stat.value}
                </p>
                <p className="text-xs font-semibold text-[#FFB866] mb-1">{stat.label}</p>
                <p className="font-mono text-[11px] text-white/75">{stat.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          BAND 2: PUBLIC OPEN-SOURCE AI & SYSTEMS WORK (SLATE)
          ================================================================ */}
      <section className="w-full bg-[#F8FAFC] border-b border-[#E5E7EB] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <OpenSourceProjects
            id="projects-open-source"
            className="mb-0"
            title="Open-source AI and developer tools"
            intro="Public repositories I build and maintain in Rust and TypeScript. Inspect the architecture, tests, and commit history directly."
          />

          {/* 3-Column What to Check Rail */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 rounded-2xl border border-[#E5E7EB] bg-white divide-y md:divide-y-0 md:divide-x divide-[#E5E7EB] overflow-hidden shadow-xs">
            {whatToCheck.map((item) => (
              <div key={item.title} className="p-6">
                <span className="inline-block font-mono text-[11px] font-bold text-[#3A57FC] bg-[#EEF2FF] border border-[#DDE4FF] rounded px-2 py-0.5 mb-3">
                  CHECK {item.code}
                </span>
                <h2 className="font-display text-base font-bold text-[#0B0C0E] mb-1.5">
                  {item.title}
                </h2>
                <p className="text-sm text-[#4B5563] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          BAND 3: GENERALIZED NDA AI ARCHITECTURE NOTES (OBSIDIAN DARK BAND)
          ================================================================ */}
      <section
        className="w-full ahrefs-dark-band text-white py-16 md:py-24"
        aria-labelledby="projects-ai-notes"
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <Reveal>
            <div className="max-w-2xl mb-10 md:mb-12">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#FFB866] block mb-2.5">
                02 / Client AI Architecture
              </span>
              <h2
                id="projects-ai-notes"
                className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight mb-3"
              >
                Selected AI systems <span className="text-[#93A8FF]">(under NDA)</span>
              </h2>
              <p className="text-base text-zinc-300 leading-relaxed">
                Client details stay private. These generalized notes show the types of production AI problems I solve.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aiProjectNotes.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/12 bg-white/[0.04] hover:bg-white/[0.07] hover:border-[#3A57FC]/70 p-6 md:p-7 flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-semibold text-[#FFB866]">
                      CASE {item.code}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-300 border border-white/15 bg-white/[0.06] rounded px-2 py-0.5">
                      NDA
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-5 leading-snug">
                    {item.title}
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-400 mb-1">
                        The problem
                      </p>
                      <p className="text-sm text-zinc-300 leading-relaxed">{item.problem}</p>
                    </div>
                    <div className="pt-4 border-t border-white/10">
                      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#93A8FF] mb-1">
                        What I built
                      </p>
                      <p className="text-sm text-zinc-200 leading-relaxed">{item.built}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          BAND 4: LIVE CLIENT WEB PRODUCTS (WHITE)
          ================================================================ */}
      <section id="live-work" className="w-full bg-white py-16 md:py-24 scroll-mt-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div className="max-w-2xl">
              <span className="section-index block mb-2">03 / Production Web Archive</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0B0C0E] tracking-tight mb-2">
                Live client <span className="gradient-text">web products</span>
              </h2>
              <p className="text-base text-[#4B5563] leading-relaxed">
                {projects.length} public web apps, marketplaces, portals, and commerce sites shipped across Next.js, React, Node.js, Laravel, and WordPress.
              </p>
            </div>
            <span className="inline-flex self-start md:self-auto rounded-md border border-[#DDE4FF] bg-[#EEF2FF] px-3 py-1.5 font-mono text-xs font-semibold text-[#2944E0]">
              Showing {filteredProjects.length} of {projects.length}
            </span>
          </div>

          {/* Animated Category Filter Rail */}
          <div className="flex flex-wrap gap-1.5 mb-8 p-1.5 rounded-xl border border-[#E5E7EB] bg-[#F8FAFC]">
            {[null, ...categories].map((category) => {
              const isActive = selectedCategory === category
              const label = category ?? 'All projects'
              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`relative px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                    isActive ? 'text-white' : 'text-[#4B5563] hover:text-[#0B0C0E]'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="projects-category-pill"
                      transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                      className="absolute inset-0 rounded-lg bg-[#3A57FC]"
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </button>
              )
            })}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="h-full flex flex-col group rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#3A57FC] hover:shadow-[0_20px_50px_-24px_rgba(58,87,252,0.22)] transition-all overflow-hidden"
              >
                {/* Logo Area */}
                <div className="relative aspect-video overflow-hidden border-b border-[#E5E7EB] bg-[#F8FAFC] flex items-center justify-center p-8">
                  {project.logo ? (
                    <Image
                      src={project.logo}
                      alt={project.title}
                      width={200}
                      height={100}
                      className="object-contain max-h-20 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                  ) : (
                    <div className="w-14 h-14 rounded-lg border border-[#E5E7EB] bg-white flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-[#6B7280]" />
                    </div>
                  )}

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open the ${project.title} website`}
                    className="absolute top-3.5 right-3.5 p-2 rounded-lg border border-[#E5E7EB] bg-white text-[#4B5563] hover:border-[#3A57FC] hover:text-[#3A57FC] transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md border border-[#DDE4FF] bg-[#EEF2FF] font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-[#2944E0]">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-[#0B0C0E] mb-2 tracking-tight group-hover:text-[#3A57FC] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[#4B5563] leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-[#F8FAFC] border border-[#E5E7EB] font-mono text-[10.5px] text-[#374151]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto pt-4 border-t border-[#E5E7EB] flex items-center justify-between font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-[#0B0C0E] hover:text-[#3A57FC] transition-colors"
                  >
                    <span>Visit live site</span>
                    <ArrowUpRight className="w-4 h-4 text-[#6B7280] group-hover:text-[#FF8800] transition-colors" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          BAND 5: FINAL CTA BAND (SLATE)
          ================================================================ */}
      <section className="w-full bg-[#F8FAFC] border-t border-[#E5E7EB] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <CtaBand
            className="mb-0"
            title="Want to build something like this together?"
            body="Tell me what you are shipping, whether it is an AI agent system, a full-stack web product, or a performance rebuild. I reply within 24 hours."
            primary={{ href: contactHref('ai-implementation'), label: 'Send me your project' }}
            secondary={{ href: '/services', label: 'Compare services' }}
          />
        </div>
      </section>
    </>
  )
}
