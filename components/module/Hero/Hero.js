import React from 'react'
import Image from 'next/image';

import image1 from "../../../public/assets/product.jpg";

function Hero() {
  return (
    <div className='w-full hidden mx-auto md:block relative'>
        <Image className='w-full h-[800px] z-10' src={image1} alt='/' width={1000} height={1000}/>
        <div className='absolute hidden md:block right-[170px] top-[150px] flex flex-col items-center leading-[40px]'>
            <h1 className='text-4xl text-orange-400 font-bold'>خرید با یک کلیک</h1>
            <h3 className='text-3xl text-red-600 font-bold'>با آسان خرید آسان خرید کنید</h3>
            <button className='bg-blue-600 mt-4 w-[300px] text-gray-200 text-[19px] rounded-[10px] hover:bg-green-500 duration-300'>دیدن محصولات</button>
        </div>
    </div>
  )
}

export default Hero