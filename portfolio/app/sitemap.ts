import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { systems } from "@/lib/systems";
import { articles } from "@/lib/thinking";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/work", "/thinking", "/about", "/resume", "/contact"];
  const now = new Date();

  return [
    ...staticPaths.map((p) => ({
      url: `${site.url}${p}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: p === "" ? 1 : 0.8,
    })),
    ...systems.map((s) => ({
      url: `${site.url}/work/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...articles.map((a) => ({
      url: `${site.url}/thinking/${a.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
