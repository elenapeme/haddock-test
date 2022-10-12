"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readJSON = void 0;
const fs_1 = __importDefault(require("fs"));
const readJSON = () => {
    const rawdata = fs_1.default.readFileSync('./src/assets/Products.json');
    return JSON.parse(rawdata);
};
exports.readJSON = readJSON;
//# sourceMappingURL=utils.js.map