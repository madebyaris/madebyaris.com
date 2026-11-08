/**
 * Open-source projects shown on the home page and the AI implementation pages.
 * Everything here is hard-coded, including the star counts, so no page makes a
 * network request for them. Star counts were copied from GitHub on 8 November
 * 2026. Update them by hand when you want fresh numbers.
 */

export interface OpenSourceProject {
  name: string
  repo: string
  blurb: string
  stack: string
  stars: number
}

export interface OpenSourceProjectWithStats extends OpenSourceProject {
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
    name: 'Agent Orchestration',
    repo: 'agent-orchestration',
    blurb:
      'An MCP server for multi-agent work, with shared memory, a task queue, and resource locks.',
    stack: 'TypeScript',
    stars: 21,
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
    name: 'RankMySEO',
    repo: 'rankmyseo',
    blurb: 'The open-source version of the rank tracker behind rankmyseo.com.',
    stack: 'TypeScript',
    stars: 20,
  },
]

export function getOpenSourceProjects(): OpenSourceProjectWithStats[] {
  return openSourceProjects.map((project) => ({
    ...project,
    repoUrl: `https://github.com/${GITHUB_OWNER}/${project.repo}`,
  }))
}
