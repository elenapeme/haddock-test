import express from 'express'
import { getProducts, createProducts, deleteProducts } from './../controllers/ProductsController'
import { orderProducts } from './../controllers/OrdersController'
import { getPromotions, addPromotions, modifyPromotions, deletePromotions } from './../controllers/PromotionsController'


export const router = express.Router()

// GET
// Get list of products
router.get("/get-products", getProducts)

// Get list of promotions
router.get("/get-promotions", getPromotions)


// POST
// send the items ordered and then receive the total price
router.post("/order-products", orderProducts)

// create new product
router.post("/create-new-products", createProducts)

// create new promotion
router.post("/add-promotions", addPromotions)


// PUT
// modify a promotion
router.put("/modify-promotions", modifyPromotions)

// DELETE
// delete a product
router.delete("/delete-products", deleteProducts)

// delete a promotion
router.delete("/delete-promotions", deletePromotions)
