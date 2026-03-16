'use client'

import { useEffect, useRef } from 'react'

interface WordPressContentProps {
  content: string;
  estimatedReadTime?: number;
}

export function WordPressContent({ content, estimatedReadTime = 5 }: WordPressContentProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || !content.includes('data-wp-hydrate')) {
      return
    }

    let cleanup: (() => void) | undefined

    void import('wp-block-to-html/hydration')
      .then(async ({ HydrationManager }) => {
        const manager = new HydrationManager({
          strategy: 'viewport',
        })

        await manager.initialize(containerRef.current ?? undefined)
        cleanup = () => manager.cleanup()
      })
      .catch((error) => {
        console.error('Error initializing WordPress hydration:', error)
      })

    return () => {
      cleanup?.()
    }
  }, [content])

  return (
    <div
      ref={containerRef}
      style={{ minHeight: `${estimatedReadTime * 200}px` }}
      className="prose prose-lg dark:prose-invert max-w-none"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}