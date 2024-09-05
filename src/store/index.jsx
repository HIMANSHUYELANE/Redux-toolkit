import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/usersSice"
const store = configureStore({
    reducer:{
        users: userSlice
    }
})
// console.log(store)
export default store