import { notifyGoogle as indexingImpl } from "../../scripts/lib/indexing.mjs";

/**
 * Reusable indexing service adaptor for Next.js.
 */
export async function notifyGoogle(url: string, type: "URL_UPDATED" | "URL_DELETED" = "URL_UPDATED") {
  return await indexingImpl(url, type);
}
