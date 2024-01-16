import { redirect } from "next/navigation";
import { Item, lang } from "../lib/lang";

export default function Home({
  params,
  searchParams,
}: {
  params: { lang: keyof Item; token: string };
  searchParams: { edit: string };
}) {

  const redirectToInvite = async (formData: FormData) => {
    "use server"
    /**
     * redirect to /code
     */
    const code = formData.get("code");
    return redirect(`/${params.lang}/${code}`);
  }

  return (
    <div className="w-full space-y-4">
      <h2>{lang("home", params.lang)}</h2>
      <p>{lang("ifYouHaveAnInvite", params.lang)}</p>
      <form action={redirectToInvite} className="space-y-4">
        <input
          type="text"
          className="border border-slate-400 p-2 w-full"
          name="code"
          placeholder={lang("yourCode", params.lang)}
        />
        <button type="submit" className="bg-slate-800 text-white px-4 py-2">
          {lang("submit", params.lang)}
        </button>
      </form>

      <p>{lang("ifYouDontHaveAnInvite", params.lang)}</p>
    </div>
  );
}
