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
exports.deleteProductService = exports.createProductsService = exports.getProductsService = void 0;
const utils_1 = require("./../utils/utils");
const getProductsService = () => __awaiter(void 0, void 0, void 0, function* () {
    const productsData = (0, utils_1.readJSON)();
    return productsData.products;
});
exports.getProductsService = getProductsService;
const createProductsService = (products) => __awaiter(void 0, void 0, void 0, function* () {
    const productsData = (0, utils_1.readJSON)();
    const hasRequiredParameters = (product) => {
        return product.name && product.number && product.price;
    };
    products.map(e => {
        if (hasRequiredParameters(e)) {
            productsData.products.push(e);
        }
        else {
            console.log("You must add all the required parameters");
        }
    });
    (0, utils_1.writeJSON)(productsData);
    return productsData.products;
});
exports.createProductsService = createProductsService;
const deleteProductService = () => __awaiter(void 0, void 0, void 0, function* () {
});
exports.deleteProductService = deleteProductService;
//# sourceMappingURL=ProductsService.js.map