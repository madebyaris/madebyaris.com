'use client'

import { NextImage } from '@/components/ui/next-image'

interface FeaturedImageProps {
  src: string
  alt: string
  width: number
  height: number
}

export function FeaturedImage({ src, alt, width, height }: FeaturedImageProps) {
  return (
    <div className="relative mb-12 overflow-hidden rounded-xl w-full">
      <div className="aspect-[16/9] bg-muted/20">
        <NextImage
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="object-cover"
          priority
          fetchPriority="high"
          quality={90}
        />
      </div>
    </div>
  )
} 