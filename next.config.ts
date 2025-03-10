import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpileModules: ["three", "@react-three/drei", "@react-three/fiber"],
};

export default nextConfig;
