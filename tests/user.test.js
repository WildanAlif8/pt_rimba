const request = require("supertest");
const baseUrl = "http://127.0.0.1:8000/api";

let userId = null;

beforeAll(async () => {
    let retries = 5;
    while (retries > 0) {
        try {
            const res = await request(baseUrl).get("/users");
            if (res.statusCode === 200) break;
        } catch (error) {
            console.log("Waiting for server...");
            await new Promise(resolve => setTimeout(resolve, 2000));
            retries--;
        }
    }
});

describe("User API Test", () => {
    test("Create User", async () => {
        const res = await request(baseUrl)
            .post("/users")
            .send({ name: "Aleza", email: `wildan${Date.now()}@gmail.com`, age: 19 });

        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty("id");
        userId = res.body.id;
    });

    test("Get Users", async () => {
        const res = await request(baseUrl).get("/users");
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    test("Get User by ID", async () => {
        const res = await request(baseUrl).get(`/users/${userId}`);
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty("id", userId);
    });

    test("Update User", async () => {
        const res = await request(baseUrl)
            .put(`/users/${userId}`)
            .send({ name: "Updated Name", age: 30 });

        expect(res.statusCode).toBe(200);
        expect(res.body.name).toBe("Updated Name");
    });

    test("Delete User", async () => {
        const res = await request(baseUrl).delete(`/users/${userId}`);
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty("message", "User deleted");
    });
});
