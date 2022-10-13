"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProducts = exports.createProducts = exports.getProducts = void 0;
const ProductsService_1 = require("./../services/ProductsService");
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield (0, ProductsService_1.getProductsService)();
        res.status(200).send(products);
    }
    catch (e) {
        res.status(500).send(e.message);
    }
});
exports.getProducts = getProducts;
const createProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield (0, ProductsService_1.createProductsService)(req.body);
        res.status(200).send(products);
    }
    catch (e) {
        res.status(500).send(e.message);
    }
});
exports.createProducts = createProducts;
const deleteProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield (0, ProductsService_1.deleteProductsService)(req.body);
        res.status(200).send(products);
    }
    catch (e) {
        res.status(500).send(e.message);
    }
});
exports.deleteProducts = deleteProducts;
//# sourceMappingURL=ProductsController.js.map