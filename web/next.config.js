/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'digimon.shadowsmith.com',
        port: '',
        pathname: '**',
      },
    ],
  },
}

module.exports = nextConfig
