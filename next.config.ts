import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep builds reliable on smaller developer machines and CI runners.
  experimental: { cpus: 2 },
  devIndicators: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
    ],
  },
};

export default nextConfig;
