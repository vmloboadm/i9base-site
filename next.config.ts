import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Teto de variantes: nada de w=3840 em thumbnails. As fontes já são
    // limitadas a 1600–2000 px no pipeline de otimização (ver docs/PENDENCIAS.md).
    deviceSizes: [320, 480, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 192, 256, 384],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
