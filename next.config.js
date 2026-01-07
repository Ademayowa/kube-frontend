/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'job-boards.eu.greenhouse.io',
      },
      {
        protocol: 'https',
        hostname: 'jobs.ashbyhq.com',
      },
      {
        protocol: 'https',
        hostname: 'zendesk.wd1.myworkdayjobs.com',
      },
      {
        protocol: 'https',
        hostname: 'harfanglab-1666711819.teamtailor.com',
      },
    ],
  },
};
