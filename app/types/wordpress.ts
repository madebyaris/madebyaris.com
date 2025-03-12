export interface Project {
  id: number
  slug: string
  title: {
    rendered: string
  }
  excerpt?: {
    rendered: string
  }
  content: {
    rendered: string
  }
  acf: {
    project_url?: string
    github_url?: string
    technologies?: string[]
    featured_image?: {
      url: string
      alt: string
    }
    logo?: string
    description?: string
    category?: string
  }
  date: string
  modified: string
  featured_media?: number
  status?: 'publish' | 'draft' | 'private'
  type?: 'project'
  link?: string
  categories?: number[]
  tags?: number[]
  rank_math_title?: string
  rank_math_description?: string
  rank_math_seo?: {
    title: string
    description: string
    robots: {
      index: boolean
      follow: boolean
    }
    canonical: string
    openGraph: {
      title: string
      description: string
      image: string
      type: string
      locale: string
    }
    twitter: {
      title: string
      description: string
      image: string
      card: string
    }
  }
} 