import { FETCH_POSTS } from 'constants';
import { createAction } from 'redux-actions';

export const fetchPosts = createAction(FETCH_POSTS);
