/**
 * GitHub API integration for fetching repository data
 * Used for displaying real case studies from GitHub
 */

export interface GitHubRepo {
  name: string
  description: string
  stars: number
  forks: number
  homepageUrl: string | null
  repoUrl: string
  topics: string[]
  openGraphImageUrl: string | null
  language: string | null
  createdAt: string
  updatedAt: string
}

export interface CaseStudy {
  title: string
  description: string
  image: string
  stars: number
  forks: number
  repoUrl: string
  homepageUrl: string | null
  tags: string[]
  ctaText: string
  link: string
  authors: { avatar: string }[]
}

const GITHUB_USERNAME = process.env.GITHUB_USERNAME || 'madebyaris'
const GITHUB_TOKEN = process.env.GITHUB_TOKEN

/**
 * Fetch pinned repositories using GitHub REST API
 * Falls back to most-starred repositories if no pinned repos found
 */
export async function fetchPinnedRepos(): Promise<GitHubRepo[]> {
  try {
    // First try to get pinned repos (they're in the user's profile)
    // GitHub doesn't have a direct API for pinned repos, so we'll fetch repos sorted by stars
    const headers: HeadersInit = {
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'madebyaris.com',
    }

    if (GITHUB_TOKEN) {
      headers['Authorization'] = `Bearer ${GITHUB_TOKEN}`
    }

    // Fetch user's public repos sorted by stars (descending)
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=stars&direction=desc&per_page=6&type=all`,
      {
        headers,
        next: { revalidate: 43200 }, // Cache for 12 hours
      }
    )

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`)
    }

    const repos: any[] = await response.json()

    // Transform to our format
    const transformedRepos: GitHubRepo[] = repos
      .filter(repo => !repo.fork && repo.private === false) // Only non-fork, public repos
      .slice(0, 6) // Limit to 6 repos
      .map((repo: any) => ({
        name: repo.name,
        description: repo.description || 'No description available',
        stars: repo.stargazers_count || 0,
        forks: repo.forks_count || 0,
        homepageUrl: repo.homepage || null,
        repoUrl: repo.html_url,
        topics: repo.topics || [],
        openGraphImageUrl: null, // GitHub doesn't provide OG images via API
        language: repo.language || null,
        createdAt: repo.created_at,
        updatedAt: repo.updated_at,
      }))

    return transformedRepos
  } catch (error) {
    console.error('Error fetching GitHub repos:', error)
    // Return empty array on error to prevent page breakage
    return []
  }
}

/**
 * Convert GitHub repo to CaseStudy format
 */
export function repoToCaseStudy(repo: GitHubRepo, index: number): CaseStudy {
  // Use first topic as primary tag, fallback to language
  const primaryTag = repo.topics[0] || repo.language || 'Open Source'
  const tags = [
    primaryTag,
    ...repo.topics.slice(1, 3), // Take up to 2 more topics
    repo.language && !repo.topics.includes(repo.language) ? repo.language : null,
  ].filter(Boolean) as string[]

  // Use default image if no OG image
  const image = repo.openGraphImageUrl || '/case-1.png'

  return {
    title: repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    description: repo.description || `A ${repo.language || 'web'} project by Aris Setiawan`,
    image,
    stars: repo.stars,
    forks: repo.forks,
    repoUrl: repo.repoUrl,
    homepageUrl: repo.homepageUrl,
    tags: tags.slice(0, 3), // Max 3 tags
    ctaText: 'View Repository',
    link: repo.homepageUrl || repo.repoUrl,
    authors: [
      { avatar: '/aris.png' },
    ],
  }
}

/**
 * Fetch and transform case studies from GitHub
 */
export async function fetchCaseStudies(): Promise<CaseStudy[]> {
  const repos = await fetchPinnedRepos()
  return repos.map(repoToCaseStudy)
}
