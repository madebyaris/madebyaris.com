import assert from 'node:assert/strict'
import {
  pickBlogMetaDescription,
  pickRankMathDescription,
  pickRankMathTitle,
  resolveRankMathSeoTitle,
} from '../lib/seo/rank-math'
import { fitDescription, fitTitle } from '../lib/seo/metadata'

const excerpt =
  'What it costs to hire a Next.js developer: scope, experience, location, and engagement model. How to read a quote without fake average rates.'

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
