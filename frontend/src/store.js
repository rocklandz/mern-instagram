import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  createPostReducer,
  currentPostReducer,
  likePostReducer,
  postsReducer,
  commentsReducer,
  currentUserPostsReducer,
} from './reducers/postReducers';
import {
  getProfileReducer,
  userLoginReducer,
  userProfileReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
} from './reducers/userReducers';

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userProfile: userProfileReducer,
  userUpdateProfile: userUpdateProfileReducer,
  getProfile: getProfileReducer,

  posts: postsReducer,
  currentPost: currentPostReducer,
  currentUserPosts: currentUserPostsReducer,
  comments: commentsReducer,
  createPost: createPostReducer,
  likePost: likePostReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : {};

const initState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
