const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['picsum.photos', 'res.cloudinary.com', 'erasysconsulting.com', 'solveeducation.org', 'tradeasia.com']
  }
};

module.exports = withBundleAnalyzer(nextConfig);
