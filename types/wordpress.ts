export interface Project {
  id: number
  date: string
  modified: string
  slug: string
  status: string
  type: string
  title: {
    rendered: string
  }
  excerpt: {
    rendered: string
  }
  content: {
    rendered: string
  }
  featured_media: number
  categories: number[]
  tags: number[]
  acf: {
    project_url?: string
    github_url?: string
    technologies?: string[]
    client_name?: string
    project_type?: string
    completion_date?: string
  }
} 