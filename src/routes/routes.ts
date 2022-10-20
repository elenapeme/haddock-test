import express from 'express'
import { validate } from './../utils/validateMiddleware'
import { ProductsArraySchema } from './../schemas/ProductSchema'
import { PromotionsArraySchema } from './../schemas/PromotionSchema'
import { OrderSchema } from './../schemas/OrderSchema'
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
router.post("/order-products", validate(ProductsArraySchema), orderProducts)

// create new product
router.post("/create-new-products", validate(ProductsArraySchema), createProducts)

// create new promotions
router.post("/add-promotions", addPromotions)


// PUT
// modify a promotion
router.put("/modify-promotions", modifyPromotions)

// DELETE
// delete a product
router.delete("/delete-products", validate(ProductsArraySchema), deleteProducts)

// delete a promotion
router.delete("/delete-promotions", deletePromotions)
