import Link from 'next/link'
import { ArrowUpRight, Star, GitBranch } from 'lucide-react'
import { getOpenSourceProjects } from '@/lib/open-source'
import {
  Reveal,
  StaggerGroup,
  StaggerItem,
} from '@/components/motion/architectural-motion'

interface OpenSourceProjectsProps {
  id?: string
  eyebrow?: string
  title?: string
  intro?: string
  starsLabel?: string
  reposLabel?: string
  className?: string
}

const STACK_DOT: Record<string, string> = {
  Rust: 'bg-[#FF8800]',
  'Rust, Tauri': 'bg-[#FF8800]',
  'Agent Skills': 'bg-[#FF8800]',
  TypeScript: 'bg-[#3A57FC]',
  Shell: 'bg-emerald-500',
}

export function OpenSourceProjects({
  id = 'open-source',
  eyebrow = 'Open Source · Public Code',
  title = 'Open source you can read',
  intro = 'All my client work is under NDA, so the public proof is code. These are the projects I maintain.',
  starsLabel = 'on GitHub',
  reposLabel = 'public repos',
  className = 'mb-16',
}: OpenSourceProjectsProps) {
  const projects = getOpenSourceProjects()
  const totalStars = projects.reduce((sum, p) => sum + p.stars, 0)

  return (
    <section className={className} aria-labelledby={id}>
      <Reveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-12">
          <div className="max-w-2xl">
            <span className="section-index block mb-2">{eyebrow}</span>
            <h2
              id={id}
              className="font-display text-3xl sm:text-4xl font-bold text-[#0B0C0E] tracking-tight mb-3"
            >
              {title}
            </h2>
            <p className="text-base text-[#4B5563] leading-relaxed">{intro}</p>
          </div>

          <div className="inline-flex items-center gap-3 self-start md:self-auto rounded-lg border border-[#E5E7EB] bg-white px-4 py-2.5 font-mono text-xs text-[#0B0C0E] shadow-xs shrink-0">
            <GitBranch className="w-3.5 h-3.5 text-[#3A57FC]" />
            <span className="font-medium">{projects.length} {reposLabel}</span>
            <span className="text-[#D1D5DB]">|</span>
            <span className="inline-flex items-center gap-1 font-bold text-[#0B0C0E]">
              <Star className="w-3.5 h-3.5 text-[#FF8800] fill-[#FF8800]" />
              {totalStars}+
            </span>
          </div>
        </div>
      </Reveal>

      {/* Symmetrical 3-col architectural bento: 6 public repos in 2 balanced rows */}
      <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => {
          const isFlagship = idx < 3

          return (
            <StaggerItem key={`${project.ownerLabel}/${project.repo}`} className="h-full">
              <Link
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col justify-between h-full rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#3A57FC] hover:shadow-[0_20px_50px_-24px_rgba(58,87,252,0.28)] p-6 md:p-7 transition-all overflow-hidden"
              >
                {isFlagship && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#3A57FC] via-[#6366F1] to-[#FF8800]"
                  />
                )}

                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="font-mono text-[11px] font-bold text-[#3A57FC]">
                          0{idx + 1}
                        </span>
                        <span className="font-mono text-[11px] text-[#6B7280] truncate">
                          {project.ownerLabel}/{project.repo}
                        </span>
                        {idx < 2 && (
                          <span className="rounded bg-[#EEF2FF] border border-[#DDE4FF] px-1.5 py-0.5 font-mono text-[9.5px] font-semibold uppercase tracking-[0.08em] text-[#2944E0]">
                            Popular
                          </span>
                        )}
                        {project.repo === 'skills' && (
                          <span className="rounded bg-[#FFF4E5] border border-[#FFD8A8] px-1.5 py-0.5 font-mono text-[9.5px] font-semibold uppercase tracking-[0.08em] text-[#B45309]">
                            SEO · GEO · AEO
                          </span>
                        )}
                      </div>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-[#0B0C0E] tracking-tight group-hover:text-[#3A57FC] transition-colors">
                        {project.name}
                      </h3>
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#E5E7EB] bg-[#F8FAFC] text-[#4B5563] shrink-0 group-hover:border-[#3A57FC] group-hover:bg-[#3A57FC] group-hover:text-white transition-all">
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                  <p className="text-sm text-[#4B5563] leading-relaxed mb-6">
                    {project.blurb}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-3 pt-4 border-t border-[#E5E7EB] font-mono text-xs">
                  <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#F8FAFC] border border-[#E5E7EB] text-[#1F2937] font-medium">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        STACK_DOT[project.stack] ?? 'bg-[#3A57FC]'
                      }`}
                    />
                    {project.stack}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[#0B0C0E] font-semibold tabular-nums">
                    <Star className="w-3.5 h-3.5 text-[#FF8800] fill-[#FF8800]" />
                    {project.stars} {starsLabel}
                  </span>
                </div>
              </Link>
            </StaggerItem>
          )
        })}
      </StaggerGroup>
    </section>
  )
}
