import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {
  publicPathFromInternalDocumentPath,
  rewritePathnameWithDocumentLang,
  shouldSkipDocumentLangProxy,
} from '@/lib/document-lang'
import { applyStaticAssetCacheControl } from '@/lib/proxy-cache-control'

// Next.js 16: Renamed from middleware to proxy for better clarity
// This function handles network boundary and routing at the edge
export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  if (shouldSkipDocumentLangProxy(pathname)) {
    return applyStaticAssetCacheControl(pathname, NextResponse.next())
  }

  const publicPath = publicPathFromInternalDocumentPath(pathname)
  if (publicPath !== null) {
    const url = request.nextUrl.clone()
    url.pathname = publicPath
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
