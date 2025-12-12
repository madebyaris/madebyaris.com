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

export interface Category {
  id: number
  name: string
  slug: string
  count?: number
}

export interface Tag {
  id: number
  name: string
  slug: string
  count: number
}

export interface Post {
  id: number
  date: string
  modified: string
  slug: string
  status: string
  type: string
  link: string
  title: {
    rendered: string
  }
  content: {
    rendered: string
    protected: boolean
  }
  excerpt: {
    rendered: string
    protected: boolean
  }
  author: number
  featured_media: number
  categories: Category[] | number[]
  tags: Tag[] | number[]
  _embedded?: {
    author?: Array<{
      id: number
      name: string
      url: string
      description: string
      link: string
      slug: string
      avatar_urls: {
        [key: string]: string
      }
    }>
    'wp:featuredmedia'?: Array<{
      id: number
      date: string
      slug: string
      type: string
      link: string
      title: {
        rendered: string
      }
      source_url: string
      alt_text: string
    }>
  }
  rank_math_seo?: {
    title: string
    description: string
    robots: {
      index: string
      follow: string
      'max-video-preview': string
      'max-image-preview': string
      'max-snippet': string
    }
  }
  blocks?: Array<{
    blockName: string
    attrs: Record<string, unknown>
    innerBlocks: Array<{
      blockName: string
      attrs: Record<string, unknown>
      innerBlocks: Array<{
        blockName: string
        attrs: Record<string, unknown>
        innerHTML: string
        innerContent: string[]
      }>
      innerHTML: string
      innerContent: string[]
    }>
    innerHTML: string
    innerContent: string[]
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