import User from "@/models/User"
import hashPassword from "@/utils/auth"
import connectDB from "@/utils/connection"

export default async function handler(req,res){
    if(req.method!=="POST"){
        return
    }

    try{
       await connectDB()
    }catch(err){
        return res.status(500).json({status:"failed",message:"Error to connection db"})
    }

    const {email,password,confirmpassword,username}=req.body

    if(!email || !password || !confirmpassword || !username){
        return res.status(422).json({status:"failde",message:"invalid data"})
    }

    const exsitingUser=await User.findOne({email:email})

    if(exsitingUser){
        return res.status(422).json({status:"failed",message:"user exsits alredy"})
    }

    const hashedPassword=await hashPassword(password)

    const newUser=await User.create({email:email,username:username,password:hashedPassword,confirmpassword:hashedPassword})

    console.log(newUser)

    res.json(201).status({status:"success",message:"user created"})
}