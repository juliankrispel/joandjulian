import Head from 'next/head'
import Image from 'next/image'
import { Abril_Fatface, Great_Vibes } from "next/font/google";
import { seedHashes } from '../../lib/actions';
import { Item, lang } from '../../lib/lang';
import { notFound, redirect } from 'next/navigation'
import { Row } from '../../lib/types';

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

  const rsvp = async (formData: FormData) => {
    "use server";
    const answer = formData.get("answer");
    const message = formData.get("message");
    const res = await fetch(`${process.env.BASE_URL}/api/${params.token}`, {
      method: "POST",
      body: JSON.stringify({ answer, message }),
    });
    const resJson = await res.json();
    console.log(resJson);
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
      <form className={`w-full text-center p-8 text-5xl`} action={rsvp}>
        <h1 className={`text-6xl`}>
          {lang("dear", params.lang)} {namesText}
        </h1>
        <p>{inviteText}</p>
        <p>
          <strong>{lang("date", params.lang)}</strong>
        </p>
        <p>{lang("timeAndLocation", params.lang)}</p>
        <p>{lang("rsvp", params.lang)}</p>
        <fieldset>
          <legend>{lang("answer", params.lang)}</legend>

          <div>
            <input
              type="radio"
              id="yes"
              name="answer"
              value="yes"
              defaultChecked
            />
            <label htmlFor="yes">{lang("yes", params.lang)}</label>
          </div>

          <div>
            <input type="radio" id="no" name="answer" value="no" />
            <label htmlFor="no">{lang("no", params.lang)}</label>
          </div>
        </fieldset>
        <textarea
          name="message"
          placeholder={lang("nachricht", params.lang)}
        ></textarea>
        <button>{lang("submitAnswer", params.lang)}</button>
      </form>
    </>
  );
}
