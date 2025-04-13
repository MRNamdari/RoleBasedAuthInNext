import { signOut } from "@/lib/auth";
import LogOutButton from "./logout-button";

type LogOutFormProps = {
  name: string;
};

/**
 * Signs out server action using `server-only` signOut function of NextAuth
 * @param formData 
 */
async function signOutAction(formData: FormData) {
  "use server";
  await signOut();
}

export default function LogOutForm(props: LogOutFormProps) {
  return (
    <form
      action={signOutAction}
      className="mx-auto flex h-fit w-sm flex-col gap-4 rounded-sm bg-white p-6 font-[family-name:var(--font-geist-sans)]"
    >
      <p className="text-center text-zinc-400">hey {props.name}!</p>
      <h2 className="text-center text-4xl leading-16 font-bold text-zinc-700">
        Leaving so soon?
      </h2>
      <LogOutButton />
    </form>
  );
}
