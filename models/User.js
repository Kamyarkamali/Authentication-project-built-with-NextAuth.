import { Schema,model,models } from "mongoose";


const userScema=new Schema({
    email:{
        type:String,
        requride:true
    },
    username:{
        type:String,
        requride:true,
    },
    password:{
        type:String,
        requride:true
    },
    confirmpassword:{
        type:String,
        requride:true
    },
    createAt:{
        type:Date,
        default:()=>Date.now()
    }
})


const User=models.User || model("User",userScema)

export default User