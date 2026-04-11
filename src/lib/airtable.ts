export const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
export const AIRTABLE_TABLE_ID = process.env.AIRTABLE_TABLE_ID;
export const AIRTABLE_PAT = process.env.AIRTABLE_PAT;

/**
 * Helper to fetch records from Airtable.
 * Throws an error on failure.
 */
/**
 * Helper to fetch records from Airtable with pagination support.
 */
export async function fetchAirtableRecords(filterByFormula?: string) {
  let allRecords: any[] = [];
  let offset: string | undefined = undefined;

  do {
    const url = new URL(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}`);
    
    if (filterByFormula) {
      url.searchParams.append("filterByFormula", filterByFormula);
    }
    
    if (offset) {
      url.searchParams.append("offset", offset);
    }

    // Next.js caching optimization: Cache for 1 hour to prevent rate limits
    const res = await fetch(url.toString(), {
      headers: {
        Authorization: `Bearer ${AIRTABLE_PAT}`,
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Airtable fetch failed:", res.status, errorText);
      throw new Error(`Failed to fetch from Airtable: ${res.statusText}`);
    }

    const data = await res.json();
    allRecords = [...allRecords, ...(data.records || [])];
    offset = data.offset;
  } while (offset);

  return allRecords;
}
