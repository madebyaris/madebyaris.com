import { authorProfile, decodeHtmlEntities, isIndonesianSlug, productionAbsoluteUrl, siteConfig, stripHtml } from '@/lib/seo'
import { getPostsWithContent } from '@/lib/wordpress'

export const revalidate = 604800 // 7 days; webhook revalidates on publish

const FEED_ITEMS = 30

// WordPress content can carry control characters (a pasted NUL, for one) that
// XML 1.0 forbids even inside CDATA, and a single one breaks the whole feed.
const INVALID_XML_CHARS = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\uFFFE\uFFFF]/g

function xml(text: string): string {
  return text
    .replace(INVALID_XML_CHARS, '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function cdata(html: string): string {
  return `<![CDATA[${html.replace(INVALID_XML_CHARS, '').replace(/]]>/g, ']]]]><![CDATA[>')}]]>`
}

export async function GET() {
  const posts = await getPostsWithContent(FEED_ITEMS)
  const feedUrl = productionAbsoluteUrl('/feed.xml')
  const lastBuild = posts[0] ? new Date(posts[0].modified) : new Date()

  const items = posts
    .map((post) => {
      const url = productionAbsoluteUrl(`/blog/${post.slug}`)
      const title = decodeHtmlEntities(stripHtml(post.title))
      const description = decodeHtmlEntities(stripHtml(post.excerpt)).trim()
      return [
        '    <item>',
        `      <title>${xml(title)}</title>`,
        `      <link>${url}</link>`,
        `      <guid isPermaLink="true">${url}</guid>`,
        `      <pubDate>${new Date(post.date).toUTCString()}</pubDate>`,
        `      <dc:creator>${xml(authorProfile.name)}</dc:creator>`,
        `      <dc:language>${isIndonesianSlug(post.slug) ? 'id' : 'en'}</dc:language>`,
        `      <description>${xml(description)}</description>`,
        `      <content:encoded>${cdata(post.content)}</content:encoded>`,
        '    </item>',
      ].join('\n')
    })
    .join('\n')

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${xml(siteConfig.name)}</title>
    <link>${productionAbsoluteUrl('/blog')}</link>
    <description>${xml(siteConfig.description)}</description>
    <language>en</language>
    <lastBuildDate>${lastBuild.toUTCString()}</lastBuildDate>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`

  return new Response(body, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  })
}
