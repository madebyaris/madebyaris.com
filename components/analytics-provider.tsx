'use client'

import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

export function AnalyticsProvider() {
  return (
    <>
      <SpeedInsights />
      <Analytics />
    </>
  )
} 