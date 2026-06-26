import type { Metadata } from 'next'
import { generateMeta } from '@rankmyseo/core'
import { absoluteUrl, productionUrl, siteConfig } from './config'
import { stripHtml } from './utils'

export interface PageMetaInput {
  title: string
  description?: string
  path: string
  image?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  noIndex?: boolean
}

export function buildPageMetadata(input: PageMetaInput): Metadata {
  const generated = generateMeta({
    title: stripHtml(input.title),
    content: input.description ? stripHtml(input.description) : undefined,
    url: absoluteUrl(input.path),
    siteName: siteConfig.shortName,
  })

  const image = input.image ?? `${productionUrl}${siteConfig.ogImage}`
  const ogType = input.type ?? 'website'

  return {
    title: generated.metaTitle,
    description: generated.metaDescription,
    metadataBase: new URL(productionUrl),
    alternates: {
      canonical: input.path,
    },
    openGraph: {
      title: generated.metaTitle,
      description: generated.metaDescription,
      url: absoluteUrl(input.path),
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: ogType,
      ...(input.publishedTime ? { publishedTime: input.publishedTime } : {}),
      ...(input.modifiedTime ? { modifiedTime: input.modifiedTime } : {}),
      images: [{ url: image, alt: generated.metaTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title: generated.metaTitle,
      description: generated.metaDescription,
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
    description:
      wpDescription || stripHtml(post.excerpt.rendered) || undefined,
    path: `/blog/${post.slug}`,
    image: featuredImage ?? absoluteUrl(siteConfig.ogImage),
    type: 'article',
    publishedTime: post.date,
    modifiedTime: post.modified,
  })
}
