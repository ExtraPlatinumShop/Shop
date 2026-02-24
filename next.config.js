/** @type {import('next').NextConfig} */
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
  webpack: (config) => {
    // Виключаємо macOS AppleDouble resource fork файли (._*, .__*)
    // якщо вони знову з'являться після git pull або копіювання
    config.module.rules.unshift({
      test: /[\\/]\._|[\\/]\.__/,
      use: 'ignore-loader',
    });
    return config;
  },
};
