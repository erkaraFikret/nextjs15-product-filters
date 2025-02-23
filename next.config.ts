import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "*",  // Tüm domainleri kabul eder
        protocol: "https"
      }
    ]
  }
  
  
};

export default nextConfig;