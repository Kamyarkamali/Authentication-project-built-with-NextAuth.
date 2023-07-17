import DetailsePage from '@/components/DetailsePage/DetailsePage'
import React from 'react'

import { useSelector } from 'react-redux'

function index() {
    const state=useSelector((state)=>state.stores.products)
  return (
    <div>
      <DetailsePage data={state}/>
    </div>
  )
}

export default index