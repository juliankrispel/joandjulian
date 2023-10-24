import Head from 'next/head'
import Image from 'next/image'
import { Abril_Fatface, Great_Vibes } from "next/font/google";
import { seedHashes } from '../../actions';

const af = Abril_Fatface({ weight: "400", subsets: ["latin"] });
const gv = Great_Vibes({ weight: "400", subsets: ["latin"] });

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const info = await fetch("http://localhost:3000/sheets");
  const json = await info.json();
  async function myAction() {
    "use server";
    await seedHashes();
    // ...
  }
  return (
    <>
      <form
        className={`${gv.className} w-full text-center p-8 text-5xl`}
        action={myAction}
      >
        <h1 className={`text-6xl`}>
          Dear Anna <br /> and Franz Krispel
        </h1>
        <p>We would love to invite you to our wedding on the</p>
        <p>
          <strong>15th of August 2024</strong>
        </p>
        <p>
          at{" "}
          <strong>Ashton Memorial, Williamson Road, Lancaster LA1 3QA.</strong>
        </p>
      </form>

      <pre className="mw-full text-xs">{JSON.stringify(json, null, 2)}</pre>
      <button className="p-8 bg-blue">Init</button>
    </>
  );
}
