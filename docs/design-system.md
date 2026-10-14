# madebyaris.com design system

This describes what the live site renders. Source of truth: `app/globals.css`, `app/layout.tsx`, and the shared components in `components/page/`. If this file and the code disagree, the code wins. Fix this file.

## Look

A frosted glass panel floating on a zinc gradient. Zinc text, one orange accent, rounded white cards, and a dark zinc-900 band for the closing CTA. Everything is light mode.

## Layout shell (`app/layout.tsx`)

- Page background: fixed zinc-400 to zinc-300 gradient with two soft white radial highlights.
- Content sits in `main.glass-panel`, max width 1300px, `xl:rounded-[2.5rem]`, with faint vertical grid lines (`bg-zinc-950/5`).
- Horizontal padding: `px-6 md:px-10 xl:px-12`. Pages render directly inside it. Do not add another container with its own background.
- `<html lang="en">`. Indonesian pages and posts set `lang="id"` on their outer wrapper or `<article>`.

## Color

| Use | Class or value |
|---|---|
| Headings | `text-zinc-900` |
| Body | `text-zinc-600` (lead) and `text-zinc-500` (secondary) |
| Accent, icons, hovers | `text-orange-500`, `hover:text-orange-500`, `bg-orange-50` |
| Cards | `bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm`, `hover:shadow-lg` |
| Chips | `bg-zinc-100 text-zinc-600 rounded-full text-xs font-medium` |
| CTA band | `bg-zinc-900 rounded-4xl` with a 40px grid overlay at 10% opacity |
| Dividers | `h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent opacity-60` |

The shadcn tokens in `@theme` (`primary`, `muted`, `background`) still exist for `components/ui/*`. Avoid them on new pages. They render as plain black and grey and drift from the look above.

## Typography

- Font: Inter (`--font-inter`), system sans fallback.
- H1: `leading-[0.95] lg:text-[4rem] text-4xl font-medium text-zinc-900 tracking-tighter`. The second line is `<span className="block gradient-text font-light">`, with `{' '}` before it so the extracted heading text keeps its space.
- H2: `text-2xl md:text-3xl font-medium text-zinc-900 tracking-tighter`.
- Card titles: `font-semibold text-zinc-900`.
- Eyebrow pill: `text-xs font-semibold tracking-wider uppercase text-zinc-600` inside `bg-white/60 rounded-full`.
- Headings use `font-medium`. Do not use `font-bold` for headings.
- `.gradient-text` runs from zinc-600 (#52525b) to zinc-500 (#71717a). Both stay above 4.5:1 on white. Do not lighten it again.

## Buttons

- Primary: `.btn-primary`, an orange radial gradient with inset highlights. Text is zinc-900 and set by the class, so do not add `text-white`. Shape: `rounded-full py-3 px-6 text-sm font-medium`.
- Secondary: `.btn-secondary`, a translucent grey pill.
- On the dark CTA band: a white pill (`bg-white text-zinc-900`) for primary and `bg-white/10 text-white` for secondary.
- Labels name the next step ("Send me your project", "Get Cursor mentoring for your team"). See `.cursor/rules/site-copy.mdc`.

## Shared components

| Component | Use |
|---|---|
| `components/page/hero.tsx` (`PageHero`) | Eyebrow, H1 with optional accent line, lead text, actions |
| `components/page/faq.tsx` (`Faq`) | Native `<details>` FAQ. Pass the same `faqs` array to `buildPageGraph` so the schema matches what is visible |
| `components/page/cta-band.tsx` (`CtaBand`) | The zinc-900 closing band with one or two links |
| `components/related-post-card.tsx` | Post card for archives, related posts, and lists |
| `components/copy-button.tsx` | Copy text to the clipboard, used by the rules library |

Use these on new pages instead of copying the markup.

## Blog post template (`app/blog/[slug]/page.tsx`)

- Column max width 860px inside the glass panel.
- Breadcrumb: Home / Blog / primary category archive / title.
- Meta row: author link to `/about`, published date, updated date when it differs, and reading time.
- Cursor posts show a card linking to `/guides/cursor`.
- After the content come the archive chips, the author box (facts from `authorProfile`), the CTA box, and related posts from the same primary category.
- No social share buttons.

## Accessibility

- One H1 per page. `pnpm seo:check` enforces it.
- Visible focus rings come from the browser defaults or `focus:ring-2 focus:ring-orange-500/40` on inputs.
- Tables use `<th scope>`. Live regions (`aria-live="polite"`) announce results in client widgets such as the cost estimator.
