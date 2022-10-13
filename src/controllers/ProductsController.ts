import { Request, Response } from "express"
import { getProductsService, createProductsService } from './../services/ProductsService'


export const getProducts = async(req: Request, res: Response) => {
    try {
        const products = await getProductsService ()
        res.status(200).send(products)
    } catch (e:any) {
        res.status(500).send(e.message)
    }
}

export const createProducts = async(req: Request, res: Response) => {
    try {
        const products = await createProductsService(req.body)
        res.status(200).send(products)
    } catch (e:any) {
        res.status(500).send(e.message)
    }
}