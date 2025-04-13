import LogOutForm from "@/components/logout-form";
import { auth } from "@/lib/auth";
import { redirect, RedirectType } from "next/navigation";

export default async function LogOutPage() {
  // if user is logged-in return LogoutForm
  const session = await auth();
  if (session && session.user?.name) {
    return <LogOutForm name={session.user.name} />;
  }
  
  // Redirects to LoginPage if user is not logged-in
  redirect("/login", RedirectType.replace);
}
