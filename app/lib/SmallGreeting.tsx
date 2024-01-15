import { isMale } from "./isMale";
import { lang } from "./lang";

export const SmallGreeting = (props: { names: string[]; lang: "de-AT" | "en-GB"; }) => {
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
    <div>{lastName}</div>
  ) : (
    <div>
      {names.map((name, index) => {
        return (
          <>
            {name}
            {index === names.length - 1 ? " " : <>{", "}</>}
          </>
        );
      })}
      {lang("and", props.lang)} {lastName}
    </div>
  );
};
