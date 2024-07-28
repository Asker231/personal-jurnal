import { configureStore } from "@reduxjs/toolkit";
import PostSlice from "./PostSlice";


const store = configureStore({
    reducer:{
        PostSlice
    }
})
export default store
export type AppDispatch = typeof store.dispatch
export type RootStore = ReturnType<typeof store.getState>