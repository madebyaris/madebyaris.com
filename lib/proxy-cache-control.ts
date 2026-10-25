import { NextResponse } from 'next/server'

const STATIC_ASSET = /\.(jpg|jpeg|gif|png|ico|css|js|woff|woff2|ttf|eot)$/

/** Long-cache hint for public static assets (same as pre–PR #98 proxy). */
export function applyStaticAssetCacheControl(pathname: string, response: NextResponse): NextResponse {
  if (STATIC_ASSET.test(pathname)) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
  }
  return response
}
