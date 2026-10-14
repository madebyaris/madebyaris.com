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
    <div className="relative mb-12 overflow-hidden rounded-2xl shadow-sm w-full">
      <div className="aspect-video bg-zinc-100">
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