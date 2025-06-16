const withPWA = require('next-pwa')({
  dest: 'public',
  // disable: process.env.NODE_ENV === 'development',
  // register: true,
  // scope: '/app',
  // sw: 'service-worker.js',
  //...
});

module.exports = withPWA({
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: true,
  serverRuntimeConfig: {
    GOOGLE_MAPS_API_KEY: process.env.MAP_API_KEY,
  },
  publicRuntimeConfig: {
    GOOGLE_MAPS_API_KEY: process.env.MAP_API_KEY,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        child_process: false,
        https: false,
        os: false,
        path: false,
        crypto: false,
        http2: false,
        zlib: false,
        net: false,
        tls: false,
        http: false,
        stream: false,
        request: false,
      };
    }
    return config;
  },
  async redirects() {
    return [
      {
        source: '/honda-parts/ajman',
        destination: '/search-by-make/Honda',
        permanent: true,
      },
      {
        source: '/honda-parts/deira',
        destination: '/search-by-make/Honda',
        permanent: true,
      },
      {
        source: '/honda-parts/ras-al-khaimah',
        destination: '/search-by-make/Honda',
        permanent: true,
      },
      {
        source: '/honda-accord-10th-gen-body-parts',
        destination: '/search-by-make/Honda',
        permanent: true,
      },

    ]
  },
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'production',
  },
  staticPageGenerationTimeout: 10000,
});
