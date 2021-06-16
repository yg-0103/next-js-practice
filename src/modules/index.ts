import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import youtubeSaga from './youtube/saga';
import youtubeReducer from './youtube/slice';

export function* rootSaga() {
  yield all([youtubeSaga()]);
}

const rootReducers = combineReducers({
  youtube: youtubeReducer,
});

export type RootState = ReturnType<typeof rootReducers>;
export default rootReducers;
