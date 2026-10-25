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
    let cancelled = false
    let idleId: ReturnType<typeof window.requestIdleCallback> | undefined
    let timeoutId: number | undefined

    const mount = () => {
      if (!cancelled) setReady(true)
    }

    const scheduleIdle = () => {
      if (typeof window.requestIdleCallback === 'function') {
        idleId = window.requestIdleCallback(mount, { timeout })
      } else {
        timeoutId = window.setTimeout(mount, 1) as unknown as number
      }
    }

    if (document.readyState === 'complete') {
      scheduleIdle()
    } else {
      window.addEventListener('load', scheduleIdle, { once: true })
    }

    return () => {
      cancelled = true
      window.removeEventListener('load', scheduleIdle)
      if (idleId !== undefined && typeof window.cancelIdleCallback === 'function') {
        window.cancelIdleCallback(idleId)
      }
      if (timeoutId !== undefined) window.clearTimeout(timeoutId)
    }
  }, [timeout])

  return ready ? children : fallback
}
