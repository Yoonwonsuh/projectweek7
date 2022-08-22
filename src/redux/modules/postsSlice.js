import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import instance from './instance';

const initialState = {
  postsList: [],
};

export const _postsList = createAsyncThunk(
  'getPostsList',
  async (payload, thunkAPI) => {
    try {
      const response = await instance.get('posts');
      // return console.log(response.data.data);
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const addPostsList = createAsyncThunk(
  'addPostsList',
  async (payload, thunkAPI) => {
    try {
      const response = await instance.post('posts', payload);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const editPostsList = createAsyncThunk(
  'editPostsList',
  async (payload, thunkAPI) => {
    // payload = data
    // postId = author ????

    try {
      const response = await instance.put(`posts/${payload.data.author}`, {
        data: { content: payload.content },
        img: payload.img,
      });
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deletePostsList = createAsyncThunk(
  'deletePostsList',
  async (payload, thunkAPI) => {
    // payload = postId
    // header: token;?

    try {
      const response = await instance.delete(`posts/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const postsListSlice = createSlice({
  name: 'postsList',
  initialState,
  reducers: {},
  extraReducers: {
    [_postsList.fulfilled]: (state, action) => {
      state.postsList = action.payload;
    },
    [_postsList.rejected]: (state, action) => {
      console.log(action);
    },
    [addPostsList.fulfilled]: (state, action) => {
      state.postsList = [...state.postsList, action.payload];
    },
    [addPostsList.rejected]: (state, action) => {
      console.log(action);
    },
    [editPostsList.fulfilled]: (state, action) => {
      state.postsList = state.postsList.map((item, index) => {
        if (item.author === action.payload.author) {
          return {
            ...item,
            content: action.payload.content,
          };
        } else {
          return { ...item };
        }
      });
    },
    [editPostsList.rejected]: (state, action) => {
      console.log(action);
    },
    [deletePostsList.fulfilled]: (state, action) => {
      state.postsList = state.postsList.filter(
        (comment) => comment.author !== action.payload
      );
    },
    [deletePostsList.rejected]: (state, action) => {
      console.log(action);
    },
  },
});

export const {} = postsListSlice.actions;

export default postsListSlice.reducer;
