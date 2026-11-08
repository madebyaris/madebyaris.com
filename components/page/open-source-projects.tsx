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
        <h2 id={id} className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter mb-3">
          {title}
        </h2>
        <p className="text-sm text-zinc-500 leading-relaxed">{intro}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <Link
            key={project.repo}
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all"
          >
            <div className="flex items-start justify-between gap-4 mb-2">
              <h3 className="font-semibold text-zinc-900 group-hover:text-orange-500 transition-colors">
                {project.name}
              </h3>
              <ArrowUpRight className="w-4 h-4 text-zinc-400 shrink-0 group-hover:text-orange-500 transition-colors" />
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed mb-4">{project.blurb}</p>
            <div className="flex items-center gap-4 text-xs font-medium text-zinc-500">
              <span>{project.stack}</span>
              <span className="inline-flex items-center gap-1">
                <Star className="w-3.5 h-3.5" />
                {project.stars} {starsLabel}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
