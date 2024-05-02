/** @type {import('next').NextConfig} */
const nextConfig = {};

export const images = {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'portfolio-project-storage.s3.us-west-1.amazonaws.com',
      port: '',
    },
  ],
};
