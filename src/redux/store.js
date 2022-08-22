import { configureStore } from '@reduxjs/toolkit';
import member from './modules/memberSlice';
import posts from './modules/postsSlice';
import post from './modules/postSlice';
import comments from './modules/commentsSlice';
import profile from './modules/profileSlice';

export default configureStore({
  reducer: { member, posts, post, comments, profile,},
});
