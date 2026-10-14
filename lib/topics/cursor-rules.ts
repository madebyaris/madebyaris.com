export interface CursorRuleFile {
  file: string
  title: string
  summary: string
  sourcePath: string
  body: string
}

// Each body comes from a published post (sourcePath). Edit the post and the
// rule together so the download never drifts from what the post teaches.
export const cursorRules: CursorRuleFile[] = [
  {
    file: 'nextjs-project-rules.mdc',
    title: 'Project rules for a Next.js app',
    summary: 'Stack, folder map, error shape, naming, and test command on half a page. Stops Cursor inventing packages and folders.',
    sourcePath: '/blog/cursor-project-rules',
    body: `---
description: Project rules for a Next.js App Router repo
alwaysApply: true
---

# Project rules

Stack: Next.js App Router, TypeScript, pnpm, Tailwind.

Folders:
- Routes: app/
- UI primitives: components/ui. Reuse these. Do not invent a new button.
- Shared helpers: lib/
- Do not create a new package or a new top-level folder.

If a helper is missing, ask before creating it. Prefer lib/ over a new utils/.

API errors: { error: string, code?: string }. Match the nearby route handler.

Naming: kebab-case files, PascalCase components. Match the sibling file.

Tests: pnpm test. Colocate as *.test.ts.

Do not change schema, auth, or payments unless the prompt names those files.
No drive-by refactors.
`,
  },
  {
    file: 'ai-code-review.mdc',
    title: 'Review checklist for AI-written code',
    summary: 'The checklist I paste into every PR that an agent drafted. The agent runs it before it calls the work done.',
    sourcePath: '/blog/pr-review-checklist-for-ai-generated-code',
    body: `---
description: Run this checklist before you call a change done, and paste it into the PR description
alwaysApply: false
---

### AI-Assisted Code Verification Checklist

- [ ] **Boundary Check:** All modified files are strictly within the intended feature scope.
- [ ] **No Unvetted Deps:** No unapproved packages added to package.json / lockfile.
- [ ] **Deduplication:** Verified that existing helpers and types were reused rather than recreated.
- [ ] **Security & Auth:** Server-side input validation and auth checks are explicitly tested.
- [ ] **Error Handling:** Empty, loading, and failure states are tested and accounted for.
- [ ] **Real Tests:** Unit/integration tests verify business outcomes, not just mock tautologies.
- [ ] **Clean Lint & Types:** Typecheck and linters pass with zero warnings.
`,
  },
]

export function cursorRulePath(file: string): string {
  return `/guides/cursor/rules/${file}`
}
