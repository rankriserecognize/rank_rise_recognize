import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rankriserecognize.com";

  const routes = [
    "",
    "/services",
    "/pricing",
    "/about",
    "/contact",
    "/ai-visibility-audit",
    "/faq",
    "/results",
    "/blog",
    "/industries",
    "/privacy-policy",
    "/terms-of-service",
    "/refund-policy",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route === "/ai-visibility-audit" || route === "/pricing" ? 0.9 : 0.8,
  }));
}
