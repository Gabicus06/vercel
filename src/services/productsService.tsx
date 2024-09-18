import { IProduct } from "@/components/Cards/types"

export const getPproductsService = async() => {
  const url = `${process.env.API_URL}/products`
  const response = await fetch(url, {next: {revalidate:0}})
  const products: IProduct[] = await response.json()
  return products
}

export const getProductById = async(id: string) =>{
  const products: IProduct[] = await getPproductsService()
  const product = products.find((item: IProduct)=> item.id===Number(id))
  return product
}

export const getCategories = async() =>{
  const url = `${process.env.API_URL}/products/categories`
  const response = await fetch(url)
  const categories = await response.json()
  return categories
}