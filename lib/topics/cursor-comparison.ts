export interface ToolPick {
  job: string
  pick: 'Cursor' | 'Copilot'
  why: string
}

// From client work written up in sourcePath. Add a tool column only after
// testing it on a real repo, and move testedOn forward when you do.
export const cursorComparison = {
  tools: ['Cursor', 'Copilot'] as const,
  testedOn: '2026-08-18',
  sourcePath: '/blog/cursor-ai-vs-copilot',
  picks: [
    {
      job: 'A change that touches several files',
      pick: 'Cursor',
      why: 'The agent holds the plan, repo chat finds the call sites, and I get one multi-file diff to review.',
    },
    {
      job: 'First week on a client repo',
      pick: 'Cursor',
      why: 'Repo chat answers “where does auth happen?” faster than grep when the names are lying.',
    },
    {
      job: 'Teaching a team one habit',
      pick: 'Cursor',
      why: 'Chat, agent, and project rules live in the same editor.',
    },
    {
      job: 'Local work in a file I know',
      pick: 'Copilot',
      why: 'Inline complete keeps me in flow. Opening an agent for a CSS tweak is ceremony.',
    },
    {
      job: 'A team standardized on VS Code',
      pick: 'Copilot',
      why: 'I use what they have for inline work and keep Cursor for the slices I own.',
    },
    {
      job: 'Pairing on someone else’s laptop',
      pick: 'Copilot',
      why: 'Their editor, their setup. I do not install Cursor mid-call to rename a prop.',
    },
  ] satisfies ToolPick[],
}
