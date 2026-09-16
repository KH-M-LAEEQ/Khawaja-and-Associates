/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.fbr.gov.pk" },
      { protocol: "https", hostname: "download1.fbr.gov.pk" },
    ],
  },
};

module.exports = nextConfig;
