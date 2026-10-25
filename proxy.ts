import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {
  publicRedirectUrlFromInternalPath,
  rewritePathnameWithDocumentLang,
  shouldSkipDocumentLangProxy,
} from '@/lib/document-lang'
import { applyStaticAssetCacheControl } from '@/lib/proxy-cache-control'

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

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  if (shouldSkipDocumentLangProxy(pathname)) {
    return applyStaticAssetCacheControl(pathname, NextResponse.next())
  }

  const paginatedBlog = rewriteBlogPagination(request)
  if (paginatedBlog) {
    return applyStaticAssetCacheControl(pathname, paginatedBlog)
  }

  const publicRedirect = publicRedirectUrlFromInternalPath(pathname, request.nextUrl.origin)
  if (publicRedirect !== null) {
    const url = request.nextUrl.clone()
    url.pathname = publicRedirect.pathname
    url.search = publicRedirect.search
    return NextResponse.redirect(url, 308)
  }

  const rewritten = rewritePathnameWithDocumentLang(pathname)
  const url = request.nextUrl.clone()
  url.pathname = rewritten

  const response =
    rewritten === request.nextUrl.pathname
      ? NextResponse.next()
      : NextResponse.rewrite(url)

  return applyStaticAssetCacheControl(request.nextUrl.pathname, response)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next|favicon\\.ico|sitemap\\.xml|robots\\.txt|feed\\.xml|llms(?:-full)?\\.txt|.*\\..*).*)',
  ],
}
