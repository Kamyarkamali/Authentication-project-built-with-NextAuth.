import React, { useEffect, useState } from 'react'

//icon
import { AiOutlineArrowUp } from 'react-icons/ai'

function Button() {
    const [showButton,setShowButton]=useState(false);
    
    const hadnelscroll=()=>{
       if(window.screenY>100){
        setShowButton(true)
       }else{
        setShowButton(false)
       }
    }

    const clickHandeler=()=>{
        window.scrollTo({top:0,behavior:"smooth"})
    }

    useEffect(()=>{
        window.addEventListener("scroll",hadnelscroll)
        return()=>{
            window.removeEventListener("scroll",hadnelscroll)
        }
    },[])


  return (
    <div>
        <button onClick={clickHandeler} className='mr-1 bg-blue-700 p-1 rounded-full'>
            <AiOutlineArrowUp size={20} color='white'/>
        </button>
    </div>
  )
}

export default Button