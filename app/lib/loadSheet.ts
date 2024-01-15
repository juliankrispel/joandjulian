import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

export const loadSheet = async (serviceAccountAuth: JWT) => {
  console.log('load sheet')
  const document = new GoogleSpreadsheet(
    process.env.GOOGLE_SHEET_ID as string,
    serviceAccountAuth
  );
  await document.loadInfo(true);
  return document;
};
