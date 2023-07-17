import { configureStore } from "@reduxjs/toolkit";

import prodouctlice from "./fecheare/prodouctlice";

const store=configureStore({
    reducer:{
        stores:prodouctlice
    }
})


export default store