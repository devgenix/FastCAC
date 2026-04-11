import { BLOG_POSTS_DATA } from "../../src/lib/blog-data.mjs";

const BASE_URL = "https://fastcac.com";

const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
const AIRTABLE_TABLE_ID = process.env.AIRTABLE_TABLE_ID;
const AIRTABLE_PAT = process.env.AIRTABLE_PAT;

/**
 * Normalizes a string into a URL-friendly slug.
 * Matches logic in src/lib/slug-utils.ts
 */
function slugify(text) {
  if (!text) return "";
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

async function fetchAirtableNames() {
  let allRecords = [];
  let offset = undefined;
  
  try {
    do {
      // Only fetch records where Status is 'Available' to ensure sitemap matches visible pages
      const filterByFormula = encodeURIComponent("{Status} = 'Available'");
      const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}?filterByFormula=${filterByFormula}${offset ? `&offset=${offset}` : ""}`;
      
      const res = await fetch(url, {
        headers: { Authorization: `Bearer ${AIRTABLE_PAT}` },
      });
      
      if (!res.ok) {
        console.warn(`Airtable fetch failed with status: ${res.status}`);
        break;
      }
      
      const data = await res.json();
      allRecords = [...allRecords, ...(data.records || [])];
      offset = data.offset;
    } while (offset);
    
    console.log(`Discovered ${allRecords.length} available business names from Airtable.`);
    return allRecords;
  } catch (err) {
    console.warn("Failed to fetch internal airtable records for discovery:", err);
    return [];
  }
}

/**
 * Dynamically discovers all application URLs.
 */
export async function getAppUrls() {
  // 1. Static Pages
  const staticUrls = [
    { url: BASE_URL, changeFrequency: "daily", priority: 1, lastModified: new Date() },
    { url: `${BASE_URL}/blog`, changeFrequency: "daily", priority: 0.9, lastModified: new Date() },
    { url: `${BASE_URL}/names`, changeFrequency: "daily", priority: 0.9, lastModified: new Date() },
    { url: `${BASE_URL}/privacy`, changeFrequency: "monthly", priority: 0.3, lastModified: new Date() },
    { url: `${BASE_URL}/terms`, changeFrequency: "monthly", priority: 0.3, lastModified: new Date() },
  ];

  // 2. Blog Posts
  const blogUrls = BLOG_POSTS_DATA.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // 3. Business Names from Airtable
  const airtableRecords = await fetchAirtableNames();
  const nameUrls = airtableRecords.map((item) => {
    const fields = item.fields || {};
    const name = fields["Name"] || "";
    // Favor explicit slug, fallback to generated one
    const slug = (fields["Slug"] || slugify(name)).toLowerCase().trim();
    const lastModified = fields["Last Modified"] || item.createdTime;
    
    return {
      url: `${BASE_URL}/names/${slug}`,
      lastModified: new Date(lastModified),
      changeFrequency: "weekly",
      priority: 0.7,
    };
  }).filter((i) => i.url && !i.url.endsWith("/names/")); // Ensure valid URL

  return [...staticUrls, ...blogUrls, ...nameUrls];
}
