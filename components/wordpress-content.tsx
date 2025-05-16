'use client'

import { useEffect, useRef, useState } from 'react';

interface WordPressContentProps {
  content: string;
  estimatedReadTime?: number;
}

export function WordPressContent({ content, estimatedReadTime = 5 }: WordPressContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    if (!contentRef.current) return;

    // Calculate estimated height based on read time to prevent layout shift
    const estimatedHeight = estimatedReadTime * 200; // Rough estimate: 200px per minute of reading
    contentRef.current.style.minHeight = `${estimatedHeight}px`;
          
    // Update the content
    contentRef.current.innerHTML = content;
    setIsLoading(false);
  }, [content, estimatedReadTime]);

  return (
      <div 
        ref={contentRef}
      className={`prose prose-lg dark:prose-invert max-w-none ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
  );
} 