import { readJSON } from './../utils/utils'


export const getPromotionsService = async () => {
    const promotionsData = readJSON()

    return promotionsData.promotions
}

export const addPromotionService = async () => {

}

export const modifyPromotionService = async () => {
    
}

export const deletePromotionService = async () => {
    
}