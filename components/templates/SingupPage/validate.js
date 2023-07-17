export const validate=(data,type)=>{
    const errors={}

    

    if(!data.email){
        errors.email="ایمیل را وارد کنید"
    }else if(!/\S+@\S+\.\S+/.test(data.email)){
        errors.email="آدرس ایمیل معتبر نمیباشد"
    } else{
        delete errors.email
    }

    if(!data.password){
        errors.password="پسورد را وارد کنید"
    }else if(data.password.length<6){
        errors.password="تعداد کارکترها کم است"
    }else{
        delete errors.password
    }

    

    if(type==="singup"){
        if(!data.username.trim()){
            errors.username="نام کاربری را وارد کنید"
        }else{
            delete errors.username
        }

        if(!data.confirmpassword){
            errors.confirmpassword="پسورد را دوباره تایپ کنید"
        }else if(data.confirmpassword!==data.password){
            errors.confirmpassword="پسورد ها مثل هم نیست"
        }else{
            delete errors.confirmpassword
        }
    
        if(data.isAcepted){
            delete errors.isAcepted
        }else{
            errors.isAcepted="قوانین را قبول کنید"
        }
    }

    return errors
}


export default validate;