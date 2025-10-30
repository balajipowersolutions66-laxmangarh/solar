/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // 👇 ensures Next.js exports all pages with relative paths
  output: 'export',
  trailingSlash: true,

  // 👇 fix for static images & CSS on vercel
  images: {
    unoptimized: true,
  },

  // 👇 this tells Next.js where your static files (like /public) are
  assetPrefix: './',
  basePath: '',

  // 👇 optional optimization off for smoother exports
  distDir: 'out',
};

module.exports = nextConfig;

