import nodemailer from "nodemailer"
import dotenv from "dotenv"
dotenv.config()

const transporter = nodemailer.createTransport({
  service: "Gmail",
  port: 465,
  secure: true, // use STARTTLS (upgrade connection to TLS after connecting)
auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,   // no quotes
},
});

export const sendOtpMail=async(to,otp)=>{
      await transporter.sendMail({
        from:process.env.EMAIL,
        to,
        subject: "Reset Your Password",
        html:`<p> Your OTP for password reset is <b>${otp}</b>.It expires
         in 5 minutes.</p>`
      })
}