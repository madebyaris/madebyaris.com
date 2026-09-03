import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath, revalidateTag } from 'next/cache'
import { notifyIndexNow, revalidatedItemsToUrls } from '@/lib/indexnow'
import { WP_CACHE_TAGS } from '@/lib/wordpress'

const WP_BLOG_TAGS = [
  WP_CACHE_TAGS.posts,
  WP_CACHE_TAGS.categories,
  WP_CACHE_TAGS.tags,
] as const

const SITEMAP_PATH = '/sitemap.xml'

function pushUnique(revalidated: string[], item: string) {
  if (!revalidated.includes(item)) {
    revalidated.push(item)
  }
}

function revalidateSitemap(revalidated: string[]) {
  revalidatePath(SITEMAP_PATH)
  pushUnique(revalidated, SITEMAP_PATH)
}

function revalidateWpBlogTags(revalidated: string[]) {
  for (const tag of WP_BLOG_TAGS) {
    revalidateTag(tag, 'max')
    pushUnique(revalidated, `tag:${tag}`)
  }
  revalidateSitemap(revalidated)
}

function revalidateBlogIndex(revalidated: string[]) {
  revalidatePath('/blog')
  pushUnique(revalidated, '/blog')
}

function isBlogSurfacePath(path: string): boolean {
  return path === '/blog' || path.startsWith('/blog/') || path === SITEMAP_PATH
}

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')

  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 })
  }

  try {
    const path = request.nextUrl.searchParams.get('path')
    const tag = request.nextUrl.searchParams.get('tag')
    const slug = request.nextUrl.searchParams.get('slug')

    const revalidated: string[] = []

    if (slug) {
      const slugPath = `/blog/${slug}`
      revalidatePath(slugPath)
      revalidated.push(slugPath)
      revalidateBlogIndex(revalidated)
      revalidateWpBlogTags(revalidated)
    }

    if (tag) {
      revalidateTag(tag, 'max')
      pushUnique(revalidated, `tag:${tag}`)

      if ((WP_BLOG_TAGS as readonly string[]).includes(tag)) {
        revalidateBlogIndex(revalidated)
        revalidateSitemap(revalidated)
      }
    }

    if (path) {
      revalidatePath(path)
      pushUnique(revalidated, path)

      if (isBlogSurfacePath(path)) {
        revalidateWpBlogTags(revalidated)

        if (path.startsWith('/blog/') && path !== '/blog') {
          revalidateBlogIndex(revalidated)
        }

        if (path === SITEMAP_PATH) {
          revalidateBlogIndex(revalidated)
        }
      }
    }

    if (revalidated.length === 0) {
      revalidatePath('/')
      revalidated.push('/')
    }

    const uniqueItems = [...new Set(revalidated)]
    const indexNowUrls = revalidatedItemsToUrls(uniqueItems)
    const indexNow = await notifyIndexNow(indexNowUrls)

    return NextResponse.json({
      revalidated: true,
      message: `Revalidated: ${uniqueItems.join(', ')}`,
      items: uniqueItems,
      indexNow,
    })
  } catch (err) {
    return NextResponse.json(
      { message: 'Error revalidating', error: err },
      { status: 500 }
    )
  }
}
