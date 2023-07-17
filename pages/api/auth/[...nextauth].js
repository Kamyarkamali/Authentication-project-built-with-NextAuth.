import User from "@/models/User";
import { veryfyPassword } from "@/utils/auth";
import connectDB from "@/utils/connection";
import NextAuth from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials"


const authOptions={
    session:{strategy:"jwt"},
    providers:[
        CredentialsProvider({
            async authorize(credentials,req){
                const {email,password}=credentials
                console.log(email,password);
                try{
                    connectDB()
                }catch(error){
                    throw new Error("problem to connection to DB")
                }

                if(!email || !password){
                    throw new Error("email or password is invalid")
                }

                const user=await User.findOne({email:email})

                if(!user) throw new Error("user is not valid")

                const insValid=await veryfyPassword(password,user.password)

                if(!insValid) throw new Error("password is not valid")

                return {email}
            }
        })
    ]
}


export default NextAuth(authOptions)
