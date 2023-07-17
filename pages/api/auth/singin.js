import User from "@/models/User"
import { veryfyPassword } from "@/utils/auth"
import connectDB from "@/utils/connection"
import { serialize } from "cookie"
import { sign } from "jsonwebtoken"

export default async function handelr(req,res){
    if(req.method!=="POST"){
        return
    }


    try{
        await connectDB()
     }catch(err){
        console.log("error");
         return res.status(500).json({status:"failed",message:"Error to connection db"})
     }

     const {email,password}=req.body
     const secretKey="ecwemefkok3idho3fvh3oheh"
     const exterasiton=24*60*60

     if(!email || !password){
        return res.status(422).json({status:"failde",message:"invalid data"})
    }


    const user=await User.findOne({email:email})

    if(!user){
       res.status(422).json({status:"failed",message:"user is not exsits"}) 
    }

const isValid=await veryfyPassword(password,user.password)

    if(!isValid){
        return res.status(422).json({status:"failed",message:"userName or password is not valid"})
    }

    const tooken=sign({email},secretKey,{expiresIn:exterasiton})

    res.status(200).setHeader("Set-Cookie",serialize("token",tooken,{httpOnly:true,maxAge:exterasiton,path:"/"})).json({status:"success",message:"Login",data:{email:user.email}})
}