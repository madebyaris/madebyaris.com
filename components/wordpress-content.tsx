'use client'

interface WordPressContentProps {
  content: string;
  estimatedReadTime?: number;
}

export function WordPressContent({ content, estimatedReadTime = 5 }: WordPressContentProps) {
  return (
    <div
      style={{ minHeight: `${estimatedReadTime * 200}px` }}
      className="prose prose-lg dark:prose-invert max-w-none"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}