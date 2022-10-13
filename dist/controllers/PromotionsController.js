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
exports.deletePromotions = exports.modifyPromotions = exports.addPromotions = exports.getPromotions = void 0;
const PromotionsService_1 = require("./../services/PromotionsService");
const getPromotions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const promotions = yield (0, PromotionsService_1.getPromotionsService)();
        res.status(200).send(promotions);
    }
    catch (e) {
        res.status(500).send(e.message);
    }
});
exports.getPromotions = getPromotions;
const addPromotions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const promotions = yield (0, PromotionsService_1.addPromotionsService)(req.body);
        res.status(200).send(promotions);
    }
    catch (e) {
        res.status(500).send(e.message);
    }
});
exports.addPromotions = addPromotions;
const modifyPromotions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const promotions = yield (0, PromotionsService_1.updatePromotionsService)(req.body);
        res.status(200).send(promotions);
    }
    catch (e) {
        res.status(500).send(e.message);
    }
});
exports.modifyPromotions = modifyPromotions;
const deletePromotions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const promotions = yield (0, PromotionsService_1.deletePromotionsService)(req.body);
        res.status(200).send(promotions);
    }
    catch (e) {
        res.status(500).send(e.message);
    }
});
exports.deletePromotions = deletePromotions;
//# sourceMappingURL=PromotionsController.js.map