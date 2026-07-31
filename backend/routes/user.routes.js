import express from "express"
import { signOut } from "../controllers/auth.controllers.js"
import { getCurrentUser } from "../controllers/user.controllers.js"
import isAuth from "../middlewares/isAuth.js"


 const userRouter=express.Router()

userRouter.get("/current",isAuth,getCurrentUser)


export default userRouter