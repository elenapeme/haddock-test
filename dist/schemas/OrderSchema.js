"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderSchema = void 0;
const Joi_1 = __importDefault(require("Joi"));
exports.OrderSchema = Joi_1.default.object({
    totalCost: Joi_1.default.number().min(1).required()
});
//# sourceMappingURL=OrderSchema.js.map