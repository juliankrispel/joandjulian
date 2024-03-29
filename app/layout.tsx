import Image from "next/image";
import "./globals.css";
export const metadata = {
  title: "Jo & Julian",
  description: "The Wedding of Miss Joanna Grace Stuiver and Mr Julian Krispel",
};
import { Playfair_Display, Great_Vibes } from "@next/font/google";
import { lang } from "./lib/lang";

const bf = Playfair_Display({ subsets: ["cyrillic"] });
const gv = Great_Vibes({ weight: "400", subsets: ["latin"] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full w-full">
      <meta name="robots" content="noindex"></meta>
      <body className="h-full p-8 w-full">
        <div
          className={`${bf.className} min-h-full font-medium text-slate-800 text-xl max-w-3xl leading-relaxed m-auto relative flex md:pt-20 pb-28 justify-center w-full flex-col items-center md:space-y-12 max-md:space-y-8`}
        >
          <div className="w-full">
            <Image
              src="/j+j.png"
              alt="Jo and Julian Logo"
              className="origin-left opacity-75 -rotate-12 scale-50 transition hover:scale-75 hover:-rotate-2 hover:opacity-100"
              width={250}
              height={50}
            />
            <h1 className={`${gv.className} text-4xl`}>
              The wedding of
              <br /> Miss Joanna Grace Stuiver and
              <br /> Mr Julian Krispel
            </h1>
          </div>

          {children}
        </div>
      </body>
    </html>
  );
}
