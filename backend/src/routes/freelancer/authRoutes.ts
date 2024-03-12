import express from 'express';
import register  from '../../controllers/freelancer/auth/registerController';
import login from '../../controllers/freelancer/auth/loginController';

const router= express.Router();

router.post('/register',register);
router.post('/login',login);
export default router;