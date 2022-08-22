import { configureStore } from '@reduxjs/toolkit';
import member from './modules/memberSlice';
import posts from './modules/postsSlice';

export default configureStore({
  reducer: { member, posts },
});
