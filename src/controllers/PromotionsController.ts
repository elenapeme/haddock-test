import { Request, Response } from "express"
import { getPromotionsService, addPromotionsService, deletePromotionsService, updatePromotionsService } from './../services/PromotionsService'


export const getPromotions = async (req: Request, res: Response) => {
    try {
        const promotions = await getPromotionsService()
        res.status(200).send(promotions)
    } catch (e:any) {
        res.status(500).send(e.message)
    }
}

export const addPromotions = async (req: Request, res: Response) => {
    try {
        const promotions = await addPromotionsService(req.body)
        res.status(200).send(promotions)
    } catch (e:any) {
        res.status(500).send(e.message)
    }
}

export const modifyPromotions = async (req: Request, res: Response) => {
    try {
        const promotions = await updatePromotionsService(req.body)
        res.status(200).send(promotions)
    } catch (e:any) {
        res.status(500).send(e.message)
    }
}

export const deletePromotions = async (req: Request, res: Response) => {
    try {
        const promotions = await deletePromotionsService(req.body)
        res.status(200).send(promotions)
    } catch (e:any) {
        res.status(500).send(e.message)
    }
}