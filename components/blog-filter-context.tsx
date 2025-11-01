"use client";

import React, { createContext, useContext, useState } from 'react';

interface BlogFilterContextValue {
  searchQuery: string;
  setSearchQuery: (v: string) => void;
  selectedTag: string | null;
  setSelectedTag: (v: string | null) => void;
}

const BlogFilterContext = createContext<BlogFilterContextValue | undefined>(undefined);

export function BlogFilterProvider({ children }: { children: React.ReactNode }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  return (
    <BlogFilterContext.Provider value={{ searchQuery, setSearchQuery, selectedTag, setSelectedTag }}>
      {children}
    </BlogFilterContext.Provider>
  );
}

export function useBlogFilters() {
  const ctx = useContext(BlogFilterContext);
  if (!ctx) throw new Error('useBlogFilters must be used within BlogFilterProvider');
  return ctx;
}
