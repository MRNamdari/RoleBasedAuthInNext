import { getAllUsers } from "@/lib/db";
import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(/*req: NextRequest*/): Promise<NextResponse> {
  return NextResponse.json(getAllUsers());
}
