/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.music.126.net",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "**.music.126.net",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
