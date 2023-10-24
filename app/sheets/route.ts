// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { JWT } from "google-auth-library";
import keyjson from "../../joandjulian-0761ab687054.json";
import { jwtClient } from "../lib/jwtClient";
import { loadSheet } from "../lib/loadSheet";

export const sheetTitle = "Invites";
export enum Constants {
  HASH = "HASH",
}

export async function GET(req: Request) {
  const serviceAccountAuth = jwtClient();
  try {
    const doc = await loadSheet(serviceAccountAuth);
    const { sheetCount, spreadsheetId, sheetsByTitle } = doc;
    return Response.json({
      sheetCount,
      spreadsheetId,
      sheetsByTitle: await Promise.all(
        Object.keys(sheetsByTitle)
          .filter((key) => sheetsByTitle[key].title === sheetTitle)
          .map(async (key) => {
            const sheet = sheetsByTitle[key];
            await sheet.loadHeaderRow();
            const { rowCount, columnCount, title, headerValues, cellStats } =
              sheet;
            const rows = await sheet.getRows();
            const cellByHeader = {};

            // rows.forEach(row => {
            //   headerValues.forEach(
            //     (header) => ( row.toObject())
            //   );
            // })
            return {
              rowCount,
              columnCount,
              title,
              headerValues,
              cellStats,
              rows: rows.map((row) => row.toObject()),
            };
          })
      ),
    });
  } catch (err: any) {
    console.error(err);
  }

  return Response.json({ title: "error" });
}


