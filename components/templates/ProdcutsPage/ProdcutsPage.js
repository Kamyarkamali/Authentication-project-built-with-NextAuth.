import Cart from '@/components/module/Cart/Cart'
import React, { useEffect, useState } from 'react'

function ProdcutsPage({data}) {

  const [priceProducts,setPriceProducts]=useState("")

  const [filteredData,setFilteredDta]=useState([])

  const [show,setShow]=useState(false)


  useEffect(()=>{

    if(priceProducts==="low"){
      const filteredProduts=data.filter((item)=>item.price <100)
      setFilteredDta(filteredProduts)
    }else if(priceProducts==="high"){
      const filteredProduts=data.filter((item)=>item.price>=100)
      setFilteredDta(filteredProduts)
    }else{
      setFilteredDta([])
    }

    console.log(priceProducts)

  },[data,priceProducts])

  console.log(filteredData)
  return (
    <>
    <div className='flex justify-center py-9 gap-5' onClick={()=>setShow(!show)}>
      <button onClick={()=>setPriceProducts("low")} className='bg-red-300 p-1 text-white rounded-sm'>قیمت کم</button>
      <button onClick={()=>setPriceProducts("high")} className='bg-green-500 p-1 text-white rounded-sm'>قیمت زیاد</button>
    </div>
    <div className='max-w-[1200px] m-4 mx-auto flex justify-around py-10 flex-wrap'>
      {show? filteredData.map((item)=>(
        <img src={item.image} className='w-[200px]'/>
      )) : data.map((item)=>(
        <Cart data={item} key={item.id}/>
      ))}
    </div>
        </>
  )
}

export default ProdcutsPage

