'use client';

import dynamic from 'next/dynamic';

const AnalyticsProvider = dynamic(
  () => import('@/components/analytics-provider').then(mod => mod.AnalyticsProvider),
  { ssr: false }
);

export function AnalyticsWrapper() {
  return <AnalyticsProvider />;
}

// Add default export for better HMR support
export default AnalyticsWrapper; 