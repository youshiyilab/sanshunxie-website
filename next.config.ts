import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 关闭 next/image 默认优化（避免触发 sharp 依赖）
  images: {
    unoptimized: true,
  },
  // 中文站点
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  // 允许 127.0.0.1 跨源请求（避免 HMR 跨源警告）
  allowedDevOrigins: ["127.0.0.1", "localhost", "0.0.0.0"],
  // 静态导出配置
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
