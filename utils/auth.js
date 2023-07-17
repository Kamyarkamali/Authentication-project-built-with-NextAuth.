import { compare, hash } from "bcryptjs";
import { verify } from "jsonwebtoken";


async function hashPassword(password){
    const hashPassword=await hash(password,12)
    return hashPassword
}


async function veryfyPassword(password,hashPassword){
    const isValid=await compare(password,hashPassword)
    return isValid
}

function veryfiToken(token,secretKey){
    
    try{
        const result=verify(token,secretKey)
        return {email:result.email}
    }catch(err){
        return false
    }
}


export default hashPassword

export {veryfyPassword,veryfiToken};