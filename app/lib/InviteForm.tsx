"use client";
import { useState } from "react";
import { Item, lang } from "./lang";
import { Row } from "./types";

export function InviteForm(props: {
  lang: keyof Item;
  allowPlusOne?: boolean;
  row: Row;
}) {
  const [answer, setAnswer] = useState(props.row.ANSWER === "yes");
  console.log({ props });
  return (
    <fieldset>
      <legend>{lang("answer", props.lang)}</legend>

      <div className="flex space-x-8 py-8 text-5xl">
        <label className={"cursor-pointer " + (answer ? "underline" : "")}>
          <input
            type="radio"
            name="answer"
            className={`hidden ${answer ? "checked" : ""}`}
            value="yes"
            defaultChecked={props.row.ANSWER === "yes"}
            onChange={() => {
              setAnswer(true);
            }}
          />
          {lang("yes", props.lang)}
        </label>

        <label className={"cursor-pointer " + (!answer ? "underline" : "")}>
          <input
            type="radio"
            id="no"
            className="hidden"
            name="answer"
            value="no"
            defaultChecked={props.row.PLUS_ONE === "no"}
            onChange={() => {
              setAnswer(false);
            }}
          />
          {lang("no", props.lang)}
        </label>
      </div>

      {answer && (
        <div className="space-y-4">
          <div>
            <label>{lang("dietaryRequirements", props.lang)}</label>
            <textarea
              name="dietaryRequirements"
              defaultValue={props.row.DIETARY_REQUIREMENTS}
            />
          </div>
          <div className=" flex flex-col">
            <label>{lang("allergies", props.lang)}</label>
            <textarea
              className="block"
              name="allergies"
              defaultValue={props.row.ALLERGIES}
            />
          </div>
          {props.allowPlusOne && (
            <div>
              <label> {lang("plusOne", props.lang)}</label>
              <input
                type="text"
                name="plusOne"
                defaultValue={props.row.PLUS_ONE}
              />
            </div>
          )}
        </div>
      )}

      <textarea
        name="message"
        defaultValue={props.row.MESSAGE}
        placeholder={lang("nachricht", props.lang)}
      ></textarea>
      <button>{lang("submitAnswer", props.lang)}</button>
    </fieldset>
  );
}
