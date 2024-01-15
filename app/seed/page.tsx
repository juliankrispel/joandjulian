import { redirect } from "next/navigation";
import { seedHashes } from "../lib/actions";

export default function Home() {
  console.log(process.env.NODE_ENV);
  if (process.env.NODE_ENV !== "development") {
    redirect("/");
  }
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
