import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Next.js 16: Renamed from middleware to proxy for better clarity
// This function handles network boundary and routing at the edge
export function proxy(request: NextRequest) {
  const response = NextResponse.next()

  // Add cache control headers for static assets
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
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}

