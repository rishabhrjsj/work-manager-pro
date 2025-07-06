import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("loginToken")?.value;

  console.log("Middleware running on:", pathname);
  console.log("JWT_TOKEN =", process.env.JWT_TOKEN);

  // Allow unauthenticated access to login/signup and open APIs
  const publicPaths = ["/login", "/signup", "/api/login", "/api/users"];
  if (publicPaths.includes(pathname)) {
    return NextResponse.next();
  }

  // If token is missing
  if (!token) {
    if (pathname.startsWith("/api")) {
      return NextResponse.json(
        { message: "Access denied", success: false },
        { status: 401 }
      );
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // Token exists — verify
  try {
    await jwtVerify(token, new TextEncoder().encode(process.env.JWT_TOKEN));
    return NextResponse.next();
  } catch (err) {
    console.error("JWT verification failed:", err);
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: [
    "/add-task",
    "/show-task",
    "/add-user",
    "/dashboard/:path*",
    "/api/:path*", // protect APIs
  ],
};
