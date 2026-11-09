import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "i9BASE · Sua base de tecnologia e inovação",
    short_name: "i9BASE",
    description:
      "Sites, sistemas, automação e atendimento com IA para negócios locais.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f6fb",
    theme_color: "#0b0f14",
    icons: [
      { src: "/icon.png", sizes: "any", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
