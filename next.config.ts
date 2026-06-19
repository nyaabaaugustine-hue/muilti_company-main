import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  // Ensures the static export lands in the "out" folder (default)
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Trailing slash ensures /apn-youth/ resolves to /apn-youth/index.html on cPanel
  trailingSlash: true,
};

export default nextConfig;
