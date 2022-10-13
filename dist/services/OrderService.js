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
exports.serviceOrderTotal = void 0;
const utils_1 = require("./../utils/utils");
const serviceOrderTotal = (orderResponse) => __awaiter(void 0, void 0, void 0, function* () {
    const productsData = (0, utils_1.readJSON)();
    let totalOrder;
    const promotions = productsData.promotions;
    let productsPromoted = [];
    orderResponse.map((e) => {
        const product = productsData.products.find((j) => j.number === e.number);
        totalOrder = +e.quantity * product.price;
        if (promotions.twoPerOneProducts.includes(product.number))
            return productsPromoted.push(Object.assign(Object.assign({}, product), { quantity: e.quantity }));
    });
    Object.keys(promotions).map((j) => {
        // You need to modify it in order to make the promotions work
        switch (j) {
            case "discount":
                totalOrder >= j.discountAmountMin ?
                    totalOrder = -j.discountPrice :
                    totalOrder;
                break;
            case "twoPerOneProducts":
                //TODO - improve how promoted products are calculated
                if (productsPromoted.length > 0) {
                    productsPromoted.map((h) => {
                        const productTotal = h.price * h.quantity;
                        totalOrder = totalOrder - (productTotal / 2);
                    });
                }
                break;
        }
    });
    return {
        totalCost: totalOrder
    };
});
exports.serviceOrderTotal = serviceOrderTotal;
//# sourceMappingURL=OrderService.js.map