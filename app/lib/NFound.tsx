"use client";
import { usePathname } from 'next/navigation';
import { lang } from './lang';


export const NFound = () => {
  const pathname = usePathname();
  const paths = pathname.split("/").filter((x) => x.trim().length > 0);
  const l = paths[0] as keyof typeof lang;
  return (
    <div className="w-full">
      <h2>{lang("notFoundHeader", l)}</h2>
      <p className="text-sm">{lang("notFoundText", l)}</p>
    </div>
  );
};
