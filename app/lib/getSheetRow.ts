import { sheetTitle } from "../api/[token]/route";
import { Constants } from "./Constants";
import { jwtClient } from "./jwtClient";
import { loadSheet } from "./loadSheet";

export async function getSheetRow(token: string) {
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
  const rows = await sheet.getRows();
  const row = rows.find((r) => {
    return r.get(Constants.CODE) === token;
  });
  return row;
}