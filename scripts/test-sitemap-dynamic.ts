/**
 * Run after `pnpm build`. Verifies the sitemap is served dynamically (not frozen at
 * build time) and that each blog post lastmod matches WordPress modified_gmt.
 */
import { access, readFile, stat } from 'node:fs/promises'
import path from 'node:path'
import { getSitemapEntries } from '../lib/seo/sitemap-entries'
import { wpModifiedGmtToDate } from '../lib/seo/sitemap-static-lastmod'
import { productionUrl } from '../lib/seo/config'
import { getPostsForSitemap } from '../lib/wordpress'

function fail(message: string): never {
  console.error(`test:sitemap FAILED: ${message}`)
  process.exit(1)
}

async function main() {
  const nextDir = path.resolve('.next')
  try {
    await access(nextDir)
  } catch {
    fail('Run pnpm build before test:sitemap')
  }

  const appPaths = JSON.parse(
    await readFile(path.join(nextDir, 'server/app-paths-manifest.json'), 'utf8'),
  ) as Record<string, string>

  const sitemapRoute = appPaths['/sitemap.xml/route']
  if (!sitemapRoute) {
    fail('Expected /sitemap.xml/route in app-paths-manifest (dynamic route handler)')
  }

  const frozenBody = path.join(nextDir, 'server/app/sitemap.xml.body')
  try {
    await access(frozenBody)
    fail('Found .next/server/app/sitemap.xml.body — sitemap is still frozen at build time')
  } catch {
    // expected: no static sitemap body
  }

  const buildCompletedAt = (await stat(path.join(nextDir, 'BUILD_ID'))).mtimeMs
  const posts = await getPostsForSitemap()
  if (posts.length === 0) {
    fail('WordPress returned no posts for sitemap check')
  }

  const entries = await getSitemapEntries()
  if (entries.length !== 113) {
    fail(`Expected 113 sitemap URLs, got ${entries.length}`)
  }

  const jasaWooUrl = `${productionUrl}/services/wordpress/jasa-woocommerce`
  const jasaWooEntry = entries.find((entry) => entry.url === jasaWooUrl)
  if (!jasaWooEntry?.lastModified) {
    fail('Missing sitemap entry or lastmod for jasa-woocommerce')
  }
  const jasaWooLastmod =
    jasaWooEntry.lastModified instanceof Date
      ? jasaWooEntry.lastModified.toISOString()
      : new Date(jasaWooEntry.lastModified as string).toISOString()
  if (jasaWooLastmod !== '2026-10-26T03:00:00.000Z') {
    fail(`jasa-woocommerce lastmod: expected 2026-10-26T03:00:00.000Z, got ${jasaWooLastmod}`)
  }
  const jasaWooAlternates = jasaWooEntry.alternates?.languages
  if (
    jasaWooAlternates?.en !== `${productionUrl}/services/wordpress/woocommerce` ||
    jasaWooAlternates?.id !== jasaWooUrl ||
    jasaWooAlternates?.['x-default'] !== `${productionUrl}/services/wordpress/woocommerce`
  ) {
    fail('jasa-woocommerce sitemap hreflang alternates missing or incorrect')
  }

  const entryByUrl = new Map(entries.map((entry) => [entry.url, entry]))

  for (const post of posts) {
    const url = `${productionUrl}/blog/${post.slug}`
    const entry = entryByUrl.get(url)
    if (!entry?.lastModified) {
      fail(`Missing sitemap entry or lastmod for ${post.slug}`)
    }

    const expected = wpModifiedGmtToDate(
      post.modified_gmt || post.modified || post.date,
    ).toISOString()
    const actual =
      entry.lastModified instanceof Date
        ? entry.lastModified.toISOString()
        : new Date(entry.lastModified as string).toISOString()

    if (actual !== expected) {
      fail(
        `lastmod mismatch for ${post.slug}: expected ${expected}, got ${actual}`,
      )
    }
  }

  const modifiedAfterBuild = posts.filter((post) => {
    const modified = wpModifiedGmtToDate(
      post.modified_gmt || post.modified || post.date,
    ).getTime()
    return modified > buildCompletedAt
  })

  if (modifiedAfterBuild.length === 0) {
    console.warn(
      'test:sitemap: no WP posts modified after build time; relying on dynamic route + live lastmod checks',
    )
  } else {
    for (const post of modifiedAfterBuild) {
      const url = `${productionUrl}/blog/${post.slug}`
      if (!entryByUrl.has(url)) {
        fail(
          `Post ${post.slug} modified after build is missing from runtime sitemap entries`,
        )
      }
    }
    console.log(
      `test:sitemap: ${modifiedAfterBuild.length} post(s) modified after build are present in sitemap`,
    )
  }

  console.log(
    `test:sitemap OK: dynamic route, ${posts.length} posts with matching WordPress lastmod`,
  )
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
