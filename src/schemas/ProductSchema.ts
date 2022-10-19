
import Joi from 'joi'

const ProductSchema = Joi.object({
    number: Joi.string().min(3).required(),
    name: Joi.string().min(3).required(),
    price: Joi.number().min(1).required()
})

export const ProductsArraySchema = Joi.array().items(ProductSchema).required()
