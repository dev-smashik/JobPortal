import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
      },
    ],
    domains: ['images.unsplash.com', 'avatars.githubusercontent.com'],
  },
  api: {
    bodyParser: {
      sizeLimit: '10mb', 
    },
  },
  experimental: {
    serverComponentsExternalPackages: ["pdf-parse"],
  },

  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
