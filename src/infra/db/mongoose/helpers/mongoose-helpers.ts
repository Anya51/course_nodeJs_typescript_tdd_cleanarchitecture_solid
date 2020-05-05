import mongoose, { Mongoose, Collection, Schema } from "mongoose";
import { AccountModel } from "../../../../domain/models/account";
export const MongooseHelper = {
  client: null as Mongoose,

  async connect(uri: string): Promise<void> {
    this.client = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  },

  async disconnect(): Promise<void> {
    this.client.connection.close();
  },

  getCollection(name: string, schema?: Schema): any {
    const model = mongoose.model(name, schema);
    return model;
  },

  map: (collection: any): AccountModel => {
    const { _id, ...collectionWithoutId } = collection.toObject();
    return Object.assign({}, collectionWithoutId, { id: _id });
  },
};
