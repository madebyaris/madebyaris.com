/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['wp.madebyaris.com', 'wp.madebyaris.com'], // Add your WordPress domain
    // Optional: Add more granular configuration
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wp.madebyaris.com',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
}

module.exports = nextConfig 