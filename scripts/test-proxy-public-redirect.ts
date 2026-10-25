import { publicRedirectUrlFromInternalPath } from '../lib/document-lang'

function fail(message: string): never {
  console.error(`test:proxy-public-redirect FAILED: ${message}`)
  process.exit(1)
}

function assertRedirect(pathname: string, expectedPathWithQuery: string) {
  const target = publicRedirectUrlFromInternalPath(pathname, 'https://madebyaris.com')
  if (!target) {
    fail(`expected redirect for ${pathname}, got null`)
  }
  const actual = `${target.pathname}${target.search}`
  if (actual !== expectedPathWithQuery) {
    fail(`for ${pathname}: expected ${expectedPathWithQuery}, got ${actual}`)
  }
}

assertRedirect('/d/en/blog/p/2', '/blog?page=2')
assertRedirect('/d/en/blog/p/10/', '/blog?page=10')
assertRedirect('/d/en/about', '/about')

const notPaginated = publicRedirectUrlFromInternalPath('/blog', 'https://madebyaris.com')
if (notPaginated !== null) {
  fail('expected null for public /blog pathname')
}

console.log('test:proxy-public-redirect OK')
