import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Robots-Tag', value: 'index, follow' },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'placehold.co', pathname: '/**' },
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
      { protocol: 'https', hostname: 'picsum.photos', pathname: '/**' },
      { protocol: 'https', hostname: 'res.cloudinary.com', pathname: '/**' },
      // Team / content images from company sites
      { protocol: 'https', hostname: 'womenofafricanetwork.org', pathname: '/**' },
      { protocol: 'https', hostname: 'africaglobalizedinvestment.com', pathname: '/**' },
      { protocol: 'https', hostname: 'afcftapolicy.net', pathname: '/**' },
      { protocol: 'https', hostname: 'abec500.com', pathname: '/**' },
      { protocol: 'https', hostname: 'web.archive.org', pathname: '/**' },
    ],
  },
};

export default nextConfig;
