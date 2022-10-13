import { readJSON } from './../utils/utils'
import { Product } from './../models/Product'

export const serviceOrderTotal = async (orderResponse: Product[]) => {
    const productsData = readJSON()
    let totalOrder: number
    const promotions = productsData.promotions
    let productsPromoted: Product[] = []

   orderResponse.map((e: Product) => {
        const product = productsData.products.find((j: Product) => j.number === e.number)

       totalOrder = + e.quantity * product.price
       if (promotions.twoPerOneProducts.includes(product.number))
           return productsPromoted.push({ ...product, quantity: e.quantity }) 
   })
    
    Object.keys(promotions).map((j: any) => {
        // You need to modify it in order to make the promotions work
        switch (j) {
            case "discount":
                totalOrder >= j.discountAmountMin ?
                    totalOrder =- j.discountPrice :
                    totalOrder

                break;
            case "twoPerOneProducts":
                //TODO - improve how promoted products are calculated
                if (productsPromoted.length > 0) {
                    productsPromoted.map((h: Product) => {
                        const productTotal = h.price * h.quantity
                        totalOrder = totalOrder - ( productTotal / 2 )
                    })
                }

                break;
        }
       })


    return {
        totalCost: totalOrder
    }
}

