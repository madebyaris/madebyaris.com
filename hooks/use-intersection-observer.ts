import { useEffect, useRef, useState } from 'react'

interface UseIntersectionObserverOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useIntersectionObserver<T extends Element = Element>({
  threshold = 0.1,
  rootMargin = '50px',
  triggerOnce = true,
}: UseIntersectionObserverOptions = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasIntersected, setHasIntersected] = useState(false)
  const ref = useRef<T>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting
        
        setIsIntersecting(isElementIntersecting)
        
        if (isElementIntersecting && !hasIntersected) {
          setHasIntersected(true)
          
          if (triggerOnce) {
            observer.disconnect()
          }
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin, triggerOnce, hasIntersected])

  return {
    ref,
    isIntersecting,
    hasIntersected,
    shouldLoad: hasIntersected || isIntersecting,
  }
}

// Hook for lazy loading components
export function useLazyComponent<T extends Element = Element>(
  options: UseIntersectionObserverOptions = {}
) {
  const { ref, shouldLoad } = useIntersectionObserver<T>(options)
  const [isComponentMounted, setIsComponentMounted] = useState(false)

  useEffect(() => {
    if (shouldLoad && !isComponentMounted) {
      setIsComponentMounted(true)
    }
  }, [shouldLoad, isComponentMounted])

  return {
    ref,
    shouldLoad,
    isComponentMounted,
  }
} 