//types
import Link from "next/link"
import Image from "next/image"
import { ICategory } from "@/interfaces/category"

interface CategoryProps {
    category : ICategory
}

const Cards = ({category}: CategoryProps)=>{
    return (
        <Link 
            href={`/products/category/${category.id}`}
            className="bg-primary text-quinary rounded p-4"
        >
            <div className="flex justify-center items-center">
                <h3 className="w-2/3 mb-4 text-center">{category.name}</h3>
                {/* <p className="text-secondary/50 text-base">USD {product.price}</p> */}
            </div>
            <div className="flex justify-center">
                {/* <Image 
                    src={product.image}
                    width={500} 
                    height={500}
                    alt={product.name}
                    className="mx-8 mt-8"
                /> */}
            </div>        
        </Link>
    )
}

export default Cards