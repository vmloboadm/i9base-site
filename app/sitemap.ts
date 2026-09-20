import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://i9base.com.br";
  return [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/convites`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
  ];
}
