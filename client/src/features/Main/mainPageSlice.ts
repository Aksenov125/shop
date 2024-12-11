import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './api';
import {   initialStat } from './type';

const initialState:initialStat = {categories:[], message: ''};

export const categoriesThunk = createAsyncThunk('api/categories', () =>
  api.categoriesFetch(),
);
export const createCategory = createAsyncThunk(
  'category/create',
  async (category: { title: string }) => {
    return await api.featchCreateCategory(category);
  }
);
export const removeCategory = createAsyncThunk(
    'category/remove',
    ( id : number ) => api.fetchRemoveCategory(id),
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
    .addCase(removeCategory.fulfilled, (state, action) => {
        state.categories?.filter((el)=>el.id!==action.payload.id);
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.categories?.push(action.payload);
        
      })
  },
});

export default categoriesSlice.reducer;
