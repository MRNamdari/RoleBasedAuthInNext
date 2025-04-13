import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";
import { type Role } from "./types";

export const middleware = auth((req) => {
  // Check if user is not authorized/authenticated
  if (!req.auth) {
    // Redirect to LoginPage to authenticate
    return NextResponse.redirect(process.env.NEXTAUTH_URL + "login");
  }

  // Get user's role
  const { role } = req.auth.user;
  const pathname = req.nextUrl.pathname;

  // Check if requested path is an API endpoint
  if (pathname.startsWith("/api/")) {
    if (!isAuthorized(API_Access, pathname, role))
      return NextResponse.redirect(process.env.NEXTAUTH_URL + "unauthorized");
  } else {
    if (!isAuthorized(Route_Access, pathname, role))
      return NextResponse.redirect(process.env.NEXTAUTH_URL + "unauthorized");
  }
});

export const config = {
  matcher: ["/dashboard(.*)", "/api/getUserInfo", "/api/getAllUsersInfo"],
};

const API_Access = new Map<string, Role[]>([
  ["/api/getUserInfo", ["admin", "user"]],
  ["/api/getAllUsersInfo", ["admin"]],
]);

const Route_Access = new Map<string, Role[]>([
  ["/dashboard", ["admin", "user"]],
]);

/**
 * Grants/Denies access to restricted pathnames
 * @param map a Map of restricted endpoints
 * @param path pathname
 * @param role user's role
 * @returns
 */
function isAuthorized(
  map: Map<string, Role[]>,
  path: string,
  role: Role,
): boolean {
  // If the provided path is clean
  if (map.has(path)) return map.get(path)!.includes(role);

  // If the provided path is dirty
  for (let url of map.keys()) {
    if (!path.startsWith(url)) continue;
    return map.get(url)!.includes(role);
  }

  // If path was not found, it will be considered as public
  return true;
}
