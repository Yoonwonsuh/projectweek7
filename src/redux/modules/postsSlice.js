import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "./instance";

const initialState = {
  postsList: [],
};

export const _postsList = createAsyncThunk(
  "getPostsList",
  async (payload, thunkAPI) => {
    try {
      const response = await instance.get("posts");
      if (response.data.success === false) {
        return (
          window.alert("로그인이 만료되었습니다"),
          localStorage.clear(),
          window.location.replace("/")
        );
      } else {
        return thunkAPI.fulfillWithValue(response.data.data);
      }
    } catch (e) {
      return (
        window.alert("로그인이 만료되었습니다"),
        localStorage.clear(),
        window.location.replace("/")
      );
    }
  }
);

export const addPostsList = createAsyncThunk(
  "addPostsList",
  async (payload, thunkAPI) => {
    try {
      const response = await instance.post("posts", payload);
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const editPostsList = createAsyncThunk(
  "editPostsList",
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
  "deletePostsList",
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
  name: "postsList",
  initialState,
  reducers: {
    onAddCommentHandler: (state, action) => {
      console.log(action.payload);
      state.postsList.map((post) => {
        if (post.postId == action.payload.postId) {
          return (post.commentCnt = post.commentCnt + 1);
        } else {
          return post;
        }
      });
    },
  },
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

export const { onAddCommentHandler } = postsListSlice.actions;
export default postsListSlice.reducer;
