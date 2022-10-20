import Joi from 'Joi'


// TODO: review schema, disabled for the moment due to how the object is perceived by Joi
const PromotionSchema = Joi.object().pattern(
    /^[a-zA-Z]+$/,
    Joi.alternatives().try(Joi.string(), Joi.array(), Joi.object())
)

export const PromotionsArraySchema = Joi.array().items(PromotionSchema).required()