/** @type {import('next').NextConfig} */
const nextConfig = {
  // Server mode for Nest (ToolHub Next.js Nest apps)
  // Do NOT use output:export here - Nest expects server
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: false },
  // Ensure 3-day runtime friendly: keep-alive
  experimental: {
    // none
  }
};
export default nextConfig;
