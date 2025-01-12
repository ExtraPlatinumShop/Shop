/** @type {import('next').NextConfig} */
const nextConfig = {}
module.exports = {
  // i18n: {
  //   locales: ['ua', 'en'],
  //   defaultLocale: 'ua',
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      },
    ],
  },
}
