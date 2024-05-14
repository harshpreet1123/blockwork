// contactController.ts

import { Request, Response } from 'express';
import nodemailer from 'nodemailer';

export const sendContactEmail = (req: Request, res: Response) => {
  const { name, email, message } = req.body;

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "info.blocwork@gmail.com",
      pass: "yaavoolfoqzmmvmh",
    },
  });

  // Create email message
  const mailOptions = {
    from: "info.blocwork@gmail.com",
    to: email, // Change this to your own email address
    subject: "Contact us",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email: ", error);
      res.status(500).json({ success: false, message: "Failed to send email." });
    } else {
      console.log("Email sent: ", info.response);
      res.json({ success: true, message: "Email sent successfully." });
    }
  });
};
