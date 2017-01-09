import {
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILED,
} from 'constants';
import { PostsService } from 'services';
import { takeEvery } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects';

export function* fetchPosts() {
  try {
    const posts = yield call(fetch, PostsService.all());
    const toJson = yield posts.json();
    yield put({ type: FETCH_POSTS_SUCCESS, payload: toJson });
  } catch (e) {
    yield put({ type: FETCH_POSTS_FAILED, paload: e });
  }
}

function* fetchPostsWatcher() {
  yield* takeEvery(FETCH_POSTS, fetchPosts);
}

export function* postsSaga() {
	yield fork(fetchPostsWatcher);
}
