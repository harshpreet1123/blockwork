import express from "express";
import { addProfileController } from "../../controllers/freelancer/profileController";
import authMiddleware from "../../middleware/authMiddleware";

const router = express.Router();

// Route to add profile data (protected with JWT token)
router.post("/add-profile", addProfileController);

export default router;