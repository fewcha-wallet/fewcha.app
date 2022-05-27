/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  exportPathMap: async function () {
    return {
      "/": { page: "/" },
      "/privacy": { page: "/privacy" },
      "/terms": { page: "/terms" },
    };
  },
};

module.exports = nextConfig;
