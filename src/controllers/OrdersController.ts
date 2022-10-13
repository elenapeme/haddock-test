import { Request, Response } from "express"
import { serviceOrderTotal } from './../services/OrderService'

export const orderProducts = async (req: Request, res: Response) => {
    try {
        const productsOrdered = req.body
        const orderTotal = await serviceOrderTotal(productsOrdered)

        res.status(200).send(orderTotal)
    } catch (e: any) {
        res.status(500).send(e.message);
    }
}