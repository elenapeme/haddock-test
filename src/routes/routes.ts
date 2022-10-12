import express from 'express'
import { getProducts, getPromotions } from './../controllers/ProductsController'
import { orderProducts } from './../controllers/OrdersController'


export const router = express.Router()

// GET
// Get list of products
router.get("/get-products", getProducts)

// Get list of promotions
router.get("/get-promotions", getPromotions)


// POST
// send the items ordered and then receive the total price
router.post("post-order", orderProducts)

// create new product
router.post("post-new-product")

// create new promotion
router.post("add-promotion")


// PUT
// modify a promotion
router.put("modify-promotion")

// DELETE
// delete a product
router.delete("delete-product")

// delete a promotion
router.delete("delete-promotion")
