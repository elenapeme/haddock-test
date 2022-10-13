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
exports.deletePromotionService = exports.modifyPromotionService = exports.addPromotionService = exports.getPromotionsService = void 0;
const utils_1 = require("./../utils/utils");
const getPromotionsService = () => __awaiter(void 0, void 0, void 0, function* () {
    const promotionsData = (0, utils_1.readJSON)();
    return promotionsData.promotions;
});
exports.getPromotionsService = getPromotionsService;
const addPromotionService = () => __awaiter(void 0, void 0, void 0, function* () {
});
exports.addPromotionService = addPromotionService;
const modifyPromotionService = () => __awaiter(void 0, void 0, void 0, function* () {
});
exports.modifyPromotionService = modifyPromotionService;
const deletePromotionService = () => __awaiter(void 0, void 0, void 0, function* () {
});
exports.deletePromotionService = deletePromotionService;
//# sourceMappingURL=PromotionsService.js.map