import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const info = await fetch("http://localhost:3000/sheets");
  console.log(await info.json());
  return (
    <>
      <h1>Welcome</h1>
      <pre>{JSON.stringify(info)}</pre>
    </>
  );
}
