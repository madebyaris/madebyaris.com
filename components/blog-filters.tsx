"use client";

import React from 'react';
import { Search, Tag as TagIcon } from 'lucide-react';
import { useBlogFilters } from '@/components/blog-filter-context';
import type { Tag } from '@/lib/types';

interface BlogFiltersProps {
  popularTags?: Tag[];
  derivedTags?: Tag[];
}

export default function BlogFilters({ popularTags = [], derivedTags = [] }: BlogFiltersProps) {
  const { searchQuery, setSearchQuery, selectedTag, setSelectedTag } = useBlogFilters();

  const tagsToShow = popularTags.length ? popularTags : derivedTags;

  return (
    <div className="mb-6 max-w-4xl mx-auto">
      <div className="relative mb-4">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-wp-navy/60 dark:text-muted-foreground" size={20} />
        <input
          type="text"
          placeholder="Search articles..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-wp-blue/50 focus:border-wp-blue transition-all duration-300 shadow-sm hover:shadow-md text-lg"
        />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        {tagsToShow.map((tag) => (
          <button
            key={tag.slug || tag.name}
            onClick={() => setSelectedTag(selectedTag === tag.name ? null : tag.name)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border-2 ${
              selectedTag === tag.name
                ? 'bg-wp-blue text-white border-wp-blue shadow-lg scale-105'
                : 'bg-wp-blue/10 dark:bg-wp-blue/20 text-wp-blue border-wp-blue/30 dark:border-wp-blue/30 hover:bg-wp-blue/20 hover:border-wp-blue/50'
            }`}
            aria-pressed={selectedTag === tag.name}
          >
            <TagIcon className="w-4 h-4" />
            {tag.name}
          </button>
        ))}
      </div>
    </div>
  );
}
