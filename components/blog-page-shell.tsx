"use client";

import React from 'react';
import { BlogFilterProvider } from '@/components/blog-filter-context';

export default function BlogPageShell({ children }: { children: React.ReactNode }) {
  return <BlogFilterProvider>{children}</BlogFilterProvider>;
}
