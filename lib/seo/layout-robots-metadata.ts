import type { Metadata } from 'next'

/** Default index/follow + googleBot (pre-98 root layout / docLang layout parity). */
export const layoutRobotsMetadata: Metadata['robots'] = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    'max-video-preview': -1,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
}
