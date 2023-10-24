import { sheetTitle, Constants } from "./sheets/route";

import { createHash } from "crypto";
import { jwtClient } from "./lib/jwtClient";
import { loadSheet } from "./lib/loadSheet";


export async function seedHashes() {
  const serviceAccountAuth = jwtClient();
  try {
    const doc = await loadSheet(serviceAccountAuth);
    const sheet = doc.sheetsByTitle[sheetTitle];
    const rows = await sheet.getRows();
    for (const row of rows) {
      const hash = row.get(Constants.HASH);
      if (!hash) {
        const hash = createHash("sha256", { encoding: "utf-8" });
        const hashDigest = hash.digest("base64url");
        row.set(Constants.HASH, hashDigest);
        row.save()
      }
    }
    await sheet.saveUpdatedCells();

    const { sheetCount, spreadsheetId, sheetsByTitle } = doc;
    /** Fill in hashes where need be */
    return Response.json({ ok: true });
  } catch (err: any) {
    console.error(err);
  }

  return Response.json({ title: "error" });
}
