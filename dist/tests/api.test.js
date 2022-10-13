var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const request = require("supertest");
const baseURL = "http://localhost:5000/api";
describe("GET /get-products", () => {
    it("should return 200", () => __awaiter(this, void 0, void 0, function* () {
        const response = yield request(baseURL).get("/get-products");
        expect(response.statusCode).toBe(200);
    }));
    it("should return the products", () => __awaiter(this, void 0, void 0, function* () {
        const response = yield request(baseURL).get("/get-products");
        expect(response.body.length >= 1).toBe(true);
    }));
});
describe("GET /get-promotions", () => {
    it("should return 200", () => __awaiter(this, void 0, void 0, function* () {
        const response = yield request(baseURL).get("/get-promotions");
        expect(response.statusCode).toBe(200);
    }));
    it("should return the promotions", () => __awaiter(this, void 0, void 0, function* () {
        const response = yield request(baseURL).get("/get-promotions");
        expect(Object.keys(response.body).length >= 1).toBe(true);
    }));
});
describe("POST /create-new-products", () => {
    const newProducts = [{
            number: '100',
            name: 'test',
            price: 4
        }];
    afterAll(() => __awaiter(this, void 0, void 0, function* () {
        yield request(baseURL).delete('delete-products').send(newProducts);
    }));
    it("should add a product to the json", () => __awaiter(this, void 0, void 0, function* () {
        const response = yield request(baseURL).post("/create-new-products").send(newProducts);
        expect(response.statusCode).toBe(200);
    }));
});
//# sourceMappingURL=api.test.js.map