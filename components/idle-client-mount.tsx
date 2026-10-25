'use client'

import { useEffect, useState, type ReactNode } from 'react'

type IdleClientMountProps = {
  children: ReactNode
  fallback?: ReactNode
  /** Max wait before mounting when the main thread stays busy (ms). */
  timeout?: number
}

/** Mount children after idle time so hydration-critical work can finish first. */
export function IdleClientMount({ children, fallback = null, timeout = 2500 }: IdleClientMountProps) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const run = () => setReady(true)
    if (typeof window.requestIdleCallback === 'function') {
      const id = window.requestIdleCallback(run, { timeout })
      return () => window.cancelIdleCallback(id)
    }
    const t = window.setTimeout(run, 1)
    return () => window.clearTimeout(t)
  }, [timeout])

  return ready ? children : fallback
}
