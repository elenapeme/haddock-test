import { Product } from './../models/Product'
import { readJSON, writeJSON } from './../utils/utils'


export const getProductsService = async () => {
    const productsData = readJSON()

    return productsData.products
}

export const createProductsService = async (products: Product[]) => {
    const productsData = readJSON()

    const hasRequiredParameters = (product: Product) => {
        return product.name && product.number && product.price
    }

    products.map(e => {
        if (hasRequiredParameters(e)) {
            productsData.products.push(e)
        } else {
            console.log("You must add all the required parameters")
        }
        
    })

    writeJSON(productsData)

    return productsData.products
}

export const deleteProductService = async () => {
    
}