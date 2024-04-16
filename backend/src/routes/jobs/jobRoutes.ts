import express from 'express';
import { createJOB } from '../../controllers/jobs/createJobController';
import authMiddleware from '../../middleware/authMiddleware';

const router= express.Router();

router.post('/cl/create-job',authMiddleware,createJOB);

export default router;