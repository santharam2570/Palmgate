import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1 },
    { path: "/about", priority: 0.7 },
    ...services.map((s) => ({ path: s.href, priority: 0.9 })),
    { path: "/industries", priority: 0.6 },
    { path: "/contact", priority: 0.8 },
  ];
  return pages.map((p) => ({ url: `${site.url}${p.path}`, changeFrequency: "monthly", priority: p.priority }));
}
