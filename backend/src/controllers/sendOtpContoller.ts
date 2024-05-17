import nodemailer from 'nodemailer';
import dotenv from "dotenv";
dotenv.config();
// Function to generate OTP
function generateOTP(length = 4) {
  const digits = '0123456789';
  let otp = '';
  for (let i = 0; i < length; i++) {
    otp += digits[Math.floor(Math.random() * 10)];
  }
  return otp;
}

// Configure the email transporter
const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "info.blocwork@gmail.com",
      pass: process.env.EMAIL_PASS,
    },
  });

// Controller function to send OTP
export const sendOTP = async (req:any, res:any) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const otp = generateOTP();
  const mailOptions = {
    from: 'info.blocwork@gmail.com',
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is ${otp}`,
    html: `<p>Your OTP code is <b>${otp}</b></p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('OTP email sent:', otp);
    // Optionally, store the OTP in your database/session
    res.status(200).json({ message: 'OTP sent successfully', otp }); // Do not send OTP in response in production
  } catch (error) {
    console.error('Error sending OTP email:', error);
    res.status(500).json({ error: 'Failed to send OTP email' });
  }
};
