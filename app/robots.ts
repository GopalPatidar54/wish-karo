import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://wish-karo.vercel.app";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          // Disallow crawling personal wish query parameter URLs to protect private links and prevent duplicate query indexation
          "/wish?*",
        ],
      },
      {
        // Google AdSense Crawler specifically
        userAgent: "Mediapartners-Google",
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

