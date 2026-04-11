/**
 * Centralized utility for consistent slug generation across the application.
 */

/**
 * Generates a URL-friendly slug from a string (typically a business name).
 * @param text The string to slugify
 * @returns A normalized, URL-safe slug
 */
export function slugify(text: string): string {
  if (!text) return "";
  
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")           // Replace spaces with -
    .replace(/[^\w-]+/g, "")         // Remove all non-word chars except -
    .replace(/--+/g, "-")            // Replace multiple - with single -
    .replace(/^-+/, "")              // Trim - from start of text
    .replace(/-+$/, "");             // Trim - from end of text
}

/**
 * Resolves the slug for a business name record, favoring the explicit 'Slug' field.
 */
export function getBusinessSlug(fields: { Name?: string; Slug?: string }): string {
  if (fields.Slug) return fields.Slug.toLowerCase().trim();
  return slugify(fields.Name || "");
}
