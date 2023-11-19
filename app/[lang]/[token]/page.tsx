import Head from 'next/head'
import Image from 'next/image'
import { Abril_Fatface, Great_Vibes } from "next/font/google";
import { seedHashes } from '../../lib/actions';
import { Item, lang } from '../../lib/lang';
import { notFound, redirect } from 'next/navigation'
import { Row } from '../../lib/types';
import { InviteForm } from '../../lib/InviteForm';

// const af = Abril_Fatface({ weight: "400", subsets: ["latin"] });
// const gv = Great_Vibes({ weight: "400", subsets: ["latin"] });

export default async function Home({
  params,
}: {
  params: { lang: keyof Item; token: string };
}) {
  const info = await fetch(`${process.env.BASE_URL}/api/${params.token}`);
  const json: null | Row = await info.json();

  if (!json) {
    return notFound();
  }

  if (["no", "yes"].includes(json.ANSWER)) {
    return redirect(`/${params.lang}/${params.token}/info`);
  }

  const rsvp = async (formData: FormData) => {
    "use server";
    const answer = formData.get("answer");
    const message = formData.get("message");
    const plusOne = formData.get("plusOne");
    const allergies = formData.get("allergies");
    const dietaryRequirements = formData.get("dietaryRequirements");
    await fetch(`${process.env.BASE_URL}/api/${params.token}`, {
      method: "POST",
      body: JSON.stringify({
        answer,
        message,
        plusOne,
        dietaryRequirements,
        allergies,
      }),
    });
  };

  const isSingle = json.NAMES.split(",").length === 1;
  const names = json.NAMES.split(',')
  const lastName = names.pop()
  const namesText =
    names.join(", ") + ` ${lang("and", params.lang)} ` + lastName;

  const inviteText = isSingle
    ? lang("inviteSingular", params.lang)
    : lang("invitePlural", params.lang);

  return (
    <>
      <form className={`w-full p-8`} action={rsvp}>
        <h1 className={`text-6xl`}>
          {lang("dear", params.lang)} {namesText}
        </h1>
        <p>{inviteText}</p>
        <p>
          <strong>{lang("date", params.lang)}</strong>
        </p>
        <p>{lang("timeAndLocation", params.lang)}</p>
        <p>{lang("rsvp", params.lang)}</p>
        <InviteForm
          row={json}
          lang={params.lang}
          allowPlusOne={names.length === 1}
        />
      </form>
    </>
  );
}
