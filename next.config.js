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
  },
}

module.exports = nextConfig 