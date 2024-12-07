import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './api';
import { initial } from './type';

const initialState:initial = {};

export const categoriesThunk = createAsyncThunk('api/categories', () =>
  api.categoriesFetch(),
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(categoriesThunk.fulfilled, (state, action) => {
        console.log( action.payload)
        state.categories = action.payload;
      })
  },
});

export default categoriesSlice.reducer;
