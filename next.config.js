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
    // Add image optimization settings
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Add experimental optimizations
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', 'framer-motion'],
    // Configure Turbopack
    turbo: {
      // Turbopack-specific options
      resolveAlias: {
        // Add any module aliases if needed
      },
      // You can add rules for specific modules if needed
      rules: {
        // Example: { test: /\.svg$/, use: ['@svgr/webpack'] }
      }
    }
  },
}

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig); 