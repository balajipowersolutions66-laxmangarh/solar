// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Remove any assetPrefix or basePath that tries to make _next paths relative.
  // Keep default Next behavior so Vercel serves /_next/static correctly.
  // If you had exportTrailingSlash / output: 'export' before, revert to normal
  // serverless/standalone build for Vercel:
  output: undefined,
  // If you previously added `assetPrefix: './'` or similar, DO NOT include it here.
};

module.exports = nextConfig;
