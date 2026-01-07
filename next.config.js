/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // Add this to handle API calls to your backend
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination:
          process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
