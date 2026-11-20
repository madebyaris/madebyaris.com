/**
 * Open-source projects shown on the home page, projects page, and AI / SEO service pages.
 * Everything here is hard-coded, including the star counts, so no page makes a
 * network request for them. Update them by hand when you want fresh numbers.
 */

export interface OpenSourceProject {
  name: string
  owner?: string
  repo: string
  blurb: string
  stack: string
  stars: number
}

export interface OpenSourceProjectWithStats extends OpenSourceProject {
  ownerLabel: string
  repoUrl: string
}

const DEFAULT_GITHUB_OWNER = 'madebyaris'

export const openSourceProjects: readonly OpenSourceProject[] = [
  {
    name: 'nca (native-cli-ai)',
    repo: 'native-cli-ai',
    blurb:
      'A native Rust CLI that orchestrates AI agents across projects, with persistent sessions, git worktrees, and local-first control.',
    stack: 'Rust',
    stars: 205,
  },
  {
    name: 'Spec Kit for Cursor',
    repo: 'spec-kit-command-cursor',
    blurb:
      'A spec-driven toolkit for Cursor. The /specify, /plan, and /tasks commands turn an idea into specs, plans, and tasks.',
    stack: 'Shell',
    stars: 199,
  },
  {
    name: 'RankMySEO Agent Skills',
    owner: 'rankmyseo',
    repo: 'skills',
    blurb:
      '24 open-source agent skills for SEO, GEO, and AEO: audit AI visibility, agent readiness, Search Console, and GA4 directly from coding agents.',
    stack: 'Agent Skills',
    stars: 29,
  },
  {
    name: 'Chaca Scanner',
    repo: 'chaca-scanner',
    blurb:
      'A desktop web security scanner for developers: OWASP Top 10 checks, API exposure, and CMS detection.',
    stack: 'Rust, Tauri',
    stars: 41,
  },
  {
    name: 'Agent Orchestration',
    repo: 'agent-orchestration',
    blurb:
      'An MCP server for multi-agent work, with shared memory, a task queue, and resource locks.',
    stack: 'TypeScript',
    stars: 21,
  },
  {
    name: 'RankMySEO',
    repo: 'rankmyseo',
    blurb: 'The open-source version of the rank tracker behind rankmyseo.com.',
    stack: 'TypeScript',
    stars: 20,
  },
]

export function getOpenSourceProjects(): OpenSourceProjectWithStats[] {
  return openSourceProjects.map((project) => {
    const ownerLabel = project.owner ?? DEFAULT_GITHUB_OWNER
    return {
      ...project,
      ownerLabel,
      repoUrl: `https://github.com/${ownerLabel}/${project.repo}`,
    }
  })
}
