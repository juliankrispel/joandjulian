import { sheetTitle } from "../api/[token]/route";
import { Constants } from "../api/[token]/Constants";

import { generateSlug } from "random-word-slugs";
import { jwtClient } from "./jwtClient";
import { Faker, en } from "@faker-js/faker";
import { loadSheet } from "./loadSheet";
const f = new Faker({
  locale: [en],
});


// console.log({ random: f.color.human() });

export async function seedHashes() {
  const serviceAccountAuth = jwtClient();
  try {
    const doc = await loadSheet(serviceAccountAuth);
    const sheet = doc.sheetsByTitle[sheetTitle];
    const rows = await sheet.getRows();
    for (const row of rows) {
      const hash = row.get(Constants.CODE);
      if (!hash) {
        row.set(Constants.CODE, f.lorem.words(1));
        await row.save();
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
