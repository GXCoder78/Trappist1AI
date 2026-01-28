/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // Browsers often request this by default; we don't ship a .ico file.
      {
        source: "/favicon.ico",
        destination: "/placeholder-logo.png",
        permanent: false,
      },
    ]
  },
}

export default nextConfig
