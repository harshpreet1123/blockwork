import { Request, Response } from "express";
import Job, { IJob } from "../../models/jobs/jobsModel";
import Auth from "../../models/client/cl_AuthModel";

export const createJOB = async (req: any, res: Response) => {
  try {
    var userId = req.userId;
    console.log(userId);
    const user = await Auth.findById(Object(userId));
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const { title, description, attachments, budget, time } = req.body;

    const newJobData: IJob = new Job({
      title,
      description,
      author: userId,
      attachments: attachments || [],
      budget: budget,
      time: time,
    });

    const newJob: IJob = await Job.create(newJobData);
    res
      .status(201)
      .json({ message: "Profile created successfully", job: newJob });
  } catch (e) {
    console.error(`Error occured while fetching the user : ${e}`);
    return res.status(500).send("Internal Server Error");
  }
};
