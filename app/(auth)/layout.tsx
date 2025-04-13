import React from "react";

export default function LoginLayout({children}: {children:React.ReactNode}){
    return <main className="sm:bg-zinc-100 w-full h-full sm:place-content-center">
        {children}
    </main>
}