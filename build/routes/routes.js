"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const ProductsController_1 = require("./../controllers/ProductsController");
const express_1 = __importDefault(require("express"));
//import { ProductsController } from '../controllers/ProductsController'
// import { getFilters, postFilters } from '../controllers/filters'
exports.router = express_1.default.Router();
exports.router.get("/get-products", ProductsController_1.getProducts);
// router.get("/list-filters", getFilters)
// router.post("/post-filters", postFilters)
