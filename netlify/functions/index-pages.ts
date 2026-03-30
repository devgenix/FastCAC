import { getAppUrls } from "../../scripts/lib/discovery.mjs";
import { notifyGoogle } from "../../scripts/lib/indexing.mjs";

/**
 * Netlify Function: Trigger Google Indexing.
 * - Call without body to index ALL discovered dynamic URLs.
 * - Call with { "url": "..." } to index a specific URL (Webhook style).
 */
export const handler = async (event: any) => {
  try {
    let body;
    try {
      body = JSON.parse(event.body || "{}");
    } catch (e) {
      body = {};
    }

    // 1. Process specific URL if provided (Webhook mode)
    if (body.url) {
      console.log(`🚀 Webhook trigger: Indexing ${body.url}`);
      const status = await notifyGoogle(body.url);
      return {
        statusCode: status,
        body: JSON.stringify({ message: `Google notified for ${body.url}`, status }),
      };
    }

    // 2. Otherwise, discover all and index (Maintenance mode)
    console.log("🚀 Maintenance trigger: Discovering and indexing ALL URLs...");
    const urls = await getAppUrls();
    
    let successCount = 0;
    let failureCount = 0;

    for (const appUrl of urls) {
      try {
        const status = await notifyGoogle(appUrl.url);
        if (status === 200) successCount++;
        else failureCount++;
      } catch (err) {
        console.error(`❌ Indexing failed for ${appUrl.url}:`, (err as Error).message);
        failureCount++;
      }
      // Rate limiting
      await new Promise(r => setTimeout(r, 400));
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Bulk indexing task finished.",
        total: urls.length,
        success: successCount,
        failed: failureCount
      }),
    };

  } catch (error: any) {
    console.error("❌ Function failure:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
