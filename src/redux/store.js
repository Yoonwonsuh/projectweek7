import { configureStore } from '@reduxjs/toolkit';
import postsList from './modules/postsSlice';

export default configureStore({
  reducer: { postsList },
});
