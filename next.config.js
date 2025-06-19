const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV !== 'production',
});

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
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
      {
        source: '/search-by-make/Acura',
        destination: '/get-in-touch',
        permanent: true,
      },
      {
        source: '/search-by-make/Buick',
        destination: '/get-in-touch',
        permanent: true,
      },
      {
        source: '/search-by-make/Eagle',
        destination: '/get-in-touch',
        permanent: true,
      },
      {
        source: '/search-by-make/Lotus',
        destination: '/get-in-touch',
        permanent: true,
      },
      {
        source: '/search-by-make/Plymouth',
        destination: '/get-in-touch',
        permanent: true,
      },
      {
        source: '/search-by-make/Pontiac',
        destination: '/get-in-touch',
        permanent: true,
      },
      {
        source: '/search-by-make/Saab',
        destination: '/get-in-touch',
        permanent: true,
      },
      {
        source: '/search-by-make/Subaru',
        destination: '/get-in-touch',
        permanent: true,
      },
      {
        source: '/search-by-make/Alpha%20Romeo',
        destination: '/get-in-touch',
        permanent: true,
      },
      {
        source: '/search-by-make/Geo',
        destination: '/get-in-touch',
        permanent: true,
      },
      {
        source: '/search-by-make/Oldsmobile',
        destination: '/get-in-touch',
        permanent: true,
      },
      {
        source: '/search-by-make/Isuzu',
        destination: '/get-in-touch',
        permanent: true,
      },
      {
        source: '/search-by-make/Saturn',
        destination: '/get-in-touch',
        permanent: true,
      },
      {
        source: '/search-by-make/Corbin',
        destination: '/get-in-touch',
        permanent: true,
      },
      {
        source: '/search-by-make/Holden',
        destination: '/get-in-touch',
        permanent: true,
      },
      {
        source: '/search-by-make/Spyker',
        destination: '/get-in-touch',
        permanent: true,
      },
      {
        source: '/search-by-make/Spyker%20Cars',
        destination: '/get-in-touch',
        permanent: true,
      },
      {
        source: '/search-by-make/Aston%20Martin',
        destination: '/get-in-touch',
        permanent: true,
      },
      {
        source: '/search-by-make/Panoz',
        destination: '/get-in-touch',
        permanent: true,
      },
      {
        source: '/search-by-make/Foose',
        destination: '/get-in-touch',
        permanent: true,
      },
      {
        source: '/search-by-make/Morgan',
        destination: '/get-in-touch',
        permanent: true,
      },
      {
        source: '/search-by-make/Aptera',
        destination: '/get-in-touch',
        permanent: true,
      },
      {
        source: '/search-by-make/Smart',
        destination: '/get-in-touch',
        permanent: true,
      },
      {
        source: '/search-by-make/SRT',
        destination: '/get-in-touch',
        permanent: true,
      },
      {
        source: '/search-by-make/Roush%20Performance',
        destination: '/get-in-touch',
        permanent: true,
      },
      {
        source: '/search-by-make/Pagani',
        destination: '/get-in-touch',
        permanent: true,
      },
      {
        source: '/search-by-make/Mobility%20Ventures%20LLC',
        destination: '/get-in-touch',
        permanent: true,
      },
      {
        source: '/search-by-make/RUF%20Automobile',
        destination: '/get-in-touch',
        permanent: true,
      },
      {
        source: '/search-by-make/Koenigsegg',
        destination: '/get-in-touch',
        permanent: true,
      },
      {
        source: '/search-by-make/Karma',
        destination: '/get-in-touch',
        permanent: true,
      },
      {
        source: '/search-by-make/Polestar',
        destination: '/get-in-touch',
        permanent: true,
      },
      {
        source: '/search-by-make/STI',
        destination: '/get-in-touch',
        permanent: true,
      },
      {
        source: '/search-by-make/Kandi',
        destination: '/get-in-touch',
        permanent: true,
      },
      {
        source: '/search-by-make/Abarth',
        destination: '/get-in-touch',
        permanent: true,
      },
      {
        source: '/search-by-make/Dorcen',
        destination: '/get-in-touch',
        permanent: true,
      },
      {
        source: '/search-by-make/Foton',
        destination: '/get-in-touch',
        permanent: true,
      },
      {
        source: '/search-by-make/W%20Motors',
        destination: '/get-in-touch',
        permanent: true,
      },
      {
        source: '/search-by-make/Opel',
        destination: '/get-in-touch',
        permanent: true,
      },
      {
        source: '/search-by-make/Skoda',
        destination: '/get-in-touch',
        permanent: true,
      },
      {
        source: '/search-by-make/Hillman',
        destination: '/get-in-touch',
        permanent: true,
      },
      {
        source: '/search-by-make/Austin',
        destination: '/get-in-touch',
        permanent: true,
      },
      {
        source: '/search-by-make/Fillmore',
        destination: '/get-in-touch',
        permanent: true,
      },
      {
        source: '/search-by-make/Maybach',
        destination: '/get-in-touch',
        permanent: true,
      },
      {
        source: '/search-by-make/Merkur',
        destination: '/get-in-touch',
        permanent: true,
      },
      {
        source: '/search-by-make/Rambler',
        destination: '/get-in-touch',
        permanent: true,
      },
      {
        source: '/search-by-make/Shelby',
        destination: '/get-in-touch',
        permanent: true,
      },
      {
        source: '/search-by-make/Studebaker',
        destination: '/get-in-touch',
        permanent: true,
      },
      {
        source: "/search-by-make/Acura/Legend",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/Integra",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/Legend",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/NSX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/Vigor",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/Integra",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/Legend",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/NSX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/Vigor",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/Integra",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/Legend",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/NSX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/Vigor",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/Integra",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/Legend",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/NSX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/TL",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/Integra",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/NSX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RL",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/SLX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/TL",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/CL",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/Integra",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/NSX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RL",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/SLX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/TL",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/CL",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/Integra",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/NSX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RL",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/SLX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/TL",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/CL",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/Integra",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/NSX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RL",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/SLX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/TL",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/Integra",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/NSX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RL",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/TL",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/CL",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/Integra",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/MDX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/NSX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RL",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/TL",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/CL",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/MDX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/NSX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RL",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RSX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/TL",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/CL",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/MDX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/NSX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RL",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RSX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/TL",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/MDX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/NSX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RL",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RSX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/TL",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/TSX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/MDX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/NSX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RL",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RSX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/TL",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/TSX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/MDX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RL",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RSX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/TL",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/TSX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/MDX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RDX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RL",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/TL",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/TSX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/MDX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RDX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RL",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/TL",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/TSX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/MDX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RDX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RL",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/TL",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/TSX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/MDX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RDX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RL",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/TL",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/TSX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/ZDX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/MDX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RDX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RL",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/TL",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/TSX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/ZDX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/MDX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RDX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RL",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/TL",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/TSX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/ZDX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/ILX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/ILX%20Hybrid",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/MDX%202WD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/MDX%204WD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RDX%202WD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RDX%204WD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RLX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RLX%20Hybrid",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/TL%202WD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/TL%204WD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/TSX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/TSX%20Wagon",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/ILX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/MDX%202WD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/MDX%204WD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RDX%202WD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RDX%204WD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RLX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/TLX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/TLX%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/ILX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/MDX%202WD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/MDX%204WD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RDX%202WD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RDX%204WD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RLX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RLX%20Hybrid",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/TLX%202WD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/TLX%204WD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/ILX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/MDX%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/MDX%20FWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/MDX%20Hybrid%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/NSX%20Hybrid",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RDX%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RDX%20FWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RLX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RLX%20Hybrid",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/TLX%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/TLX%20FWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/ILX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/MDX%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/MDX%20FWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/MDX%20Hybrid%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/NSX%20Hybrid",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RDX%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RDX%20FWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RLX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RLX%20Hybrid",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/TLX%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/TLX%20AWD%20A-SPEC",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/TLX%20FWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/TLX%20FWD%20A-SPEC",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/ILX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/MDX%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/MDX%20AWD%20A-SPEC",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/MDX%20FWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/MDX%20Hybrid%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/NSX%20Hybrid",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RDX%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RDX%20AWD%20A-SPEC",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RDX%20FWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RDX%20FWD%20A-SPEC",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RLX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RLX%20Hybrid",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/TLX%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/TLX%20AWD%20A-SPEC",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/TLX%20FWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/TLX%20FWD%20A-SPEC",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/ILX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/MDX%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/MDX%20AWD%20A-SPEC",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/MDX%20FWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/MDX%20Hybrid%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/NSX%20Hybrid",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RDX%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RDX%20AWD%20A-SPEC",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RDX%20FWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RDX%20FWD%20A-SPEC",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RLX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RLX%20Hybrid",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/TLX%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/TLX%20AWD%20A-SPEC",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/TLX%20FWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/TLX%20FWD%20A-SPEC",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/ILX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/NSX%20Hybrid",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RDX%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RDX%20AWD%20A-SPEC",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RDX%20FWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/RDX%20FWD%20A-SPEC",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/TLX%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/TLX%20AWD%20A-SPEC",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/TLX%20FWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/TLX%20FWD%20A-SPEC",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/TLX%20Type-S",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Acura/TLX%20Type-S%20Perf%20Tire",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Century",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Coachbuilder",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Electra",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Estate",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/LeSabre",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Reatta",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Regal",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Riviera",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Skylark",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Century",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Coachbuilder",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/LeSabre",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Park%20Avenue",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Reatta",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Regal",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Riviera",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Roadmaster",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Skylark",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Century",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Coachbuilder",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/LeSabre",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Park%20Avenue",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Regal",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Riviera",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Roadmaster",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Skylark",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Century",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Coachbuilder",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/LeSabre",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Park%20Avenue",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Regal",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Riviera",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Roadmaster",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Skylark",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Century",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Coachbuilder",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/LeSabre",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Park%20Avenue",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Regal",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Roadmaster",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Skylark",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Century",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Coachbuilder",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/LeSabre",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Park%20Avenue",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Regal",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Riviera",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Roadmaster",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Skylark",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Century",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Hearse",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/LeSabre",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Park%20Avenue",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Regal",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Riviera",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Roadmaster",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Skylark",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Century",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/LeSabre",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Park%20Avenue",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Regal",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Riviera",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Skylark",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Century",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/LeSabre",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Park%20Avenue",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Regal",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Riviera",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Skylark",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Century",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/LeSabre",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Park%20Avenue",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Regal",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Riviera",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Century",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/LeSabre",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Park%20Avenue",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Regal",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Century",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/LeSabre",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Park%20Avenue",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Regal",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Century",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/LeSabre",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Park%20Avenue",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Regal",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Rendezvous",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Century",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/LeSabre",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Park%20Avenue",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Regal",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Rendezvous",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Century",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/LeSabre",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Park%20Avenue",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Rainier",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Regal",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Rendezvous",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Century",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/LaCrosse",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/LeSabre",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Park%20Avenue",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Rainier",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Rendezvous",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Terraza",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/LaCrosse",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Lucerne",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Rainier",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Rendezvous",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Terraza",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/LaCrosse",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Lucerne",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Rainier",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Rendezvous",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Terraza",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Enclave",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/LaCrosse",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Lucerne",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Enclave",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/LaCrosse",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Lucerne",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Enclave",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/LaCrosse",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Lucerne",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Enclave",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/LaCrosse",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Lucerne",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Regal",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Enclave",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/LaCrosse",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Regal",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Verano",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Enclave%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Enclave%20FWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Encore",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Encore%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/LaCrosse",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/LaCrosse%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/LaCrosse%20eAssist",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Regal",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Regal%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Regal%20eAssist",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Verano",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Enclave%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Enclave%20FWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Encore",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Encore%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/LaCrosse",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/LaCrosse%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/LaCrosse%20eAssist",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Regal",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Regal%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Regal%20eAssist",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Verano",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Cascada",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Enclave%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Enclave%20FWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Encore",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Encore%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Envision%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/LaCrosse",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/LaCrosse%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/LaCrosse%20eAssist",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Regal",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Regal%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Regal%20eAssist",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Verano",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Cascada",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Enclave%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Enclave%20FWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Encore",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Encore%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Envision%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Envision%20FWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/LaCrosse",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/LaCrosse%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Regal",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Regal%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Verano",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Cascada",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Enclave%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Enclave%20FWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Encore",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Encore%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Envision%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Envision%20FWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/LaCrosse",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/LaCrosse%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/LaCrosse%20eAssist",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Regal",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Regal%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Regal%20TourX%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Cascada",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Enclave%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Enclave%20FWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Encore",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Encore%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Envision%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Envision%20FWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/LaCrosse",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/LaCrosse%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/LaCrosse%20eAssist",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Regal",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Regal%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Regal%20TourX%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Enclave%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Enclave%20FWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Encore%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Encore%20FWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Encore%20GX%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Encore%20GX%20FWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Envision%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Envision%20FWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Regal",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Regal%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Regal%20TourX%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Enclave%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Enclave%20FWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Encore%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Encore%20FWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Encore%20GX%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Encore%20GX%20FWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Envision%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Buick/Envision%20FWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Eagle/Talon",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Eagle/Talon",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Eagle/Premier",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Eagle/Summit",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Eagle/Talon",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Eagle/Summit",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Eagle/Talon",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Eagle/Vision",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Eagle/Summit",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Eagle/Talon",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Eagle/Vision",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Eagle/Summit",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Eagle/Talon",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Eagle/Vision",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Eagle/Summit",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Eagle/Talon",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Eagle/Vision",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Eagle/Talon",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Eagle/Vision",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Eagle/Talon",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Lotus/Elan",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Lotus/Esprit",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Lotus/Elan",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Lotus/Esprit",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Lotus/Elan",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Lotus/Esprit",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Lotus/Elan",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Lotus/Esprit",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Lotus/Elan",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Lotus/Esprit",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Lotus/Esprit",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Lotus/Esprit",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Lotus/Esprit",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Lotus/Esprit",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Lotus/Esprit",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Lotus/Esprit",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Lotus/Esprit",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Lotus/Esprit",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Lotus/Esprit",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Lotus/Elise",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Lotus/Esprit",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Lotus/Exige",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Lotus/Elise",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Lotus/Exige",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Lotus/Elise",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Lotus/Exige",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Lotus/Elise",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Lotus/Exige",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Lotus/Elise",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Lotus/Exige",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Lotus/Elise",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Lotus/Exige",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Lotus/Elise",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Lotus/Evora",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Lotus/Exige",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Lotus/Elise",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Lotus/Evora",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Lotus/Exige",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Lotus/Evora",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Lotus/Exige",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Lotus/Evora",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Lotus/Evora",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Lotus/Evora",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Lotus/Evora",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Lotus/Evora%20GT",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Lotus/Evora%20GT",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Plymouth/Laser",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Plymouth/Laser",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Plymouth/Acclaim",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Plymouth/Colt",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Plymouth/Colt%20Vista",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Plymouth/Grand%20Voyager",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Plymouth/Laser",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Plymouth/Sundance",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Plymouth/Voyager",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Plymouth/Acclaim",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Plymouth/Colt",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Plymouth/Colt%20Vista",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Plymouth/Grand%20Voyager",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Plymouth/Laser",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Plymouth/Sundance",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Plymouth/Voyager",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Plymouth/Acclaim",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Plymouth/Colt",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Plymouth/Colt%20Vista",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Plymouth/Grand%20Voyager",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Plymouth/Laser",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Plymouth/Sundance",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Plymouth/Voyager",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Plymouth/Acclaim",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Plymouth/Grand%20Voyager",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Plymouth/Neon",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Plymouth/Voyager",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Plymouth/Breeze",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Plymouth/Grand%20Voyager",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Plymouth/Neon",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Plymouth/Voyager",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Plymouth/Breeze",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Plymouth/Grand%20Voyager",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Plymouth/Neon",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Plymouth/Prowler",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Plymouth/Voyager",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Plymouth/Breeze",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Plymouth/Grand%20Voyager",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Plymouth/Neon",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Plymouth/Voyager",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Plymouth/Breeze",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Plymouth/Grand%20Voyager",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Plymouth/Neon",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Plymouth/Prowler",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Plymouth/Voyager",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Plymouth/Breeze",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Plymouth/Grand%20Voyager",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Plymouth/Neon",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Plymouth/Prowler",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Plymouth/Voyager",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Plymouth/Neon",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/6000",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Bonneville",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Firebird",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Firefly",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Grand%20Am",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Grand%20Prix",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Grand%20Prix%20Turbo",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/LeMans",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Sunbird",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Trans%20Sport",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Turbo%20Firefly",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/6000",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Bonneville",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Firebird",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Firefly",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Grand%20Am",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Grand%20Prix",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/LeMans",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Sunbird",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Trans%20Sport",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Bonneville",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Firebird",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Firebird%20Formula",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Firefly",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Grand%20Am",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Grand%20Prix",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/LeMans",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Sunbird",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Trans%20Sport",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Bonneville",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Firebird",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Grand%20Am",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Grand%20Prix",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/LeMans",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Sunbird",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Trans%20Sport",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Bonneville",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Firebird",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Firefly",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Grand%20Am",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Grand%20Prix",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Sunbird",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Trans%20Sport",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Bonneville",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Firebird",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Firefly",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Grand%20Am",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Grand%20Prix",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Sunfire",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Trans%20Sport",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Bonneville",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Firebird",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Grand%20Am",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Grand%20Prix",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Sunfire",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Trans%20Sport",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Bonneville",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Firebird",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Grand%20Am",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Grand%20Prix",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Sunfire",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Trans%20Sport",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Bonneville",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Firebird",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Grand%20Am",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Grand%20Prix",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Sunfire",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Trans%20Sport",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Bonneville",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Firebird",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Firebird%20Formula",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Grand%20Am",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Grand%20Prix",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Montana",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Sunfire",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Trans%20Sport",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Bonneville",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Firebird",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Grand%20Am",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Grand%20Prix",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Montana",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Sunfire",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Aztek",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Bonneville",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Firebird",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Grand%20Am",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Grand%20Prix",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Montana",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Sunfire",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Aztek",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Bonneville",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Firebird",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Grand%20Am",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Grand%20Prix",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Montana",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Sunfire",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Aztek",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Bonneville",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Grand%20Am",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Grand%20Prix",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Montana",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Sunfire",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Vibe",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Aztek",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Bonneville",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Grand%20Am",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Grand%20Prix",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/GTO",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Montana",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Sunfire",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Vibe",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Aztek",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Bonneville",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Daewoo%20Kalos",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/G6",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Grand%20Am",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Grand%20Prix",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/GTO",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Montana",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Montana%20SV6",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Monterey",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Sunfire",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Vibe",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Daewoo%20Kalos",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/G6",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Grand%20Prix",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/GTO",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Montana",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Montana%20SV6",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Solstice",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Torrent",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Vibe",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/G5",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/G6",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Grand%20Prix",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Solstice",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Torrent",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Vibe",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/G5",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/G6",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/G8",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Grand%20Prix",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Solstice",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Torrent",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Vibe",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/G3",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/G5",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/G6",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/G8",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Solstice",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Torrent",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Vibe",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/G3",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/G6",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pontiac/Vibe",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saab/900",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saab/9000",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saab/900",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saab/9000",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saab/900",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saab/9000",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saab/900",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saab/9000",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saab/900",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saab/9000",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saab/900",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saab/9000",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saab/900",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saab/9000",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saab/900",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saab/9000",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saab/900",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saab/9000",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saab/9-3",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saab/9-5",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saab/900",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saab/9000",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saab/9-3",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saab/9-5",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saab/9-3",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saab/9-5",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saab/9-3",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saab/9-5",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saab/9-3",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saab/9-5",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saab/9-3",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saab/9-5",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saab/9-2X",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saab/9-3",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saab/9-5",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saab/9-7X",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saab/9-2X",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saab/9-3",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saab/9-5",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saab/9-7X",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saab/9-3",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saab/9-5",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saab/9-7X",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saab/9-3",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saab/9-5",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saab/9-7X",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saab/9-3",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saab/9-5",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saab/9-7X",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saab/9-3",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saab/9-5",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saab/9-3",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saab/9-4X",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saab/9-5",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saab/9-3",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Justy",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Legacy",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Loyale",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/XT",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Justy",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Legacy",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Loyale",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/XT",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Alcyone%20SVX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Justy",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Legacy",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Loyale",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/SVX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Alcyone%20SVX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Impreza",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Justy",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Legacy",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Loyale",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/SVX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Alcyone%20SVX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Impreza",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Justy",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Legacy",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Loyale",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/SVX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Alcyone%20SVX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Impreza",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Legacy",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/SVX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Alcyone%20SVX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Impreza",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Legacy",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/SVX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Alcyone%20SVX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Impreza",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Legacy",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/SVX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Forester",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Impreza",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Legacy",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Forester",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Impreza",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Legacy",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Forester",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Impreza",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Legacy",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Outback",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Forester",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Impreza",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Legacy",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Outback",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Forester",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Impreza",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Legacy",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Outback",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Outback%20Sport",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Baja",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Forester",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Impreza",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Legacy",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Outback",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Baja",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Forester",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Impreza",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Legacy",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Outback",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Baja",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Forester",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Impreza",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Legacy",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Outback",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/B9%20Tribeca",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Baja",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Forester",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Impreza",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Legacy",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Outback",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Tribeca",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/B9%20Tribeca",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Forester",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Impreza",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Legacy",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Outback",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Tribeca",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Forester",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Impreza",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Legacy",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Outback",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Tribeca",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Forester",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Impreza",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Legacy",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Outback",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Tribeca",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Forester",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Impreza",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Impreza%20WRX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Legacy",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Outback",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Tribeca",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Forester",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Impreza",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Impreza%20WRX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Legacy",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Outback",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Tribeca",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Forester",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Impreza",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Legacy",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Outback",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Tribeca",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/BRZ",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/BRZ",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Forester%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Impreza%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Impreza%20Wagon%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Legacy%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Outback%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Tribeca%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/XV%20Crosstrek%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/XV%20Crosstrek%20Hybrid%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/BRZ",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Forester%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Impreza%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Impreza%20Sport%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Impreza%20Wagon%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Legacy%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Outback%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/WRX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/XV%20Crosstrek%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/XV%20Crosstrek%20Hybrid%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/BRZ",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Forester%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Impreza%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Impreza%20Sport%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Impreza%20Wagon%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Legacy%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Outback%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/WRX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/XV%20Crosstrek%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/XV%20Crosstrek%20Hybrid%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/BRZ",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Crosstrek%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Forester%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Impreza%204-Door",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Impreza%205-Door",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Impreza%20Sport%204-Door",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Impreza%20Sport%205-Door",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Legacy%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Outback%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/WRX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/BRZ",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/BRZ%20tS",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Crosstrek%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Forester%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Impreza%204-Door",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Impreza%205-Door",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Impreza%20Sport%204-Door",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Impreza%20Sport%205-Door",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Legacy%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Outback%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/WRX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/WRX%20STI%20Type%20RA",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Ascent",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Ascent%20Limited%20Touring",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/BRZ",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Crosstrek%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Crosstrek%20Hybrid%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Forester%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Impreza%204-Door",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Impreza%205-Door",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Impreza%20Sport%204-Door",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Impreza%20Sport%205-Door",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Legacy%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Outback%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/WRX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Ascent",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Ascent%20Limited%20Touring",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/BRZ",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/BRZ%20tS",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Crosstrek%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Crosstrek%20Hybrid%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Forester%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Impreza%204-Door",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Impreza%205-Door",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Impreza%20Sport%204-Door",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Impreza%20Sport%205-Door",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Legacy%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Outback%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/WRX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Ascent",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Ascent%20Limited%20Touring",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Crosstrek%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Crosstrek%20Hybrid%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Forester%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Impreza%204-Door",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Impreza%205-Door",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Impreza%20Sport%204-Door",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Impreza%20Sport%205-Door",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Legacy%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/Outback%20AWD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Subaru/WRX",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Geo/Metro",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Geo/Prizm",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Geo/Storm",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Geo/Tracker",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Geo/Metro",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Geo/Prizm",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Geo/Storm",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Geo/Tracker",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Geo/Metro",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Geo/Prizm",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Geo/Tracker",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Geo/Metro",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Geo/Prizm",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Geo/Tracker",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Geo/Metro",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Geo/Prizm",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Geo/Tracker",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Geo/Metro",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Geo/Prizm",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Geo/Tracker",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/88",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/98",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Achieva",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Bravada",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Ciera",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Custom%20Cruiser",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Cutlass%20Supreme",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Silhouette",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Toronado",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/88",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/98",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Achieva",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Bravada",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Ciera",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Cutlass%20Cruiser",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Cutlass%20Supreme",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Silhouette",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/88",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/98",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Achieva",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Bravada",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Ciera",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Cutlass%20Cruiser",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Cutlass%20Supreme",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Silhouette",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/88",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/98",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Achieva",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Aurora",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Ciera",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Cutlass%20Supreme",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Silhouette",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/88",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/98",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Achieva",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Aurora",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Bravada",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Ciera",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Cutlass%20Supreme",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Silhouette",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/88",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Achieva",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Aurora",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Bravada",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Cutlass",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Cutlass%20Supreme",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/LSS",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Regency",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Silhouette",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/88",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Achieva",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Aurora",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Bravada",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Cutlass",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Intrigue",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/LSS",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Regency",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Silhouette",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/88",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Alero",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Aurora",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Bravada",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Cutlass",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Intrigue",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/LSS",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Silhouette",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Alero",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Bravada",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Intrigue",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Silhouette",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Alero",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Aurora",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Bravada",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Intrigue",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Silhouette",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Alero",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Aurora",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Bravada",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Intrigue",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Silhouette",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Alero",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Aurora",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Bravada",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Silhouette",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Alero",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Bravada",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Oldsmobile/Silhouette",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Amigo",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Impulse",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Rodeo",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Space",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Stylus",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Trooper",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Amigo",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Rodeo",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Space",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Stylus",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Trooper",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Amigo",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Rodeo",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Space",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Trooper",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Rodeo",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Trooper",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Hombre",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Oasis",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Rodeo",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Trooper",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Hombre",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Hombre%20Space",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Oasis",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Rodeo",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Trooper",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Amigo",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Hombre",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Hombre%20Space",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Oasis",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Rodeo",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Trooper",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Amigo",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Hombre",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Hombre%20Space",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Oasis",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Rodeo",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Trooper",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/VehiCROSS",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Amigo",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Hombre",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Hombre%20Space",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Rodeo",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Trooper",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/VehiCROSS",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Rodeo",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Rodeo%20Sport",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Trooper",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/VehiCROSS",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Axiom",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Rodeo",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Rodeo%20Sport",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Trooper",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Ascender",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Axiom",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Rodeo",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Rodeo%20Sport",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Ascender",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Axiom",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Rodeo",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Ascender",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Ascender",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/i-280",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/i-350",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/i-Series",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Ascender",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/i-290",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/i-370",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/i-Series",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Ascender",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/i-290",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/i-370",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/i-Series",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Isuzu/Ascender",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saturn/S-Series",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saturn/S-Series",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saturn/S-Series",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saturn/S-Series",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saturn/S-Series",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saturn/S-Series",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saturn/S-Series",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saturn/S-Series",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saturn/L-Series",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saturn/S-Series",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saturn/L-Series",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saturn/S-Series",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saturn/L-Series",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saturn/S-Series",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saturn/VUE",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saturn/Ion",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saturn/L-Series",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saturn/VUE",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saturn/Ion",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saturn/L-Series",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saturn/VUE",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saturn/Ion",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saturn/L-Series",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saturn/Relay",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saturn/VUE",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saturn/Ion",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saturn/Relay",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saturn/Vue",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saturn/Aura",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saturn/Ion",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saturn/Outlook",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saturn/Relay",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saturn/Sky",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saturn/VUE",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saturn/Astra",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saturn/Aura",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saturn/Outlook",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saturn/Sky",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saturn/VUE",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saturn/Astra",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saturn/Aura",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saturn/Outlook",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saturn/Sky",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saturn/VUE",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saturn/Outlook",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Saturn/VUE",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Corbin/Sparrow",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Corbin/Sparrow",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Holden/VS%20Commodore",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Holden/VS%20Commodore",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Holden/VS%20Commodore",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Holden/Monaro",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Spyker/C8%20Laviolette",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Spyker/C8%20Spyder",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Spyker/C8%20Spyder%20Wide%20Body",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Spyker/C8%20Double%2012%20S",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Spyker%20Cars/C8",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Spyker%20Cars/C8",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Spyker%20Cars/C8",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/DB9",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/Vanquish%20S",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/DB9",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/DB9%20Volante",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/V8%20Vantage",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/Vanquish%20S",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/Vantage",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/DB9",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/V8%20Vantage",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/Vantage",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/DB9",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/DBS",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/V8%20Vantage",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/Vantage",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/DB9",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/DBS",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/V8%20Vantage",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/Vantage",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/DB9",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/DBS",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/Rapide",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/V8%20Vantage",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/Vantage",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/DB9",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/DBS",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/Rapide",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/V12%20Vantage",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/V8%20Vantage",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/V8%20Vantage%20S",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/Vantage",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/Virage",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/DB9",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/DBS",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/Rapide",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/V12%20Vantage",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/V8%20Vantage",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/V8%20Vantage%20S",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/Virage",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/DB9",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/Rapide%20S",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/V8%20Vantage",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/V8%20Vantage%20S",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/Vanquish",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/DB9",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/Rapide%20S",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/V12%20Vantage%20S",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/V8%20Vantage",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/V8%20Vantage%20S",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/Vanquish",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/Vantage%20GT",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/DB9",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/Rapide%20S",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/V12%20Vantage%20S",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/V8%20Vantage",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/V8%20Vantage%20S",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/Vanquish",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/Vantage%20GT",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/DB11%20V12",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/Rapide%20S",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/V12%20Vantage%20S",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/Vanquish%20S%20Zagato",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/DB11%20V12",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/DB11%20V8",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/Rapide%20S",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/Vanquish%20S%20Zagato",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/DB11%20V12",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/DB11%20V8",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/DBS",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/Vantage%20Manual",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/Vantage%20V8",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/DB11%20V12",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/DB11%20V8",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/DBS",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/DBX%20V8",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/Vantage%20Manual",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aston%20Martin/Vantage%20V8",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Panoz/Esperante",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Panoz/Esperante",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Panoz/Esperante",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Panoz/Esperante",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Foose/Hemisfear",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Morgan/Aero%208",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Morgan/Aero%208",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Morgan/Aero%208",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Morgan/Aero%208",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aptera/Typ-1",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aptera/2e",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aptera/Typ-1",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Aptera/Type-1h",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Smart/Fortwo",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Smart/Fortwo",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Smart/Fortwo",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Smart/Fortwo",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Smart/Fortwo",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Smart/fortwo%20cabriolet",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Smart/fortwo%20coupe",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Smart/fortwo%20electric%20drive%20convertible",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Smart/fortwo%20electric%20drive%20coupe",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Smart/fortwo%20cabriolet",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Smart/fortwo%20coupe",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Smart/fortwo%20electric%20drive%20convertible",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Smart/fortwo%20electric%20drive%20coupe",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Smart/fortwo%20coupe",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Smart/fortwo%20electric%20drive%20convertible",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Smart/fortwo%20electric%20drive%20coupe",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Smart/fortwo%20cabriolet",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Smart/fortwo%20coupe",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Smart/fortwo%20electric%20drive%20convertible",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Smart/fortwo%20electric%20drive%20coupe",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Smart/fortwo%20electric%20drive%20convertible",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Smart/fortwo%20electric%20drive%20coupe",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Smart/EQ%20fortwo%20(convertible)",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Smart/EQ%20fortwo%20(coupe)",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/SRT/Viper",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Roush%20Performance/F150%20Pickup%202WD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Roush%20Performance/F150%20Pickup%204WD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Roush%20Performance/F150%20Raptor%20Pickup%204WD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Roush%20Performance/Stage%203%20Mustang",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Roush%20Performance/Stage%203%20Mustang",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Roush%20Performance/F150%20Pickup%202WD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Roush%20Performance/F150%20Pickup%204WD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Roush%20Performance/Stage%203%20Mustang",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Roush%20Performance/F150%20Pickup%202WD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Roush%20Performance/F150%20Pickup%204WD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Roush%20Performance/Stage%203%20Mustang",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Roush%20Performance/F150%20Pickup%202WD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Roush%20Performance/F150%20Pickup%204WD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Roush%20Performance/F150%20Pickup%202WD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Roush%20Performance/F150%20Pickup%204WD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Roush%20Performance/Stage%203%20Mustang",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Roush%20Performance/F150%20Pickup%202WD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Roush%20Performance/F150%20Pickup%204WD",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Roush%20Performance/Stage%203%20Mustang",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Roush%20Performance/Mustang",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pagani/Huayra%20Coupe",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pagani/Huayra%20Coupe",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pagani/Huayra",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Pagani/Huayra%20Roadster%20BC",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Mobility%20Ventures%20LLC/MV-1",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Mobility%20Ventures%20LLC/MV-1%20CNG",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Mobility%20Ventures%20LLC/MV-1",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Mobility%20Ventures%20LLC/MV-1",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/RUF%20Automobile/RUF%20TURBO%2012%20CTR3",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/RUF%20Automobile/RUFTURBO12%20CTR3%20CTR2017",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/RUF%20Automobile/TURBO12%20CTR3%20CTR%20ANNIVERSARY",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Koenigsegg/Agera%20RS",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Koenigsegg/Regera",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Koenigsegg/Regera",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Karma/Revero",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Karma/Revero",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Karma/Revero%20GT%20(21-inch%20wheels)",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Karma/GS-6%20(21-inch%20wheels)",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Karma/GS-6%20(22-inch%20wheels)",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Karma/Revero%20GT%20(21-inch%20wheels)",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Karma/Revero%20GT%20(22-inch%20wheels)",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Polestar/1",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Polestar/1",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Polestar/2",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/STI/S209",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Kandi/K27",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Abarth/500",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Abarth/595",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Abarth/695",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Abarth/Grande%20Punto",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Abarth/Punto%20Evo",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Abarth/124%20Spider",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Abarth/Pulse",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Abarth/Fastback",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Abarth/595%20Competizione",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Abarth/695%20Competizione",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Abarth/Scorpioneoro",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Abarth/695%20Tourismo",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Abarth/695%20Esseesse",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Abarth/Fiat%20Abarth%20Competizione",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Abarth/Cabrio",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Dorcen/G70s",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Dorcen/Domy%20X7",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Dorcen/Domy%20X5",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Dorcen/G60s",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Foton/View",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Foton/Tunland",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/W%20Motors/Lykan%20HyperSport",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/W%20Motors/Fenyr%20HyperSport",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Opel/Corsa",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Opel/Mokka",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Opel/Astra",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Opel/Crossland%20X",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Opel/Grandland",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Opel/Insignia",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Skoda/Kamiq",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Skoda/Octavia",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Skoda/Scala",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Skoda/Superb",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Skoda/Karoq",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Skoda/Fabia",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Skoda/Kondiaq",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Skoda/Kushaq",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Maybach/57",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Maybach/62",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Maybach/57",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Maybach/62",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Maybach/57",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Maybach/57S",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Maybach/62",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Maybach/57",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Maybach/62",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Maybach/57",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Maybach/62",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Maybach/57",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Maybach/62",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Maybach/57",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Maybach/62",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Maybach/Landaulet",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Maybach/57",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Maybach/62",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Maybach/Landaulet",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Maybach/57",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Maybach/62",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Maybach/Landaulet",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Maybach/57",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Maybach/62",
        destination: "/get-in-touch",
        permanent: true
      },
      {
        source: "/search-by-make/Maybach/Landaulet",
        destination: "/get-in-touch",
        permanent: true
      }
    ];
  },
  staticPageGenerationTimeout: 3000,
});
