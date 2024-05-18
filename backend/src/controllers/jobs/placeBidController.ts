import { Request, Response } from "express";
import Job from "../../models/jobs/jobsModel";
import Auth from "../../models/freelancer/fr_AuthModel";

export const placeBid = async (req: Request, res: Response) => {
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

    // Ensure bidders array exists
    if (!job.bidders) {
      job.bidders = [];
    }

    // Check if the user has already placed a bid
    if (job.bidders.includes(userId)) {
      return res.status(400).json({ message: "User has already placed a bid" });
    }

    // Add the user ID to the bidders array
    job.bidders.push(userId);

    // Save the updated job
    await job.save();

    res.status(200).json({ message: "Bid placed successfully", job });
  } catch (error) {
    console.error(`Error occurred while placing a bid: ${error}`);
    res.status(500).send("Internal Server Error");
  }
};
