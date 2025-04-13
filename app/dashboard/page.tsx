import { auth } from "@/lib/auth";
import { notFound } from "next/navigation";
import { UserDashboardPage } from "./user-dashboard-page";
import { AdminDashboardPage } from "./admin-dashboard-page";

export const runtime = "edge";

type DashboardSearchParams = Promise<{
  [key: string]: string | string[] | undefined;
}>;

/**
 * Returns DashboardPage according to the role of `logged-in` user
 * In this route, state managements are done using `URL Search Parameters`
 * so all the searchParams in `PageProps` will be passed down to each Page Components.
 * @param param0
 * @returns AdminDashboardPage or UserDashboardPage or redirects to notFound page
 */

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: DashboardSearchParams;
}) {
  // Gets session info
  const session = await auth();

  // Check if session and user info are available
  if (session && session.user) {
    // Stores user's role "admin" or "user"
    const role = session.user.role;

    // Aquires search parameters
    const query = await searchParams;

    switch (role) {
      case "admin":
        return <AdminDashboardPage searchParams={query} />;
      case "user":
        return <UserDashboardPage searchParams={query} />;
      default:
        notFound();
    }
  }
}
