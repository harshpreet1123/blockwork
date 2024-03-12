import { Request, Response } from "express";
import Auth, { IAuth } from "../../../models/freelancer/authModel";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const login = async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, password } = req.body;
  
      // Check if user with the provided email exists
      const existingUser: IAuth | null = await Auth.findOne({ email });
  
      if (!existingUser) {
        res.status(401).json({ message: "Invalid credentials" });
        return;
      }
  
      // Compare passwords
      const passwordMatch: boolean = await bcrypt.compare(password, existingUser.password);
  
      if (!passwordMatch) {
        res.status(401).json({ message: "Invalid credentials" });
        return;
      }
  
      // Generate JWT token
      const token: string = jwt.sign({ userId: existingUser._id }, process.env.JWT_SECRET || "secret", {
        expiresIn: "1h",
      });
  
      res.status(200).json({ 'email':email,'token':token });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

  export default login;