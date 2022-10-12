import { readJSON } from './../utils/utils'
import { Product } from './../models/Product'

export const calculateOrderTotal = async (orderResponse: Product[]) => {
    const productsData = readJSON()
    let totalOrder: number

    orderResponse.map((e: Product) => {
        const product = productsData.products.find((j: Product) => j.number === e.number)
        totalOrder =+ e.quantity * product.price
    })


    return {
        totalCost: totalOrder
    }
}