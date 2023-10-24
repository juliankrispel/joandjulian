import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { seedHashes } from './actions';

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const info = await fetch("http://localhost:3000/sheets");
  const json = await info.json();
  async function myAction() {
    "use server";
    console.log("hello");
    await seedHashes();
    console.log("what");
    // ...
  }
  return (
    <form className="w-full" action={myAction}>
      <h1>Welcome</h1>
      <pre className="mw-full">{JSON.stringify(json, null, 2)}</pre>
      <button className="p-8 bg-blue">Init</button>
    </form>
  );
}
