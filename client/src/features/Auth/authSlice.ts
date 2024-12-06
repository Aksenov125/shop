import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RegUser, StateAuth } from "./type";
import * as api from './api'

const initialState: StateAuth = {user:null, message: ''}

export const authRegistration = createAsyncThunk('auth/registaration', (obj:RegUser) => api.registarationFetch(obj))




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
    }
})