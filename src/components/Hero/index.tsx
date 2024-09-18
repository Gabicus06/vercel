import Link from "next/link"
import style from "./index.module.css"
import Button from "../Button"

const hero = () => {
  return (
    <header className="bg-quarternary h-[50vh] text-primary flex flex-col justify-center items-center gap-2">
        <h1>Bienvenido</h1>
        <Button variant="tertiary" href="/products">
          <div>Ir a los productos</div>
        </Button>
    </header>

  )
}

export default hero