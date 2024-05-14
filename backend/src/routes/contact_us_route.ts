// contactRoutes.ts

import express from 'express';
import { sendContactEmail } from '../controllers/contact_us_controller';

const router = express.Router();

router.post('/', sendContactEmail);

export default router;
