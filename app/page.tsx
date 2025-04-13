import { Github } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-[32px] sm:items-start">
        <span className="text-center text-zinc-900">
          <h1 className="text-5xl font-semibold">
            <p className="font-[family-name:var(--font-geist-mono)] text-4xl">
              ~ Role-Based ~
            </p>
            <p className="text-sky-500">Authentication</p>
          </h1>
          <p className="inline pr-4 font-[family-name:var(--font-geist-mono)] text-2xl">
            In
          </p>
          <Image
            className="mt-4 inline-block dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </span>
        <ol className="list-inside list-decimal text-center font-[family-name:var(--font-geist-mono)] text-sm/6 sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            Get started by poking{" "}
            <code className="rounded bg-black/[.05] px-1 py-0.5 font-[family-name:var(--font-geist-mono)] font-semibold dark:bg-white/[.06]">
              /dashboard
            </code>
            .
          </li>
          <li className="mb-2 tracking-[-.01em]">
            Only admins can access{" "}
            <code className="rounded bg-black/[.05] px-1 py-0.5 font-[family-name:var(--font-geist-mono)] font-semibold dark:bg-white/[.06]">
              /api/getAllUsersInfo
            </code>
          </li>
          <li className="mb-2 tracking-[-.01em]">
            If logged-in user can access{" "}
            <code className="rounded bg-black/[.05] px-1 py-0.5 font-[family-name:var(--font-geist-mono)] font-semibold dark:bg-white/[.06]">
              /api/getUserInfo
            </code>
          </li>
        </ol>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <a
            className="bg-foreground text-background flex h-10 items-center justify-center gap-2 rounded-xs border border-solid border-transparent px-4 text-sm font-medium transition-colors hover:bg-[#383838] sm:h-12 sm:w-auto sm:px-5 sm:text-base dark:hover:bg-[#ccc]"
            href="/dashboard"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Dashboard
          </a>
          <a
            className="flex h-10 w-full items-center justify-center rounded-xs border border-solid border-black/[.08] px-4 text-sm font-medium transition-colors hover:border-transparent hover:bg-[#f2f2f2] sm:h-12 sm:w-auto sm:px-5 sm:text-base md:w-[158px] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
            href="https://github.com/MRNamdari/RoleBasedAuthInNext/blob/main/README.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read me
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-[24px]">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/MRNamdari/RoleBasedAuthInNext/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
          Learn
        </a>
        <a
          aria-label="Go To Login Page"
          href="/login"
          className="flex cursor-pointer items-center gap-2 hover:underline hover:underline-offset-4"
        >
          Go to login →
        </a>
      </footer>
    </div>
  );
}
