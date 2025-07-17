// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'res.cloudinary.com',
      'images.unsplash.com', // ✅ Add this line
    ],
  },
};

module.exports = nextConfig;
