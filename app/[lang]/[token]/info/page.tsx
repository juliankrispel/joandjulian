import { notFound } from "next/navigation";
import { Item, lang } from "../../../lib/lang";
import { Row } from "../../../lib/types";
import Image from "next/image";
import { Greeting } from "../Greeting";

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

  const names = json.NAMES.split(",");
  const isSingle = names.length === 1;

  return (
    <div>
      <h1 className={`text-6xl w-full block`}>
        <Greeting lang={params.lang} names={names} />
      </h1>

      <div className="pt-10 block space-y-6">
        <p>
          {lang(isSingle ? "acceptedSingle" : "acceptedSingle", params.lang)}
        </p>
        <div className="flex items-center justify-center"></div>

        <h2 className="pt-5 text-3xl">{lang("theEvent", params.lang)}</h2>

        <div className="relative"></div>
        <p>
          {lang(
            isSingle ? "pleaseArriveAtSingular" : "pleaseArriveAtPlural",
            params.lang
          )}{" "}
          <a
            className="underline"
            target="_blank"
            href="https://maps.app.goo.gl/reHpAvHhzvbuGje29"
          >
            Arkholme Village Hall
          </a>
          , Kirkby Lonsdale Road, Arkholme LA6 1AT {lang("at12Pm", params.lang)}
          .
        </p>
        <div className="max-md:w-full max-md:flex max-md:justify-center md:float-right lg:-mr-32">
          <Image
            src="/memorial.png"
            className=""
            alt="Ashton Memorial"
            width={350}
            height={50}
          />
        </div>
        <p>
          {lang("coachesWillLeaveAt", params.lang)}
        </p>
        <p>{lang("ceremonyWillBegin", params.lang)}</p>
        <p>{lang("theCoachWillCollect", params.lang)}</p>
        <p>{lang("foodWillBeServed", params.lang)}</p>
        <p>{lang("receptionWillEnd", params.lang)}</p>

        {isSingle && (
          <>
            <h3 className="pt-4 text-3xl">{lang("plusOne", params.lang)}</h3>
            <p>{lang("noPlusOne", params.lang)}</p>
          </>
        )}

        <h3 className="pt-4 text-3xl">{lang("parkingHeading", params.lang)}</h3>
        <p>{lang("parking", params.lang)}</p>
        <div className="flex items-center justify-center w-full">
          <Image src="/landscape2.png" alt="Downs" height={100} width={250} />
        </div>
        <h3 className="pt-4 text-3xl">
          {lang("accomodationHeacding", params.lang)}
        </h3>
        <p>{lang("accomodationText", params.lang)}</p>

        <ul className="list-disc pl-5">
          <li>
            <a className="underline" href="https://www.wenningdale.co.uk/">
              Wenningdale Escapes
            </a>
          </li>
          <li>
            <a
              className="underline"
              href="https://www.riversidecaravanpark.co.uk/"
            >
              Riverside Caravan Park
            </a>{" "}
            {lang("forThoseWithCaravans", params.lang)}
          </li>
          <li>
            {lang("variousHolidayCottages", params.lang)}{" "}
            <a className="underline" href="https://www.airbnb.co.uk/">
              AirBnB
            </a>
            ,{" "}
            <a
              className="underline"
              href="https://www.sykescottages.co.uk/yorkshire-holiday-cottages.html"
            >
              Sykes Cottages
            </a>{" "}
            {lang("and", params.lang)}{" "}
            <a
              className="underline"
              href="https://www.yorkshireholidaycottages.co.uk/"
            >
              Yorkshire Holiday Cottages
            </a>
          </li>
        </ul>
        <p>{lang("theClosestTown", params.lang)}</p>
        <p>{lang("otherPlacesYouCanStay", params.lang)}</p>
        <div className="flex items-center justify-center w-full py-8">
          <Image
            src="/landscape_wide.png"
            alt="Südsteiermark"
            height={100}
            width={600}
          />
        </div>

        <h3 className="pt-4 text-3xl">Taxi</h3>
        <p>{lang("taxiToAndFrom", params.lang)}</p>
        <ul className="list-disc pl-5">
          <li>
            <a
              className="underline"
              href="https://www.facebook.com/benthamtaxis/"
            >
              Bentham Taxis
            </a>
            :{" "}
            <a className="underline" href="tel:07768 571407">
              07768 571407
            </a>
          </li>
          <li>
            <a className="underline" href="https://www.lancastertaxis.net/">
              Lancaster Taxi Service
            </a>
            :{" "}
            <a className="underline" href="tel:07770056789">
              07770 056789
            </a>
          </li>
          <li>
            Lawrence Taxi & Private Hire:{" "}
            <a href="tel:07720205099">07720 205099</a>
          </li>

          <li>
            Austwick Taxis: <a href="tel:01524251364">015242 51364</a>
          </li>
        </ul>

        <h3 className="pt-4 text-3xl">{lang("gettingHere", params.lang)}</h3>

        <p>{lang("ifYouAreDriving", params.lang)}</p>
        <p>{lang("ifYouComeFromAbroad", params.lang)}</p>

        <div className="max-md:w-full max-md:flex max-md:justify-center md:float-right lg:-mr-32">
          <Image
            src="/ribblehead.png"
            alt="Ashton Memorial"
            width={350}
            height={50}
          />
        </div>

        <p>{lang("ifYouComeByTrain", params.lang)}</p>

        <h3 className="pt-4 text-3xl">{lang("giftsHeading", params.lang)}</h3>
        <p>{lang("giftsText", params.lang)}</p>
        <h3 className="pt-4 text-3xl">{lang("answer", params.lang)}</h3>
        <div className="space-y-4">
          <p>
            {lang(
              isSingle ? "yourAnswersSingle" : "yourAnswersPlural",
              params.lang
            )}{" "}
            <a
              href={`/${params.lang}/${params.token}?edit=true`}
              className="underline"
            >
              {lang("edit", params.lang)}
            </a>
          </p>
          <ul className="space-y-2">
            <li>{lang("inviteAccepted", params.lang)}</li>
            <li>
              {lang("yourDietaryRequirements", params.lang)}:{" "}
              {json.DIETARY_REQUIREMENTS || "n/a"}
            </li>
            <li>
              {lang("yourAllergies", params.lang)}: {json.ALLERGIES || "n/a"}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
