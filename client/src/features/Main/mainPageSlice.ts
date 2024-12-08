import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './api';
import { initialStat } from './type';

const initialState:initialStat = {categories:[], message: ''};

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
        state.categories = action.payload;
      })
      .addCase(categoriesThunk.rejected, (state, action) => {
        state.message = action.error.message
    })
  },
});

export default categoriesSlice.reducer;
