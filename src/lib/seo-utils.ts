import { getAppUrls as discoveryImpl } from "../../scripts/lib/discovery.mjs";

export interface AppUrl {
  url: string;
  lastModified?: Date;
  changeFrequency?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: number;
}

/**
 * Dynamically discovers all application URLs.
 * Adaptor for the core discovery logic.
 */
export async function getAppUrls(): Promise<AppUrl[]> {
  return await discoveryImpl() as AppUrl[];
}
