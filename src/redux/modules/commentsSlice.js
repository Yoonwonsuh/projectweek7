import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "./instance";

export const getCommentsThunk = createAsyncThunk(
  "GET_COMMENTS",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get(
        `posts/${payload.postid}/comments/${payload.nickname}`
      ); //payload에 postId 입력
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

export const addCommentsThunk = createAsyncThunk(
  "ADD_COMMENTS",
  async (payload, thunkAPI) => {
    try {
      console.log(payload.content);
      // /posts/{postId}/comments
      const { data } = await instance.post(`posts/${payload.postId}/comments`, {
        content: payload.content,
      });
      return thunkAPI.fulfillWithValue(data.data);
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
// 댓글 좋아요 /posts/{postId}/comments/{commentId}/like
export const CommentLikeCntThunk = createAsyncThunk(
  "CommentLikeCntThunk",
  async (payload, thunkAPI) => {
    console.log("please", payload);
    try {
      const response = await instance.post(
        `posts/${payload.postId}/comments/${payload.commentId}/like`
      );
      // return console.log(response);
      return thunkAPI.fulfillWithValue(response.data.data);
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
    [addCommentsThunk.fulfilled]: (state, action) => {
      state.comments = [...state.comments, action.payload];
    },
    [addCommentsThunk.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [addCommentsThunk.pending]: () => {},
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

    [CommentLikeCntThunk.fulfilled]: (state, action) => {
      state.comments.map((post) => {
        if (post.commentId == action.payload.commentId) {
          return (
            (post.isLike = action.payload.isLike),
            (post.commentLikeCnt = action.payload.commentLikeCnt)
          );
        } else {
          return post;
        }
      });
    },
  },
});

export default commentsSlice.reducer;
