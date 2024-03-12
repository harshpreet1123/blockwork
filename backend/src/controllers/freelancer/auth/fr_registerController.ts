import { Request, Response } from "express";
import bcrypt from "bcrypt";
import Auth, { IAuth } from "../../../models/freelancer/fr_AuthModel";

const register = async (req: Request, res: Response) => {
  try {
    const user: IAuth = new Auth({
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, bcrypt.genSaltSync(10)),
    });
    const savedUser = await user.save();
    console.log("User Saved:", savedUser);
    res
      .status(201)
      .json({ message: "User registered successfully", user: savedUser });
  } catch (error) {
    console.error(`Error: ${error}`);
    res.status(500).json({ error: "Registration failed" });
  }
};

export default register;
