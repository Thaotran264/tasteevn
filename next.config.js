/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.pexels.com', 'images.pexels.com','tastee-test.s3.ap-southeast-1.amazonaws.com','i.pinimg.com'],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  env: {
     BASE_URL: 'https://tmerchant.tastee.vn/api',
    //  BASE_URL: 'https://test.tastee.vn',
     API_TEST: 'https://test.tastee.vn',
     MERCHANT_URL: 'https://tmerchant.tastee.vn'
  }
}

module.exports = nextConfig
