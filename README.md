# Role-Based Authentication with Next.js, NextAuth.js (v5)

This project is a boilerplate/example demonstrating how to implement role-based authentication (Admin & User) in a modern Next.js (App Router) application using NextAuth.js v5 (Auth.js), and Tailwind CSS.

## Overview

The application provides a foundation for managing user sessions and restricting access to certain routes based on assigned roles. Key functionalities include user registration, secure login, session management, and middleware-based route protection for different user roles.

## Tech Stack

* **Framework:** [Next.js](https://nextjs.org/) (v14+ with App Router)
* **Authentication:** [NextAuth.js (Auth.js)](https://authjs.dev/) (v5 Beta)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Language:** TypeScript

## Features

* **Credentials Authentication:** Users can sign in using their email and password.
* **Session Management:** Uses JWT-based sessions managed by NextAuth.js
* **Route Protection:** Middleware (`middleware.ts`) protects routes based on authentication status.
* **Role-Based Access Control (RBAC):** Middleware enforces access to specific routes (e.g., `/dashboard`) based on the user's role stored in the session.
* **Custom UI:** Includes basic custom pages for log-in, log-out, and example protected pages using Tailwind CSS.

## Getting Started

Follow these steps to get the project running locally.

### Prerequisites

* [Node.js](https://nodejs.org/) (LTS version recommended)
* [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), or [pnpm](https://pnpm.io/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/MRNamdari/RoleBasedAuthInNext.git](https://github.com/MRNamdari/RoleBasedAuthInNext.git)
    cd RoleBasedAuthInNext
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Set up Environment Variables:**
    Create a `.env.local` file in the root of the project and add the following variables:

    ```dotenv
    # .env.local

    # Generate a strong secret for NextAuth.js:
    # openssl rand -base64 32
    NEXTAUTH_SECRET=<your_strong_auth_secret>

    # The base URL of your application (important for NextAuth.js redirects and callbacks)
    # Use http://localhost:3000 for development
    NEXTAUTH_URL=http://localhost:3000

    # Required by NextAuth.js v5 in some environments
    NEXTAUTH_TRUST_HOST=true
    ```

    *Replace `<your_strong_auth_secret>` with your actual values.*

### Running the Application

1.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```
    The application should now be running on [http://localhost:3000](http://localhost:3000).

2.  **Sign In:**
    * Navigate to `/login`.
    * Navigate to `/logout` to log out.

3.  **Test Access Control:**
    * Try accessing `/dashboard` (should be accessible to logged-in users).
    * Try accessing `/api/getAllUsersInfo` (should only be accessible if a user's role is 'admin'). Logged-in users with the 'user' role should be redirected.

## Project Structure Highlights

Here's an overview of the key files and folders involved in the structure and authentication logic:

* `app/`: Contains the application routes following the Next.js App Router structure.
    * `api/`: Houses API routes, including:
        * `auth/[...nextauth]/route.ts`: The essential handler that NextAuth.js uses for all its operations (sign-in, sign-out, session management, callbacks, etc.).
    * `(auth)/`: A common convention for grouping authentication-related pages (like `/login`, `/logout`).
    * `/dashboard`: This contains the actual page intended for logged-in users or specific roles. Access control to these routes is enforced by the middleware based on pathnames.
* `auth.ts`: Initializes NextAuth.js using the configuration from `auth.config.ts`. This file exports the `handlers` (GET, POST for the API route), `auth` (for accessing session server-side), `signIn`, and `signOut` functions. It's also where crucial callbacks (`jwt`, `session`) are defined, which are used to enrich the session token with custom data like user roles.
* `middleware.ts`: This is critical for enforcing route protection. It intercepts incoming requests, uses the `auth` helper to check the user's session status and role, compares these against the requirements for the requested pathname, and redirects unauthenticated users appropriately.
