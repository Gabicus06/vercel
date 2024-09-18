"use client"

import { IUserSession } from "@/interfaces/forms";
import { useRouter } from "next/navigation"
import { createContext, useEffect, useState } from "react";
interface AuthProviderProps {
    children: React.ReactNode
}
interface AuthContextProps {
    user: IUserSession | null,
    setUser: (user: IUserSession | null) => void,
    logout: () => void
}

export const AuthContext = createContext <AuthContextProps>({
    user:null,
    setUser: ()=>{},
    logout: ()=>{}
})

export const AuthProvider = ({children}:AuthProviderProps) => {
    const [user, setUser] = useState<IUserSession | null>(null)
    const router = useRouter()
    
    //Save in Local storage
    useEffect(()=>{
        if (user){
            localStorage.setItem("user", JSON.stringify(user))
        }
    }, [user])

    //Take data from local storage
    useEffect(()=>{
        if (typeof window !== "undefined" && window.localStorage){
            const localUser = localStorage.getItem("user")
            if (localUser){
                setUser(JSON.parse(localUser))
            }
        }
    }, [])

    const logout = ()=>{
        localStorage.removeItem("user")
        setUser(null)
        router.push("/")
    }

    return(
        <AuthContext.Provider value={{user, setUser, logout}}>
            {children}
        </AuthContext.Provider>
    )
}