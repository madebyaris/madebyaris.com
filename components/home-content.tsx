/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

"use client"

import Image from 'next/image'
import Link from 'next/link'
import type { Post, Project, Category, Tag } from '@/lib/types'
import { blurDataURLs } from '@/lib/utils'

// Interface for posts with processed categories and tags
interface ProcessedPost extends Omit<Post, 'categories' | 'tags'> {
  categories: Category[];
  tags: Tag[];
}

interface HomeContentProps {
  type: 'projects' | 'posts'
  initialData: Project[] | ProcessedPost[]
}

function EmptyState({ type }: { type: 'projects' | 'posts' }) {
  return (
    <div className="mt-6 flex flex-col items-center justify-center rounded-lg border bg-background/50 p-6 text-center">
      <p className="text-base md:text-lg font-medium">No {type} found</p>
      <p className="mt-2 text-xs md:text-sm text-muted-foreground">
        Check back later for new {type}.
      </p>
    </div>
  )
}

export function HomeContent({ type, initialData }: HomeContentProps) {
  if (type === 'projects') {
    const projects = initialData as Project[]
    return (
      <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
                    placeholder="blur"
                    blurDataURL={blurDataURLs.tech}
                  />
                </div>
              )}
              <div className="p-3 md:p-4">
                <h2
                  className="line-clamp-2 text-lg md:text-xl font-semibold"
                  dangerouslySetInnerHTML={{ __html: project.title.rendered }}
                />
                <div
                  className="mt-2 line-clamp-2 text-xs md:text-sm text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: project.content.rendered }}
                />
                {project.acf?.technologies && (
                  <div className="mt-3 md:mt-4 flex flex-wrap gap-1.5 md:gap-2">
                    {project.acf.technologies.map((tech: string) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                <div className="mt-3 md:mt-4 flex gap-3 md:gap-4">
                  {project.acf?.project_url && (
                    <Link
                      href={project.acf.project_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs md:text-sm font-medium text-primary hover:text-primary/80"
                    >
                      Visit Site →
                    </Link>
                  )}
                  {project.acf?.github_url && (
                    <Link
                      href={project.acf.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs md:text-sm font-medium text-primary hover:text-primary/80"
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

  const posts = initialData as ProcessedPost[]
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6 md:gap-8 lg:gap-10 max-w-5xl mx-auto">
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <Link href={`/blog/${post.slug}`} key={post.id} className="block group">
            <article className="relative overflow-hidden rounded-2xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border border-gray-200/60 dark:border-zinc-800/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] h-full flex flex-col">
              {/* Featured Image */}
              {post._embedded?.['wp:featuredmedia']?.[0] && (
                <div className="relative aspect-video overflow-hidden rounded-t-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                  <Image
                    src={post._embedded['wp:featuredmedia'][0].source_url}
                    alt={post._embedded['wp:featuredmedia'][0].alt_text || ''}
                    width={600}
                    height={400}
                    priority={index === 0}
                    loading={index === 0 ? "eager" : "lazy"}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                    placeholder="blur"
                    blurDataURL={blurDataURLs.default}
                  />
                </div>
              )}
              
              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Categories */}
                {post.categories.length > 0 && (
                  <div className="mb-3 flex flex-wrap gap-2">
                    {post.categories.slice(0, 2).map((category) => (
                      <span
                        key={category.id}
                        className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-wp-gold/20 to-wp-blue/20 text-wp-navy dark:bg-wp-blue/10 dark:text-wp-blue text-xs font-semibold border border-wp-gold/30 dark:border-wp-blue/30"
                      >
                        {category.name}
                      </span>
                    ))}
                  </div>
                )}

                {/* Title */}
                <h2
                  className="text-xl md:text-2xl font-bold mb-3 line-clamp-2 group-hover:text-wp-blue dark:group-hover:text-wp-gold transition-colors duration-300"
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />
                
                {/* Excerpt */}
                <div
                  className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed flex-grow"
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                />

                {/* Read More Button */}
                <div className="mt-auto pt-4 border-t border-gray-200/50 dark:border-zinc-700/50">
                  <span className="inline-flex items-center text-sm font-semibold text-wp-blue dark:text-wp-gold group-hover:text-wp-gold dark:group-hover:text-wp-blue transition-colors duration-300">
                    Read Article
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </article>
          </Link>
        ))
      ) : (
        <EmptyState type={type} />
      )}
    </div>
  )
}

// Add default export for better HMR support
export default HomeContent;
