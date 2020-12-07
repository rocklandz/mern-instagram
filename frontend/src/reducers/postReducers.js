import {
  POSTS_FETCH_REQUEST,
  POSTS_FETCH_SUCCESS,
  POSTS_FETCH_FAIL,
  POST_FETCH_REQUEST,
  POST_FETCH_SUCCESS,
  POST_FETCH_FAIL,
  POST_CREATE_REQUEST,
  POST_CREATE_SUCCESS,
  POST_CREATE_FAIL,
  POST_LIKE_REQUEST,
  POST_LIKE_SUCCESS,
  POST_LIKE_FAIL,
  POST_COMMENT_REQUEST,
  POST_COMMENT_SUCCESS,
  POST_COMMENT_FAIL,
  USER_POSTS_FETCH_REQUEST,
  USER_POSTS_FETCH_SUCCESS,
  USER_POSTS_FETCH_FAIL,
  POST_COMMENT_INSIDE_SUCCESS,
  POST_LIKE_INSIDE_SUCCESS,
} from '../constants/postConstants';

export const commentsReducer = (state = { posts: [] }, action) => {
  const { type, payload } = action;

  switch (type) {
    case POST_COMMENT_REQUEST:
      return { loading: true };
    case POST_COMMENT_SUCCESS:
      return { loading: false, success: true };
    case POST_COMMENT_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};

export const postsReducer = (state = { posts: [] }, action) => {
  const { type, payload } = action;

  switch (type) {
    case POSTS_FETCH_REQUEST:
      return { loading: true };
    case POSTS_FETCH_SUCCESS:
    case POST_COMMENT_SUCCESS:
    case POST_LIKE_SUCCESS:
      return { loading: false, posts: payload };
    case POSTS_FETCH_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};

export const currentPostReducer = (
  state = { post: { user: {}, comments: [], likes: [] } },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case POST_FETCH_REQUEST:
      return { ...state, loading: true };
    case POST_FETCH_SUCCESS:
    case POST_COMMENT_INSIDE_SUCCESS:
    case POST_LIKE_INSIDE_SUCCESS:
      return { loading: false, post: payload };
    case POST_FETCH_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};

export const currentUserPostsReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_POSTS_FETCH_REQUEST:
      return { loading: true };
    case USER_POSTS_FETCH_SUCCESS:
      return { loading: false, posts: payload };
    case USER_POSTS_FETCH_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};

export const createPostReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case POST_CREATE_REQUEST:
      return { loading: true };
    case POST_CREATE_SUCCESS:
      return { loading: false, post: payload };
    case POST_CREATE_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};

export const likePostReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case POST_LIKE_REQUEST:
      return { loading: true };
    case POST_LIKE_SUCCESS:
      return { loading: false, likes: payload };
    case POST_LIKE_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};
