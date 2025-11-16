// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove: output: 'export',
  // This allows API routes to work!
  
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
