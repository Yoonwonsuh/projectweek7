import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url_lists = '/posts';

const initialSlate = {
  postsList: [],
};

export const postsList = createAsyncThunk(
  'getPostsList',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(url_lists);

      return thunkAPI.fulfillWithValue(response.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const addPostsList = createAsyncThunk(
  'addPostsList',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(url_lists, payload);
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
      const response = await axios.put(`${url_lists}/${payload.data.author}`, {
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
      const response = await axios.delete(`${url_lists}/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const postsListSlice = createSlice({
  name: 'post_list',
  initialSlate,
  reducers: {},
  extraReducers: {
    [postsList.fulfilled]: (state, action) => {
      state.postsList = action.payload;
    },
    [postsList.rejected]: (state, action) => {
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

export default postsListSlice.reducers;
