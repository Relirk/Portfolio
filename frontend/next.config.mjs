/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // sem essa merda as imagens não aparecem em prod
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
