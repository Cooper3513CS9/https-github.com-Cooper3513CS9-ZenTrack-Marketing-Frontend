import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  redirects: async () => [
    {
      source: '/:path*',
      destination: 'https://zentrack.nl/:path*',
      permanent: true,
      locale: false,
      has: [
        {
          type: 'header',
          key: 'host',
          value: 'www.zentrack.nl',
        },
      ],
    },
  ],
};

export default nextConfig;