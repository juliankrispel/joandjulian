import { sheetTitle } from "../api/[token]/route";
import { Constants } from "./Constants";
import { jwtClient } from "./jwtClient";
import { loadSheet } from "./loadSheet";
import { Row } from "./types";

export async function updateSheet(rows: Row[]) {
  const serviceAccountAuth = jwtClient();
  const doc = await loadSheet(serviceAccountAuth);
  const { sheetsByTitle } = doc;
  const sheetKey = Object.keys(sheetsByTitle).find(
    (key) => sheetsByTitle[key].title === sheetTitle
  );
  if (!sheetKey) {
    throw new Error(`Could not find sheet with title ${sheetTitle}`);
  }
  const sheet = sheetsByTitle[sheetKey];
  await sheet.loadHeaderRow();
  const sheetRows = await sheet.getRows();
  await Promise.all(
    rows.map(async (_row) => {
      const row = _row as any;
      const sheetRow = sheetRows.find(
        (r) => r.get(Constants.NAMES) === row[Constants.NAMES]
      );

      if (sheetRow) {
        let changed = false;
        Object.keys(row)
          .filter((k) => k !== Constants.CODE)
          .forEach((key) => {
            if (sheetRow.get(key) !== row[key]) {
              changed = true;
              sheetRow.set(key, row[key]);
            }
          });
        if (changed) {
          await sheetRow.save();
        }
      }
    })
  );
  console.log("saved");
}