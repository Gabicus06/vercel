import Cards from "../../components/Cards"
import Grid from "@/components/Grid"
import { IProduct } from "@/components/Cards/types"
import { getPproductsService } from "@/services/productsService"

const Page = async()=>{
    const products = await getPproductsService()
    
    return (
        <Grid>
            {products.map((product: IProduct, i: number)=>(
                <Cards key={i} product={product} />
            ) )}        
        </Grid>
    )
}

export default Page