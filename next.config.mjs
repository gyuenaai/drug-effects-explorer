/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  trailingSlash: false,
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: false }
};
export default nextConfig;
