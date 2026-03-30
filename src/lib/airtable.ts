export const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
export const AIRTABLE_TABLE_ID = process.env.AIRTABLE_TABLE_ID;
export const AIRTABLE_PAT = process.env.AIRTABLE_PAT;

/**
 * Helper to fetch records from Airtable.
 * Throws an error on failure.
 */
export async function fetchAirtableRecords(filterByFormula?: string) {
  const url = new URL(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}`);
  
  if (filterByFormula) {
    url.searchParams.append("filterByFormula", filterByFormula);
  }

  // Next.js caching optimization: Keep data fresh but cache appropriately
  // If we want real-time dynamic, we can use `revalidate: 3600` or `no-store`
  const res = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${AIRTABLE_PAT}`,
    },
    next: { revalidate: 3600 }, // Cache for 1 hour to prevent rate limits
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error("Airtable fetch failed:", res.status, errorText);
    throw new Error(`Failed to fetch from Airtable: ${res.statusText}`);
  }

  const data = await res.json();
  return data.records || [];
}
