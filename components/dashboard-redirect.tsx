"use client"
import { useRouter } from "next/navigation"
import {getSession} from "next-auth/react"
import { useEffect } from "react";
export default function DashboardRedirectMessage(){

    const router = useRouter();

    useEffect(()=>{
        
        getSession().then(s=>{
            const role = s?.user.role;
            console.log(s)
            if (role){
                switch(role){
                    case "admin":
                        router.push("/admin");
                        break
                    case "user":
                        router.push("/user");
                        break
                }
            }
        })
    },[])
    
    return <h1>
        Redirecting to dashboard...
    </h1>
}