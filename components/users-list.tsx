"use client";
import { SafeUser } from "@/types";
import { useEffect, useState } from "react";

export default function UsersList() {

  useEffect(() => {
    fetch("../api/getAllUsersInfo")
      .then((res) => res.json())
      .then(setUsers);
  }, []);
  
  const [users, setUsers] = useState<SafeUser[]>([]);

  return (
    <table className="w-full text-center">
      <thead className="border-b-2 text-zinc-500">
        <tr className="py-2">
          {users.length > 0 &&
            Object.keys(users[0]).map((k, i) => (
              <th key={i} className="py-3">
                {k.toLocaleUpperCase()}
              </th>
            ))}
        </tr>
      </thead>
      <tbody>
        {users.length > 0 &&
          users.map((user, u) => (
            <tr
              className="border-b-2 transition-colors hover:bg-zinc-50"
              key={u}
            >
              {Object.values(user).map((item, i) => (
                <td key={i} className="py-1">
                  {item}
                </td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
}
