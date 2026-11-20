import Image from 'next/image'
import Link from 'next/link'
import type { Post, Project, Category, Tag } from '@/lib/types'
import { blurDataURLs } from '@/lib/utils'
import { decodeHtmlEntities, stripHtml } from '@/lib/seo'
import { ArrowUpRight } from 'lucide-react'
import { SpotlightSurface } from '@/components/motion/architectural-motion'
import blogDefaultCover from '@/public/images/blog-default-cover.jpg'

interface ProcessedPost extends Omit<Post, 'categories' | 'tags'> {
  categories: Category[]
  tags: Tag[]
}

interface HomeContentProps {
  type: 'projects' | 'posts'
  initialData: Project[] | ProcessedPost[]
}

function EmptyState({ type }: { type: 'projects' | 'posts' }) {
  return (
    <div className="col-span-full flex flex-col items-center justify-center rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] p-12 text-center">
      <p className="font-display text-lg font-bold text-[#0B0C0E]">No {type} to show yet</p>
      <p className="mt-2 text-sm text-[#4B5563]">
        New {type} appear here as soon as we publish them.
      </p>
    </div>
  )
}

export function HomeContent({ type, initialData }: HomeContentProps) {
  if (type === 'projects') {
    const projects = initialData as Project[]
    return (
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.length > 0 ? (
          projects.map((project) => (
            <SpotlightSurface
              key={project.id}
              tone="paper"
              className="rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#3A57FC] transition-all"
            >
              <article className="group flex flex-col h-full">
                {project.acf?.featured_image && (
                  <div className="aspect-[16/10] overflow-hidden border-b border-[#E5E7EB] bg-[#0B0C0E]">
                    <Image
                      src={project.acf.featured_image.url}
                      alt={project.acf.featured_image.alt}
                      width={600}
                      height={375}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                      placeholder="blur"
                      blurDataURL={blurDataURLs.tech}
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col justify-between grow">
                  <div>
                    <h2
                      className="font-display line-clamp-2 text-lg font-bold text-[#0B0C0E] group-hover:text-[#3A57FC] transition-colors"
                      dangerouslySetInnerHTML={{ __html: project.title.rendered }}
                    />
                    <div
                      className="mt-2 line-clamp-2 text-sm text-[#4B5563]"
                      dangerouslySetInnerHTML={{ __html: project.content.rendered }}
                    />
                    {project.acf?.technologies && (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.acf.technologies.map((tech: string) => (
                          <span
                            key={tech}
                            className="inline-flex items-center rounded-md border border-[#DDE4FF] bg-[#F3F5FF] px-2 py-0.5 font-mono text-[10.5px] text-[#2944E0]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="mt-5 pt-4 border-t border-[#E5E7EB] flex gap-4 font-mono text-xs">
                    {project.acf?.project_url && (
                      <Link
                        href={project.acf.project_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0B0C0E] hover:text-[#3A57FC] inline-flex items-center gap-1 transition-colors"
                      >
                        Visit site
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                    {project.acf?.github_url && (
                      <Link
                        href={project.acf.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#4B5563] hover:text-[#0B0C0E] inline-flex items-center gap-1 transition-colors"
                      >
                        Read code
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            </SpotlightSurface>
          ))
        ) : (
          <EmptyState type={type} />
        )}
      </div>
    )
  }

  const posts = initialData as ProcessedPost[]
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.length > 0 ? (
        posts.map((post, index) => {
          const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0]
          const hasFeaturedImage = Boolean(featuredMedia?.source_url)
          const primaryCategory = post.categories[0]?.name ?? 'Engineering'

          return (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group flex flex-col h-full rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#3A57FC] hover:shadow-[0_20px_50px_-24px_rgba(58,87,252,0.28)] overflow-hidden transition-all"
            >
              <article className="h-full flex flex-col">
                {/* Consistent 16:10 visual header on every card (WP featured image or bespoke default cover) */}
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-[#E5E7EB] bg-[#0B0C0E]">
                  {hasFeaturedImage && featuredMedia ? (
                    <Image
                      src={featuredMedia.source_url}
                      alt={decodeHtmlEntities(stripHtml(featuredMedia.alt_text || post.title.rendered))}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      placeholder="blur"
                      blurDataURL={blurDataURLs.tech}
                      priority={index === 0}
                    />
                  ) : (
                    <>
                      <Image
                        src={blogDefaultCover}
                        alt={decodeHtmlEntities(stripHtml(post.title.rendered))}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        placeholder="blur"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        priority={index === 0}
                      />
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0C0E]/80 via-[#0B0C0E]/15 to-transparent"
                      />
                      <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0B0C0E]/80 backdrop-blur-md border border-white/15 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-white">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#FF8800]" />
                          {primaryCategory}
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-300">
                          madebyaris
                        </span>
                      </div>
                    </>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex flex-wrap items-center gap-1.5 mb-3">
                    {post.categories.slice(0, 2).map((category) => (
                      <span
                        key={category.id}
                        className="px-2.5 py-0.5 rounded-md border border-[#DDE4FF] bg-[#F3F5FF] font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-[#2944E0]"
                      >
                        {category.name}
                      </span>
                    ))}
                  </div>

                  <h3
                    className="font-display text-lg font-bold text-[#0B0C0E] mb-2.5 leading-snug tracking-tight group-hover:text-[#3A57FC] transition-colors line-clamp-2"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />

                  <div
                    className="text-sm text-[#4B5563] mb-6 line-clamp-3 leading-relaxed flex-grow"
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  />

                  <div className="flex items-center justify-between pt-4 border-t border-[#E5E7EB] font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-[#0B0C0E]">
                    <span className="group-hover:text-[#3A57FC] transition-colors">
                      Read engineering note
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#3A57FC] group-hover:text-[#FF8800] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </div>
              </article>
            </Link>
          )
        })
      ) : (
        <EmptyState type={type} />
      )}
    </div>
  )
}
