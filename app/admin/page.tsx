import { redirect } from "next/navigation";
import { seedHashes } from "../lib/seedHashes";
import { getSheet } from "../lib/getSheet";
import { updateSheet } from "../lib/updateSheet";
import { s3 } from "../lib/s3";
import { s3GetSheet } from "../lib/s3GetSheet";
import { Faker, en } from "@faker-js/faker";
import { s3UpdateSheet } from "../lib/s3UpdateSheet";
import { Greeting } from "../lib/Greeting";
import { SmallGreeting } from "../lib/SmallGreeting";

export default async function Home() {
  if (process.env.NODE_ENV !== "development") {
    redirect("/");
  }
  async function setupCodes() {
    "use server";
    await seedHashes();
  }
  const f = new Faker({
    locale: [en],
  });

  const sheet = await s3GetSheet();

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
      const sheet = await s3GetSheet();
      await updateSheet(sheet);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className="w-full">
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
      <div className="flex flex-col space-y-8">
        <h1>German</h1>

        {sheet.map((row) => (
          <SmallGreeting lang="de-AT" row={row} key={row.CODE} />
        ))}
      </div>
      <div>
        <h1>English</h1>
        {sheet.map((row) => (
          <SmallGreeting lang="en-GB" row={row} key={row.CODE} />
        ))}
      </div>
    </div>
  );
}
