import BuyButton from "../BuyButton"
import { IProduct } from "../Cards/types"
import Image from "next/image"

const detail = async(product: IProduct) => {
  return (
    <div className="container">
        <div className="flex flex-wrap sm:flex-nowrap gap-4 my-12 mx-auto xl:w-2/3">
          <Image 
              src={product.image}
              height={400}
              width={400}
              alt={product.name}
          />
          <div className=" flex flex-col gap-4 w-screen md:w-1/2">
            <div className="flex justify-between">
              <h2 className="">{product.name}</h2>
              <BuyButton product={product}/>
            </div>
            <div className="flex justify-between">
              <p className="text-lg font-bold">USD {product.price}</p>
              <p className="text-end"> {product.stock} in stock</p>
            </div>
          <p className="py-4 text-md xl:text-lg">{product.description}</p>
          </div>
        </div>
    </div>
  )
}

export default detail