import { redirect } from "next/navigation";
import { seedHashes } from "../lib/seedHashes";
import { getSheet } from "../lib/getSheet";
import { updateSheet } from "../lib/updateSheet";
import { s3 } from "../lib/s3";
import { s3GetSheet } from "../lib/s3GetSheet";
import { s3UpdateSheet } from "../lib/s3UpdateSheet";

console.log({
  id: process.env.AWS_ACCESS_KEY_ID,
  secret: process.env.AWS_SECRET_ACCESS_KEY,
});

export default function Home() {
  if (process.env.NODE_ENV !== "development") {
    redirect("/");
  }
  async function setupCodes() {
    "use server";
    await seedHashes();
  }

  async function sheetsToS3() {
    "use server";
    try {
      const sheet = await getSheet();
      await s3UpdateSheet(sheet);
    } catch (e) {
      console.error(e);
    }
  }

  async function s3ToSheets() {
    "use server";
    try {
      const sheet = await s3GetSheet()
      await updateSheet(sheet);
    } catch (e) {
      console.error(e);
    }
  }


  return (
    <div className="flex space-x-4 w-full justify-start">
      <form action={setupCodes}>
        <button className="p-8 bg-stone-800 text-white px-4 py-3 ">
          Seed codes
        </button>
      </form>
      <form action={sheetsToS3}>
        <button className="p-8 bg-stone-800 text-white px-4 py-3 ">
          Sheets to s3
        </button>
      </form>
      <form action={s3ToSheets}>
        <button className="p-8 bg-stone-800 text-white px-4 py-3 ">
          s3 to sheets
        </button>
      </form>
    </div>
  );
}
