import Detail from "@/components/Detail"
import { getProductById } from "@/services/productsService"
import { notFound } from "next/navigation"

const page = async({params}: {params:{id:string}}) => {
    const { id } = params
    const product = await getProductById(id)

    if(product === undefined){
      notFound()
    }

  return (
    <Detail {...product} />
  )
}

export default page
