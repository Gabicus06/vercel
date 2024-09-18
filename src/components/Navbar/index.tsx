import Link from "next/link"
import UserOptions from "../UserOptions"
import style from "./index.module.css"

const navbar = () => {
  return (
    <nav className="bg-quinary text-primary flex py-1" >
        <div className="container flex ">
          <Link className={style.navbarItem} href="../">MyStore</Link>
        {/* </div>
        <div className="container flex justify-center"> */}
          <Link className={style.navbarItem} href="/products">Productos</Link>
          <Link className={style.navbarItem}  href="/dashboard">Dashboard</Link>
        </div>
        <UserOptions/>
    </nav>
  )
}

export default navbar