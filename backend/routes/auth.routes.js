import express from "express"
import { resetPassword, sendOtp, signOut, signupIn, signupUp, verifyOtp } from "../controllers/auth.controllers.js"
 const authRouter=express.Router()

authRouter.post("/signup",signupUp)
authRouter.post("/signin",signupIn)
authRouter.get("/signout",signOut)

authRouter.post("/send-otp",sendOtp)
authRouter.post("/verify-otp",verifyOtp)
authRouter.post("/reset-password",resetPassword)

export default authRouter