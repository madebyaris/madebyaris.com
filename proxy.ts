import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { isIndonesianSlug } from '@/lib/i18n'
import { LEGACY_REDIRECTS } from '@/lib/legacy-redirects'

function normalizePath(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith('/')) return pathname.slice(0, -1)
  return pathname
}

// Next.js 16: Renamed from middleware to proxy for better clarity.
export function proxy(request: NextRequest) {
  const host = (request.headers.get('host') || '').split(':')[0].toLowerCase()
  if (host === 'www.madebyaris.com') {
    const url = request.nextUrl.clone()
    url.protocol = 'https:'
    url.hostname = 'madebyaris.com'
    url.port = ''
    return NextResponse.redirect(url, 301)
  }

  const pathname = normalizePath(request.nextUrl.pathname)
  const legacyDestination = LEGACY_REDIRECTS[pathname]
  if (legacyDestination) {
    const url = request.nextUrl.clone()
    url.pathname = legacyDestination
    return NextResponse.redirect(url, 301)
  }

  const internalBlog = pathname.match(/^\/tulisan\/([^/]+)$/)
  if (internalBlog && isIndonesianSlug(internalBlog[1])) {
    const url = request.nextUrl.clone()
    url.pathname = `/blog/${internalBlog[1]}`
    return NextResponse.redirect(url, 301)
  }

  const blogPost = pathname.match(/^\/blog\/([^/]+)$/)
  if (blogPost && isIndonesianSlug(blogPost[1])) {
    const url = request.nextUrl.clone()
    url.pathname = `/tulisan/${blogPost[1]}`
    return NextResponse.rewrite(url)
  }

  const response = NextResponse.next()

  if (
    request.nextUrl.pathname.match(/\.(jpg|jpeg|gif|png|ico|css|js|woff|woff2|ttf|eot)$/)
  ) {
    response.headers.set(
      'Cache-Control',
      'public, max-age=31536000, immutable'
    )
  }

  return response
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
