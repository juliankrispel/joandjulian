import { notFound } from "next/navigation";
import { Item, lang } from "../../../lib/lang";
import { Row } from "../../../lib/types";

export default async function Info({
  params,
}: {
  params: { lang: keyof Item; token: string };
}) {
  const info = await fetch(`${process.env.BASE_URL}/api/${params.token}`);
  const json: null | Row = await info.json();

  if (!json) {
    return notFound();
  }

  const isSingle = json.NAMES.split(",").length === 1;
  const names = json.NAMES.split(",");
  const lastName = names.pop();
  const namesText =
    names.join(", ") + ` ${lang("and", params.lang)} ` + lastName;

  return (
    <div>
      <h1>
        {lang("hello", params.lang)} {namesText}
      </h1>
      <p>{lang(isSingle ? "acceptedSingle" : "acceptedSingle", params.lang)}</p>
      <p>{lang(isSingle ? "infoSingle" : "infoPlural", params.lang)}</p>
      <p>
        {lang(
          isSingle ? "yourAnswersSingle" : "yourAnswersPlural",
          params.lang
        )}
      </p>
      <ul>
        <li>
          {lang("yourDietaryRequirements", params.lang)} :
          {json.DIETARY_REQUIREMENTS}
        </li>
        <li>
          {lang("yourAllergies", params.lang)} :{json.ALLERGIES}
        </li>
        {isSingle && (
          <li>
            {lang("yourPlusOne", params.lang)} :{json.PLUS_ONE}
          </li>
        )}
      </ul>
      <a href={`/${params.lang}/${params.token}?edit=true`}>
        {lang("edit", params.lang)}
      </a>
    </div>
  );
}
