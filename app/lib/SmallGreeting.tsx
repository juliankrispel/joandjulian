import { isMale } from "./isMale";
import { lang } from "./lang";
import { Row } from "./types";

export const SmallGreeting = (props: {
  row: Row
  lang: "de-AT" | "en-GB";
}) => {
  let names = props.row.NAMES.split(",").map((n) => n.trim());
  const isSingle = names.length === 1;
  names = names.map((name, index) => {
    if (props.lang === "de-AT" || index === 0) {
      let dear = lang(isMale(name) ? "dearMale" : "dear", props.lang);
      if (index > 0) {
        dear = dear.toLowerCase() as any;
      }
      return `${dear} ${name}`;
    }
    return name;
  });

  const lastName = names.pop();

  return isSingle ? (
    <div className="border-b pb-8 whitespace-break-spaces">
      {lastName}, {lang("inviteMessageSingle", props.lang)}
      {props.row.CODE}
      <br />
      <br />
      {lang("weAreTryingSingle", props.lang)} {lang("withLove", props.lang)}
    </div>
  ) : (
    <div className="border-b pb-8 whitespace-break-spaces">
      {names.map((name, index) => {
        return (
          <>
            {name}
            {index === names.length - 1 ? " " : <>{", "}</>}
          </>
        );
      })}
      {lang("and", props.lang)} {lastName},{" "}
      {lang("inviteMessagePlural", props.lang)}
      {props.row.CODE}
      <br />
      <br />
      {lang("weAreTryingPlural", props.lang)}
      <br />
      <br />
      {lang("withLove", props.lang)}
    </div>
  );
};
