// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // needed because OVH doesn't process Next.js image optimization
  },
};

export default nextConfig;
