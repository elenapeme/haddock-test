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
exports.deleteProductsService = exports.createProductsService = exports.getProductsService = void 0;
const utils_1 = require("./../utils/utils");
const getProductsService = () => __awaiter(void 0, void 0, void 0, function* () {
    const productsData = (0, utils_1.readJSON)();
    return productsData.products;
});
exports.getProductsService = getProductsService;
const createProductsService = (products) => __awaiter(void 0, void 0, void 0, function* () {
    const productsData = (0, utils_1.readJSON)();
    products.map(e => {
        if ((0, utils_1.hasRequiredParameters)(e)) {
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
const deleteProductsService = (products) => __awaiter(void 0, void 0, void 0, function* () {
    const productsData = (0, utils_1.readJSON)();
    const productsNotDeleted = products.map(e => {
        if ((0, utils_1.hasRequiredParameters)(e)) {
            return productsData.products.filter((j) => j.number !== e.number);
        }
        else {
            console.log("You must add all the required parameters");
        }
    });
    // We need to flat the array in order to add it to the original version
    productsData.products = productsNotDeleted.flat(1);
    (0, utils_1.writeJSON)(productsData);
    return productsNotDeleted;
});
exports.deleteProductsService = deleteProductsService;
//# sourceMappingURL=ProductsService.js.map