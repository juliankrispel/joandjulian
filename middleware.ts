import { NextRequest, NextResponse } from 'next/server'
import { getLocale } from './app/lib/getLocale';
 
export const locales = ["en-GB", "de-AT"];
export const defaultLocale = 'en-GB'

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some((locale) =>
    pathname.startsWith(`/${locale}`)
  );

  const accept = request.headers.get("accept")?.toString();

  if (
    !pathname.endsWith("seed") &&
    !pathnameHasLocale &&
    accept?.includes("text/html")
  ) {
    const locale = getLocale(request);
    const _u = request.url.toString();
    const p = `${locale}${pathname}`;
    const url = new URL(p, _u);
    return Response.redirect(url);
  }
}
