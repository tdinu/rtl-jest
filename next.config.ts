import path from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    return config;
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'], // Add this if you use TypeScript or other extensions
};

export default nextConfig;
