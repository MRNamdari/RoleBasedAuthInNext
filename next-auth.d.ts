import { DefaultSession, User } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";
import { Role } from "./types";
declare module "next-auth" {
  interface Session {
    user: {
      username: string;
      role: Role;
    } & DefaultSession["user"];
  }

  interface User extends User {
    username: string;
    role: Role;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    username: string;
    role: Role;
  }
}
