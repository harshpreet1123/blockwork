import express from "express";
import freelancerRoutes from './routes/freelancer/freelancerRoutes';
import clientRoutes from './routes/client/clientRoutes';
import dotenv from 'dotenv';
dotenv.config();
const port=process.env.PORT;
const app = express();
app.use(express.json());

app.use('/fr',freelancerRoutes);
app.use('/cl',clientRoutes);
app.listen(port, () => {
  console.log(`Running at ${port}`);
  console.log(`Visit http://localhost:${port}`);
});
