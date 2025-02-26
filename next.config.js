import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wp.madebyaris.com',
        port: '',
        pathname: '/**',
      },
      // Add any other domains you need to support
      {
        protocol: 'https',
        hostname: 'secure.gravatar.com',
        port: '',
        pathname: '/**',
      }
    ],
    // Enhanced image optimization settings
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 86400, // Increase cache TTL to 24 hours
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Add experimental optimizations
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', 'framer-motion', '@radix-ui/react-icons'],
    // Configure Turbopack
    turbo: {
      // Turbopack-specific options
      resolveAlias: {
        // Add any module aliases if needed
      },
    }
  },
  // Add performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
  // Optimize build output
  output: 'standalone',
  // Improve performance with compression
  compress: true,
  // Add HTTP/2 server push
  poweredByHeader: false,
  // Optimize React in production
  reactStrictMode: true,
}

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig); 