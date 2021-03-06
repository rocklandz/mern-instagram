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
  POST_COMMENT_INSIDE_REQUEST,
  POST_COMMENT_INSIDE_SUCCESS,
  POST_COMMENT_INSIDE_FAIL,
  POST_LIKE_INSIDE_REQUEST,
  POST_LIKE_INSIDE_SUCCESS,
  POST_LIKE_INSIDE_FAIL,
} from '../constants/postConstants';
import axios from 'axios';

export const getPosts = () => async (dispatch, getState) => {
  try {
    dispatch({ type: POSTS_FETCH_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/posts`, config);

    dispatch({ type: POSTS_FETCH_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: POSTS_FETCH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getPost = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: POST_FETCH_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/posts/${id}`, config);

    dispatch({ type: POST_FETCH_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: POST_FETCH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getUserPosts = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_POSTS_FETCH_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/posts/user/${id}`, config);

    dispatch({ type: USER_POSTS_FETCH_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_POSTS_FETCH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createPost = (post) => async (dispatch, getState) => {
  try {
    dispatch({ type: POST_CREATE_REQUEST });

    const imgData = new FormData();
    imgData.append('file', post.image);
    imgData.append('upload_preset', 'rocklandz');
    const res = await axios.post(
      'https://api.cloudinary.com/v1_1/duczq6lyl/image/upload',
      imgData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    post = { ...post, image: res.data.secure_url };

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/posts`, post, config);

    dispatch({ type: POST_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: POST_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createComment = (id, comment) => async (dispatch, getState) => {
  try {
    dispatch({ type: POST_COMMENT_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/posts/${id}/comment`,
      { comment },
      config
    );

    dispatch({ type: POST_COMMENT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: POST_COMMENT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createCommentInside = (id, comment) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: POST_COMMENT_INSIDE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/posts/${id}/comment-inside`,
      { comment },
      config
    );

    dispatch({ type: POST_COMMENT_INSIDE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: POST_COMMENT_INSIDE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const likePost = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: POST_LIKE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const { data } = await axios({
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
      url: `/api/posts/${id}/like`,
    });

    dispatch({ type: POST_LIKE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: POST_LIKE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const likePostInside = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: POST_LIKE_INSIDE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const { data } = await axios({
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
      url: `/api/posts/${id}/like-inside`,
    });

    dispatch({ type: POST_LIKE_INSIDE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: POST_LIKE_INSIDE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
