/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

"use client"

import Image from 'next/image'
import Link from 'next/link'
import type { Post, Project } from '@/lib/types'

interface HomeContentProps {
  type: 'projects' | 'posts'
  initialData: Project[] | Post[]
}

function EmptyState({ type }: { type: 'projects' | 'posts' }) {
  return (
    <div className="mt-8 flex flex-col items-center justify-center rounded-lg border bg-background/50 p-8 text-center">
      <p className="text-lg font-medium">No {type} found</p>
      <p className="mt-2 text-sm text-muted-foreground">
        Check back later for new {type}.
      </p>
    </div>
  )
}

export function HomeContent({ type, initialData }: HomeContentProps) {
  if (type === 'projects') {
    const projects = initialData as Project[]
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.length > 0 ? (
          projects.map((project) => (
            <article
              key={project.id}
              className="group relative overflow-hidden rounded-lg border bg-background transition-colors hover:bg-accent"
            >
              {project.acf?.featured_image && (
                <div className="aspect-video overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={project.acf.featured_image.url}
                    alt={project.acf.featured_image.alt}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
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
                {project.acf?.technologies && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.acf.technologies.map((tech: string) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
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
          ))
        ) : (
          <EmptyState type={type} />
        )}
      </div>
    )
  }

  const posts = initialData as Post[]
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.length > 0 ? (
        posts.map((post, index) => (
          
          <article
            key={post.id}
            className="group relative overflow-hidden rounded-lg border bg-background transition-colors hover:bg-accent"
          >
            <Link href={`/blog/${post.slug}`} key={post.id}>
            {post._embedded?.['wp:featuredmedia']?.[0] && (
              <div className="aspect-video overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={post._embedded['wp:featuredmedia'][0].source_url}
                  alt={post._embedded['wp:featuredmedia'][0].alt_text || ''}
                  width={index === 0 ? 400 : 600}
                  height={index === 0 ? 225 : 400}
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover w-full h-full"
                />
              </div>
            )}
            
            <div className="p-4">
              <h2
                className="line-clamp-2 text-xl font-semibold"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />
              <div
                className="mt-2 line-clamp-2 text-sm text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              />
              <div className="mt-4">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm font-medium text-primary hover:text-primary/80"
                >
                  Read More →
                </Link>
              </div>
            </div>
            </Link>
          </article>

        ))
      ) : (
        <EmptyState type={type} />
      )}
    </div>
  )
}
