import React from 'react'

import Image from 'next/image'

//images
import image1 from "../../public/whay/easy-shopping-3989963-3311154.png"
import image2 from "../../public/whay/png-transparent-delivery-computer-icons-restaurant-home-delivery-miscellaneous-angle-text.png"
import image3 from "../../public/whay/Support-icon-by-arus.jpg"
import image4 from "../../public/whay/warranty-guarantee-icon-Graphics-9510579-1.jpg"

const whaySouport=[
    {id:1,image:image1,title:"خرید آسان"},
    {id:2,image:image2,title:"ارسال سریع"},
    {id:3,image:image3,title:"پشتیبانی همیشگی"},
    {id:4,image:image4,title:"ضمانت خرید"},
]

function WhayShop() {
  return (
    <div className='py-9'>
    <h1 className='text-center mb-5 text-2xl text-blue-500'>چرا باید از آسان خرید , خرید کنیم</h1>
    <div className='flex gap-7 flex-col items-center  md:flex-row md:justify-around max-w-[1200px] mx-auto'>
        {whaySouport.map((item)=>(
            <div key={item.id} className='border-[2px] rounded-lg bg-slate-100 border-black p-3 w-[300px] h-[160px] hover:scale-105 duration-300 cursor-pointer flex flex-col items-center'> 
            <Image src={item.image} alt='/' width={100} height={200}/>
            <span className='text-xl text-orange-500 font-bold'>{item.title}</span>
            </div>
        ))}
    </div>
        </div>
  )
}

export default WhayShop