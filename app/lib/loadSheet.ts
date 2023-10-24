import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

export const loadSheet = async (serviceAccountAuth: JWT) => {
  const document = new GoogleSpreadsheet(
    process.env.GOOGLE_SHEET_ID as string,
    serviceAccountAuth
  );

  await document.loadInfo(true);
  return document;
};
