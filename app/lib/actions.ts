import { sheetTitle, Constants } from "../api/[token]/route";

import { generateSlug } from "random-word-slugs";
import { jwtClient } from "./jwtClient";
import { loadSheet } from "./loadSheet";


export async function seedHashes() {
  const serviceAccountAuth = jwtClient();
  try {
    const doc = await loadSheet(serviceAccountAuth);
    const sheet = doc.sheetsByTitle[sheetTitle];
    const rows = await sheet.getRows();
    for (const row of rows) {
      const hash = row.get(Constants.HASH);
      if (!hash) {
        row.set(Constants.HASH, generateSlug());
        row.save();
        console.log("updated hash");
      }
    }
    await sheet.saveUpdatedCells();
    /** Fill in hashes where need be */
    return Response.json({ ok: true });
  } catch (err: any) {
    console.error(err);
  }

  return Response.json({ title: "error" });
}
