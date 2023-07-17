import Link from 'next/link'
import React, { useEffect, useState } from 'react'

//Validate
import validate from './validate'
import { useRouter } from 'next/router'

function SingUpPage() {

  const [data,setData]=useState({
    username:"",
    email:"",
    password:"",
    confirmpassword:"",
    // isAcepted:false
  })

  const [errors,setErros]=useState({})
  const [touched,seTouched]=useState({})

  const router=useRouter()

  const changeHandeler=(e)=>{
    if(e.target.name==="isAcepted"){
      setData({...data,[e.target.name]:e.target.checked})
    }else{
      setData({...data,[e.target.name]:e.target.value})
    }
  }

  const foucsHandeler=(e)=>{
    seTouched({...touched,[e.target.name]:true})
  }

  useEffect(()=>{
    setErros(validate(data,"singup"))
  },[data,touched])

  const submitHandeler=(e)=>{
    e.preventDefault()

    if(!Object.keys(errors).length){
      console.log(data);
    }else{
      seTouched({
        username:true,
        email:true,
        password:true,
        confirmpassword:true,
        // isAcepted:true
      })
    }
  }

  const singIngHandeler=async()=>{
    const res=await fetch("/api/auth/singup",{
      method:"POST",
      body:JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const responseData=await res.json()
    if(responseData.status==="success"){
      router.push("/")
    }
    console.log(responseData)
  }

  return (
    <div>

    <form onSubmit={submitHandeler} className='flex flex-col items-center min-h-[500px] border-[3px] border-blue-400 max-w-[500px] mx-auto  mt-9 rounded-md bg-gray-100'>
        <h1 className='text-2xl text-blue-600'>ثبت نام</h1>
        <div className='flex flex-col py-8 items-center'>
        <input onFocus={foucsHandeler}  onChange={changeHandeler} value={data.username} name='username' className='border-[2px] placeholder:mr-2 placeholder:text-gray-500 border-blue-700 outline-none mt-8 w-[300px] placeholder:text-end placeholder:text-[15px] h-[34px] rounded-md'  type='text' placeholder='نام کاربری'/>
        {errors.username && touched.username && <span>{errors.username}</span>}

        <input onFocus={foucsHandeler} onChange={changeHandeler} value={data.email} name='email' className='border-[2px] placeholder:mr-2 placeholder:text-gray-500 border-blue-700 outline-none mt-8 w-[300px] placeholder:text-end placeholder:text-[15px] h-[34px] rounded-md'  type='email' placeholder='ایمیل'/>
        {errors.email && touched.email && <span>{errors.email}</span>}


        <input onFocus={foucsHandeler} onChange={changeHandeler} value={data.password} name='password' className='border-[2px] placeholder:mr-2 placeholder:text-gray-500 border-blue-700 outline-none mt-8 w-[300px] placeholder:text-end placeholder:text-[15px] h-[34px] rounded-md'  type='password' placeholder='رمز عبور'/>
        {errors.password && touched.password && <span>{errors.password}</span>}


        <input onFocus={foucsHandeler} onChange={changeHandeler} value={data.confirmpassword} name='confirmpassword' className='border-[2px] placeholder:mr-2 placeholder:text-gray-500 border-blue-700 outline-none mt-8 w-[300px] placeholder:text-end placeholder:text-[15px] h-[34px] rounded-md'  type='password' placeholder='تکرار رمز عبور'/>
        {errors.confirmpassword && touched.confirmpassword && <span>{errors.confirmpassword}</span>}

        {/* <div className='flex flex-col items-center py-5'>
          <span className='absolute'>قوانین را خوانده و قبول دارم</span>
        <input onFocus={foucsHandeler} onChange={changeHandeler} value={data.isAcepted} name='isAcepted' type="checkbox" className='border-[2px] placeholder:mr-2 h-[20px] placeholder:text-gray-500 border-blue-700 outline-none mt-8 w-[300px] placeholder:text-end placeholder:text-[15px] rounded-md relative'/>
        {errors.isAcepted && touched.isAcepted && <span>{errors.isAcepted}</span>}
        </div> */}
        

        </div>
        <div className='flex justify-center'>
            <button onClick={singIngHandeler} type='submit' className='bg-blue-700 p-2 w-[130px] rounded-md text-white font-bold hover:scale-105 duration-300'>ثبت نام</button>
        </div>
        <div className='flex py-6 gap-2'>
            <Link href={"/singin"}>
            <p className='text-blue-600'>ورود به اکانت</p>
            </Link>
            <p>اکانت دارید؟</p>
        </div>
    </form>
    </div>
  )
}

export default SingUpPage