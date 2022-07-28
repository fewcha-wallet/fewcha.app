/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  exportPathMap: async function () {
    return {
      "/": { page: "/" },
      "/contributor": { page: "/contributor" },
      "/privacy": { page: "/privacy" },
      "/terms": { page: "/terms" },
    };
  },
};

module.exports = nextConfig;
