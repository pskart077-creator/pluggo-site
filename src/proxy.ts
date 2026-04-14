import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { NEWS_SESSION_COOKIE } from "@/lib/news/constants";

function hasSessionCookie(request: NextRequest) {
  const cookie = request.cookies.get(NEWS_SESSION_COOKIE)?.value;
  if (!cookie) {
    return false;
  }

  // Base64url style opaque token with minimum entropy.
  return /^[A-Za-z0-9_-]{40,}$/.test(cookie);
}

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const method = request.method.toUpperCase();

  const isAdminLoginApi = pathname === "/api/admin/auth/login" && method === "POST";

  if (pathname.startsWith("/admin/login")) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/admin")) {
    if (!hasSessionCookie(request)) {
      const loginUrl = new URL("/admin/login", request.url);
      loginUrl.searchParams.set("next", pathname);
      return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
  }

  if (pathname.startsWith("/api/admin")) {
    if (isAdminLoginApi) {
      const response = NextResponse.next();
      response.headers.set("Cache-Control", "no-store");
      return response;
    }

    if (!hasSessionCookie(request)) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "UNAUTHENTICATED",
            message: "Autenticação obrigatória.",
          },
        },
        {
          status: 401,
        },
      );
    }

    const response = NextResponse.next();
    response.headers.set("Cache-Control", "no-store");
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
