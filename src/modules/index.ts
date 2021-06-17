import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import youtubeSaga from './youtube/saga';
import youtubeReducer from './youtube/slice';
import saveVideoReducer from './saveVideo/slice';

export function* rootSaga() {
  yield all([youtubeSaga()]);
}

const rootReducers = combineReducers({
  youtube: youtubeReducer,
  saveVideo: saveVideoReducer,
});

export type RootState = ReturnType<typeof rootReducers>;
export default rootReducers;
