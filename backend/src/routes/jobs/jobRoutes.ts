import express from "express";
import { createJOB } from "../../controllers/jobs/createJobController";
import authMiddleware from "../../middleware/authMiddleware";
import { getAllJobs } from "../../controllers/jobs/getJobsController";

const router = express.Router();

router.post("/create-job", authMiddleware, createJOB);
router.get("/get-jobs", getAllJobs);

export default router;
