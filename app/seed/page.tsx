import { seedHashes } from "../lib/actions";

export default function Home () {
  async function myAction() {
    "use server";
    await seedHashes();
  }


  return (
    <form action={myAction}>
      <button className="p-8 bg-blue">Seed hashes</button>
    </form>
  );
}