//types
import Link from "next/link"
import {IProduct} from "./types"
import Image from "next/image"

interface ProductProps {
    product : IProduct
}

const Cards = ({product}: ProductProps)=>{
return (
    <Link 
        href={`/products/${product.id}`}
        className="bg-white text-secondary rounded p-4"
    >
        <div className="flex justify-between items-center">
            <h3 className="w-2/3">{product.name}</h3>
            <p className="text-secondary/50 text-base">USD {product.price}</p>
        </div>
        <div className="flex justify-center">
            <Image 
                src={product.image}
                width={500} 
                height={500}
                alt={product.name}
                className="mx-8 mt-8"
            />
        </div>        
        
    </Link>
)
}

export default Cards