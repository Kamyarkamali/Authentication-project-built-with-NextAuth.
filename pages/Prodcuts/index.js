import ProdcutsPage from '@/components/templates/ProdcutsPage/ProdcutsPage'
import React from 'react'

function index({res}) {
  return (
    <div>
        <ProdcutsPage data={res}/>
    </div>
  )
}

export default index


export async function getStaticProps(){
  const data=await fetch("https://fakestoreapi.com/products")

  const res=await data.json()

  return{
      props:{
        res
      }
  }
}