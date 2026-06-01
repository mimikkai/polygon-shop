import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/polygon-shop",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;