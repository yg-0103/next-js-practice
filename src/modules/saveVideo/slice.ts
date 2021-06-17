import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SaveVideoData } from 'types/saveVideo';

const initialState: SaveVideoData[] = [];

const saveVideoSlice = createSlice({
  name: 'save',
  initialState,
  reducers: {
    addVideo(state, action: PayloadAction<SaveVideoData>) {
      state.find(item => item.id.videoId === action.payload.id.videoId)
        ? state
        : state.push(action.payload);
    },
  },
});

const { reducer, actions } = saveVideoSlice;

export const { addVideo } = actions;

export default reducer;
