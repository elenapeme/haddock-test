"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = void 0;
const ProductsService_1 = require("./../services/ProductsService");
const getProducts = (req, res) => {
    try {
        (0, ProductsService_1.getAll)();
        //res.status(200).send(items);
    }
    catch (e) {
        res.status(500).send(e.message);
    }
};
exports.getProducts = getProducts;
