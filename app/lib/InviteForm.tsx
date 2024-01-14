"use client";
import { useState } from "react";
import { Item, lang } from "./lang";
import { Row } from "./types";

export function InviteForm(props: {
  lang: keyof Item;
  row: Row;
}) {
  const [answer, setAnswer] = useState(props.row.ANSWER || '');
  console.log({ props, answer });
  return (
    <fieldset className="space-y-4 py-8">
      <h3 className="text-sm">{lang("answer", props.lang)}</h3>
      <div className="flex space-x-8 text-2xl flex-row items-center">
        <label
          className={
            "cursor-pointer border border-slate-300 px-4 py-2 hover:border-slate-800 " +
            (answer === "yes" ? "bg-slate-800 text-white border-slate-800" : "")
          }
        >
          <input
            type="radio"
            name="answer"
            className={`hidden ${answer ? "checked" : ""}`}
            value="yes"
            defaultChecked={answer === "yes"}
            onChange={() => {
              setAnswer("yes");
            }}
          />
          {lang("yes", props.lang)}
        </label>

        <label
          className={
            "cursor-pointer border border-slate-300 px-4 py-2 hover:border-slate-800 " +
            (answer === "no" ? "bg-slate-800 text-white border-slate-800" : "")
          }
        >
          <input
            type="radio"
            id="no"
            className="hidden"
            name="answer"
            value="no"
            defaultChecked={answer === "no"}
            onChange={() => {
              setAnswer("no");
            }}
          />
          {lang("no", props.lang)}
        </label>
      </div>

      {answer === "yes" && (
        <>
          <div className="space-y-8 pt-16">
            <p className="text-2xl">{lang("wonderful", props.lang)}</p>
            <textarea
              name="dietaryRequirements"
              placeholder={lang("dietaryRequirements", props.lang)}
              className="border border-slate-400 p-2 w-full"
              defaultValue={props.row.DIETARY_REQUIREMENTS}
            />
            <textarea
              className="border border-slate-400 p-2 w-full"
              name="allergies"
              placeholder={lang("allergies", props.lang)}
              defaultValue={props.row.ALLERGIES}
            />
          </div>
          <p className="text-sm">{lang("yourMessage", props.lang)}</p>
        </>
      )}
      {answer === "no" && <p>{lang("thatsAShame", props.lang)}</p>}

      {answer != "" && (
        <>
          <textarea
            name="message"
            className="border border-slate-400 p-2 w-full"
            defaultValue={props.row.MESSAGE}
            placeholder={lang("nachricht", props.lang)}
          ></textarea>
          <button className="bg-slate-800 text-white px-4 py-2 ">
            {lang("submitAnswer", props.lang)}
          </button>
        </>
      )}
    </fieldset>
  );
}
