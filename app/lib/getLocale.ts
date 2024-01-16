import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { NextRequest } from 'next/server';
import { locales, defaultLocale } from '../../middleware';

// Get the preferred locale, similar to the above or using a library
export function getLocale(request: NextRequest) {
  request.headers.get("accept-language");
  const languages = new Negotiator({
    headers: {
      "accept-language": request.headers.get("accept-language")?.toString(),
    },
  }).languages();

  if (languages.some((l) => l.includes("de"))) return "de-AT";
  return "en-GB";
}
