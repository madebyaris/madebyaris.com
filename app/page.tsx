import Link from 'next/link'
import { Suspense } from 'react'
import { getPosts } from '@/lib/wordpress'
import { HomeContent } from '@/components/home-content'
import { ClientHero } from '@/components/client-hero'
import CaseStudiesCarousel  from '@/components/case-studies-carousel'

// Server Components
async function Posts() {
  try {
    const posts = await getPosts({ per_page: 3 })
    return <HomeContent type="posts" initialData={posts} />
  } catch (error) {
    console.error('Failed to load posts:', error)
    return <HomeContent type="posts" initialData={[]} />
  }
}

// Server Component
export default function HomePage() {
  return (
    <main className="flex flex-col w-full">
      <ClientHero />
      
      {/* Case Studies Carousel Section */}
      <section className="w-full py-3 bg-muted relative z-10">
        <div className="w-full max-w-[980px] mx-auto px-4">
          <CaseStudiesCarousel />
        </div>
        <div className="w-full max-w-[980px] mx-auto pb-10 relative z-10"></div>
      </section>

      {/* Main content */}
      <div className="w-full max-w-[980px] px-4 py-8 md:py-12 lg:py-24 mx-auto md:mt-[15%]">
        {/* Latest Posts Section */}
        <section className="mt-20">
          <div className="mb-8 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">
                Latest Posts
              </h2>
              <p className="mt-1 text-muted-foreground">
                My recent thoughts and insights
              </p>
            </div>
            <Link
              href="/blog"
              className="text-sm font-medium text-primary hover:text-primary/80"
            >
              View All →
            </Link>
          </div>
          <Suspense fallback={
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-[300px] animate-pulse rounded-lg bg-muted" />
              ))}
            </div>
          }>
            <Posts />
          </Suspense>
        </section>
      </div>
    </main>
  )
}
