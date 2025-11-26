/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import Image from 'next/image'
import Link from 'next/link'
import type { Post, Project, Category, Tag } from '@/lib/types'
import { blurDataURLs } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'

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
    <div className="col-span-full flex flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-white/50 p-12 text-center">
      <p className="text-lg font-medium text-zinc-900">No {type} found</p>
      <p className="mt-2 text-sm text-zinc-500">
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
              className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all hover:bg-zinc-50 hover:shadow-lg"
            >
              {project.acf?.featured_image && (
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.acf.featured_image.url}
                    alt={project.acf.featured_image.alt}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    placeholder="blur"
                    blurDataURL={blurDataURLs.tech}
                  />
                </div>
              )}
              <div className="p-4 md:p-6">
                <h2
                  className="line-clamp-2 text-lg md:text-xl font-semibold text-zinc-900 group-hover:text-orange-500 transition-colors"
                  dangerouslySetInnerHTML={{ __html: project.title.rendered }}
                />
                <div
                  className="mt-2 line-clamp-2 text-sm text-zinc-500"
                  dangerouslySetInnerHTML={{ __html: project.content.rendered }}
                />
                {project.acf?.technologies && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.acf.technologies.map((tech: string) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-700"
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
                      className="text-sm font-medium text-orange-500 hover:text-orange-600 flex items-center gap-1"
                    >
                      Visit Site
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  )}
                  {project.acf?.github_url && (
                    <Link
                      href={project.acf.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-zinc-600 hover:text-zinc-900 flex items-center gap-1"
                    >
                      View Code
                      <ArrowRight className="w-3 h-3" />
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <Link href={`/blog/${post.slug}`} key={post.id} className="block group">
            <article className="bg-white h-full flex flex-col hover:bg-zinc-50 transition-colors rounded-2xl overflow-hidden border border-zinc-200 shadow-sm hover:shadow-lg">
              {/* Featured Image */}
              {post._embedded?.['wp:featuredmedia']?.[0] && (
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={post._embedded['wp:featuredmedia'][0].source_url}
                    alt={post._embedded['wp:featuredmedia'][0].alt_text || ''}
                    width={600}
                    height={400}
                    priority={index === 0}
                    loading={index === 0 ? "eager" : "lazy"}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
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
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-orange-50 text-orange-600 text-xs font-medium border border-orange-100"
                      >
                        {category.name}
                      </span>
                    ))}
                  </div>
                )}

                {/* Title */}
                <h2
                  className="text-lg font-semibold mb-2 line-clamp-2 text-zinc-900 group-hover:text-orange-500 transition-colors tracking-tight"
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />
                
                {/* Excerpt */}
                <div
                  className="text-sm text-zinc-500 mb-4 line-clamp-2 leading-relaxed flex-grow"
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                />

                {/* Read More */}
                <div className="mt-auto pt-4 border-t border-zinc-100">
                  <span className="inline-flex items-center text-sm font-medium text-zinc-900 group-hover:text-orange-500 transition-colors">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
