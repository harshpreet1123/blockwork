import express from "express";
import register from "../../controllers/freelancer/auth/fr_registerController";
import login from "../../controllers/freelancer/auth/fr_loginController";
import authMiddleware from "../../middleware/authMiddleware";
import {
  addProfileController,
  checkProfileExists,
  getProfileDetails,
} from "../../controllers/freelancer/fr_profileController";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/add-profile", authMiddleware, addProfileController);
router.get("/check-profile", authMiddleware, checkProfileExists);
router.get("/get-profile", authMiddleware, getProfileDetails);
export default router;
