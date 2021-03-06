import { MongooseHelper } from "../helpers/mongoose-helpers";
import { AccountMongoRepository } from "./account";
import { AccountSchema } from "../schemas/account";

describe("Account Mongo Repository", () => {
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

  test("Should return an account on sucess ", async () => {
    const sut = new AccountMongoRepository();
    const account = await sut.add({
      name: "any_name",
      email: "any_email@mail.com",
      password: "any_password",
    });
    expect(account).toBeTruthy();
    expect(account.id).toBeTruthy();
    expect(account.name).toBe("any_name");
    expect(account.email).toBe("any_email@mail.com");
    expect(account.password).toBe("any_password");
  });
});
