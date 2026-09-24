---
name: site-copywriting
description: Write or rewrite conversion copy for madebyaris.com pages (hero, services, CTAs, FAQs, meta titles and descriptions) in Aris's voice without AI tells. Use when the user asks to improve copy, fix "slop", rewrite a page, write CTAs, or when adding a new page.
---

# Site copywriting for madebyaris.com

This skill adapts the `copywriting` and `copy-editing` skills from [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) and the Wikipedia-based `humanizer` checks to this site. The short, always-on version is `.cursor/rules/site-copy.mdc`.

## 1. Context (read before writing)

**Who reads this site**
- **Build buyers:** founders, agency owners, and marketing leads who need a Next.js, headless WordPress, or AI feature shipped. Their worry: "Will this person disappear, over-engineer, or break our SEO?"
- **Level up buyers:** engineering leads and developers whose team bought Cursor seats and got messy PRs. Their worry: "Is this a demo tour, or will it change how we ship?"
- **Indonesian buyers:** companies searching "jasa Next.js", "agensi Next.js". Write those pages in natural Bahasa Indonesia, not translated English.

**Offer:** two doors. Build (hire Aris to ship) goes to `/contact`. Level up (Cursor mentoring) goes to `/services/vibe-code-friend`. Each page has one primary door.

**Facts you may use** (from `authorProfile` in `lib/seo/config.ts`, `/about`, and published posts):
- 13+ years shipping web products, independent since 2015.
- First Cursor Ambassador in Indonesia, SpaceXAI Ambassador, MiniMax Dev Community Expert.
- Worked at Hongkiat.com, co-founded Raja Kreatif Asia, senior full-stack at SAB Digital Marketing Agency.
- Based in Sidoarjo, Indonesia. Works remotely worldwide. English and Indonesian.
- This site is headless WordPress plus Next.js on Vercel. It's usable proof.

Anything else (client names, results, prices, timelines) must come from the user. If a sentence needs a fact you don't have, write a simpler sentence or ask.

**Keywords and CTAs:** each page's primary keyword, secondary keywords, and CTA id are in [keyword-map.md](keyword-map.md). Build CTAs link to `contactHref('<id>')` from `lib/contact-services.ts`, which opens `/contact` with the right service already selected.

## 2. Write

Structure: headline with the outcome, subhead with who it's for plus a proof point, then a primary CTA. After that: problem, what you get, how it works, objections as a visible FAQ, and a final CTA.

- **Clarity over cleverness.** Every headline must pass the "Now you can…" test.
- **Customer language.** Use the words from Search Console queries and client emails, like "Cursor pricing", "headless WordPress Next.js", or "PR review for AI code".
- **Specific over vague.** "Webhook refreshes the post within seconds of publishing" beats "fast updates".
- **So what?** Every feature needs a "which means…" bridge to what the reader gets, or it goes.
- **One idea per section.** Paragraphs are 2–4 sentences, and sentences run under 25 words.
- **CTA formula:** action verb, what they get, then a qualifier ("Get Cursor mentoring for your team"). Put a risk reducer next to it ("I'll tell you if it isn't worth it").

## 3. Edit: seven sweeps, in order

1. **Clarity:** Can a stranger follow it on one read?
2. **Voice:** Is it the same Aris throughout, first person and plain?
3. **So what:** Does each claim say what the reader gets?
4. **Prove it:** Does each claim have a fact from section 1 nearby? If not, soften or cut it.
5. **Specificity:** Cut or replace "improve", "optimize", "modern", and "quality".
6. **Emotion:** Is the reader's real pain named (broken SEO after a migration, PRs nobody can explain)?
7. **Zero risk:** Next to each CTA, does the reader know what happens after they click?

## 4. Remove AI tells (strongest first)

- **Not-X-but-Y** and clipped negative tails (", not slide decks", "bukan sekadar"). State the positive claim.
- **Em and en dashes** in copy. Rewrite the sentence.
- **One-line closers and fragments** ("That's the real win.", "No fluff. No hype.").
- **Forced triads** ("fast, secure, and scalable"). Keep three only when there really are three.
- **Stock words:** seamless, leverage, robust, cutting-edge, pixel-perfect, comprehensive, innovative, world-class, unlock, elevate, empower, supercharge, blazing, solutions, utilize, peak performance, delve, crucial, vibrant.
- **Title Case chips** ("Unique Design", "Mobile-First"). Use sentence case, or cut the chip if it says nothing.
- **Leftover drafting or chat text** shipped to users ("Paste it here and I'll update it").

## 5. Check and ship

1. Run `pnpm copy:check` and fix every hit in the files you touched.
2. If you changed titles or descriptions, run `pnpm build && pnpm seo:check`. Titles must be 60 characters or fewer, descriptions 70–160, with one H1.
3. FAQ schema must match an FAQ that's visible on the page (`buildPageGraph({ faqs })`).
4. Report to the user every fact you added and where it came from.
