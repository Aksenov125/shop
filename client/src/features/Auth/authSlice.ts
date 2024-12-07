import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RegUser, StateAuth } from "./type";
import * as api from './api'

const initialState: StateAuth = {user:null, message: ''}

export const authRegistration = createAsyncThunk('auth/registaration', (obj:RegUser) => api.registarationFetch(obj))
export const checkUser = createAsyncThunk('check/user', ()=> api.checkUserFetch())
export const logout = createAsyncThunk('logout', () => api.logoutFetch())




const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(authRegistration.fulfilled, (state, action) => {
            state.user = action.payload
            state.message = ''
        })
        .addCase(authRegistration.rejected, (state, action) => {
            state.message = action.error.message
        })
        .addCase(checkUser.fulfilled, (state, action) => {
            state.user = action.payload
            state.message = 'ok'
        })
        .addCase(checkUser.rejected, (state, action) => {
            state.message = action.error.message
        })
        .addCase(logout.fulfilled, (state, action) => {
            state.user = null
            state.message = ''
        })
        .addCase(logout.rejected, (state, action) => {
            state.message = 'error logout'
        })

    }
})

export default authSlice.reducer