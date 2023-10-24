/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
  i18n: {
    locales: ['en-GB', 'de-AT'],
    defaultLocale: 'en-GB',
    localeDetection: true,
  }
}

module.exports = nextConfig
