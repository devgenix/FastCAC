import { google } from "googleapis";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";

/**
 * Reusable indexing service that can be used by both 
 * local scripts and Netlify functions.
 */
export async function notifyGoogle(url, type = "URL_UPDATED") {
  let credentials;
  
  if (process.env.GOOGLE_INDEXING_KEY) {
    try {
      credentials = JSON.parse(process.env.GOOGLE_INDEXING_KEY);
    } catch (e) {
      throw new Error("Invalid GOOGLE_INDEXING_KEY environment variable. Must be a JSON string.");
    }
  } else {
    const keyPath = path.join(process.cwd(), "google-indexing-key.json");
    
    if (!fs.existsSync(keyPath)) {
      throw new Error("Google Indexing permissions not found. Set GOOGLE_INDEXING_KEY env variable or add google-indexing-key.json locally.");
    }
    credentials = JSON.parse(fs.readFileSync(keyPath, "utf8"));
  }

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/indexing"],
  });

  const authClient = await auth.getClient();
  const indexing = google.indexing({
    version: "v3",
    auth: authClient,
  });

  const res = await indexing.urlNotifications.publish({
    requestBody: {
      url: url,
      type: type,
    },
  });

  return res.status;
}
