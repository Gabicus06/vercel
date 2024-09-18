import { Request, Response } from "express";
import { catchedController } from "../utils/catchedController";
import { getCategoriesService, getProductsService } from "../services/products.service";

export const getProducts = catchedController(
  async (req: Request, res: Response) => {
    const products = await getProductsService();
    res.json(products);
  }
);

export const getCategories = catchedController(
  async (req: Request, res:Response) =>{
    const categories = await getCategoriesService()
    res.json(categories)
  }
)
