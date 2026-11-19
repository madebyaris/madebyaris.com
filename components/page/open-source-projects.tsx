import Link from 'next/link'
import { ArrowUpRight, Star } from 'lucide-react'
import { getOpenSourceProjects } from '@/lib/open-source'

interface OpenSourceProjectsProps {
  id?: string
  title?: string
  intro?: string
  starsLabel?: string
}

export function OpenSourceProjects({
  id = 'open-source',
  title = 'Open source you can read',
  intro = 'All my client work is under NDA, so the public proof is code. These are the projects I maintain.',
  starsLabel = 'on GitHub',
}: OpenSourceProjectsProps) {
  const projects = getOpenSourceProjects()

  return (
    <section className="mb-16" aria-labelledby={id}>
      <div className="max-w-2xl mb-8">
        <span className="section-index block mb-2">Open Source · Public Code</span>
        <h2 id={id} className="font-display text-2xl md:text-3xl font-medium text-[#0B0C0E] tracking-tight mb-3">
          {title}
        </h2>
        <p className="text-sm text-[#525660] leading-relaxed">{intro}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <Link
            key={project.repo}
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-xl p-6 border border-[#E6E4DD] hover:border-[#0B0C0E] transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <p className="font-mono text-[11px] text-[#70747D] mb-1">
                    madebyaris/{project.repo}
                  </p>
                  <h3 className="font-display text-lg font-semibold text-[#0B0C0E] group-hover:text-[#D9481E] transition-colors">
                    {project.name}
                  </h3>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#70747D] shrink-0 group-hover:text-[#D9481E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <p className="text-sm text-[#525660] leading-relaxed mb-5">{project.blurb}</p>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-[#E6E4DD]/80 font-mono text-xs text-[#525660]">
              <span className="px-2.5 py-0.5 rounded bg-[#F3F1EB] text-[#0B0C0E]">{project.stack}</span>
              <span className="inline-flex items-center gap-1.5 text-[#0B0C0E]">
                <Star className="w-3.5 h-3.5 text-[#D9481E]" />
                {project.stars} {starsLabel}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
