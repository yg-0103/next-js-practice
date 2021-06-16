import { getYoutube, getYoutubeError, getYoutubeSuccess } from './slice';
import { call, put, takeEvery } from 'redux-saga/effects';
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

export default function* youtubeSaga() {
  yield takeEvery(getYoutube.type, getYoutubeSaga);
}
