import { sheetTitle } from "../api/[token]/route";
import { Constants } from "../api/[token]/Constants";
import { jwtClient } from "./jwtClient";
import { loadSheet } from "./loadSheet";

export async function updateSheet(rows: { [key: string]: string }[]) {
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
    rows.map(async (row) => {
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
              console.log("set", key, row[key]);
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