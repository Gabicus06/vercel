"use client"
import { IProduct } from "@/components/Cards/types"
import CartDetail from "@/components/CartDetail"
import { useEffect, useState } from "react"

const page = () => {
  const [cart, setCart] = useState<IProduct[]>([])
  
  useEffect(()=>{
    const data =  localStorage.getItem("cart")
    if (data){
      const parsedCart = JSON.parse(data)
      setCart(parsedCart)
    }    
  }, [])

  const clearCart = () =>{
    setCart([])
    localStorage.setItem("cart", JSON.stringify([]))
  }
  
  if (cart.length === 0){
    return(
      <div className="m-16 text-center">Aún no hay productos en tu carrito</div>
    )
  }else{
    return (
      <CartDetail cart={cart} clearCart={clearCart} />
    )
  }
}

export default page