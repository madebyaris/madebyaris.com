'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function BlogPostNotFound() {
  const router = useRouter()
  
  useEffect(() => {
    // Redirect to the main not-found page
    router.push('/not-found')
  }, [router])
  
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="animate-pulse text-center">
        <h2 className="text-xl font-medium mb-2">Post Not Found</h2>
        <p className="text-muted-foreground">Redirecting to 404 page...</p>
      </div>
    </div>
  )
} 