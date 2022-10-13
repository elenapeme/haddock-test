"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeJSON = exports.readJSON = void 0;
const fs_1 = __importDefault(require("fs"));
const readJSON = () => {
    const rawdata = fs_1.default.readFileSync('./src/assets/Products.json');
    return JSON.parse(rawdata);
};
exports.readJSON = readJSON;
const writeJSON = (data) => {
    fs_1.default.writeFile("./src/assets/Products.json", JSON.stringify(data, null, 4), err => {
        if (err)
            console.log("Error writing file:", err);
    });
};
exports.writeJSON = writeJSON;
//# sourceMappingURL=utils.js.map