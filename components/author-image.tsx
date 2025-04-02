'use client'

import { NextImage } from '@/components/ui/next-image'

interface AuthorImageProps {
  src: string
  alt: string
  width: number
  height: number
}

export function AuthorImage({ src, alt, width, height }: AuthorImageProps) {
  return (
    <div className="relative h-20 w-20 rounded-full overflow-hidden shadow-md border-2 border-primary/20 bg-muted flex-shrink-0">
      <NextImage 
        src={src} 
        alt={alt} 
        width={width}
        height={height}
        className="object-cover"
        priority
        fallback="/images/placeholder.png"
      />
    </div>
  )
} 