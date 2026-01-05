import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import type { IArticle, IAPIResponse } from '../types';

interface ArticlesState {
  items: IArticle[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: ArticlesState = {
  items: [],
  status: 'idle',
};

export const fetchArticles = createAsyncThunk('articles/fetchArticles', async () => {
  const response = await axios.get<IAPIResponse>('https://api.spaceflightnewsapi.net/v4/articles?limit=50'); 
  return response.data.results;
});

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchArticles.fulfilled, (state, action: PayloadAction<IArticle[]>) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchArticles.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default articlesSlice.reducer;