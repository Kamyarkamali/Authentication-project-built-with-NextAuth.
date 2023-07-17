import { veryfiToken } from "@/utils/auth"

export default async function handler(req,res){
    if(req.method!=="GET"){
        return
    }

    const {token}=req.cookies
    const secretKey="ecwemefkok3idho3fvh3oheh"


    const result=veryfiToken(token,secretKey)

    if(result){
        res.status(200).json({status:"succces",data:result})
    }else{
        res.status(422).json({status:"failed",message:"user is not"})
    }

}