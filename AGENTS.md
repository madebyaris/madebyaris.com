# AGENTS.md

## Cursor Cloud specific instructions

### Overview
Single Next.js 16 (App Router) portfolio/blog site. No monorepo, no database, no Docker required. Blog content comes from an external WordPress REST API at `wp.madebyaris.com`.

### Environment variable
`NEXT_PUBLIC_WP_API_URL` **must** be set in `.env.local` or the app will throw at module load time (`lib/wordpress.ts`). For development, use:
```
NEXT_PUBLIC_WP_API_URL=https://wp.madebyaris.com/wp-json
```
Optional: `RESEND_API_KEY` (contact form email), `GITHUB_TOKEN` (higher GitHub API rate limits).

### Commands
Standard scripts are in `package.json`. Quick reference:
| Task | Command |
|------|---------|
| Dev server | `pnpm dev` (port 3000, Turbopack) |
| Lint | `pnpm lint` |
| Build | `pnpm build` |
| Production | `pnpm start` |

### Gotchas
- The project uses **pnpm 9.15.3** (declared via `packageManager` field). Using npm/yarn will produce a different lockfile.
- Node.js v20+ is required. The environment ships with v22 via nvm which works fine.
- `pnpm build` fetches live data from the WordPress API during static generation. If the WP API is down, the build will still succeed but blog/project pages will have empty content.
- ESLint produces ~13 warnings (unused vars) but zero errors. This is expected.
- The `optimizeCss` experimental flag requires the `critters` package (already in dependencies).
- `.env.local` is gitignored; each developer/agent must create it.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
