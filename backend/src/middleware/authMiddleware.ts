import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const authMiddleware = (req: any, res: Response, next: NextFunction) => {

  const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET || "secret");
    const userId: string = decoded.userId;
    req.userId=userId;
    console.log(req.userId);
    next();
    if (!userId) {
      return res.status(401).json({ error: "Unauthorized or user not found" });
    }
};

export default authMiddleware;

