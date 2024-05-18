import { Request, Response } from "express";
import Job from "../../models/jobs/jobsModel";

export const assignJob = async (req: Request, res: Response) => {
  try {
    const { jobId, userId } = req.body;

    // Find the job by ID
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    // Ensure bidders array exists
    if (!job.bidders) {
      job.bidders = [];
    }

    // Check if the user has already placed a bid
    if (!job.bidders.includes(userId)) {
      return res
        .status(400)
        .json({ message: "This freelancer has not placed the bid" });
    }

    // Add the user ID to the bidders array
    job.assigned_to = userId;

    // Save the updated job
    await job.save();

    res
      .status(200)
      .json({ message: "Job Assigned to Freelancer successfully", job });
  } catch (error) {
    console.error(`Error occurred while Assigning the job: ${error}`);
    res.status(500).send("Internal Server Error");
  }
};
