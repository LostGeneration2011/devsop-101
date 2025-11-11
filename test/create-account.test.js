const request = require("supertest");
const { expect } = require("chai");
const app = require("../src/app");


describe("POST /accounts", () => {
  it("should return status 201 with json body & create a new account", async () => {
    const payload = { name: "Donald Trump", email: "dt@us.a" };
    const res = await request(app)
      .post("/accounts")
      .send(payload)
      .set("Accept", "application/json");

    expect(res.status).to.equal(201);
    expect(res.body).to.include.keys("id", "name", "email");
    expect(res.body.name).to.equal(payload.name);
    expect(res.body.email).to.equal(payload.email);
  });
});

describe("POST /accounts", () => {});
 a96ee25b01b33705da8c3d9c0373b7e35b4be260
