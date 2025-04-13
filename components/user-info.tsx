"use client";
import { SafeUser } from "@/types";
import { Edit3 } from "lucide-react";
import { useEffect, useState } from "react";

export default function UserInfo() {
    
  useEffect(() => {
    fetch("../api/getUserInfo")
      .then((res) => res.json())
      .then(setUser);
  }, []);

  const [user, setUser] = useState<SafeUser>();

  return (
    <div>
      <ol className="p-2">
        <li className="flex items-center justify-between px-6 py-4 transition-colors hover:bg-zinc-200">
          <div>
            <p className="h-6 empty:bg-zinc-300 empty:rounded-xs">{user?.name}</p>
            <p className="text-xs text-zinc-400">Name</p>
          </div>
          <button className="size-8 cursor-pointer p-1 text-zinc-400 transition-colors hover:bg-zinc-50">
            <Edit3 />
          </button>
        </li>
        <li className="flex items-center justify-between px-6 py-4 transition-colors hover:bg-zinc-200">
          <div>
            <p className="h-6 empty:bg-zinc-300 empty:rounded-xs">{user?.username}</p>
            <p className="text-xs text-zinc-400">Username</p>
          </div>
          <button className="size-8 cursor-pointer p-1 text-zinc-400 transition-colors hover:bg-zinc-50">
            <Edit3 />
          </button>
        </li>
        <li className="flex px-6 py-4 text-sky-600 capitalize transition-colors hover:bg-zinc-200">
          <div>
            <p className="h-6 empty:bg-zinc-300 empty:rounded-xs">{user?.role}</p>
            <p className="text-xs text-zinc-400">Privilage</p>
          </div>
        </li>
      </ol>
    </div>
  );
}
