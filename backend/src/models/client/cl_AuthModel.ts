import { Document, Schema } from "mongoose";
import { clientDB } from "../../db/db";
const validator = require("validator");
export interface IAuth extends Document {
  email: string;
  password: string;
}

const authSchema: Schema<IAuth> = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: { validator: validator.isEmail, message: "invalid email format" },
  },
  password: {
    type: String,
    required: true,
  },
});

const Auth = clientDB.model<IAuth>("Auth", authSchema);
export default Auth;
