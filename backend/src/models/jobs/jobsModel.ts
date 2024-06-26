import { Document, Schema } from "mongoose";
import { jobDB } from "../../db/db";

// Define the interface for attachment and deliverable objects
interface IAttachment {
  name: string;
  url: string;
}

export interface IJob extends Document {
  job_id: number;
  title: string;
  description: string;
  attachments?: IAttachment[];
  deliverables?: IAttachment[];
  tags: string[];
  status?: string;
  assigned_to?: string;
  bidders?: string[];
  author: string;
  budget: number;
  time: string;
  creation_time: Date;
  assigning_time?: Date;
}

const jobSchema: Schema<IJob> = new Schema({
  job_id: { type: Number, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  attachments: [
    {
      name: { type: String, required: true },
      url: { type: String, required: true },
    },
  ],
  deliverables: [
    {
      name: { type: String, required: true },
      url: { type: String, required: true },
    },
  ],
  tags: { type: [String], required: true },
  status: { type: String, default: "open" },
  assigned_to: { type: String },
  bidders: { type: [String], default: [] },
  author: { type: String, required: true },
  budget: { type: Number, required: true },
  time: { type: String, required: true },
  creation_time: { type: Date, default: Date.now },
  assigning_time: { type: Date },
});

// Pre-save middleware to auto-increment job_id
jobSchema.pre("save", async function (this: IJob, next) {
  if (this.isNew) {
    try {
      const lastJob = await Job.findOne({}, {}, { sort: { job_id: -1 } });
      if (lastJob) {
        this.job_id = lastJob.job_id + 1;
      } else {
        this.job_id = 1;
      }
      next();
    } catch (error) {
      console.log("Error while incrementing: ", error);
    }
  } else {
    next();
  }
});

const Job = jobDB.model<IJob>("Job", jobSchema);
export default Job;
