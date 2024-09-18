"use client"

import { AuthContext } from '@/contexts/authContext'
import { useContext, useEffect, useState } from 'react'
import { IProduct } from '../Cards/types'

interface CartDetailProps {
  cart: IProduct[],
  clearCart: () => void
}

const CartDetail = ({ cart, clearCart}: CartDetailProps) => {
  const { user } = useContext(AuthContext)
  
  // useEffect(() =>{
  //   if (typeof window !== "undefined" && window.localStorage){
  //     const storedCart = localStorage.getItem("cart")
  //     setCart(storedCart? JSON.parse(storedCart) : [])
  //   }
  // }, [])

  const handleOrder = async() =>{
    const url = process.env.NEXT_PUBLIC_API_URL + "/orders" || ""
    const products = cart.map((product: IProduct) => product.id )
    
    const req = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: user?.token as string
      },
      body: JSON.stringify({
        userId: user?.user.id,
        products: products
      })
    }

    try {
      const res = await fetch( url, req)

      if (!res.ok){
        throw new Error ("Error al realizar la order: " + res.status)
      }

      await res.json()
      clearCart()
      alert("Pedido finalizado con éxito!")

      // localStorage.setItem("cart", JSON.stringify([]))
    } catch (error) {
      console.log("Error al realizar la orden:", error)
      alert("Hubo un error al finalizar la compra")
    }
  }

  return (
    <main className="my-12 mx-auto w-2/3">
    <h1>Carrito de compra</h1>
    <div className="mt-8 flex justify-around flex-wrap">
      <div className="mb-8 flex flex-col gap-1 text-lg">
        {cart.map((product: IProduct)=>(
          <div className="flex justify-between gap-12">
            <div key={product.id}>{ product.name}</div>
            <div> USD ${product.price}</div>
          </div>
        ))}
      </div>
      <div className="border border-neutral-400 shadow-xl rounded p-6">
        <p>Cantidad de productos: {cart.length}</p>
        <p>Subtotal: USD {cart.reduce((acc, product) => acc + product.price, 0).toFixed(2)}</p>
        <p>Costo de envío: USD 0.00</p>
        <h5>Total: USD {cart.reduce((acc, product) => acc + product.price, 0).toFixed(2)}</h5>
        <br />
        <button className="p-2 border-1 text-primary rounded transition-all bg-quinary
        hover:scale-105 active:scale-95" onClick={handleOrder}>
          Finalizar compra
        </button>
      </div>
    </div>
  </main>

  )
}

export default CartDetail