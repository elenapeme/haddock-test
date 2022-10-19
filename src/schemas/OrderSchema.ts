import Joi from 'Joi'

export const OrderSchema = Joi.object({
    totalCost: Joi.number().min(1).required()
})