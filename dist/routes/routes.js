"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const ProductsController_1 = require("./../controllers/ProductsController");
const OrdersController_1 = require("./../controllers/OrdersController");
const PromotionsController_1 = require("./../controllers/PromotionsController");
exports.router = express_1.default.Router();
// GET
// Get list of products
exports.router.get("/get-products", ProductsController_1.getProducts);
// Get list of promotions
exports.router.get("/get-promotions", PromotionsController_1.getPromotions);
// POST
// send the items ordered and then receive the total price
exports.router.post("/order-products", OrdersController_1.orderProducts);
// create new product
exports.router.post("/create-new-products", ProductsController_1.createProducts);
// create new promotion
exports.router.post("/add-promotions", PromotionsController_1.addPromotions);
// PUT
// modify a promotion
exports.router.put("/modify-promotions", PromotionsController_1.modifyPromotions);
// DELETE
// delete a product
exports.router.delete("/delete-products", ProductsController_1.deleteProducts);
// delete a promotion
exports.router.delete("/delete-promotions", PromotionsController_1.deletePromotions);
//# sourceMappingURL=routes.js.map