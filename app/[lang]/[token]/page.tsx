import Image from 'next/image'
import { Item, lang } from "../../lib/lang";
import { notFound, redirect } from "next/navigation";
import { Row } from '../../lib/types';
import { InviteForm } from '../../lib/InviteForm';
import { Greeting } from './Greeting';

export default async function Home({
  params,
  searchParams,
}: {
  params: { lang: keyof Item; token: string };
  searchParams: { edit: string };
}) {
  const info = await fetch(`${process.env.BASE_URL}/api/${params.token}`, {
    next: { tags: ["token"] },
  });
  const json: null | Row = await info.json();

  if (!json) {
    return notFound();
  }

  if (
    !(searchParams?.edit && searchParams.edit === "true") &&
    ["yes"].includes(json.ANSWER)
  ) {
    return redirect(`/${params.lang}/${params.token}/info`);
  }

  const rsvp = async (formData: FormData) => {
    "use server";
    console.log("rsvp");
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
    console.log("hello");
    return redirect(`/${params.lang}/${params.token}/info`);
  };

  const isSingle = json.NAMES.split(",").length === 1;

  const inviteText = isSingle
    ? lang("inviteSingular", params.lang)
    : lang("invitePlural", params.lang);

  return (
    <>
      <form className={`w-full`} action={rsvp}>
        <h1
          className={`max-md:text-4xl md:text-6xl w-full block leading-tight`}
        >
          <Greeting lang={params.lang} names={json.NAMES.split(",")} />
        </h1>

        <div className="pt-10 block space-y-2">
          <p>{inviteText}</p>
          <p className="max-md:text-2xl md:text-3xl leading-relaxed">
            <strong>{lang("date", params.lang)}</strong>{" "}
            {lang("timeAndLocation", params.lang)}
          </p>
          <p>{lang("withReception", params.lang)}</p>
          <p className="pb-6">{lang("rsvp", params.lang)}</p>

          <InviteForm row={json} lang={params.lang} />
          <div className="w-full align-center justify-center items-center flex max-md:pt-10 md:py-12 ">
            <Image
              src="/landscape1.png"
              alt="Ashton Memorial"
              width={350}
              height={50}
            />
          </div>
        </div>
      </form>
    </>
  );
}
