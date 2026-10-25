'use client'

import dynamic from 'next/dynamic'
import { IdleClientMount } from '@/components/idle-client-mount'

const AnalyticsWrapper = dynamic(() => import('@/components/providers/analytics-wrapper'), {
  ssr: false,
})

const ServiceWorkerRegistration = dynamic(
  () =>
    import('@/components/service-worker-registration').then((mod) => ({
      default: mod.ServiceWorkerRegistration,
    })),
  { ssr: false },
)

/** Analytics and service worker load after idle so they do not extend TBT during hydration. */
export function DeferredSiteExtras() {
  return (
    <IdleClientMount>
      <AnalyticsWrapper />
      <ServiceWorkerRegistration />
    </IdleClientMount>
  )
}
