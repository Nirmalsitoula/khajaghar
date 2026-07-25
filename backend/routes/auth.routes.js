import express from "express"
import { signOut, signupIn, signupUp } from "../controllers/auth.controllers.js"
 const authRouter=express.Router()

authRouter.post("/signup",signupUp)
authRouter.post("/signin",signupIn)
authRouter.get("/signout",signOut)

export default authRouter