import { Request, Response } from "express"
import { getPromotionsService } from './../services/PromotionsService'


export const getPromotions = async (req: Request, res: Response) => {
    try {
        const promotions = await getPromotionsService()
        res.status(200).send(promotions)
    } catch (e:any) {
        res.status(500).send(e.message)
    }
}