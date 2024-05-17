// const express = require('express');
// const { sendOTP } = require('../controllers/otpController');
import express from "express";
import { sendOTP } from "../controllers/sendOtpContoller";
const router = express.Router();

router.post('/send-otp', sendOTP);

export default router;
