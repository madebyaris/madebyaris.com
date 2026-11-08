/**
 * Open-source projects shown on the home page and /ai-implementation.
 * Names, blurbs, and links are curated here; star counts are read live from
 * the GitHub API and cached for 24 hours. A count is left out when the request
 * fails, so a missing number never shows as zero.
 */

export interface OpenSourceProject {
  name: string
  repo: string
  blurb: string
  stack: string
}

export interface OpenSourceProjectWithStats extends OpenSourceProject {
  stars: number | null
  repoUrl: string
}

const GITHUB_OWNER = 'madebyaris'

export const openSourceProjects: readonly OpenSourceProject[] = [
  {
    name: 'nca (native-cli-ai)',
    repo: 'native-cli-ai',
    blurb:
      'A native Rust CLI that orchestrates AI agents across projects, with persistent sessions, git worktrees, and local-first control.',
    stack: 'Rust',
  },
  {
    name: 'Spec Kit for Cursor',
    repo: 'spec-kit-command-cursor',
    blurb:
      'A spec-driven toolkit for Cursor. The /specify, /plan, and /tasks commands turn an idea into specs, plans, and tasks.',
    stack: 'Shell',
  },
  {
    name: 'Agent Orchestration',
    repo: 'agent-orchestration',
    blurb:
      'An MCP server for multi-agent work, with shared memory, a task queue, and resource locks.',
    stack: 'TypeScript',
  },
  {
    name: 'Chaca Scanner',
    repo: 'chaca-scanner',
    blurb:
      'A desktop web security scanner for developers: OWASP Top 10 checks, API exposure, and CMS detection.',
    stack: 'Rust, Tauri',
  },
  {
    name: 'RankMySEO',
    repo: 'rankmyseo',
    blurb: 'The open-source version of the rank tracker behind rankmyseo.com.',
    stack: 'TypeScript',
  },
]

async function fetchStars(repo: string): Promise<number | null> {
  try {
    const headers: HeadersInit = {
      Accept: 'application/vnd.github+json',
      'User-Agent': 'madebyaris.com',
    }
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`
    }
    const response = await fetch(`https://api.github.com/repos/${GITHUB_OWNER}/${repo}`, {
      headers,
      signal: AbortSignal.timeout(5000),
      next: { revalidate: 86400 },
    })
    if (!response.ok) {
      console.error(`GitHub stars request failed for ${repo}: ${response.status}`)
      return null
    }
    const data = (await response.json()) as { stargazers_count?: number }
    return typeof data.stargazers_count === 'number' ? data.stargazers_count : null
  } catch (error) {
    console.error(`GitHub stars request error for ${repo}:`, error)
    return null
  }
}

export async function getOpenSourceProjects(): Promise<OpenSourceProjectWithStats[]> {
  const stars = await Promise.all(openSourceProjects.map((project) => fetchStars(project.repo)))
  return openSourceProjects.map((project, index) => ({
    ...project,
    stars: stars[index],
    repoUrl: `https://github.com/${GITHUB_OWNER}/${project.repo}`,
  }))
}
