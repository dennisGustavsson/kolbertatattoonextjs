import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24, // 1 day
  },
  experimental: {
    optimizePackageImports: ["react", "react-dom"],
  },
};

export default nextConfig;
