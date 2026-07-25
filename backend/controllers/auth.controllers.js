import gentoken from "../utils/token.js"

 export const signupUp=async (req,res)=>{
    try {
        const{fullName,email,password,mobile,role} =req.body
        const user =await User.findOne({email})
        if(user){
            return  res.status(400).json({message: "user Aready exist"})

        }
        if(password.length<6){
              return  res.status(400).json({message: "Passwod must be at least 6 character"})

        }
        if(mobile.length<10){
              return  res.status(400).json({message: "mobile number must be  10 digits"})
        }
      
        const hashedPassword=await bcrypt.hash(password,10)
        user=await User.create({
            fullName,
            email,
            role,
            mobile,
            password:hashedPassword
        })


        const token=await gentoken(user._id)
        res.cookie("token",token,{
            secure:false,
            sameSite:"strict",
            maxAge:7*24*60*60*1000,
            httpOnly: true
        })

        return res.status(201).json(user)


    } catch (error) {
        return res.status(500).json(`signup error ${error}`)
    }
}




export const signupIn=async (req,res)=>{
    try {
        const{email,password} =req.body
        const user =await User.findOne({email})
        if(!user){
            return  res.status(400).json({message: "user doesnot exist"})

        }
        
      
     const isMatch=await bcrypt.compare(password,user.password)
     if(!isMatch){
        return res.status(400).json({message:"incorrect password"})
     }


        const token=await gentoken(user._id)
        res.cookie("token",token,{
            secure:false,
            sameSite:"strict",
            maxAge:7*24*60*60*1000,
            httpOnly: true
        })

        return res.status(200).json(user)


    } catch (error) {
        return res.status(500).json(`sign In error ${error}`)
    }
}

 export const signOut=async(req,res)=>{
    try {
        res.clearcookie("token")
        return res.status(200).json({ message:"log out sucessfully"})
    } catch (error) {
               return res.status(500).json(`sign out error ${error}`)
    }
 }