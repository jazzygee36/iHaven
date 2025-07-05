const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'], // ✅ Allow Unsplash images
  },
});
