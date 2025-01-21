'use client'

import dynamic from 'next/dynamic'

const CaseStudiesCarousel = dynamic(
  () => import('@/components/case-studies-carousel').then(mod => mod.default),
  { loading: () => <div className="h-[300px]" /> }
)

export function CaseStudiesWrapper() {
  return <CaseStudiesCarousel />
} 