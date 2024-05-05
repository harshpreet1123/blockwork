import { Request, Response } from "express";
import Job, { IJob } from "../../models/jobs/jobsModel";

export const getAllJobs = async (req: Request, res: Response) => {
  try {
    // Fetch all jobs from the database
    const jobs: IJob[] = await Job.find();

    // Check if there are no jobs found
    if (!jobs || jobs.length === 0) {
      return res.status(404).json({ message: "No jobs found" });
    }

    // If jobs are found, return them
    res.status(200).json({ jobs: jobs });
  } catch (error) {
    console.error(`Error occurred while fetching jobs: ${error}`);
    res.status(500).send("Internal Server Error");
  }
};
