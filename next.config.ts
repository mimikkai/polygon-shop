import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/polygon-shop",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_BASE_PATH: "/polygon-shop",
  },
};

export default nextConfig;