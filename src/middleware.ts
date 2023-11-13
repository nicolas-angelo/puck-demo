import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  if (req.method === "GET") {
    // Rewrite routes that match "/[...page]/edit" to "/puck/[...page]"
    if (req.nextUrl.pathname.endsWith("/edit")) {
      const pathWithoutEdit = req.nextUrl.pathname.slice(
        0,
        req.nextUrl.pathname.length - 5
      );
      const pathWithEditPrefix = `/puck${pathWithoutEdit}`;
      //   const pathWithEditPrefix = `/puck${
      //     pathWithoutEdit === "/" ? "" : pathWithoutEdit
      //   }`;
      console.log({ pathWithEditPrefix });
      return NextResponse.rewrite(new URL(pathWithEditPrefix, req.url));
    }
  }

  return res;
}

export const config = {
  matcher: ["/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)"],
};
