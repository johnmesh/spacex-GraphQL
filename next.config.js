/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {},
  async redirects() {
    return [
      {
        source: '/',
        destination: '/missions',
        permanent: true,
      },
    ]
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
  pageExtensions: ['page.tsx', 'ts'],
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
}

module.exports = nextConfig
