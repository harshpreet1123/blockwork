import express from "express";
import freelancerAuthRoutes from './routes/freelancer/authRoutes';
import profileRoutes from './routes/freelancer/profileRoutes';
const port=5000;
const app = express();
app.use(express.json());

app.use('/freelancer',freelancerAuthRoutes);
app.use('/xyz',profileRoutes);
app.listen(port, () => {
  console.log(`Running at ${port}`);
  console.log(`Visit http://localhost:${port}`);
});
