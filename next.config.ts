import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_CALCULATOR_ENABLED: process.env.NEXT_PUBLIC_CALCULATOR_ENABLED ?? '1',
  },
  // Keep builds reliable on smaller developer machines and CI runners.
  experimental: { cpus: 2 },
  devIndicators: false,
  images: {
    qualities: [75, 95],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
    ],
  },
};

export default nextConfig;
