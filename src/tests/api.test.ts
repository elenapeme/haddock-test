const request = require("supertest")

const baseURL = "http://localhost:5000/api"

describe("GET /get-products", () => {
    it("should return 200", async () => {
        const response = await request(baseURL).get("/get-products")
        expect(response.statusCode).toBe(200)
    })
        
    it("should return the products", async () => {
        const response = await request(baseURL).get("/get-products")
        expect(response.body.length >= 1).toBe(true)
    })
    })

describe("GET /get-promotions", () => {
    it("should return 200", async () => {
        const response = await request(baseURL).get("/get-promotions")
        expect(response.statusCode).toBe(200)
    })
        
    it("should return the promotions", async () => {
        const response = await request(baseURL).get("/get-promotions")
        expect(Object.keys(response.body).length >= 1).toBe(true)
    })
})

describe("POST /create-new-products", () => {
    const newProducts = [{
        number: '100',
        name: 'test',
        price: 4
    }]

    afterAll(async () => {
        await request(baseURL).delete('delete-products').send(newProducts)
    })

    it("should add a product to the json", async () => {
        const response = await request(baseURL).post("/create-new-products").send(newProducts)
        expect(response.statusCode).toBe(200)
    })
});