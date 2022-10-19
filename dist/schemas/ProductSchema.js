"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsArraySchema = void 0;
const joi_1 = __importDefault(require("joi"));
const ProductSchema = joi_1.default.object({
    number: joi_1.default.string().min(3).required(),
    name: joi_1.default.string().min(3).required(),
    price: joi_1.default.number().min(1).required()
});
exports.ProductsArraySchema = joi_1.default.array().items(ProductSchema).required();
//# sourceMappingURL=ProductSchema.js.map