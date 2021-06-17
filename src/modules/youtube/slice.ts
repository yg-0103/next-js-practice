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
    loadMoreYoutube(
      state,
      action: PayloadAction<{ keyword: string; nextPageToken: string }>
    ) {
      state.loading = true;
    },
    loadMoreYoutubeSuccess(state, action: PayloadAction<YoutubeData>) {
      if (!state.data) return state;
      state.loading = false;
      state.data.nextPageToken = action.payload.nextPageToken;
      state.data.items = [...state.data.items, ...action.payload.items];
    },
    loadMoreYoutubeError(state, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload;
    },
    clearYoutubeData(state) {
      state.loading = false;
      state.data = null;
      state.error = null;
    },
  },
});

const { reducer, actions } = youtubeSlice;

export const {
  getYoutube,
  getYoutubeSuccess,
  getYoutubeError,
  loadMoreYoutube,
  loadMoreYoutubeError,
  loadMoreYoutubeSuccess,
  clearYoutubeData,
} = actions;

export default reducer;
