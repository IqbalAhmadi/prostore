import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // Will allow prodcution build if there are type errors
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
