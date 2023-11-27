"use client";
import { usePathname } from 'next/navigation';
import { lang } from './lang';


export const NFound = () => {
  const pathname = usePathname();
  const paths = pathname.split("/").filter((x) => x.trim().length > 0);
  const l = paths[0] as keyof typeof lang;
  return (
    <div className="text-center flex absolute left-0 h-full w-full items-center justify-center">
      <div className='max-w-3xl'>
        <h2>{lang("notFoundHeader", l)}</h2>
        <p>{lang("notFoundText", l)}</p>
      </div>
    </div>
  );
};
