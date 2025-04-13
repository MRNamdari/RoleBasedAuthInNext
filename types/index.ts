// Type definitions for the application

// User roles
export type Role = "admin" | "user";

// User with password (for database)
export type User = {
  id: number;
  username: string;
  password: string;
  name: string;
  role: Role;
}

// User without password (for client-side and JWT payload)
export type SafeUser = Omit<User, "password">;

// Login request payload
export type LoginRequest = {
  username: string;
  password: string;
}

// Login response
export type LoginResponse = {
  user: SafeUser;
  message: string;
}

// Error response
export type ErrorResponse = {
  error: string;
}
