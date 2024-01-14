// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getSheetRow } from "../../lib/getSheetRow";
import { NextRequest } from "next/server";
    import { revalidateTag } from 'next/cache';

export const sheetTitle = "Invites";
export enum Constants {
  HASH = "HASH",
}

// export const runtime = 'edge'

export async function GET(
  req: Request,
  { params: { token } }: { params: { token: string } }
) {
  try {
    const row = await getSheetRow(token)
    if (!row) {
      throw new Error('Could not find row')
    }
    return Response.json(row.toObject());
  } catch (err: any) {
    console.error(err.message);
  }

  return Response.json(null);
}

const update = async (
  req: NextRequest,
  { params: { token } }: { params: { token: string } }
) => {
  try {
    const body: {
      answer: string;
      message: string;
      allergies: string;
      dietaryRequirements: string;
      plusOne: string;
    } = await req.json();
    const row = await getSheetRow(token);
    if (!row) {
      throw new Error("Could not find row");
    }
    row.set("ANSWER", body.answer);
    row.set("MESSAGE", body.message);
    row.set("PLUS_ONE", body.plusOne);
    row.set("DIETARY_REQUIREMENTS", body.dietaryRequirements);
    row.set("ALLERGIES", body.allergies);
    revalidateTag("token");
    await row.save();
    return Response.json(body);
  } catch (err: any) {
    console.error(err.message);
  }
};

export async function POST(
  req: NextRequest,
  { params: { token } }: { params: { token: string } }
) {
  update(req, { params: { token } });

  return Response.json(null);
}
