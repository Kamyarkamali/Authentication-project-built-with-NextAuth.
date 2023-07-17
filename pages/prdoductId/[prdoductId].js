import React from 'react'

function index({data}) {
  console.log(data)
  return (
    <div>index</div>
  )
}

export default index

export async function getStaticPaths(){
  const res=await fetch("https://fakestoreapi.com/products")

  const data=await res.json()

  const paths=data.map((item)=>({
    params:{
      prdoductId:item.id.toString(),
    }
  }))

  return{
    paths,
    fallback:false
  }

}


export async function getStaticProps(context){
  const {params}=context

  console.log(params);

  const res=await fetch(`https://fakestoreapi.com/products/${params.prdoductId}`)

  const data=await res.json()

  return{
    props:{
      data
    }
  }
}


