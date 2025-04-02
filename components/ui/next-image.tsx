'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'

interface NextImageProps extends Omit<React.ComponentProps<typeof Image>, 'onError'> {
  alt: string // Make alt text required
  width: number // Make width required
  height: number // Make height required
  className?: string
  priority?: boolean // Make priority optional
  fallback?: string // Add fallback image URL
  retryCount?: number // Allow custom retry count
  onError?: (error: Error) => void // Add error callback
}

export function NextImage({
  alt,
  width,
  height,
  className,
  priority = false,
  fallback = '/images/placeholder.png',
  retryCount: maxRetries = 1,
  onError,
  src,
  ...props
}: NextImageProps) {
  const [mounted, setMounted] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const [retryCount, setRetryCount] = useState(0)
  const [currentSrc, setCurrentSrc] = useState(src)

  // Only run on client side
  useEffect(() => {
    setMounted(true)
  }, [])

  const handleError = () => {
    if (retryCount < maxRetries) {
      setRetryCount(prev => prev + 1)
      // Try loading the fallback image
      setCurrentSrc(fallback)
      onError?.(new Error(`Failed to load image: ${src}`))
    } else {
      setError(true)
      setIsLoading(false)
      onError?.(new Error(`Failed to load image after ${maxRetries} retries: ${src}`))
    }
  }

  const handleLoad = () => {
    setIsLoading(false)
    setError(false)
  }

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {!error ? (
        <>
          <Image
            alt={alt}
            width={width}
            height={height}
            className={cn(
              'duration-700 ease-in-out w-full',
              mounted && isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'
            )}
            onLoad={handleLoad}
            onError={handleError}
            loading={priority ? 'eager' : 'lazy'}
            priority={priority}
            src={currentSrc}
            {...props}
          />
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
              <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
            </div>
          )}
        </>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center bg-muted p-4">
          <span className="text-muted-foreground text-sm text-center">Image not available</span>
          <button
            onClick={() => {
              setError(false)
              setIsLoading(true)
              setRetryCount(0)
              setCurrentSrc(src as string)
            }}
            className="mt-2 text-xs text-primary hover:text-primary/80 transition-colors"
          >
            Try again
          </button>
        </div>
      )}
    </div>
  )
} 