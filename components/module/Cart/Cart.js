import React, { useEffect } from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { shorten } from '@/helpers/function'
import Link from 'next/link'

import { useSession } from 'next-auth/react'

///Redux
import { useSelector,useDispatch } from 'react-redux';
import { addToCart,increment ,decrement,removeItem} from '@/Redux/fecheare/prodouctlice';

function Cart({data}) {

 const state=useSelector((state)=>state.stores)

  const {status}=useSession()

 const dispatch=useDispatch()

// console.log(state)


  const addHandeler=(data)=>{
    dispatch(addToCart(data))
  }

  const incerementHandeler=()=>{
    dispatch(increment(data.id))
  }

  const decrementHandeler=(data)=>{
    dispatch(decrement(data))
  }

  const removeHandeler=(data)=>{
    dispatch(removeItem(data))
  }


  useEffect(()=>{
    if(status==="unauthenticated")window.location.href="/singin"
  },[])

  return (
    <>
    <div className='flex m-[30px] flex-col p-5 shadow-sm hover:shadow-md duration-300 rounded-lg hover:shadow-black shadow-black  items-center justify-between'>
        <p className='text-gray-600 font-bold mb-4'>{shorten(data.title)}</p>
    <Link href={`/prdoductId/${data.id}`}>
        <img className='w-[200px] h-[200px]' src={data.image} alt={data.title}/>
    </Link>
        <div className='flex items-center justify-start mt-3 w-full'>
        <span className='text-red-800 flex items-center text-2xl justify-center w-full'>{data.price} <BsCurrencyDollar/></span>
        </div>
        <div className='flex items-center gap-6 mt-5'>
            

        <button onClick={()=>addHandeler(data)} className='bg-green-600 text-red-600 text-[16px] p-[2px] rounded-md w-[130px] h-[37px] hover:text-white duration-200'>افزودن</button>
        {/* <button onClick={incerementHandeler} className='bg-green-600 text-red-600 text-[16px] p-[2px] rounded-md'>+</button> */}
        {/* <button onClick={()=>decrementHandeler(data.id)} className='bg-red-600 text-black text-[16px] p-[2px] rounded-md'>کم کردن</button> */}
        {/* <button onClick={()=>removeHandeler(data.id)} className='bg-red-600 text-black text-[16px] p-[2px] rounded-md'>حذف</button> */}
        </div>
    </div>
    </>
  )
}

export default Cart