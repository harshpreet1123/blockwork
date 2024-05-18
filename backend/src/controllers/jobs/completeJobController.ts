import { Request, Response } from "express";
import Job from "../../models/jobs/jobsModel";
import Auth from "../../models/freelancer/fr_AuthModel";

export const completeJob = async (req: Request, res: Response) => {
  try {
    const { jobId } = req.body;
    const userId = req.body.userId;

    // Validate user ID
    const user = await Auth.findById(Object(userId));
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Find the job by ID
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    if (job.assigned_to != userId) {
      return res
        .status(404)
        .json({ message: "Not Authorized to Change Status" });
    }

    job.status = "completed";

    // Save the updated job
    await job.save();

    res.status(200).json({ message: "Job Status updated successfully", job });
  } catch (error) {
    console.error(`Error while updating the job status: ${error}`);
    res.status(500).send("Internal Server Error");
  }
};
