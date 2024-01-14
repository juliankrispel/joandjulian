import { lang } from "../../lib/lang";
import { isMale } from '../../lib/isMale';

export const Greeting = (props: { names: string[]; lang: "de-AT" | "en-GB"; }) => {
  let names = props.names;
  const isSingle = props.names.length === 1;
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
    lastName
  ) : (
    <>
      {names.join(", ")}
      <br />
      <span>
        {lang("and", props.lang)} {lastName}
      </span>
    </>
  );
};
