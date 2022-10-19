"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionsArraySchema = void 0;
const Joi_1 = __importDefault(require("Joi"));
const PromotionSchema = Joi_1.default.object().pattern(/^[a-zA-Z]+$/, Joi_1.default.alternatives().try(Joi_1.default.string(), Joi_1.default.array(), Joi_1.default.object()));
exports.PromotionsArraySchema = Joi_1.default.array().items(PromotionSchema).required();
//# sourceMappingURL=PromotionSchema.js.map