import { getAppUrls } from "./lib/discovery.mjs";
import { notifyGoogle } from "./lib/indexing.mjs";

/**
 * Main script to index all pages discovered dynamically.
 */
async function indexAllPages() {
  console.log("🔍 Starting dynamic URL discovery...");
  const appUrls = await getAppUrls();
  
  console.log(`🚀 Starting indexing for ${appUrls.length} URLs...`);

  for (const item of appUrls) {
    const url = item.url;
    try {
      const status = await notifyGoogle(url);
      if (status === 200) {
        console.log(`✅ Indexed: ${url}`);
      } else {
        console.error(`❌ Failed: ${url} (Status: ${status})`);
      }
    } catch (error) {
      console.error(`❌ Error notifying Google for ${url}:`, error.message);
    }
    // Rate limit friendly - 500ms between calls
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  console.log("🏁 Discovery-based indexing process complete!");
}

indexAllPages().catch(console.error);
