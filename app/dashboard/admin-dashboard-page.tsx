import { Users, ShoppingCart, Settings, LogOut } from "lucide-react";
import Link from "next/link";
import UsersList from "@/components/users-list";
import DashboardSideBar, {
  DashboardSideBarItem,
  type DashboardSideBarItemProps,
} from "@/components/dashboard-sidebar";

const adminNavItems: DashboardSideBarItemProps[] = [
  { icon: Users, label: "Users", href: "users" },
  { icon: ShoppingCart, label: "Products", href: "products" },
  { icon: Settings, label: "Settings", href: "settings" },
];

type AdminDashboardPageProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export function AdminDashboardPage({ searchParams }: AdminDashboardPageProps) {
  return (
    <>
      <DashboardSideBar name="Admin Panel">
        {adminNavItems.map((item, key) => (
          <DashboardSideBarItem
            key={key}
            {...item}
            active={searchParams.q === item.href}
          />
        ))}
        <li key={"logout"} className="text-red-800 max-md:w-full ">
          <Link
            href={"/logout"}
            className="flex items-center max-md:justify-center p-4 transition-colors hover:bg-zinc-100"
          >
            <LogOut className="mr-3 h-5 w-5" />
            <p className="max-sm:hidden">Log Out</p>
          </Link>
        </li>
      </DashboardSideBar>
      <div className="h-full w-full bg-zinc-100 px-12 py-8">
        {searchParams.q === "users" && <UsersList />}
      </div>
    </>
  );
}
