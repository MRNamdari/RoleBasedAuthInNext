"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import LoginButton from "./login-button";
import { KeyRound, UserRound } from "lucide-react";
import BackIconButton from "./back-icon-button";

type LoginFormFields = {
  username: string;
  password: string;
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginFormFields>();

  // State handler for loading icon
  const [pending, setPending] = useState(false);

  async function onSubmit(data: LoginFormFields) {
    setPending(true);
    const response = await signIn("credentials", { redirect: false, ...data });
    setPending(false);

    // If logged in successfully redirects to dashboard
    if (response?.code === null) {
      redirect("/dashboard");
    }

    // If credentials were invalid
    else if (response?.code === "credentials") {
      setError("root", { message: "* Invalid credentials" });
    }

    // If other errors happened
    else if (response?.code !== null) {
      setError("root", { message: "* Unknown error occured" });
    }
  }

  return (
    <form
      aria-label="Login Form"
      method="POST"
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto flex h-fit w-sm flex-col gap-4 rounded-sm bg-white p-6 font-[family-name:var(--font-geist-sans)]"
    >
      <div>
        <BackIconButton/>
        <p className="w-full text-center text-zinc-400 leading-0">Welcome</p>
      </div>

      <h2 className="text-center text-4xl leading-16 font-bold text-zinc-700">
        Sign in
      </h2>

      {errors.root && (
        <p className="rounded-xs bg-red-50 px-4 py-2 text-sm text-red-500">
          {errors.root.message}
        </p>
      )}
      {(errors.username || errors.password) && (
        <ol className="rounded-xs bg-red-50 px-4 py-2 text-xs text-red-500">
          <li>{errors.username && `Username ${errors.username.type}`}</li>
          <li>{errors.password && `Password ${errors.password.type}`}</li>
        </ol>
      )}
      <div className="flex rounded-xs bg-zinc-100 p-2">
        <UserRound className="text-zinc-500" />
        <input
          aria-label="Username"
          placeholder="Username"
          className="w-full px-2 outline-0 placeholder:text-sm placeholder:text-zinc-500 placeholder:transition-colors focus-within:placeholder:text-zinc-400"
          autoComplete="username webauthn"
          {...register("username", { required: true, minLength: 4 })}
        />
      </div>

      <div className="flex rounded-xs bg-zinc-100 p-2">
        <KeyRound className="text-zinc-500" />
        <input
          aria-label="Password"
          type="password"
          placeholder="Password"
          className="w-full px-2 outline-0 placeholder:text-sm placeholder:text-zinc-500 placeholder:transition-colors focus-within:placeholder:text-zinc-400"
          autoComplete="current-password webauthn"
          {...register("password", { required: true, minLength: 6 })}
        />
      </div>

      <LoginButton pending={pending} />
    </form>
  );
}
