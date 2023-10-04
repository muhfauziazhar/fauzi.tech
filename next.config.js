const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
});

const withBundleAnalyzer = require("@next/bundle-analyzer");
/** @type {import("next").NextConfig} */
const nextConfig = {
  ...withBundleAnalyzer({
    enabled: process.env.ANALYZE === "true",
  }),
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos', 'res.cloudinary.com', 'erasysconsulting.com', 'solveeducation.org', 'tradeasia.com']
  },
};

module.exports = withPWA(nextConfig);
