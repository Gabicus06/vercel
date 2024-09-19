"use client"

import Button from '../Button'
import React, { useContext } from 'react'
import { AuthContext } from '@/contexts/authContext'
import { useRouter } from 'next/navigation'
import { IProduct } from '../Cards/types'

interface IBuyButtonProps{
  product: IProduct
}

const BuyButton = ({ product }: IBuyButtonProps) => {
  const { user } = useContext(AuthContext)
  const router = useRouter()
  
  const handleBuy = ()=>{
    if (!user?.login) {
      router.push("/login")
    }else{
      const cart = JSON.parse(localStorage.getItem("cart") || "[]")
      if(!cart.some((p:IProduct)=> p.id === product?.id)){
        cart.push(product)
        localStorage.setItem("cart", JSON.stringify(cart))
        alert(`${product?.name} se agregó correctamente`)
      }else{
        alert(`${product?.name} ya está en tu carrito`)
      }
    }
  }
  return (
    <button className="p-2 rounded text-white transition-all bg-tertiary
        hover:scale-105 active:scale-95" onClick={handleBuy}>Comprar</button>
  )
}

export default BuyButton