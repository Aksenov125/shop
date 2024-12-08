import { configureStore } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux";
import authSlice from '../features/Auth/authSlice'
import  categoriesSlice from '../features/Main/mainPageSlice'



export const store = configureStore({
    reducer:{
        auth:authSlice,
        categories:categoriesSlice
    }
})

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>