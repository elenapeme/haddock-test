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
exports.deletePromotionsService = exports.updatePromotionsService = exports.addPromotionsService = exports.getPromotionsService = void 0;
const utils_1 = require("./../utils/utils");
const getPromotionsService = () => __awaiter(void 0, void 0, void 0, function* () {
    const promotionsData = (0, utils_1.readJSON)();
    return promotionsData.promotions;
});
exports.getPromotionsService = getPromotionsService;
const addPromotionsService = (promotions) => __awaiter(void 0, void 0, void 0, function* () {
    const productsData = (0, utils_1.readJSON)();
    promotions.map(e => {
        return Object.assign(productsData.promotions, e);
    });
    (0, utils_1.writeJSON)(productsData);
    return productsData.promotions;
});
exports.addPromotionsService = addPromotionsService;
const updatePromotionsService = (promotions) => __awaiter(void 0, void 0, void 0, function* () {
    const productsData = (0, utils_1.readJSON)();
    promotions.map(e => {
        if (productsData.promotions)
            return Object.assign(productsData.promotions, e);
    });
    const keys = Object.keys(promotions);
    keys.forEach((key) => {
        return productsData.promotions[key] = promotions[key];
    });
    (0, utils_1.writeJSON)(productsData);
    return productsData.promotions;
});
exports.updatePromotionsService = updatePromotionsService;
const deletePromotionsService = (promotions) => __awaiter(void 0, void 0, void 0, function* () {
    const productsData = (0, utils_1.readJSON)();
    promotions.map((e) => {
        const keys = Object.keys(e);
        keys.forEach((key) => {
            return delete productsData.promotions[key];
        });
        console.log(productsData.promotions);
    });
    (0, utils_1.writeJSON)(productsData);
    return productsData;
});
exports.deletePromotionsService = deletePromotionsService;
//# sourceMappingURL=PromotionsService.js.map