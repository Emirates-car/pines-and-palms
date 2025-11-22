const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV !== 'production',
});

module.exports = withPWA({
  trailingSlash: false,
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
        source: "/search-by-make/Great%20Wall%20GWM/Wingle%205",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Great%20Wall%20GWM/Wingle%206",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Great%20Wall%20GWM/Wingle%207",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Great%20Wall%20GWM/POER",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Great%20Wall%20GWM/King%20Kong",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Zeekr/001",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Zeekr/007",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Zeekr/009",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/ZNA/Rich",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/ZNA/Yumsun",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/ZNA/Oting",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/GAC/GS8",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/GAC/GS3",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/GAC/GS4",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/GAC/EMKOO",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/GAC/EMPOW",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/GAC/GN6",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/GAC/GN8",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/GAC/GA8",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/GAC/GS5",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/GAC/GA6",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/GAC/GA4",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/GAC/M8",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/GAC/Aion%20Hyper",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/GAC/Aion%20Hyper%20GT",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Gs7/GS8",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Hongqi/H9",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Hongqi/E-HS9",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Hongqi/H5",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Hongqi/Ousado",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Hongqi/E-QM5",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/W%20Motors/Lykan%20HyperSport",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/W%20Motors/Fenyr%20HyperSport",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/JAC/J7",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/JAC/S3",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/JAC/JS4",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/JAC/J4",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/JAC/J5",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/JAC/J6",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/JAC/M4",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Jaecoo/J7",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Jetour/Dashing",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Jetour/T2",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Jetour/X70",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Jetour/X70%20Plus",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Jetour/X90",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Jetour/X90%20Plus",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Jetour/X70%20S",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Jetour/X70%20FL",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/TANK/300",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/TANK/500",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Soueast/DX8S",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Zarooq%20Motors/Sandracer%20500GT",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Changan/CS95",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Changan/UNI-K",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Changan/CS85",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Changan/CS35%20Plus",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Changan/CS75",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Changan/UNI-T",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Changan/Alsvin",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Changan/Eado",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Changan/UNI-V",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Changan/Alsvin%20V7",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Changan/Eado%20Plus",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Maxus/V80",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Maxus/T60",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Haval/H6",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Haval/H2",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Haval/H9",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Haval/H6%20GT",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Haval/Jolion",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Haval/Dargo",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Zotye/T700",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Sandstorm/Alreem",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Sandstorm/S24",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Chery/iCar%2003",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Chery/iCar",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Chery/Arrizo%203",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Chery/AIQAR",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Chery/Tiggo%207",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Chery/E5",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Chery/Arrizo%206%20pro",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Chery/Tiggo%203",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Chery/Arrizo%205E",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Chery/Tiggo%208",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Chery/Tiggo%205",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Chery/Tiggo%204",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Chery/Tiggo%20Comfort",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Chery/P5",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Geely/Monjaro",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Geely/Emgrand%20GS",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Geely/Emgrand%20X7",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Geely/Coolray",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Geely/Emgrand%207",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Geely/GC6",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Geely/Emgrand%20GT",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Geely/Geometry%20C",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/BAIC/X7",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/BAIC/BJ40",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/BAIC/BJ40%20C",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/BAIC/BJ80",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/BAIC/X55",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/BAIC/A115",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/BAIC/BJ40%20SE",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/BAIC/X35",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/BAIC/BJ40%20Plus",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/BAIC/F40",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/BAIC/U5",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Bestune/T77",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Bestune/B70",
        destination: "/get-in-touch",
        permanent: true,
      },
      {
        source: "/search-by-make/Bestune/T99",
        destination: "/get-in-touch",
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
      },
      {
        source: "/search-by-make/Toyota/4Runner/Ignition%20%26%20Electrical/Spark%20Plug-Toyota-4Runner-2002-2009-90919-01235-25",
        destination: "/search-by-make/Toyota/4Runner/Ignition%20%26%20Electrical/Spark%20Plug/Spark%20Plug-Toyota-4Runner-2002-2009-90919-01235-25",
        permanent: true
      },
      {
        source: "/search-by-make/Toyota/RAV4/Ignition%20&%20Electrical/Spark%20Plug-Toyota-RAV4-2001-2003-90919-01210-26",
        destination: "/search-by-make/Toyota/RAV4/Ignition%20&%20Electrical/Spark%20Plug/Spark%20Plug-Toyota-RAV4-2001-2003-90919-01210-26",
        permanent: true
      },
      {
        source: "/search-by-make/Renault/Symbol%202/Ignition%20&%20Electrical/Spark%20Plug-Renault-Symbol%202-2008-2012-7700500168-1",
        destination: "/search-by-make/Renault/Symbol%202/Ignition%20&%20Electrical/Spark%20Plug/Spark%20Plug-Renault-Symbol%202-2008-2012-7700500168-1",
        permanent: true
      },
      {
        source: "/search-by-make/Volkswagen/Touareg/Suspension%20&%20Steering%20Parts/Front%20Lower%20Arm%20Ball%20Joint-Volkswagen-Touareg-2019-2022-4M0407689C-22",
        destination: "/search-by-make/Volkswagen/Touareg/Suspension%20&%20Steering%20Parts/Suspension/Front%20Lower%20Arm%20Ball%20Joint-Volkswagen-Touareg-2019-2022-4M0407689C-22",
        permanent: true
      },
      {
        source: "/search-by-make/Honda/Accord/Body%20Kits/Grille%20Matte%20-%20Black-Honda-Accord-2008-2010-71121-TA0-A00-19",
        destination: "/search-by-make/Honda/Accord/Body%20Kits/Grille/Grille%20Matte%20-%20Black-Honda-Accord-2008-2010-71121-TA0-A00-19",
        permanent: true
      },
      {
        source: "/search-by-make/Honda/Accord/Body%20Kits/Grille-Honda-Accord-2008-2012-71120-TA5-A000-5",
        destination: "/search-by-make/Honda/Accord/Body%20Kits/Grille/Grille-Honda-Accord-2008-2012-71120-TA5-A000-5",
        permanent: true
      },
      {
        source: "/search-by-make/Renault/Duster/Wiring%20&%20Harness/Fuse%20Box%20set-Renault-Duster-2010-2015-243800196R-8",
        destination: "/search-by-make/Renault/Duster/Wiring%20&%20Harness/Fuse%20Box/Fuse%20Box%20set-Renault-Duster-2010-2015-243800196R-8",
        permanent: true
      },
      {
        source: "/search-by-make/Volkswagen/Touareg/Suspension%20%26%20Steering%20Parts/Front%20Lower%20Arm%20Ball%20Joint-Volkswagen-Touareg-2019-2022-4M0407689C-22",
        destination: "/search-by-make/Volkswagen/Touareg/Suspension%20%26%20Steering%20Parts/Suspension/Front%20Lower%20Arm%20Ball%20Joint-Volkswagen-Touareg-2019-2022-4M0407689C-22",
        permanent: true
      },
      {
        source: "/search-by-make/Audi/TT%20Quattro/Cooling%20System/Engine%20Water%20Pump%20with%20Gasket%20and%20Temp%20sensor-Audi-TT%20Quattro-2009-2015-06H121026DR-23",
        destination: "/search-by-make/Audi/TT%20Quattro/Cooling%20System/Water%20Pump/Engine%20Water%20Pump%20with%20Gasket%20and%20Temp%20sensor-Audi-TT%20Quattro-2009-2015-06H121026DR-23",
        permanent: true
      },
      {
        source: "/search-by-make/:make/:model/:category/:subcategory*",
        destination: "/get-in-touch",
        permanent: false,
      },
      {
        source: "/search-by-brands-in-uae/:make/:location*",
        destination: "/get-in-touch",
        permanent: false,
      },
      {
        source: "/search-by-make/:make/parts/:parts*",
        destination: "/get-in-touch",
        permanent: false,
      },
      {
        source: "/search-by-cities-in-uae/:city*",
        destination: "/get-in-touch",
        permanent: false,
      },

      {
        source: "/search-by-part-name/:parts*",
        destination: "/get-in-touch",
        permanent: false,
      },
    ];
  },
  staticPageGenerationTimeout: 3000,
});
