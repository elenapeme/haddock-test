import Joi from 'Joi'

const PromotionSchema = Joi.object().pattern(
    /^[a-zA-Z]+$/,
    Joi.alternatives().try(Joi.string(), Joi.array(), Joi.object())
)

export const PromotionsArraySchema = Joi.array().items(PromotionSchema).required()