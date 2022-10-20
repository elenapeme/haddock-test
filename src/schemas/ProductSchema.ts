
import Joi from 'joi'

const ProductSchema = Joi.object({
    number: Joi.string().required(),
    name: Joi.string().min(3),
    price: Joi.number().min(1),
    quantity: Joi.number().min(1)
})

export const ProductsArraySchema = Joi.array().items(ProductSchema).required()
