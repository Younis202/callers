/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        pathname: '/**',
      }
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable font optimization to prevent Google Fonts fetching issues
  optimizeFonts: false,
  experimental: {
    // Disable webpack build worker to reduce file system operations
    webpackBuildWorker: false,
    // Add additional stability configurations
    esmExternals: false,
    // Reduce concurrent operations
    workerThreads: false,
    cpus: 1
  },
  // Add webpack configuration to improve stability
  webpack: (config, { dev, isServer }) => {
    // Reduce the number of concurrent operations
    config.parallelism = 1;
    
    // Increase timeouts
    config.watchOptions = {
      aggregateTimeout: 10000,
      poll: 2000,
    };

    // Disable webpack caching in development to prevent corruption
    if (dev) {
      config.cache = false;
    }

    // Use memory caching for production
    if (!dev) {
      config.cache = {
        type: 'memory',
        maxGenerations: 1,
      };
    }

    return config;
  },
};

module.exports = nextConfig;