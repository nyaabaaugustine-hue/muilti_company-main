/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'web.archive.org',
      },
      {
        protocol: 'http',
        hostname: 'womenofafricanetwork.org',
      },
      {
        protocol: 'https',
        hostname: 'womenofafricanetwork.org',
      },
    ],
  },
};

export default nextConfig;
