'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight, Search, Globe, Filter } from 'lucide-react'
import type { Post, Category } from '@/lib/types'
import { blurDataURLs } from '@/lib/utils'
import { decodeHtmlEntities, isIndonesianSlug, stripHtml } from '@/lib/seo'
import { BlogPagination } from '@/components/blog-pagination'
import blogDefaultCover from '@/public/images/blog-default-cover.jpg'

interface BlogContentProps {
  initialPosts: Post[]
  currentPage: number
  totalPages: number
}

type LanguageFilter = 'all' | 'en' | 'id'
type CategoryFilter = 'all' | 'nextjs' | 'cursor' | 'ai' | 'wordpress'

export function BlogContent({ initialPosts, currentPage, totalPages }: BlogContentProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedLang, setSelectedLang] = useState<LanguageFilter>('all')
  const [selectedCat, setSelectedCat] = useState<CategoryFilter>('all')

  const filteredPosts = useMemo(() => {
    return initialPosts.filter((post) => {
      const isIndo = isIndonesianSlug(post.slug)
      if (selectedLang === 'en' && isIndo) return false
      if (selectedLang === 'id' && !isIndo) return false

      if (selectedCat !== 'all') {
        const catSlugs = Array.isArray(post.categories)
          ? (post.categories as unknown as Category[]).map((c) =>
              typeof c === 'object' && c?.slug ? c.slug.toLowerCase() : String(c).toLowerCase()
            )
          : []
        if (!catSlugs.includes(selectedCat)) return false
      }

      if (searchQuery.trim()) {
        const searchLower = searchQuery.toLowerCase()
        const matchTitle = post.title.rendered.toLowerCase().includes(searchLower)
        const matchExcerpt = post.excerpt.rendered.toLowerCase().includes(searchLower)
        if (!matchTitle && !matchExcerpt) return false
      }

      return true
    })
  }, [searchQuery, selectedLang, selectedCat, initialPosts])

  const hasActiveFilters =
    searchQuery.trim() !== '' || selectedLang !== 'all' || selectedCat !== 'all'

  return (
    <div className="w-full">
      {/* Crisp Filter Bar */}
      <div className="mb-10 rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] p-4 sm:p-5 space-y-4">
        <div className="flex flex-col lg:flex-row gap-3 items-stretch lg:items-center justify-between">
          {/* Search input */}
          <div className="relative flex-1 max-w-md">
            <Search
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6B7280]"
              size={16}
            />
            <input
              type="text"
              placeholder="Search articles by title or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E5E7EB] bg-white focus:outline-none focus:border-[#3A57FC] transition-colors text-sm text-[#0B0C0E] placeholder:text-[#9CA3AF]"
            />
          </div>

          {/* Filter Controls */}
          <div className="flex flex-wrap items-center justify-between lg:justify-end gap-3">
            {/* Category Tabs */}
            <div className="flex flex-wrap items-center gap-1 p-1 rounded-xl border border-[#E5E7EB] bg-white">
              {[
                { id: 'all' as CategoryFilter, label: 'All' },
                { id: 'nextjs' as CategoryFilter, label: 'Next.js' },
                { id: 'cursor' as CategoryFilter, label: 'Cursor' },
                { id: 'ai' as CategoryFilter, label: 'AI' },
                { id: 'wordpress' as CategoryFilter, label: 'WordPress' },
              ].map((cat) => {
                const active = selectedCat === cat.id
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCat(cat.id)}
                    className={`relative px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      active ? 'text-white' : 'text-[#4B5563] hover:text-[#0B0C0E]'
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="blog-cat-pill"
                        transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                        className="absolute inset-0 rounded-lg bg-[#3A57FC]"
                      />
                    )}
                    <span className="relative z-10">{cat.label}</span>
                  </button>
                )
              })}
            </div>

            {/* Language Toggle */}
            <div className="flex items-center p-1 rounded-xl bg-white border border-[#E5E7EB] font-mono text-[11px]">
              <span className="px-2 text-[#6B7280] inline-flex items-center">
                <Globe className="w-3.5 h-3.5" />
              </span>
              {(['all', 'en', 'id'] as const).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setSelectedLang(lang)}
                  className={`px-2.5 py-1 rounded-lg uppercase font-semibold transition-colors cursor-pointer ${
                    selectedLang === lang
                      ? 'bg-[#0B0C0E] text-white'
                      : 'text-[#4B5563] hover:text-[#0B0C0E]'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>

        {hasActiveFilters && (
          <div className="flex items-center justify-between pt-3 border-t border-[#E5E7EB] font-mono text-xs text-[#4B5563]">
            <span>
              Showing {filteredPosts.length} article{filteredPosts.length === 1 ? '' : 's'} matching filters
            </span>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('')
                setSelectedLang('all')
                setSelectedCat('all')
              }}
              className="font-semibold text-[#3A57FC] hover:text-[#FF8800] cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>

      {/* Posts grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, index) => {
            const isIndo = isIndonesianSlug(post.slug)
            const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0]
            const hasFeaturedImage = Boolean(featuredMedia?.source_url)
            const categories = Array.isArray(post.categories)
              ? (post.categories as unknown as Category[]).filter(
                  (c) => c && c.name && c.slug !== 'tech'
                )
              : []
            const primaryCategory = categories[0]?.name ?? 'Engineering'

            return (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group flex flex-col h-full rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#3A57FC] hover:shadow-[0_20px_50px_-24px_rgba(58,87,252,0.28)] overflow-hidden transition-all"
              >
                <article className="h-full flex flex-col">
                  <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-[#E5E7EB] bg-[#0B0C0E]">
                    {hasFeaturedImage && featuredMedia ? (
                      <Image
                        src={featuredMedia.source_url}
                        alt={decodeHtmlEntities(stripHtml(featuredMedia.alt_text || post.title.rendered))}
                        fill
                        priority={index === 0}
                        loading={index === 0 ? 'eager' : 'lazy'}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        placeholder="blur"
                        blurDataURL={blurDataURLs.default}
                      />
                    ) : (
                      <>
                        <Image
                          src={blogDefaultCover}
                          alt={decodeHtmlEntities(stripHtml(post.title.rendered))}
                          fill
                          priority={index === 0}
                          placeholder="blur"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
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
                    <div className="mb-3 flex flex-wrap items-center gap-1.5">
                      <span className="inline-flex items-center px-2 py-0.5 rounded bg-[#0B0C0E] text-white font-mono text-[10px] font-semibold uppercase tracking-wider">
                        {isIndo ? 'ID' : 'EN'}
                      </span>
                      {categories.slice(0, 2).map((category) => (
                        <span
                          key={category.id}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-md border border-[#DDE4FF] bg-[#F3F5FF] font-mono text-[10px] font-semibold uppercase tracking-[0.06em] text-[#2944E0]"
                        >
                          {category.name}
                        </span>
                      ))}
                    </div>

                    <h2
                      className="font-display text-lg font-bold mb-2.5 line-clamp-2 text-[#0B0C0E] group-hover:text-[#3A57FC] transition-colors tracking-tight leading-snug"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />

                    <div
                      className="text-sm text-[#4B5563] mb-6 line-clamp-2 leading-relaxed flex-grow"
                      dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                    />

                    <div className="mt-auto pt-4 border-t border-[#E5E7EB] flex items-center justify-between font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-[#0B0C0E]">
                      <span className="group-hover:text-[#3A57FC] transition-colors">
                        Read article
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-[#3A57FC] group-hover:text-[#FF8800] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                  </div>
                </article>
              </Link>
            )
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] p-12 text-center">
          <Filter className="w-7 h-7 text-[#6B7280] mb-3" />
          <p className="font-display text-lg font-bold text-[#0B0C0E]">
            No articles match your filters
          </p>
          <p className="mt-2 text-sm text-[#4B5563] max-w-sm">
            Try switching topics or changing the language selection to view more articles.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('')
              setSelectedLang('all')
              setSelectedCat('all')
            }}
            className="mt-5 btn-primary px-5 py-2.5 rounded-md text-xs font-semibold cursor-pointer"
          >
            Reset filters
          </button>
        </div>
      )}

      {!hasActiveFilters && (
        <BlogPagination currentPage={currentPage} totalPages={totalPages} />
      )}
    </div>
  )
}
