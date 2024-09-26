/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboard/seasons",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
