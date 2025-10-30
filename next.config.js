/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Let Vercel/Next handle static assets under /_next (do NOT use assetPrefix './' here)
  // Remove 'output: "export"' so Next.js performs the normal build (recommended on Vercel)
  images: {
    unoptimized: true,
  },

  // keep trailingSlash if you prefer (can be true or false). Use false to follow Next defaults.
  trailingSlash: false,
};

module.exports = nextConfig;
