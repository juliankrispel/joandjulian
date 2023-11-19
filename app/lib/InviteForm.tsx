"use client";
import { useState } from "react";
import { Item, lang } from "./lang";
import { Row } from "./types";

export function InviteForm(props: {
  lang: keyof Item;
  allowPlusOne?: boolean;
  row: Row;
}) {
  const [show, setShow] = useState(props.row.ANSWER === "yes");
  console.log({ props });
  return (
    <fieldset>
      <legend>{lang("answer", props.lang)}</legend>

      <div id="radioyes">
        <input
          type="radio"
          id="yes"
          name="answer"
          value="yes"
          defaultChecked={props.row.ANSWER === "yes"}
          onChange={() => {
            setShow(true);
          }}
        />
        <label htmlFor="yes">{lang("yes", props.lang)}</label>
      </div>

      <div>
        <input
          type="radio"
          id="no"
          name="answer"
          value="no"
          defaultChecked={props.row.PLUS_ONE === "no"}
          onChange={() => {
            setShow(false);
          }}
        />
        <label htmlFor="no">{lang("no", props.lang)}</label>
      </div>

      {show && (
        <div>
          <div>
            <label>{lang("dietaryRequirements", props.lang)}</label>
            <textarea
              name="dietaryRequirements"
              defaultValue={props.row.DIETARY_REQUIREMENTS}
            />
          </div>
          <div>
            <label>{lang("allergies", props.lang)}</label>
            <textarea name="allergies" defaultValue={props.row.ALLERGIES} />
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
