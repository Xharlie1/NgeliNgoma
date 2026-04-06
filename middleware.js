import { NextResponse } from "next/server";

const isMaintenanceMode = false; // 👈 turn OFF

export function middleware(request) {
  if (!isMaintenanceMode) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/Coming-Soon") ||
    pathname.startsWith("/_next")
  ) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/Coming-Soon";

  return NextResponse.redirect(url);
}
