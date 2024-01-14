import { NextRequest, NextResponse } from 'next/server'
import { getLocale } from './app/lib/getLocale';
 
export const locales = ["en-GB", "de-AT"];
export const defaultLocale = 'en-GB'

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname, host, basePath, hostname, protocol  } = request.nextUrl;
  const pathnameHasLocale = locales.some((locale) =>
    pathname.startsWith(`/${locale}/`)
  );

  const accept = request.headers.get("accept")?.toString();

  if (pathname === "/") {
    const locale = getLocale(request);
    const p = `${locale}`;
    const url = new URL(p, `${protocol}//${host}`);
    return Response.redirect(url);
  } else if (
    pathname !== "/" &&
    pathname !== "/en-GB" &&
    pathname !== "/de-AT" &&
    !pathname.endsWith("seed") &&
    !pathnameHasLocale &&
    accept?.includes("text/html")
  ) {
    const locale = getLocale(request);
    const _u = request.url.toString();
    const p = `${locale}${pathname}`;
    const url = new URL(p, `${protocol}//${host}`);
    console.log({ _u, p, url, host, basePath, hostname, locale, protocol });
    return Response.redirect(url);
  }
}
