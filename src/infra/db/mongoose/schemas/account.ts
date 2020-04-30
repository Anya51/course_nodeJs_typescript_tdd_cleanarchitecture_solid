import { Schema } from "mongoose";

export const AccountSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    trim: true,
  },

  password: { type: String, required: true, trim: true },
});
