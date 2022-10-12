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
exports.getAllPromotions = exports.getAllProducts = void 0;
const utils_1 = require("./../utils/utils");
const getAllProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const productsData = (0, utils_1.readJSON)();
    return productsData.products;
});
exports.getAllProducts = getAllProducts;
const getAllPromotions = () => __awaiter(void 0, void 0, void 0, function* () {
    const promotionsData = (0, utils_1.readJSON)();
    return promotionsData.promotions;
});
exports.getAllPromotions = getAllPromotions;
//# sourceMappingURL=ProductsService.js.map