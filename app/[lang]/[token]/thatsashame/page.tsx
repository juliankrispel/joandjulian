import { notFound, redirect } from "next/navigation";
import { Item, lang } from "../../../lib/lang";
import { Row } from "../../../lib/types";
import Image from "next/image";
import { Greeting } from "../../../lib/Greeting";
import { ScrollTop } from "../../../lib/ScrollTop";
import { Great_Vibes } from "@next/font/google";
const gv = Great_Vibes({ weight: "400", subsets: ["latin"] });

export default async function Info({
  params,
}: {
  params: { lang: keyof Item; token: string };
}) {
  return (
    <div className="space-y-8">
      <p>{lang("sorryToMissYou", params.lang)}</p>

      <p>
        {lang("changeYourAnswer", params.lang)}
        <a
          href={`/${params.lang}/${params.token}?edit=true`}
          className="underline"
        >
          {lang("edit", params.lang)}
        </a>
      </p>
    </div>
  );
}
