import { generateSchema } from '@rankmyseo/core'
import { absoluteUrl, siteConfig } from './config'
import { stripHtml } from './utils'

export function buildOrganizationSchema() {
  return generateSchema({
    type: 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl(siteConfig.logo),
    sameAs: [...siteConfig.sameAs],
  }).jsonLd
}

export function buildArticleSchema(input: {
  headline: string
  description?: string
  url: string
  image?: string
  datePublished: string
  dateModified: string
}) {
  return generateSchema({
    type: 'Article',
    headline: stripHtml(input.headline),
    description: input.description ? stripHtml(input.description) : undefined,
    url: input.url,
    image: input.image,
    authorName: siteConfig.author,
    datePublished: input.datePublished,
    dateModified: input.dateModified,
    publisherName: siteConfig.shortName,
  }).jsonLd
}

export function buildBreadcrumbSchema(
  items: Array<{ name: string; path: string }>,
) {
  return generateSchema({
    type: 'BreadcrumbList',
    items: items.map((item) => ({
      name: stripHtml(item.name),
      url: absoluteUrl(item.path),
    })),
  }).jsonLd
}

export function buildBlogPostGraph(input: {
  slug: string
  headline: string
  description?: string
  image?: string
  datePublished: string
  dateModified: string
}) {
  const postUrl = absoluteUrl(`/blog/${input.slug}`)

  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildArticleSchema({
        headline: input.headline,
        description: input.description,
        url: postUrl,
        image: input.image ?? absoluteUrl(siteConfig.ogImage),
        datePublished: input.datePublished,
        dateModified: input.dateModified,
      }),
      buildBreadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Blog', path: '/blog' },
        { name: input.headline, path: `/blog/${input.slug}` },
      ]),
    ],
  }
}
