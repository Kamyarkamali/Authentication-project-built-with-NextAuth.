import Link from 'next/link';
import React, {useState } from 'react'
import { useSession } from 'next-auth/react';
///Icons
import {BsPersonFill} from "react-icons/bs";
import {AiOutlineShopping} from "react-icons/ai"

import { AiOutlineClose } from 'react-icons/ai';
import { BsJustify } from 'react-icons/bs';

import { BsInstagram } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import Button from '@/components/element/Button';
import { useSelector } from 'react-redux';



//navbar ul
const navbar=[
    {id:4,title:"راه های تماس",path:"/conect"},
    {id:3,title:"درباره ما",path:"/about"},
    {id:2,title:"محصولات",path:"/Prodcuts"},
    {id:1,title:"خانه",path:"/"},
]


///my addres link
const instagram="https://www.instagram.com/kamyr_02111/";
const linkdin="https://www.linkedin.com/in/kamyar-kamali-671a5822b/";
const girhub="https://github.com/Kamyarkamali";

function Navbar() {
    
    const [open,setIsOpen]=useState(false)
    const router=useRouter()

    ///redux
    const state=useSelector((state)=>state.stores.products)


    const {status}=useSession()

    const openHandeler=()=>{
        setIsOpen(!open)
    }

    const singoutHandeler=()=>{
        signOut()
        router.push("/singin")
    }
    

  return (
    <>
    <div className='max-w-[1430px] sticky z-[300] top-0 bg-yellow-400 p-2 flex justify-between items-center'>
        <div onClick={openHandeler} className='relative md:hidden'>
        {!open?<BsJustify size={30} className='cursor-pointer' color='#444'/> : <AiOutlineClose size={30} className='cursor-pointer'/>}
        {open&&<div className={!open ?'absolute w-[200px]  rounded-md bg-slate-300 h-screen':'absolute w-[200px] rounded-md bg-slate-300 h-screen'}>
            <ul className='flex items-center flex-col py-9 text-gray-700 font-bold'>
                {navbar.map((item)=>(
                    <Link key={item.id} href={item.path}>
                    <li className='mt-9' key={item.id}>{item.title}</li>
                    </Link>
                ))}

                {status==="unauthenticated" ? (<>
                <div className='flex justify-around py-9 w-full'>
                    <Link href={"/singup"}>
                    <button className='bg-green-500 p-1 rounded-md text-white font-bold w-[70px]'>ثبت نام</button>
                    </Link>
                    <Link href={"/singin"}>
                    <button className='bg-blue-500 p-1 rounded-md text-white font-bold w-[70px]'>ورود</button>
                    </Link>
                </div>
                </>) : null}
                <div className='flex py-9 justify-around items-center w-full'>
                    <Link href={instagram}>
                    <BsInstagram size={25} color='red'/>
                    </Link>
                    <Link href={linkdin}>
                    <AiFillLinkedin size={25} color='blue'/>
                    </Link>
                    <Link href={girhub}>
                    <AiFillGithub size={25} color='black'/>
                    </Link>
                </div>
                {status==="authenticated" ? (<>
                <button onClick={singoutHandeler}>خروج</button>
                </>) : null}
            </ul>
        </div>}

        </div>
        {status==="unauthenticated" ? (<>
        <div className='hidden md:block'>
            <Link href={"/singup"}>
            <button className='flex bg-red-500 justify-center rounded-lg hover:scale-105 duration-300 items-center text-white p-1 w-[130px]'>
                <BsPersonFill/>
                <p>ورود / ثبت نام</p>
                </button>
            </Link>
        </div>
        </>) : null}

        {status==="authenticated" ? (<>
            <button onClick={singoutHandeler} className='flex items-center hidden md:block bg-blue-300 p-1 text-gray-500 rounded-lg'>خروج</button>
        </>) : null}

        <div className='md:flex items-center gap-3 hidden md:block'>
            <button className='bg-blue-600 text-white font-bold p-1 rounded-lg'>برام پیدا کن</button>
            <input placeholder='جست و جو' className='placeholder:text-right w-[200px] h-[30px] rounded-md placeholder:text-[14px] placeholder:mr-3 outline-none border-[2px] border-blue-500'/>
        </div>

        <div className='flex items-center'>
            <Link href={"/ShoppingCard"}>
            <AiOutlineShopping size={30} color='blue' className='relative'/>
            <span className='absolute text-xl text-white bg-red-400 p-[2px] rounded-full md:right-7 md:top-0'>{state.length}</span>
            </Link>
        </div>

    </div>
    <div className='bg-orange-500 p-2 text-white text-xl hidden md:block'>
        <ul className='flex justify-between'>
            {navbar.map((item)=>(
                <Link key={item.id} href={item.path}>
                <li key={item.id}>{item.title}</li>
                </Link>
            ))}
        </ul>
    </div>
    <div className='fixed right-0 bottom-[1rem] z-[100]'>
    <Button/>
    </div>
    </>
  )
}

export default Navbar