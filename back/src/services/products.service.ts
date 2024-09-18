import { Category } from "../entities/Category";
import { Product } from "../entities/Product";
import { CategoryRepository } from "../repositories/category.respository";
import { ProductRepository } from "../repositories/product.repository";

export const checkProductExists = async (itemId: number): Promise<boolean> => {
  const item: Product | null = await ProductRepository.findOneBy({
    id: itemId,
  });
  return !!item;
};

export const getProductsService = async (): Promise<Product[]> => {
  return await ProductRepository.find();
};

export const getCategoriesService = async (): Promise<Category[]> =>{
  return await CategoryRepository.find()
}