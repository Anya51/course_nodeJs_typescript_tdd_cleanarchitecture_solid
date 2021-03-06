import request from "supertest";
import app from "../config/app";
import { MongooseHelper } from "../../infra/db/mongoose/helpers/mongoose-helpers";
import { AccountSchema } from "../../infra/db/mongoose/schemas/account";

describe("SignUp Routes", () => {
  beforeAll(async () => {
    await MongooseHelper.connect(process.env.MONGO_URL);
  });

  afterAll(async () => {
    await MongooseHelper.disconnect();
  });

  beforeEach(async () => {
    const accountColletion = MongooseHelper.getCollection(
      "accounts",
      AccountSchema
    );
    await accountColletion.deleteMany({});
  });

  test("Should return an account on sucess", async () => {
    await request(app)
      .post("/api/signup")
      .send({
        name: "Fabio",
        email: "fabio@gmail.com",
        password: "123456",
        passwordConfirmation: "123456",
      })
      .expect(200);
  });
});
