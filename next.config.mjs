/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bfxnnopeufaqtissmilr.supabase.co',
      },
    ],
  },
  output: 'standalone',
};

export default nextConfig;
