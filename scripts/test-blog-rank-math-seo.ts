import assert from 'node:assert/strict'
import {
  pickBlogMetaDescription,
  pickRankMathDescription,
  pickRankMathTitle,
  rankMathTitleFromHead,
  resolveRankMathSeoTitle,
} from '../lib/seo/rank-math'
import { fitDescription, fitTitle } from '../lib/seo/metadata'
import { extractMetaTagContent } from '../lib/wordpress/rank-math-head'

const excerpt =
  'What it costs to hire a Next.js developer: scope, experience, location, and engagement model. How to read a quote without fake average rates.'

const postTitle = 'Cursor AI pricing in 2026: what you actually pay'

assert.equal(pickRankMathTitle({ rank_math_title: '' }), undefined)
assert.equal(pickRankMathTitle({ rank_math_title: '   ' }), undefined)
assert.equal(pickRankMathDescription({ rank_math_description: '' }), undefined)

assert.equal(
  pickRankMathTitle({ rank_math_title: 'What it costs to hire a Next.js developer' }),
  'What it costs to hire a Next.js developer',
)
assert.equal(
  pickRankMathDescription({ rank_math_description: 'Custom SEO meta description.' }),
  'Custom SEO meta description.',
)

const withSuffix = 'Cursor AI pricing in 2026: what you actually pay – MADEBYARIS'
assert.equal(
  resolveRankMathSeoTitle(withSuffix),
  'Cursor AI pricing in 2026: what you actually pay',
)
assert.equal(
  resolveRankMathSeoTitle('Tentang skema harga Cursor IDE | Aris Setiawan'),
  'Tentang skema harga Cursor IDE',
)

assert.equal(pickRankMathTitle({ rank_math_title: '%title% %sep% %sitename%' }), undefined)

// Default Rank Math title template on WP head → treat as empty (post title fallback)
const defaultHeadTitle = `${postTitle} &#8211; MADEBYARIS`
assert.equal(rankMathTitleFromHead(defaultHeadTitle, postTitle), undefined)
assert.equal(
  rankMathTitleFromHead('Tom&#8217;s guide &#8211; MADEBYARIS', 'Tom&#8217;s guide'),
  undefined,
)
assert.equal(
  rankMathTitleFromHead('Custom SEO title &#8211; MADEBYARIS', postTitle),
  'Custom SEO title &#8211; MADEBYARIS',
)
assert.equal(
  pickRankMathTitle({
    rank_math_title: rankMathTitleFromHead('Custom SEO title &#8211; MADEBYARIS', postTitle),
  }),
  'Custom SEO title',
)

// Meta parser: apostrophe inside double-quoted content, either attribute order
const metaHtml = [
  '<meta name="description" content="Aris&#039;s Next.js guide for teams" />',
  '<meta content="Second &amp; third" property="og:description" />',
].join('\n')
assert.equal(
  extractMetaTagContent(metaHtml, { name: 'description' }),
  "Aris's Next.js guide for teams",
)
assert.equal(extractMetaTagContent(metaHtml, { property: 'og:description' }), 'Second & third')

// Description fallback order: SEO description → OG / Facebook → excerpt
assert.equal(
  pickRankMathDescription({
    rank_math_description: 'SEO field',
    rank_math_facebook_description: 'OG field',
  }),
  'SEO field',
)
assert.equal(
  pickRankMathDescription({
    rank_math_facebook_description: 'OG field only',
  }),
  'OG field only',
)
assert.equal(pickRankMathDescription({}), undefined)
assert.equal(pickBlogMetaDescription({}, excerpt), excerpt)

assert.equal(
  fitTitle('What it costs to hire a Next.js developer'),
  'What it costs to hire a Next.js developer | Aris Setiawan',
)
assert.equal(
  fitTitle('Cursor pricing 2026: Free, Plus, Premium, Super, Ultra'),
  'Cursor pricing 2026: Free, Plus, Premium, Super, Ultra',
)
assert.equal(
  fitDescription('Custom meta description for the post.'),
  'Custom meta description for the post.',
)

console.log('test-blog-rank-math-seo: all assertions passed')
