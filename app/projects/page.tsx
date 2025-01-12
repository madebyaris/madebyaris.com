/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getProjects } from '@/lib/wordpress'
import type { Project } from '@/lib/types'

export const metadata: Metadata = {
  title: 'Projects - MadeByAris',
  description: 'Explore my portfolio of web development projects.',
  openGraph: {
    title: 'Projects - MadeByAris',
    description: 'Explore my portfolio of web development projects.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'Projects - MadeByAris',
    description: 'Explore my portfolio of web development projects.',
  },
  alternates: {
    canonical: 'https://madebyaris.com/projects',
  },
}

export default async function ProjectsPage() {
  let projects: Project[] = []
  
  try {
    projects = await getProjects({ per_page: 12 })
  } catch (error) {
    console.error('Failed to fetch projects:', error)
  }

  return (
    <div className="container">
      <div className="mx-auto max-w-[980px] py-8 md:py-12 lg:py-24">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl">
            Projects
          </h1>
          <p className="text-xl text-muted-foreground">
            A collection of my work and side projects.
          </p>
        </div>

        {projects.length > 0 ? (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group relative overflow-hidden rounded-lg border bg-background transition-colors hover:bg-accent"
              >
                {project.acf?.featured_image && (
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={project.acf.featured_image.url}
                      alt={project.acf.featured_image.alt}
                      width={600}
                      height={400}
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-4">
                  <h2
                    className="line-clamp-2 text-xl font-semibold"
                    dangerouslySetInnerHTML={{ __html: project.title.rendered }}
                  />
                  <div
                    className="mt-2 line-clamp-2 text-sm text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: project.content.rendered }}
                  />
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.acf?.technologies?.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-4">
                    {project.acf?.project_url && (
                      <Link
                        href={project.acf.project_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-primary hover:text-primary/80"
                      >
                        Visit Site →
                      </Link>
                    )}
                    {project.acf?.github_url && (
                      <Link
                        href={project.acf.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-primary hover:text-primary/80"
                      >
                        View Code →
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-8 flex flex-col items-center justify-center rounded-lg border bg-background/50 p-8 text-center">
            <p className="text-lg font-medium">No projects found</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Check back later for new projects.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
