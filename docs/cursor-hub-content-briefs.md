# Cursor hub content briefs

Briefs for the WordPress posts that feed `/guides/cursor`. Aris writes these in WordPress. Assign every post to the `cursor` category so it appears in the hub and the `/blog/category/cursor` archive. To place a post in a hub section, add its slug to `cursorHub.groups` in `lib/topics/index.ts`. Until then it shows under "More Cursor posts".

Copy rules from `.cursor/rules/site-copy.mdc` apply: first person, no em or en dashes, no invented numbers, clients, or dates.

## 1. Refresh `cursor-ai-pricing` (done 2026-10-14)

Rewritten in WordPress on 2026-10-14 from the prices below, and linked again from the cost section of `/guides/cursor`. Next time the prices change, update the post, `cursorPricing` in `lib/topics/cursor-pricing.ts`, and both dates together. `tentang-skema-harga-cursor-ide` is still open.

The post used to describe Hobby, Pro at $20, Business at $40, 500 fast requests, and Claude 3.5 Sonnet. On 2026-10-14 cursor.com/pricing listed:

- Free: limited agent and chat requests
- Plus: $8 a month, Grok models only
- Premium: $30 a month, 4x Plus usage, third-party models at API list price
- Super: $100 a month, 15x Plus usage
- Ultra: $200 a month, 50x Plus usage
- Teams: from $30 per seat, 4x to 50x Plus by seat tier. Enterprise is custom
- The allowance refreshes weekly. Third-party models are billed on top at API list price

Brief:

- First paragraph answers "how much does Cursor cost" in two sentences with the date checked. AI engines quote the first paragraph.
- Add a visible "Prices checked on [date]" line, and update `cursorPricing.verifiedAt` in `lib/topics/cursor-pricing.ts` on the same day.
- Explain the third-party model bill. Teams that live on Claude or GPT pay on top of the seat.
- Link to the estimator at `/guides/cursor#cost`.
- After the refresh, restore the link to this post from the cost section of `/guides/cursor`. It was removed because it contradicted the estimator.
- Keywords: cursor pricing, cursor ai pricing, cursor pricing 2026, cursor teams pricing.
- `tentang-skema-harga-cursor-ide` (2025-07-04) has the same problem. Refresh it as an Indonesian rewrite. If both posts end up with the same sections, add the pair to `translationPairs` in `lib/seo/translations.ts` so hreflang links them.

## 2. Rewrite `cursor-project-rules`

Keywords: cursor rules, cursor rules examples, cursor rules nextjs, .cursor/rules.

- Keep the half-page rules file. It is the source of `nextjs-project-rules.mdc` in `lib/topics/cursor-rules.ts`. If you change it in the post, change it there too.
- Show the `.mdc` frontmatter (`description`, `globs`, `alwaysApply`) and when each kind of rule loads.
- Add two more real examples from your own repos, for example a copy-voice rule like `.cursor/rules/site-copy.mdc` in this repo. Each new rule can become a download in `cursorRules`.
- Link to `/guides/cursor#rules`.

## 3. Rewrite or redirect `chat-vs-composer-in-cursor`

The post is built around "Chat" and "Composer". Cursor's own pages now talk about Agent, Chat, cloud agents, and Projects (beta since 2026-09-10).

- Option A: rewrite it around the surfaces you use today, keeping the same plan-then-execute advice.
- Option B: 301 it to `cursor-agent-for-shipping` in `next.config` and drop its slug from `cursorHub.groups`.

## 4. New post: Cursor vs Claude Code

- Needs your own test: the date, the repo (or a description of it), the task, and what each tool produced. No result in the post that you did not see yourself.
- Include the same disclosure as the hub: Cursor Ambassador, SpaceXAI Ambassador, SpaceX owns Cursor.
- After the test, add a column to `cursorComparison` in `lib/topics/cursor-comparison.ts` and move `testedOn`. The plan also lists Codex for that table. Add it only after you test it the same way.

## 5. New post: Cursor Bugbot and Security Review

- Tie it to `pr-review-checklist-for-ai-generated-code`: what the bots catch, and what the human checklist still has to cover.
- Source the features from the 2026-09-23 changelog entry. Rollouts and Security Review are on Teams and Enterprise. Bugbot keeps style and quality.
- Add what you changed in your own review flow to `myWorkflowChange` on that entry in `lib/topics/cursor-changelog.ts`.

## 6. New post: Cursor rules vs skills vs AGENTS.md

- When each one loads, and what you put in each on a real repo. This repo uses all three: `.cursor/rules/`, `.cursor/skills/site-copywriting/`, and `AGENTS.md`.
- Keywords: cursor rules vs skills, AGENTS.md cursor.

## Changelog entries waiting on you

Every entry in `lib/topics/cursor-changelog.ts` has the Cursor side filled in from cursor.com. The "What I changed" line only shows once you add `myWorkflowChange`. That line is what makes the changelog worth more than Cursor's own.
