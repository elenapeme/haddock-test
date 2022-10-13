import { Product } from './../models/Product'
import { readJSON, writeJSON, hasRequiredParameters } from './../utils/utils'


export const getProductsService = async () => {
    const productsData = readJSON()

    return productsData.products
}

export const createProductsService = async (products: Product[]) => {
    const productsData = readJSON()

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

export const deleteProductsService = async (products: Product[]) => {
    const productsData = readJSON()

    const productsNotDeleted: Product[] = products.map(e => {
        if (hasRequiredParameters(e)) {
            return productsData.products.filter((j: Product) => j.number !== e.number)
        } else {
            console.log("You must add all the required parameters")
        }
        
    })

    // We need to flat the array in order to add it to the original version
    productsData.products = productsNotDeleted.flat(1)

    writeJSON(productsData)

    return productsNotDeleted
}