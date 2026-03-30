import { fetchAirtableRecords } from "./airtable";

export interface BusinessName {
  id: string;
  name: string;
  domain: string;
  category: string;
  tagline: string;
  isPremium?: boolean;
  description?: string;
  lastModified?: string;
  slug?: string;
  logo?: string;
}



/**
 * Fetches all matching business names from Airtable.
 * By default, only fetches available names if a Status column exists,
 * or all names otherwise.
 */
export async function getBusinessNames(): Promise<BusinessName[]> {
  try {
    // Only fetch records where Status is 'Available'.
    // Note: Any records with a blank status or 'Draft' will be excluded.
    const records = await fetchAirtableRecords("{Status} = 'Available'");
    
    // Map Airtable records to the BusinessName interface
    return records.map((record: any) => {
      const fields = record.fields || {};
      return {
        id: record.id,
        name: fields["Name"] || "",
        domain: fields["Domain"] || "",
        category: fields["Category"] || "Other",
        tagline: fields["Tagline"] || "",
        isPremium: Boolean(fields["Is Premium"]),
        description: fields["Description"] || "",
        lastModified: fields["Last Modified"] || record.createdTime,
        slug: fields["Slug"] || "",
        logo: fields["Logo"] && Array.isArray(fields["Logo"]) && fields["Logo"].length > 0 
          ? fields["Logo"][0].url 
          : undefined,
      };
    }).filter((item: BusinessName) => item.name); // basic validation
  } catch (error) {
    console.error("Failed to fetch business names", error);
    return [];
  }
}
