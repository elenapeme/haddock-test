import { Request, Response } from "express"
import { getAllProducts, getAllPromotions } from './../services/ProductsService'


export const getProducts = async(req: Request, res: Response) => {
    try {
        const products = await getAllProducts()
        res.status(200).send(products);
    } catch (e:any) {
        res.status(500).send(e.message);
    }
}

export const getPromotions = async(req: Request, res: Response) => {
    try {
        const promotions = await getAllPromotions()
        res.status(200).send(promotions);
    } catch (e:any) {
        res.status(500).send(e.message);
    }
}