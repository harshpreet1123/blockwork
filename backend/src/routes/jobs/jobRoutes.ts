import express from "express";
import { createJOB } from "../../controllers/jobs/createJobController";
import authMiddleware from "../../middleware/authMiddleware";
import { getAllJobs } from "../../controllers/jobs/getJobsController";
import { placeBid } from "../../controllers/jobs/placeBidController";
import { assignJob } from "../../controllers/jobs/assignJobController";
import { completeJob } from "../../controllers/jobs/completeJobController";

const router = express.Router();

router.post("/create-job", authMiddleware, createJOB);
router.get("/get-jobs", getAllJobs);
router.post("/place-bid", authMiddleware, placeBid);
router.post("/assign-job", assignJob);
router.post("/complete-job", authMiddleware, completeJob);

export default router;
