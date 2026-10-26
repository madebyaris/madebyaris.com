import { internalBlogNotFoundPath } from '../lib/blog-post-path'
import {
  documentLangFromPathname,
  publicRedirectUrlFromInternalPath,
  rewritePathnameWithDocumentLang,
} from '../lib/document-lang'

function fail(message: string): never {
  console.error(`test:proxy-public-redirect FAILED: ${message}`)
  process.exit(1)
}

function assertRedirect(
  pathname: string,
  expectedPathWithQuery: string,
  incomingQuery?: string,
) {
  const incoming = incomingQuery
    ? new URLSearchParams(incomingQuery.replace(/^\?/, ''))
    : undefined
  const target = publicRedirectUrlFromInternalPath(
    pathname,
    'https://madebyaris.com',
    incoming,
  )
  if (!target) {
    fail(`expected redirect for ${pathname}, got null`)
  }
  const actual = `${target.pathname}${target.search}`
  if (actual !== expectedPathWithQuery) {
    fail(`for ${pathname}${incomingQuery ? `?${incomingQuery}` : ''}: expected ${expectedPathWithQuery}, got ${actual}`)
  }
}

assertRedirect('/d/en/blog/p/2', '/blog?page=2')
assertRedirect('/d/en/blog/p/10/', '/blog?page=10')
assertRedirect('/d/en/about', '/about')
assertRedirect('/d/en/about', '/about?utm_source=x', 'utm_source=x')
assertRedirect('/d/en/blog/p/2', '/blog?page=2&utm_source=x', 'utm_source=x')
assertRedirect('/d/en/blog/p/2', '/blog?page=2&utm_source=x', 'page=99&utm_source=x')

const notPaginated = publicRedirectUrlFromInternalPath('/blog', 'https://madebyaris.com')
if (notPaginated !== null) {
  fail('expected null for public /blog pathname')
}

function assertLang(pathname: string, expected: 'en' | 'id') {
  const actual = documentLangFromPathname(pathname)
  if (actual !== expected) {
    fail(`documentLangFromPathname(${pathname}): expected ${expected}, got ${actual}`)
  }
}

function assertRewrite(pathname: string, expected: string) {
  const actual = rewritePathnameWithDocumentLang(pathname)
  if (actual !== expected) {
    fail(`rewritePathnameWithDocumentLang(${pathname}): expected ${expected}, got ${actual}`)
  }
}

assertLang('/services/wordpress/jasa-wordpress', 'id')
assertLang('/services/wordpress/jasa-woocommerce', 'id')
assertLang('/services/seo/jasa-seo', 'id')
assertLang('/services/nextjs-development/nextjs-indonesia', 'id')
assertLang('/minimax-ambassador/minimax-indonesia', 'id')
assertLang('/blog/next-js-16-4-apa-yang-baru', 'id')
assertLang('/blog/php-api-development-for-nextjs', 'en')
assertLang('/services/wordpress', 'en')
assertLang('/', 'en')

assertRewrite('/services/wordpress/jasa-wordpress', '/d/id/services/wordpress/jasa-wordpress')
assertRewrite('/services/wordpress/jasa-woocommerce', '/d/id/services/wordpress/jasa-woocommerce')
assertRewrite('/blog/next-js-16-4-apa-yang-baru', '/d/id/blog/next-js-16-4-apa-yang-baru')
assertRewrite('/about', '/d/en/about')
assertRewrite('/', '/d/en')

function assertBlogNotFoundLang(slug: string, expected: 'en' | 'id') {
  const path = internalBlogNotFoundPath(slug)
  const lang = path.startsWith('/d/id/') ? 'id' : path.startsWith('/d/en/') ? 'en' : null
  if (lang !== expected) {
    fail(
      `internalBlogNotFoundPath(${slug}): expected lang=${expected}, got path ${path}`,
    )
  }
}

assertBlogNotFoundLang('mengenal-fake-post-g16', 'id')
assertBlogNotFoundLang('cara-fake-slug-xyz', 'id')
assertBlogNotFoundLang('jasa-fake-slug-xyz', 'id')
assertBlogNotFoundLang('no-such-post-xyz-en', 'en')

console.log('test:proxy-public-redirect OK')
