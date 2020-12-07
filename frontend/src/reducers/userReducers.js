import {
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_PROFILE_FAIL,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_UPDATE_FAIL,
  USER_PROFILE_UPDATE_REQUEST,
  USER_PROFILE_UPDATE_SUCCESS,
  USER_LOGOUT,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
} from '../constants/userConstants';

export const userLoginReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_LOGIN_REQUEST:
      return { ...state, loading: true };
    case USER_LOGIN_SUCCESS:
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_REGISTER_REQUEST:
      return { ...state, loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, success: true };
    case USER_REGISTER_FAIL:
      return { loading: false, error: payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userProfileReducer = (state = { user: {} }, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_PROFILE_REQUEST:
      return { ...state, loading: true };
    case USER_PROFILE_SUCCESS:
      return { loading: false, user: payload };
    case USER_PROFILE_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};

export const userUpdateProfileReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_PROFILE_UPDATE_REQUEST:
      return { loading: true };
    case USER_PROFILE_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case USER_PROFILE_UPDATE_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};

export const getProfileReducer = (state = { user: {} }, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE_REQUEST:
      return { ...state, loading: true };
    case GET_PROFILE_SUCCESS:
      return { loading: false, user: payload };
    case GET_PROFILE_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};
