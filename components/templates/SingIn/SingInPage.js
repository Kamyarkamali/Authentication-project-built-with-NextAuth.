import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'

//Validate
import validate from '../SingupPage/validate'
import { useRouter } from 'next/router'

//next auth
import {signIn} from "next-auth/react"

function SingInPage() {

  const [dataa,setData]=useState({
    // username:"",
    email:"",
    password:"",
    // confirmpassword:"",
    // isAcepted:false
  })


  const [errors,setErros]=useState({})
  const [touched,seTouched]=useState({})

  const {data,status}=useSession()
  console.log({data,status})

  const router=useRouter()

  const changeHandeler=(e)=>{
    if(e.target.name==="isAcepted"){
      setData({...dataa,[e.target.name]:e.target.checked})
    }else{
      setData({...dataa,[e.target.name]:e.target.value})
    }
  }

  const foucsHandeler=(e)=>{
    seTouched({...touched,[e.target.name]:true})
  }

  useEffect(()=>{
    setErros(validate(dataa,"singin"))
  },[data,touched])


  useEffect(()=>{
    if(status==="authenticated") router.push("/")
  },[status])


  const submitHandeler=(e)=>{
    e.preventDefault()

    if(!Object.keys(errors).length){
      console.log(dataa);
    }else{
      seTouched({
        // username:true,
        email:true,
        password:true,
        // confirmpassword:true,
        // isAcepted:true
      })
    }
  }

  // const singIngHandeler=async()=>{
  //   const res=await fetch("/api/auth/singin",{
  //     method:"POST",
  //     body:JSON.stringify(data),
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   })
  //   const responseData=await res.json()
  //   console.log(responseData)
  // }

  const singIngHandeler=async()=>{
    const { email, password } = dataa;
    const res=await signIn("credentials",{
      email,
      password,
      redirect:false
    })
    console.log(res);
  }

  return (
    <div>

    <form onSubmit={submitHandeler} className='flex flex-col items-center min-h-[500px] border-[3px] border-blue-400 max-w-[500px] mx-auto  mt-9 rounded-md bg-gray-100'>
        <h1 className='text-2xl text-blue-600'>ورود به اکانت</h1>
        <div className='flex flex-col py-8 items-center'>
        {/* <input onFocus={foucsHandeler}  onChange={changeHandeler} value={data.username} name='username' className='border-[2px] placeholder:mr-2 placeholder:text-gray-500 border-blue-700 outline-none mt-8 w-[300px] placeholder:text-end placeholder:text-[15px] h-[34px] rounded-md'  type='text' placeholder='نام کاربری'/>
        {errors.username && touched.username && <span>{errors.username}</span>} */}

        <input onFocus={foucsHandeler} onChange={changeHandeler} value={dataa.email} name='email' className='border-[2px] placeholder:mr-2 placeholder:text-gray-500 border-blue-700 outline-none mt-8 w-[300px] placeholder:text-end placeholder:text-[15px] h-[34px] rounded-md'  type='email' placeholder='ایمیل'/>
        {errors.email && touched.email && <span>{errors.email}</span>}


        <input onFocus={foucsHandeler} onChange={changeHandeler} value={dataa.password} name='password' className='border-[2px] placeholder:mr-2 placeholder:text-gray-500 border-blue-700 outline-none mt-8 w-[300px] placeholder:text-end placeholder:text-[15px] h-[34px] rounded-md'  type='password' placeholder='رمز عبور'/>
        {errors.password && touched.password && <span>{errors.password}</span>}


        {/* <input onFocus={foucsHandeler} onChange={changeHandeler} value={data.confirmpassword} name='confirmpassword' className='border-[2px] placeholder:mr-2 placeholder:text-gray-500 border-blue-700 outline-none mt-8 w-[300px] placeholder:text-end placeholder:text-[15px] h-[34px] rounded-md'  type='password' placeholder='تکرار رمز عبور'/>
        {errors.confirmpassword && touched.confirmpassword && <span>{errors.confirmpassword}</span>} */}

        {/* <div className='flex flex-col items-center py-5'>
          <span className='absolute'>قوانین را خوانده و قبول دارم</span>
        <input onFocus={foucsHandeler} onChange={changeHandeler} value={data.isAcepted} name='isAcepted' type="checkbox" className='border-[2px] placeholder:mr-2 h-[20px] placeholder:text-gray-500 border-blue-700 outline-none mt-8 w-[300px] placeholder:text-end placeholder:text-[15px] rounded-md relative'/>
        {errors.isAcepted && touched.isAcepted && <span>{errors.isAcepted}</span>}
        </div> */}
        

        </div>
        <div className='flex justify-center'>
            <button onClick={singIngHandeler} type='submit' className='bg-blue-700 p-2 w-[130px] rounded-md text-white font-bold hover:scale-105 duration-300'>ورود</button>
        </div>
        <div className='flex py-6 gap-2'>
            <Link href={"/singup"}>
            <p className='text-blue-600'>ثبت نام</p>
            </Link>
            <p>میخواهید اکانت بسازید؟</p>
        </div>
    </form>
    </div>
  )
}

export default SingInPage