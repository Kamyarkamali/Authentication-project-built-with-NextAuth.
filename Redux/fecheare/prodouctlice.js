import { createSlice } from "@reduxjs/toolkit";

import { calculateTotalPrice } from "@/helpers/function";

const prdouctsSlice=createSlice({
    name:"prodocuts",
    initialState:{
        products:[],
        totalPrice:0,
        loadding:false
    },
    reducers:{
        addToCart:(state,action)=>{
            const itemCart=state.products.find((item)=>item.id===action.payload)

            if(itemCart){
                itemCart.quantity++
            } else{
                state.products.push({...action.payload,quantity:1})
                state.totalPrice+=action.payload.price
            }
        },
        increment:(state,action)=>{
            const item=state.products.find((item)=>item.id===action.payload);
            if(item){
                item.quantity++
                state.totalPrice+=action.payload.price
            }
        },
        decrement:(state,action)=>{
            const item=state.products.find((item)=>item.id===action.payload)

            if(item.quantity===1){
                item.quantity=1
            }else{
                item.quantity--
                state.totalPrice-=action.payload.price
            }
        },
        removeItem:(state,action)=>{
            const removeItem=state.products.filter((item)=>item.id!==action.payload)
            state.products=removeItem
        }
    }
})


export default prdouctsSlice.reducer

export const {addToCart,increment,decrement,removeItem}=prdouctsSlice.actions