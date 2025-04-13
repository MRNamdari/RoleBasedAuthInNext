import DashboardSideBar, {
  DashboardSideBarItem,
  DashboardSideBarItemProps,
} from "@/components/dashboard-sidebar";
import UserInfo from "@/components/user-info";
import { LogOut, Settings, ShoppingCart, User } from "lucide-react";
import Link from "next/link";

const userNavItems: DashboardSideBarItemProps[] = [
  { icon: User, label: "My Account", href: "profile" },
  { icon: ShoppingCart, label: "Products", href: "products" },
  { icon: Settings, label: "Settings", href: "settings" },
];

type UserDashboardPageProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export function UserDashboardPage({ searchParams }: UserDashboardPageProps) {
  return (
    <>
      <DashboardSideBar name="User Panel">
        {userNavItems.map((item, key) => (
          <DashboardSideBarItem
            key={key}
            {...item}
            active={searchParams.q === item.href}
          />
        ))}
        <li key={"logout"} className="text-red-800 max-md:w-full">
          <Link
            href={"/logout"}
            className="flex items-center p-4 transition-colors hover:bg-zinc-100 max-md:justify-center"
          >
            <LogOut className="mr-3 h-5 w-5" />
            <p className="max-sm:hidden">Log Out</p>
          </Link>
        </li>
      </DashboardSideBar>
      <div className="h-full w-full bg-zinc-100 px-12 py-8">
        {searchParams.q === "profile" && <UserInfo />}
      </div>
    </>
  );
}
