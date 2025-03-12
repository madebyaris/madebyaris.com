'use client'

import Image from 'next/image'
import type { Project } from '@/app/types/wordpress'

interface ProjectsPageProps {
  projects: Project[]
}

export default function ProjectsPage({ projects }: ProjectsPageProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            {project.acf.logo && (
              <div className="relative aspect-w-16 aspect-h-9 h-48">
                <Image
                  src={project.acf.logo}
                  alt={project.title.rendered}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            )}
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{project.title.rendered}</h2>
              {project.acf.description ? (
                <p className="text-gray-600 mb-4">{project.acf.description}</p>
              ) : project.excerpt?.rendered ? (
                <div 
                  className="text-gray-600 mb-4"
                  dangerouslySetInnerHTML={{ __html: project.excerpt.rendered }}
                />
              ) : (
                <p className="text-gray-600 mb-4">Project by Aris Setiawan</p>
              )}
              {project.acf.technologies && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.acf.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-gray-100 text-sm rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              <div className="flex gap-4">
                {project.acf.project_url && (
                  <a
                    href={project.acf.project_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    View Project →
                  </a>
                )}
                {project.acf.github_url && (
                  <a
                    href={project.acf.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    View Code →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 