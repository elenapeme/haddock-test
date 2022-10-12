import { readJSON } from './../utils/utils'

export const getAllProducts = async () => {
    const productsData = readJSON()

    return productsData.products
}

export const getAllPromotions = async () => {
    const promotionsData = readJSON()

    return promotionsData.promotions
}