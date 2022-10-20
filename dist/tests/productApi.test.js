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
describe("POST /create-new-products", () => {
    const newProducts = [{
            number: '100',
            name: 'test',
            price: 4
        }];
    afterAll(() => __awaiter(this, void 0, void 0, function* () {
        yield request(baseURL).delete('/delete-products').send(newProducts);
    }));
    it("should return 200", () => __awaiter(this, void 0, void 0, function* () {
        const response = yield request(baseURL).post("/create-new-products").send(newProducts);
        expect(response.statusCode).toBe(200);
    }));
});
describe("DELETE /delete-products", () => {
    const newProducts = [{
            number: '100',
            name: 'test',
            price: 4
        }];
    beforeAll(() => __awaiter(this, void 0, void 0, function* () {
        yield request(baseURL).post("/create-new-products").send(newProducts);
    }));
    it("should return 200", () => __awaiter(this, void 0, void 0, function* () {
        const response = yield request(baseURL).delete('/delete-products').send(newProducts);
        expect(response.statusCode).toBe(200);
    }));
});
describe("POST /order-products", () => {
    const newProducts = [{
            number: '1',
            name: 'test',
            price: 4
        }, {
            number: '3',
            name: 'test',
            price: 4
        }];
    const order = [{
            "number": "1",
            "quantity": 2
        }, {
            "number": "3",
            "quantity": 3
        }];
    beforeAll(() => __awaiter(this, void 0, void 0, function* () {
        yield request(baseURL).post("/create-new-products").send(newProducts);
    }));
    afterAll(() => __awaiter(this, void 0, void 0, function* () {
        yield request(baseURL).delete('/delete-products').send(newProducts);
    }));
    it("should return 200", () => __awaiter(this, void 0, void 0, function* () {
        const response = yield request(baseURL).post("/order-products").send(order);
        expect(response.statusCode).toBe(200);
    }));
    it("should return the total of the products correctly", () => __awaiter(this, void 0, void 0, function* () {
        const response = yield request(baseURL).post("/order-products");
        expect(response.body.totalCost).toBe(15);
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
describe("POST /add-promotions", () => {
    const newPromotions = [{
            "discountedElements": ["1"]
        }];
    afterAll(() => __awaiter(this, void 0, void 0, function* () {
        yield request(baseURL).delete('delete-products').send(newPromotions);
    }));
    it("should add a product to the json", () => __awaiter(this, void 0, void 0, function* () {
        const response = yield request(baseURL).post("/add-promotions").send(newPromotions);
        expect(response.statusCode).toBe(200);
    }));
});
describe("DELETE /delete-promotions", () => {
    const newPromotions = [{
            "discountedElements": ["1"]
        }];
    beforeAll(() => __awaiter(this, void 0, void 0, function* () {
        yield request(baseURL).post("/add-promotions").send(newPromotions);
    }));
    it("should add a product to the json", () => __awaiter(this, void 0, void 0, function* () {
        const response = yield request(baseURL).post("/delete-promotions").send(newPromotions);
        expect(response.statusCode).toBe(200);
    }));
});
describe("PUT /modify-promotions", () => {
    const updatedPromotions = [{
            "discountedElements": ["2"]
        }];
    afterAll(() => __awaiter(this, void 0, void 0, function* () {
        yield request(baseURL).delete('/delete-promotions').send(updatedPromotions);
    }));
    beforeAll(() => __awaiter(this, void 0, void 0, function* () {
        yield request(baseURL).post("/add-promotions").send(updatedPromotions);
    }));
    it("should add a product to the json", () => __awaiter(this, void 0, void 0, function* () {
        const response = yield request(baseURL).post("/modify-promotions").send(updatedPromotions);
        expect(response.statusCode).toBe(200);
    }));
});
//# sourceMappingURL=productApi.test.js.map