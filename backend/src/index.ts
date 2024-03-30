import express from "express";
import freelancerRoutes from "./routes/freelancer/freelancerRoutes";
import clientRoutes from "./routes/client/clientRoutes";
import jobRoutes from "./routes/jobs/jobRoutes";
import dotenv from "dotenv";
const cors = require("cors");
dotenv.config();
const port = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());

app.use("/fr", freelancerRoutes);
app.use("/cl", clientRoutes);
app.use("/jobs",jobRoutes);
app.listen(port, () => {
  console.log(`Running at ${port}`);
  console.log(`Visit http://localhost:${port}`);
});
