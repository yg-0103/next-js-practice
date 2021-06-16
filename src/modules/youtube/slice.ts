import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { YoutubeData, YoutubeState } from 'types/youtube';

const initialState: YoutubeState = {
  loading: false,
  data: null,
  error: null,
};

const youtubeSlice = createSlice({
  name: 'youtube',
  initialState,
  reducers: {
    getYoutube(state, action: PayloadAction<string>) {
      state.loading = true;
    },
    getYoutubeSuccess(state, action: PayloadAction<YoutubeData>) {
      state.loading = false;
      state.data = action.payload;
    },
    getYoutubeError(state, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const { reducer, actions } = youtubeSlice;

export const { getYoutube, getYoutubeSuccess, getYoutubeError } = actions;

export default reducer;
