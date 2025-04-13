import LoginForm from "@/components/login-form";
import { auth } from "@/lib/auth";
import { redirect, RedirectType } from "next/navigation";

export const runtime = "edge";

export default async function LoginPage() {

  //Redirect to dashboard if user is logged in
  const session = await auth();
  if (session && session.user) 
      redirect("/dashboard",RedirectType.push)

  return <LoginForm />;
}
