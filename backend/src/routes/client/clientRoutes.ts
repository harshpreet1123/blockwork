import express from "express";
import authMiddleware from "../../middleware/authMiddleware";
import register from "../../controllers/client/auth/cl_registerController";
import login from "../../controllers/client/auth/cl_loginController";
import {
  addProfileController,
  checkProfileExists,
  getProfileDetails,
} from "../../controllers/client/cl_profileController";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/add-profile", authMiddleware, addProfileController);
router.get("/check-profile", authMiddleware, checkProfileExists);
router.get("/get-profile", authMiddleware, getProfileDetails);
export default router;
