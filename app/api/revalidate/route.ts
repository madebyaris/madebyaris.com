import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath, revalidateTag } from 'next/cache'
import { WP_CACHE_TAGS } from '@/lib/wordpress'

const WP_BLOG_TAGS = [
  WP_CACHE_TAGS.posts,
  WP_CACHE_TAGS.categories,
  WP_CACHE_TAGS.tags,
] as const

function revalidateWpBlogTags(revalidated: string[]) {
  for (const tag of WP_BLOG_TAGS) {
    revalidateTag(tag, 'max')
    revalidated.push(`tag:${tag}`)
  }
}

function revalidateBlogIndex(revalidated: string[]) {
  revalidatePath('/blog')
  if (!revalidated.includes('/blog')) {
    revalidated.push('/blog')
  }
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
      revalidated.push(`tag:${tag}`)

      if ((WP_BLOG_TAGS as readonly string[]).includes(tag)) {
        revalidateBlogIndex(revalidated)
      }
    }

    if (path) {
      revalidatePath(path)
      revalidated.push(path)

      if (path === '/blog' || path.startsWith('/blog/')) {
        revalidateWpBlogTags(revalidated)

        if (path.startsWith('/blog/') && path !== '/blog') {
          revalidateBlogIndex(revalidated)
        }
      }
    }

    if (revalidated.length === 0) {
      revalidatePath('/')
      revalidated.push('/')
    }

    const uniqueItems = [...new Set(revalidated)]

    return NextResponse.json({
      revalidated: true,
      message: `Revalidated: ${uniqueItems.join(', ')}`,
      items: uniqueItems,
    })
  } catch (err) {
    return NextResponse.json(
      { message: 'Error revalidating', error: err },
      { status: 500 }
    )
  }
}
