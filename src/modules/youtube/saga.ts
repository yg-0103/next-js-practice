import {
  getYoutube,
  getYoutubeError,
  getYoutubeSuccess,
  loadMoreYoutube,
  loadMoreYoutubeError,
  loadMoreYoutubeSuccess,
} from './slice';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as youtubeApi from 'api/getYoutube';
import { YoutubeData } from 'types/youtube';

function* getYoutubeSaga(action: ReturnType<typeof getYoutube>) {
  try {
    const youtubeData: YoutubeData = yield call(
      youtubeApi.getYoutube,
      action.payload
    );

    yield put(getYoutubeSuccess(youtubeData));
  } catch (e) {
    yield put(getYoutubeError(e));
  }
}

function* loadMoreYoutubeSaga(action: ReturnType<typeof loadMoreYoutube>) {
  try {
    const youtubeData: YoutubeData = yield call(
      youtubeApi.getLoadMore,
      action.payload.keyword,
      action.payload.nextPageToken
    );

    yield put(loadMoreYoutubeSuccess(youtubeData));
  } catch (e) {
    yield put(loadMoreYoutubeError(e));
  }
}

export default function* youtubeSaga() {
  yield takeEvery(getYoutube.type, getYoutubeSaga);
  yield takeLatest(loadMoreYoutube.type, loadMoreYoutubeSaga);
}
