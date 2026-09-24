import type { Metadata } from 'next'
import { productionAbsoluteUrl, productionUrl, siteConfig } from './config'
import { decodeHtmlEntities, stripHtml } from './utils'

export const TITLE_MAX = 60
export const DESCRIPTION_MAX = 160

const BRAND_SUFFIX = /\s*[|·–—-]\s*(MadeByAris|Made by Aris|Aris Setiawan)\s*$/i

function clean(text: string): string {
  return decodeHtmlEntities(stripHtml(text)).replace(/\s+/g, ' ').trim()
}

function stripBrand(title: string): string {
  let result = title
  while (BRAND_SUFFIX.test(result)) result = result.replace(BRAND_SUFFIX, '')
  return result.trim()
}

function cutAtWord(text: string, max: number): string {
  if (text.length <= max) return text
  const cut = text.slice(0, max + 1)
  const lastSpace = cut.lastIndexOf(' ')
  return (lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : text.slice(0, max)).replace(/[\s,;:–—|-]+$/, '')
}

/**
 * Titles that fit Google's ~60 character display with one brand suffix.
 * Long titles keep their strongest clause (text before ":", "—", "(" or "|")
 * instead of being cut mid-thought with an ellipsis.
 */
export function fitTitle(rawTitle: string, options: { brand?: boolean } = {}): string {
  const title = stripBrand(clean(rawTitle))
  const withBrand = `${title}${siteConfig.titleSuffix}`
  if (options.brand !== false && withBrand.length <= TITLE_MAX) return withBrand
  if (title.length <= TITLE_MAX) return title

  const clause = title.split(/\s*(?::|—|–|\(|\|)\s*/)[0]
  if (clause.length >= 25 && clause.length <= TITLE_MAX) {
    return options.brand !== false && `${clause}${siteConfig.titleSuffix}`.length <= TITLE_MAX
      ? `${clause}${siteConfig.titleSuffix}`
      : clause
  }
  return cutAtWord(title, TITLE_MAX)
}

export function fitDescription(rawDescription: string): string {
  const description = clean(rawDescription)
  if (description.length <= DESCRIPTION_MAX) return description
  return `${cutAtWord(description, DESCRIPTION_MAX - 1)}…`
}

export interface PageMetaInput {
  title: string
  description?: string
  path: string
  /** Set false when the title already names Aris, e.g. "About Aris Setiawan". */
  brand?: boolean
  image?: string
  type?: 'website' | 'article'
  locale?: 'en_US' | 'id_ID'
  keywords?: string[]
  publishedTime?: string
  modifiedTime?: string
  noIndex?: boolean
}

export function buildPageMetadata(input: PageMetaInput): Metadata {
  const title = fitTitle(input.title, { brand: input.brand })
  const description = input.description ? fitDescription(input.description) : undefined
  const url = productionAbsoluteUrl(input.path)
  const image = input.image ?? productionAbsoluteUrl(siteConfig.ogImage)
  const ogType = input.type ?? 'website'

  return {
    title: { absolute: title },
    description,
    ...(input.keywords?.length ? { keywords: input.keywords } : {}),
    metadataBase: new URL(productionUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: input.locale ?? siteConfig.locale,
      type: ogType,
      ...(input.publishedTime ? { publishedTime: input.publishedTime } : {}),
      ...(input.modifiedTime ? { modifiedTime: input.modifiedTime } : {}),
      ...(ogType === 'article' ? { authors: [productionAbsoluteUrl('/about')] } : {}),
      images: [{ url: image, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: siteConfig.twitterHandle,
      images: [image],
    },
    robots: input.noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
  }
}

export interface WordPressSeoFields {
  title?: string
  description?: string
}

export function isIndonesianSlug(slug: string): boolean {
  return /(^|-)(apa-itu|apakah|cara|tentang|jasa|migrasi|mengenal|untuk|pada|dan|harga|skema|kantor|buatan)(-|$)/.test(slug)
}

export function buildBlogPostMetadata(
  post: {
    slug: string
    title: { rendered: string }
    excerpt: { rendered: string }
    date: string
    modified: string
    rank_math_seo?: WordPressSeoFields
  },
  featuredImage?: string,
): Metadata {
  const wpTitle = post.rank_math_seo?.title
  const wpDescription = post.rank_math_seo?.description

  return buildPageMetadata({
    title: wpTitle || post.title.rendered,
    description: wpDescription || stripHtml(post.excerpt.rendered) || undefined,
    path: `/blog/${post.slug}`,
    image: featuredImage,
    type: 'article',
    locale: isIndonesianSlug(post.slug) ? 'id_ID' : 'en_US',
    publishedTime: post.date,
    modifiedTime: post.modified,
  })
}
