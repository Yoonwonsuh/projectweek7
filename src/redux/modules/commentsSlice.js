import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "./instance";

export const getCommentsThunk = createAsyncThunk(
  "GET_COMMENTS",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get(`posts/${payload}/comments`); //payload에 postId 입력
      if (data.success === true) {
        return thunkAPI.fulfillWithValue(data.data);
      } else {
        return console.log(data);
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

export const deleteCommentThunk = createAsyncThunk(
  "DELE_COMMENT",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.put(
        `posts/${payload.postId}/comments/${payload.commentId}`
      );
      if (data.success === true) {
        return thunkAPI.fulfillWithValue(payload.commentId);
      } else {
        return console.log(data);
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

const initialState = {
  comments: [],
  error: null,
};

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    [getCommentsThunk.fulfilled]: (state, action) => {
      state.comments = action.payload;
    },
    [getCommentsThunk.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [getCommentsThunk.pending]: () => {},
    [deleteCommentThunk.fulfilled]: (state, action) => {
      const new_commentlist = state.comments.filter(
        (comment) => comment.id !== action.payload
      );
      state.comments = new_commentlist;
    },
    [deleteCommentThunk.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [deleteCommentThunk.pending]: () => {},
  },
});

export default commentsSlice.reducer;
