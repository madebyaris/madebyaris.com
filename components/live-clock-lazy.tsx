'use client'

import dynamic from 'next/dynamic'
import { IdleClientMount } from '@/components/idle-client-mount'

const LiveClock = dynamic(
  () => import('./live-clock').then((mod) => ({ default: mod.LiveClock })),
  { ssr: false },
)

function LiveClockFallback() {
  return (
    <p className="md:text-5xl text-4xl font-medium text-zinc-900 tracking-tighter font-mono">
      00:00:00
    </p>
  )
}

export function LiveClockLazy() {
  return (
    <IdleClientMount fallback={<LiveClockFallback />}>
      <LiveClock />
    </IdleClientMount>
  )
}
