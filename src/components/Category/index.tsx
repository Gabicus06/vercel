import { products } from "@/mocks/products"
import Grid from "../Grid"
import { getCategories } from "@/services/productsService"
import { ICategory } from "@/interfaces/category"
import CategoryCards from "../CategoryCards"

const category = async() => {
  const categories: ICategory[] = await getCategories()
  // const featured = products.slice(0,3)
  return (
    <Grid>
      {categories.map((category, index) => (
        <CategoryCards key={index} category = {category}/>
      ))}
    </Grid>
  )
}

export default category