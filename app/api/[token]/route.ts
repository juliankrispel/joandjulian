// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextRequest } from "next/server";
import { revalidateTag } from 'next/cache';
import { s3UpdateSheet } from "../../lib/s3UpdateSheet";
import { s3GetSheet } from "../../lib/s3GetSheet";
import { Constants } from "../../lib/Constants";

export const sheetTitle = "Invites";
// export const runtime = 'edge'

export async function GET(
  req: Request,
  { params: { token } }: { params: { token: string } }
) {
  try {
    const sheet = await s3GetSheet();
    const row = sheet.find((r: any) => r[Constants.CODE] === token);
    if (!row) {
      throw new Error("Could not find row");
    }
    return Response.json(row);
  } catch (err: any) {
    console.error(err.message);
  }

  return Response.json(null);
}

export async function POST(
  req: NextRequest,
  { params: { token } }: { params: { token: string } }
) {
  console.log("update", token);
  try {
    console.log("hello update");
    const currentSheet = await s3GetSheet();
    const body = await req.json()
    const updatedSheet = currentSheet.map((r: any) => {
      console.log({ r, body });
      return r[Constants.CODE] === token ? { ...r, ...body } : r;
    });
    await s3UpdateSheet(updatedSheet);
  } catch (err: any) {
    console.error(err.message);
  }

  return Response.json(null);
}
