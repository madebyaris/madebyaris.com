import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
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
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
    serverActions: {
      allowedOrigins: ['localhost:3000', 'madebyaris.com'],
    },
    memoryBasedWorkersCount: true,
  },
  turbopack: {
    rules: {
      '*.svg': ['@svgr/webpack'],
    },
  },
  serverExternalPackages: ['sharp'],
  poweredByHeader: false,
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  output: 'standalone',
  compress: true,
  generateEtags: true,
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
        },
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable'
        },
        {
          key: 'Vercel-CDN-Cache-Control',
          value: 'public, max-age=31536000, immutable'
        }
      ]
    }
  ],
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          minSize: 15000,
          maxSize: 200000,
          minChunks: 1,
          maxAsyncRequests: 50,
          maxInitialRequests: 25,
          cacheGroups: {
            // Framework chunks (React, Next.js)
            framework: {
              chunks: 'all',
              name: 'framework',
              test: /(?:react|react-dom|scheduler)[\\/]/,
              priority: 40,
              enforce: true,
            },
            // Large libraries
            lib: {
              test: /[\\/]node_modules[\\/](framer-motion|@radix-ui|lucide-react)[\\/]/,
              name: 'lib',
              priority: 30,
              reuseExistingChunk: true,
            },
            // UI Components
            ui: {
              test: /[\\/]components[\\/]ui[\\/]/,
              name: 'ui',
              priority: 25,
              reuseExistingChunk: true,
            },
            // Vendor chunks (other node_modules)
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendor',
              priority: 20,
              reuseExistingChunk: true,
            },
            // Common chunks (shared across pages)
            common: {
              name: 'common',
              minChunks: 2,
              priority: 15,
              reuseExistingChunk: true,
            },
            // Default group
            default: {
              minChunks: 2,
              priority: 10,
              reuseExistingChunk: true,
            },
          },
        },
        // Minimize and tree-shake more aggressively
        usedExports: true,
        sideEffects: false,
      }

      // Optimize module concatenation
      config.optimization.concatenateModules = true;
      
      // Improve tree shaking
      config.optimization.providedExports = true;
    }

    // Note: framer-motion alias removed due to export path issues
    // The library's optimizePackageImports in experimental config handles optimization

    return config
  },
}

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig); 