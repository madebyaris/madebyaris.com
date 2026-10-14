"use client";

import { useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Search, Globe, Filter } from 'lucide-react';
import type { Post, Category } from '@/lib/types';
import { blurDataURLs } from '@/lib/utils';
import { isIndonesianSlug } from '@/lib/seo';
import { BlogPagination } from '@/components/blog-pagination';

interface BlogContentProps {
  initialPosts: Post[];
  currentPage: number;
  totalPages: number;
}

type LanguageFilter = 'all' | 'en' | 'id';
type CategoryFilter = 'all' | 'nextjs' | 'cursor' | 'ai' | 'wordpress';

export function BlogContent({ initialPosts, currentPage, totalPages }: BlogContentProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLang, setSelectedLang] = useState<LanguageFilter>('all');
  const [selectedCat, setSelectedCat] = useState<CategoryFilter>('all');

  const filteredPosts = useMemo(() => {
    return initialPosts.filter((post) => {
      // Language check
      const isIndo = isIndonesianSlug(post.slug);
      if (selectedLang === 'en' && isIndo) return false;
      if (selectedLang === 'id' && !isIndo) return false;

      // Category check
      if (selectedCat !== 'all') {
        const catSlugs = Array.isArray(post.categories)
          ? (post.categories as unknown as Category[]).map((c) =>
              typeof c === 'object' && c?.slug ? c.slug.toLowerCase() : String(c).toLowerCase()
            )
          : [];
        if (!catSlugs.includes(selectedCat)) return false;
      }

      // Search query check
      if (searchQuery.trim()) {
        const searchLower = searchQuery.toLowerCase();
        const matchTitle = post.title.rendered.toLowerCase().includes(searchLower);
        const matchExcerpt = post.excerpt.rendered.toLowerCase().includes(searchLower);
        if (!matchTitle && !matchExcerpt) return false;
      }

      return true;
    });
  }, [searchQuery, selectedLang, selectedCat, initialPosts]);

  const hasActiveFilters = searchQuery.trim() !== '' || selectedLang !== 'all' || selectedCat !== 'all';

  return (
    <div className="w-full">
      {/* Controls: Search + Filters */}
      <div className="mb-10 space-y-4 max-w-2xl mx-auto">
        {/* Search input */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zinc-400" size={18} />
          <input
            type="text"
            placeholder="Search articles by title or topic..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-full border border-zinc-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all text-sm font-medium text-zinc-900 placeholder:text-zinc-400 shadow-sm"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            {[
              { id: 'all' as CategoryFilter, label: 'All topics' },
              { id: 'nextjs' as CategoryFilter, label: 'Next.js' },
              { id: 'cursor' as CategoryFilter, label: 'Cursor' },
              { id: 'ai' as CategoryFilter, label: 'AI development' },
              { id: 'wordpress' as CategoryFilter, label: 'WordPress' },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCat(cat.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedCat === cat.id
                    ? 'bg-zinc-900 text-white shadow-sm'
                    : 'bg-white border border-zinc-200 text-zinc-600 hover:border-zinc-300 hover:text-zinc-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Language Toggle */}
          <div className="flex items-center p-0.5 rounded-full bg-zinc-100 border border-zinc-200 text-xs">
            <span className="px-2 py-1 text-zinc-500 font-medium inline-flex items-center gap-1">
              <Globe className="w-3 h-3" />
            </span>
            <button
              type="button"
              onClick={() => setSelectedLang('all')}
              className={`px-2.5 py-1 rounded-full font-medium transition-colors ${
                selectedLang === 'all'
                  ? 'bg-white text-zinc-900 shadow-xs'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              All
            </button>
            <button
              type="button"
              onClick={() => setSelectedLang('en')}
              className={`px-2.5 py-1 rounded-full font-medium transition-colors ${
                selectedLang === 'en'
                  ? 'bg-white text-zinc-900 shadow-xs'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setSelectedLang('id')}
              className={`px-2.5 py-1 rounded-full font-medium transition-colors ${
                selectedLang === 'id'
                  ? 'bg-white text-zinc-900 shadow-xs'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              ID
            </button>
          </div>
        </div>

        {hasActiveFilters && (
          <p className="text-center text-xs font-medium text-zinc-500">
            Showing {filteredPosts.length} article{filteredPosts.length === 1 ? '' : 's'} on this page matching filters.
          </p>
        )}
      </div>

      {/* Posts grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredPosts.map((post, index) => {
            const isIndo = isIndonesianSlug(post.slug);

            return (
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
                    {/* Tags row: Language badge + Category chips */}
                    <div className="mb-3 flex flex-wrap items-center gap-1.5">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-zinc-900 text-white text-[10px] font-semibold uppercase tracking-wider">
                        {isIndo ? 'ID' : 'EN'}
                      </span>
                      {Array.isArray(post.categories) && post.categories.length > 0 && (
                        (post.categories as unknown as Category[])
                          .filter((c) => c && c.name && c.slug !== 'tech')
                          .slice(0, 2)
                          .map((category) => (
                            <span
                              key={category.id}
                              className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-700 text-xs font-medium border border-zinc-200"
                            >
                              {category.name}
                            </span>
                          ))
                      )}
                    </div>

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
                        Read article
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="col-span-full flex flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-white/50 p-12 text-center">
          <Filter className="w-8 h-8 text-zinc-400 mb-3" />
          <p className="text-lg font-medium text-zinc-900">No articles match your filters</p>
          <p className="mt-2 text-sm text-zinc-500 max-w-sm">
            Try switching topics or changing the language selection to view more articles.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setSelectedLang('all');
              setSelectedCat('all');
            }}
            className="mt-4 px-4 py-2 rounded-full bg-zinc-900 text-white text-xs font-medium hover:bg-zinc-800 transition-colors"
          >
            Reset filters
          </button>
        </div>
      )}

      {!hasActiveFilters && (
        <BlogPagination currentPage={currentPage} totalPages={totalPages} />
      )}
    </div>
  );
}
