import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {
  blogPostSlugFromPublicPath,
  internalBlogNotFoundPath,
} from '@/lib/blog-post-path'
import {
  publicRedirectUrlFromInternalPath,
  rewritePathnameWithDocumentLang,
  shouldSkipDocumentLangProxy,
} from '@/lib/document-lang'
import { publishedBlogSlugs } from '@/lib/published-blog-slugs.generated'
import { applyStaticAssetCacheControl } from '@/lib/proxy-cache-control'
import { wpPublishedPostExists } from '@/lib/wp-published-post-exists'

const PROXY_LOG_PREFIX = '[blog-proxy]'

// Next.js 16: Renamed from middleware to proxy for better clarity
// This function handles network boundary and routing at the edge
function rewriteBlogPagination(request: NextRequest): NextResponse | null {
  const pathname = request.nextUrl.pathname
  const isBlogIndex =
    pathname === '/blog' ||
    pathname === '/blog/' ||
    pathname === '/d/en/blog' ||
    pathname === '/d/en/blog/'

  if (!isBlogIndex) {
    return null
  }

  const pageParam = request.nextUrl.searchParams.get('page')
  if (!pageParam) {
    return null
  }

  if (pageParam === '1') {
    const url = request.nextUrl.clone()
    url.searchParams.delete('page')
    return NextResponse.redirect(url, 308)
  }

  const parsedPage = Number.parseInt(pageParam, 10)
  if (!Number.isFinite(parsedPage) || parsedPage < 2) {
    return null
  }

  const url = request.nextUrl.clone()
  url.pathname = `/d/en/blog/p/${parsedPage}`
  url.searchParams.delete('page')
  return NextResponse.rewrite(url)
}

function continueDocumentLangRewrite(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const rewritten = rewritePathnameWithDocumentLang(pathname)
  const url = request.nextUrl.clone()
  url.pathname = rewritten

  const response =
    rewritten === request.nextUrl.pathname
      ? NextResponse.next()
      : NextResponse.rewrite(url)

  return applyStaticAssetCacheControl(pathname, response)
}

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  if (shouldSkipDocumentLangProxy(pathname)) {
    return applyStaticAssetCacheControl(pathname, NextResponse.next())
  }

  const paginatedBlog = rewriteBlogPagination(request)
  if (paginatedBlog) {
    return applyStaticAssetCacheControl(pathname, paginatedBlog)
  }

  const publicRedirect = publicRedirectUrlFromInternalPath(
    pathname,
    request.nextUrl.origin,
    request.nextUrl.searchParams,
  )
  if (publicRedirect !== null) {
    const url = request.nextUrl.clone()
    url.pathname = publicRedirect.pathname
    url.search = publicRedirect.search
    return NextResponse.redirect(url, 308)
  }

  const blogSlug = blogPostSlugFromPublicPath(pathname)
  if (blogSlug && publishedBlogSlugs.size > 0) {
    if (publishedBlogSlugs.has(blogSlug)) {
      console.info(`${PROXY_LOG_PREFIX} allowlist hit slug=${blogSlug} wp=skip`)
    } else {
      console.info(`${PROXY_LOG_PREFIX} allowlist miss slug=${blogSlug} wp=lookup`)
      const exists = await wpPublishedPostExists(blogSlug)
      if (exists === false) {
        console.info(`${PROXY_LOG_PREFIX} wp=miss slug=${blogSlug} rewrite=404`)
        const url = request.nextUrl.clone()
        url.pathname = internalBlogNotFoundPath(blogSlug)
        const response = NextResponse.rewrite(url, { status: 404 })
        response.headers.set('x-blog-proxy-lookup', 'wp-miss')
        return applyStaticAssetCacheControl(pathname, response)
      }
      if (exists === true) {
        console.info(`${PROXY_LOG_PREFIX} wp=hit slug=${blogSlug} pass=200`)
        const response = continueDocumentLangRewrite(request)
        response.headers.set('x-blog-proxy-lookup', 'wp-hit')
        return response
      }
      console.info(`${PROXY_LOG_PREFIX} wp=fail-open slug=${blogSlug}`)
      const response = continueDocumentLangRewrite(request)
      response.headers.set('x-blog-proxy-lookup', 'wp-fail-open')
      return response
    }
  }

  const rewritten = rewritePathnameWithDocumentLang(pathname)
  const url = request.nextUrl.clone()
  url.pathname = rewritten

  const response =
    rewritten === request.nextUrl.pathname
      ? NextResponse.next()
      : NextResponse.rewrite(url)

  if (blogSlug && publishedBlogSlugs.has(blogSlug)) {
    response.headers.set('x-blog-proxy-lookup', 'allowlist')
  }

  return applyStaticAssetCacheControl(request.nextUrl.pathname, response)
}

export const config = {
  matcher: [
    '/((?!api|_next|favicon\\.ico|sitemap\\.xml|robots\\.txt|feed\\.xml|llms(?:-full)?\\.txt|.*\\..*).*)',
  ],
}
