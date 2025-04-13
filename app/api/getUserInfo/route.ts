import { auth } from "@/lib/auth";
import { findUserByUsername } from "@/lib/db";
import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(/*req: NextRequest*/): Promise<NextResponse> {
  const session = await auth();
  if (session && session.user.name) {
    const user = findUserByUsername(session.user.username);
    if (user) return NextResponse.json(user);
  }

  return NextResponse.json("Not Found.", { status: 404 });
}
