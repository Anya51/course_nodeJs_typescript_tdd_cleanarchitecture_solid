import { AddAccountRepository } from "../../../../data/protocols/add-account-repository";
import { AddAccountModel } from "../../../../domain/usecases/addaccount";
import { AccountModel } from "../../../../domain/models/account";
import { AccountSchema } from "../../mongoose/schemas/account";
import { MongooseHelper } from "../helpers/mongoose-helpers";

export class AccountMongoRepository implements AddAccountRepository {
  private readonly accountModel;
  constructor() {
    this.accountModel = MongooseHelper.getCollection("accounts", AccountSchema);
  }

  async add(accountData: AddAccountModel): Promise<AccountModel> {
    const result = await this.accountModel.create(accountData);
    const account = MongooseHelper.map(result);
    return account;
  }
}
