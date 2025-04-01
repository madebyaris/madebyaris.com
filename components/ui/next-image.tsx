'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface NextImageProps extends React.ComponentProps<typeof Image> {
  alt: string // Make alt text required
  width: number // Make width required
  height: number // Make height required
  className?: string
  priority?: boolean // Make priority optional
}

export function NextImage({
  alt,
  width,
  height,
  className,
  priority = false,
  ...props
}: NextImageProps) {
  const [mounted, setMounted] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Only run on client side
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className={cn('overflow-hidden', className)}>
      <Image
        alt={alt}
        width={width}
        height={height}
        className={cn(
          'duration-700 ease-in-out w-full',
          mounted && isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'
        )}
        onLoad={() => setIsLoading(false)}
        loading={priority ? 'eager' : 'lazy'}
        priority={priority}
        {...props}
      />
    </div>
  )
} 