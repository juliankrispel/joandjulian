import { redirect } from "next/navigation";
import { seedHashes } from "../lib/seedHashes";
import { getSheet } from "../lib/getSheet";
import { updateSheet } from "../lib/updateSheet";
import { s3GetSheet } from "../lib/s3GetSheet";
import { Faker, en } from "@faker-js/faker";
import { s3UpdateSheet } from "../lib/s3UpdateSheet";
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
  const totalCount = sheet
    .map((row) => row.NAMES.split(",").length)
    .reduce((a, b) => a + b, 0);

  const totalYes =
    sheet
      .filter((row) => row.ANSWER === "yes")
      .map((row) => row.NAMES.split(",").length)
      .reduce((a, b) => a + b, 0);

  const totalNo =
    sheet
      .filter((row) => row.ANSWER === "no")
      .map((row) => row.NAMES.split(",").length)
      .reduce((a, b) => a + b, 0);

  const totalMaybe = sheet
    .filter((row) => !row.ANSWER || row.ANSWER == null)
    .map((row) => {
      const l = row.NAMES.split(",").length
      console.log({ names: row.NAMES, l });
      return l
    })
    .reduce((a, b) => a + b, 0);

  const maybeNames = sheet
    .filter((row) => !row.ANSWER || row.ANSWER == null)
    .map((row) => row.NAMES);

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
      <div className="flex space-x-4 w-full justify-start pt-10 pb-40">
        <span className="bg-teal-200 px-4 py-2 rounded">
          Room at reception: 114
        </span>
        <span className="bg-stone-200 px-4 py-2 rounded">
          Invited: {totalCount}
        </span>
        <span className="bg-green-200 px-4 py-2 rounded">
          Total Yes: {totalYes}
        </span>
        <span className="bg-red-200 px-4 py-2 rounded">
          Total No: {totalNo}
        </span>
        <span className="bg-green-200 px-4 py-2 rounded">
          Spaces: {114 - (totalYes + totalMaybe)}
        </span>
        <span className="bg-yellow-200 px-4 py-2 rounded">
          Total Maybe: {totalMaybe}
        </span>
      </div>

      <div>
        <ul>
          {maybeNames.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </div>

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
        <details className=" space-y-4 pb-10">
          <summary className="cursor-pointer">German Invites</summary>
          <section className="px-4 py-2 space-y-4">
            {sheet.map((row) => (
              <div
                className="bg-stone-50 px-6 py-4 text-sm rounded"
                key={row.CODE}
              >
                <SmallGreeting lang="de-AT" row={row} />
              </div>
            ))}
          </section>
        </details>
        <details className=" space-y-4 pb-10">
          <summary className="cursor-pointer">English Invites</summary>
          <section className="space-y-4">
            {sheet.map((row) => (
              <div
                className="bg-stone-50 px-6 py-4 text-sm rounded"
                key={row.CODE}
              >
                <SmallGreeting lang="en-GB" row={row} />
              </div>
            ))}
          </section>
        </details>
      </div>
      <div></div>
    </div>
  );
}
