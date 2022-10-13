import { Promotions } from './../models/Promotions'
import { readJSON, writeJSON, hasRequiredParameters } from './../utils/utils'


export const getPromotionsService = async () => {
    const promotionsData = readJSON()

    return promotionsData.promotions
}

export const addPromotionsService = async (promotions: Promotions[]) => {
    const productsData = readJSON()

    promotions.map(e => {
        return Object.assign(productsData.promotions, e) 
    })

    writeJSON(productsData)

    return productsData.promotions
}

export const updatePromotionsService = async (promotions: Promotions[]) => {
    const productsData = readJSON()

    promotions.map(e => {
        if(productsData.promotions)
        return Object.assign(productsData.promotions, e) 
    })

    const keys = Object.keys(promotions)

    keys.forEach((key: any) => {
        return productsData.promotions[key] = promotions[key]
    })


    writeJSON(productsData)

    return productsData.promotions
}

export const deletePromotionsService = async (promotions: any) => {
    const productsData = readJSON()

    promotions.map((e: any) => {
        const keys = Object.keys(e)
        
        keys.forEach((key) => {
            return delete productsData.promotions[key]
        })

        console.log(productsData.promotions)
        
    })

    writeJSON(productsData)

    return productsData
}