import { Request, Response } from "express"
import { calculateOrderTotal } from './../services/OrderService'

export const orderProducts = async(req: Request, res: Response) => {
    const productsOrdered = req.body.products

    const orderTotal = await calculateOrderTotal(productsOrdered)


}