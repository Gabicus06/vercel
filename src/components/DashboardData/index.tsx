"use client"

import { AuthContext } from "@/contexts/authContext"
import { useRouter } from "next/navigation"
import { useContext, useEffect } from "react"

const DashboardData = () => {
  const router = useRouter()
  const { user } = useContext(AuthContext)

  useEffect(() =>{
    if (!user?.login){
      router.push("/login")
    }
  }, [])
  const userData = user?.user

  return (
    <div className="my-4">
      <div>Nombre: {userData?.name}</div>
      <div>Email: {userData?.email}</div>
      <div>Dirección: {userData?.address}</div>
      <div>Teléfono: {userData?.phone}</div>
      <div className="m-6">
        <h3 >Mis pedidos:</h3>
        { user?.user.orders?.map((order, i)=>(
          <div key={i} className="flex flex-row gap-4">
            <p>Pedido {order.id}</p>
            <p>{new Date(order.date).toLocaleString()}</p>
          </div>

        ))}
      </div>
    </div>
    
  )
}

export default DashboardData