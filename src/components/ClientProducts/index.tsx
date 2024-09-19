"use client"

import { products } from "@/mocks/products"
import { useEffect, useState } from "react"
import { IProduct } from "../Cards/types"
import Grid from "../Grid"
import Cards from "../Cards"

const ClientProducts = async () => {
  const [data, setdata] = useState<IProduct[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() =>{
      setdata(products)
      setIsLoading(false)
      setHasError(false)
    }, 2000)
  
  }, [])

  if (isLoading) return <h1>Loading...</h1>
  if (hasError) return <h1>Ups!</h1>
  
  return (
    <Grid>
      {products.map((product, i)=>(
          <Cards key={i} product={product} />
      ) )}        
    </Grid>
  )
}

export default ClientProducts