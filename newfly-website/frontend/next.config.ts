import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 output: "export",
 images: {
    unoptimized: true, // <-- disable Next.js Image Optimization API
  },
  // Disable Turbopack by not using it at all
  // If you want to explicitly set experimental options:
  experimental: {},
};

export default nextConfig;
