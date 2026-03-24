const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "vsbyzbqvu1tc1es5.public.blob.vercel-storage.com" },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
