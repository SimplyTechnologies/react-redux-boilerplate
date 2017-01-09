import { handleActions } from 'redux-actions';
import { FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILED } from 'constants';

export const postsInitialState = {
  posts: [],
  showError: false,
  errorMessage: 'Failed to load posts',
};

const handler = handleActions({
  [FETCH_POSTS_SUCCESS](state, action) {
    return Object.assign({}, state, {
      posts: action.payload,
      showError: false,
    });
  },
  [FETCH_POSTS_FAILED](state) {
    return Object.assign({}, state, {
      showError: true,
    });
  },
}, postsInitialState);

export default handler;
