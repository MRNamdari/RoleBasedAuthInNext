import type { LucideIcon } from "lucide-react";
import Link from "next/link";

type DashboardSideBarProps = {
  name: string;
  children?: React.ReactNode;
};

export type DashboardSideBarItemProps = {
  href: string;
  label: string;
  icon: LucideIcon;
  active?: boolean;
};

export default function DashboardSideBar(props: DashboardSideBarProps) {
  return (
    <aside className="h-full row-start-2 md:row-auto">
      <h1 className="border-b-2 border-zinc-100 px-4 py-8 text-center text-xl font-bold max-md:hidden">
        {props.name}
      </h1>
      <ol className="md:min-w-xs max-md:flex max-md:w-full">{props.children}</ol>
    </aside>
  );
}

export function DashboardSideBarItem({
  icon: LucideIcon,
  label,
  href,
  active,
}: DashboardSideBarItemProps) {
  return (
    <li className="max-md:w-full">
      <Link
        href={{ query: { q: href } }}
        replace={true}
        className="flex items-center max-md:justify-center p-4 transition-colors hover:bg-zinc-100 aria-disabled:bg-zinc-100"
        aria-disabled={active}
      >
        <LucideIcon className="mr-3 h-5 w-5" />
        <p className="max-sm:hidden">{label}</p>
      </Link>
    </li>
  );
}
