import { Document, Schema } from "mongoose";
import { freelancerDB } from "../../db/db";

export interface IProfile extends Document {
  user_id:string;
  username: string;
  firstname: string;
  lastname: string;
  bio: string;
  profileImg: string;
  wallets: string[];
  location: string;
  skills: string[];
  social: string[];
  phone: number;
}

const profileSchema: Schema<IProfile> = new Schema({
  user_id:{type: String,required:true,unique:true},
  username: { type: String, required: true, unique: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  bio: { type: String, required: true },
  profileImg: { type: String },
  wallets: { type: [String] },
  location: { type: String, required: true },
  skills: { type: [String], required: true },
  social: {
    type: [String]
  },
  phone: { type: Number, required: true, unique: true },
});

const Profile = freelancerDB.model<IProfile>("Profile", profileSchema);
export default Profile;
