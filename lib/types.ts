export interface RankMathSEO {
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

export interface Post {
  id: number
  slug: string
  title: {
    rendered: string
  }
  excerpt: {
    rendered: string
  }
  content: {
    rendered: string
  }
  date: string
  modified: string
  featured_media: number
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string
      alt_text: string
    }>
  }
  rank_math_title?: string
  rank_math_description?: string
  rank_math_seo?: RankMathSEO
  tags?: Array<{
    id: number
    name: string
    slug: string
  }>
  categories?: Array<{
    id: number
    name: string
    slug: string
  }>
}

export interface Project {
  id: number
  slug: string
  title: {
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
  }
  date: string
  modified: string
  rank_math_title?: string
  rank_math_description?: string
  rank_math_seo?: RankMathSEO
}

export interface PaginationParams {
  per_page?: number
  page?: number
  _fields?: string[]
}