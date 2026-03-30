import { MetadataRoute } from "next";
import { getAppUrls } from "@/lib/seo-utils";

/**
 * Generates the sitemap dynamically using the shared URL discovery utility.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const urls = await getAppUrls();

  return urls.map((url) => ({
    url: url.url,
    lastModified: url.lastModified,
    changeFrequency: url.changeFrequency,
    priority: url.priority,
  }));
}
