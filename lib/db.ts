// Mock database for users
import { User, SafeUser } from "@/types";

// Mock users data - in a real app, this would be in a database
const users: User[] = [
  {
    id: 1,
    username: "admin",
    password: "admin123",
    name: "Admin User",
    role: "admin",
  },
  {
    id: 2,
    username: "user",
    password: "user123",
    name: "Regular User",
    role: "user",
  },
];

/**
 * Finds a user by username and password
 * @param username Username
 * @param password Password
 * @returns User object if found, undefined otherwise
 */
export function findUserByCredentials(
  username: unknown,
  password: unknown
): User | undefined {
  return users.find(
    (user) => user.username === username && user.password === password
  );
}

/**
 * Looks up for a user by username
 * @param username Username
 * @returns User object if found, undefined otherwise
 */
export function findUserByUsername(username: string) {
  return users.find((user) => user.username === username);
}
/**
 * Gets all users (without passwords)
 * @returns Array of users without passwords
 */
export function getAllUsers(): SafeUser[] {
  // Remove passwords for security
  return users.map(({ password, ...user }) => user);
}
