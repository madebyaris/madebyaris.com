import path from 'node:path'
import { fileURLToPath } from 'node:url'
import withBundleAnalyzer from '@next/bundle-analyzer';

const projectRoot = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js 16: Partial Pre-Rendering (PPR) with cacheComponents
  // NOTE: Disabled because it's incompatible with route-level `export const revalidate`
  // To enable PPR: Remove all `export const revalidate` from route files and use cache tags instead
  // cacheComponents: true,
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wp.madebyaris.com',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'madebyaris.com',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    // Next.js 16: Default changed to 4 hours (14400s), reverting to 60s for more frequent revalidation
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Next.js 16: Turbopack configuration (default bundler)
  turbopack: {
    // Pin root to this project — avoids picking up stray lockfiles outside the repo
    root: projectRoot,
    // Support for SVG imports via @svgr/webpack
    rules: {
      '*.svg': ['@svgr/webpack'],
    },
  },
  
  // Next.js 16: Experimental features
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons', 'framer-motion'],
    serverActions: {
      allowedOrigins: ['localhost:3000', 'madebyaris.com'],
    },
    memoryBasedWorkersCount: true,
    // Dev-only: Disable FS cache to avoid stale HMR module references after upgrades
    turbopackFileSystemCacheForDev: false,
  },
  
  // Next.js 16.2: Browser log forwarding - errors go to terminal
  logging: {
    browserToTerminal: 'error',
  },
  
  serverExternalPackages: ['sharp'],
  poweredByHeader: false,
  reactStrictMode: true,
  
  // Next.js 16: eslint config removed - use ESLint CLI directly instead
  // Run: npx eslint . or configure in eslint.config.js
  // Note: next lint still works but config option removed
  
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  output: 'standalone',
  compress: true,
  generateEtags: true,
  redirects: async () => [
    {
      source: '/about-me',
      destination: '/about',
      permanent: true,
    },
    {
      source: '/about-me/',
      destination: '/about',
      permanent: true,
    },
    {
      source: '/contact-us',
      destination: '/contact',
      permanent: true,
    },
    {
      source: '/contact-us/',
      destination: '/contact',
      permanent: true,
    },
  ],
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on'
        },
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=31536000; includeSubDomains'
        },
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN'
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        },
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin'
        },
        {
          key: 'Permissions-Policy',
          value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
        }
      ]
    }
  ],
  // NOTE: Custom webpack config removed
  // Turbopack (default in Next.js 16) handles code splitting, tree-shaking,
  // and module concatenation automatically with optimized defaults.
  // If you need custom chunking, use Next.js built-in dynamic() imports instead.

  redirects: async () => [
    {
      source: '/services/wordpress-development',
      destination: '/services/wordpress',
      permanent: true,
    },
    {
      source: '/author/madebyaris',
      destination: '/about',
      permanent: true,
    },
    {
      source: '/author/madebyaris/',
      destination: '/about',
      permanent: true,
    },
  ],
}

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig);
