import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const authMiddleware = (req: any, res: Response, next: NextFunction) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET || "secret");
    req.userId = decoded._id;
    next();
  } catch (error) {
    console.error(`Error: ${error}`);
    return res.status(401).json({ error: "Unauthorized" });
  }
};

export default authMiddleware;
