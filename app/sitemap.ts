import type { MetadataRoute } from "next";

import { projects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/projects", "/about", "/experience", "/contact"];

  return [
    ...routes.map((route) => ({
      url: route || "/",
      lastModified: new Date(),
    })),
    ...projects.map((project) => ({
      url: `/projects/${project.slug}`,
      lastModified: new Date(),
    })),
  ];
}
