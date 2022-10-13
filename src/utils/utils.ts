import fs from 'fs'
import { Promotions } from './../models/Promotions'
import { Product } from './../models/Product'

export const readJSON = () => {
    const rawdata: any = fs.readFileSync('./src/assets/Products.json')
    return JSON.parse(rawdata)
}

export const writeJSON = (data: Product | Promotions) => {
    fs.writeFile("./src/assets/Products.json", JSON.stringify(data, null, 4), err => {
        if (err) console.log("Error writing file:", err);
    })
}

export const hasRequiredParameters = (product: Product) => {
    return product.name && product.number && product.price
}