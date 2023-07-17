import React from 'react'

import { shorten } from '@/helpers/function'
import { useDispatch,useSelector } from 'react-redux'
import { removeItem } from '@/Redux/fecheare/prodouctlice'

function DetailsePage({data}) {
    const state=useSelector((state)=>state.stores.products)
    console.log(state)

    const dispatch=useDispatch()

    const removeHandeler=(state)=>{
        dispatch(removeItem(state))
      }

  return (
    <div className='flex flex-col flex-wrap md:flex-row items-center py-4 justify-around'>
        {!state ?(
            <span>سبد خرید خالی است</span>
        ) : (
            data.map((item)=>(
                <div className='flex flex-col items-center'> 
                <img src={item.image} alt='/' className='w-[150px]'/>
                <span className='text-gray-500 py-3'>{shorten(item.title)}</span>
                <p className='text-green-600 text-md font-bold'>{item.price} $</p>
                <button onClick={()=>removeHandeler(item.id)} className='bg-red-600 text-black text-[16px] p-[2px] rounded-md'>حذف</button>
                </div>
            ))
        )}
    </div>
  )
}

export default DetailsePage