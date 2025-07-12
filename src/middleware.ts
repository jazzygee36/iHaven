import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;

  // 🚫 Protect dashboard and my-learning routes
  if ((pathname.startsWith("/dashboard") || pathname.startsWith("/my-learning")) && !token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // ✅ Prevent logged-in users from going to login/home
  if ((pathname === "/" || pathname.startsWith("/students-portal")) && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/students-portal", "/dashboard/:path*", "/my-learning/:path*"],
};
