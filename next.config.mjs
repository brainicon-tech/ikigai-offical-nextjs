// next.config.js - Final Attempt

/** @type {import('next').NextConfig} */
const nextConfig = {
 
  reactStrictMode: true,
  
  // 1. Ensure this entire block is at the root level of nextConfig
  devIndicators: {
    // 2. Set this property to FALSE to hide the indicator/logo
    buildActivity: false, 
  },

  experimental: {
    turbo: false,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;