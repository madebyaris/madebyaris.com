export interface CursorChangelogEntry {
  date: string
  cursorChange: string
  sourceUrl: string
  // Only Aris writes this, after using the change on client work. Entries
  // without it still render the Cursor side.
  myWorkflowChange?: string
}

export const cursorChangelog: CursorChangelogEntry[] = [
  {
    date: '2026-10-13',
    cursorChange: 'Origin, Cursor’s code host, opened an app marketplace with 20+ apps for deploys, CI, code review, security, and monitoring.',
    sourceUrl: 'https://cursor.com/changelog',
  },
  {
    date: '2026-10-06',
    cursorChange: 'Remote control: see and reply to agents running on your computer from the Cursor iOS app.',
    sourceUrl: 'https://cursor.com/changelog',
  },
  {
    date: '2026-09-23',
    cursorChange: 'Two review bots on Teams and Enterprise: Rollouts watches each change as it deploys, Security Review reports exploitable bugs on every PR.',
    sourceUrl: 'https://cursor.com/changelog',
  },
  {
    date: '2026-09-10',
    cursorChange: 'Projects (beta): a coordinator agent plans larger work, delegates it to subagents, and keeps shared context between them.',
    sourceUrl: 'https://cursor.com/changelog',
  },
  {
    date: '2026-09-02',
    cursorChange: 'Self-hosted machines: agents run tool calls on machines inside your own network.',
    sourceUrl: 'https://cursor.com/changelog',
  },
  {
    date: '2026-08-14',
    cursorChange: 'SpaceX completed its acquisition of Cursor. Cursor joined SpaceXAI.',
    sourceUrl: 'https://cursor.com/blog/joining-spacex',
  },
]
