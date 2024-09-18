"use client"
import { AuthContext } from "@/contexts/authContext"
import Link from "next/link"
import { useContext } from "react"
import style from "../Navbar/index.module.css"
import { FaBasketShopping } from "react-icons/fa6";
import { FaRegCircleUser } from "react-icons/fa6";
import { AiOutlineLogout } from "react-icons/ai";




const userOptions = () => {
  const { user, logout } = useContext(AuthContext)
  if(!user){
    return(
      <div className="container flex justify-end">
        <Link className={style.navbarItem} href="/login">Login</Link>
        <Link className={style.navbarItem}  href="/register">Register</Link>
    </div>
    )
  }else{
    return (
      <div className="container flex justify-end items-center">
        <button className={style.navbarItem}  onClick={logout}><AiOutlineLogout /></button>
        <Link className={style.navbarItem}  href="/dashboard"><FaRegCircleUser/></Link>
        <Link className={style.navbarItem}  href="/cart"><FaBasketShopping /></Link>
      </div>
    )
  }
}

export default userOptions