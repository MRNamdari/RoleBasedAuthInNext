import { type Role } from "@/types";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { findUserByCredentials } from "./db";

/**
 * Configures NextAuth for loggin in with credentials
 * Assignes custom login and logout pages
 * Adds `username` and `role` in JWToken and also in Session
 */
export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: { type: "text", name: "username" },
        password: { type: "password", name: "password" },
      },

      // Validates user's credentials
      authorize(credentials) {
        // Stores User object if found
        const user = findUserByCredentials(
          credentials.username,
          credentials.password,
        );

        if (user)
          return {
            name: user.name,
            username: user.username,
            role: user.role as Role,
          };

        return null;
      },
    }),
  ],

  // Custom pages must be introduced to next-auth
  pages: {
    signIn: "/login",
    signOut: "/logout",
  },

  // Additional parameters (eg: role, username)
  // must be added to jwt and session
  callbacks: {
    async jwt({ user, token }) {
      if (user) {
        token.username = user.username;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.username = token.username;
        session.user.role = token.role;
      }
      return session;
    },
  },
});
