import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "./instance";

export const getPostThunk = createAsyncThunk(
  "GET_POST",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get(`posts/${payload.postid}/${payload.nickname}`); //payload에 postId 입력
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

export const editPostThunk = createAsyncThunk(
  "EDIT_POST",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.put(
        `auth/posts/${payload.id}`,
        payload.frm,
        {
          "Content-Type": "multipart/form-data",
          withCredentials: true,
        }
      );
      if (data.success === true) {
        return thunkAPI.fulfillWithValue(data.data);
      } else {
        return console.log(data);
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

const initialState = {
  post: {},
  error: null,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    onEditPostHandler: (state, action) => {
      state.post.isEditMode = !state.post.isEditMode;
    },
  },
  extraReducers: {
    [getPostThunk.fulfilled]: (state, action) => {
      state.post = action.payload;
    },
    [getPostThunk.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [getPostThunk.pending]: () => {},
    [editPostThunk.fulfilled]: (state, action) => {
      state.post = action.payload;
    },
    [editPostThunk.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [editPostThunk.pending]: () => {},
  },
});

export const { onEditPostHandler } = postSlice.actions;
export default postSlice.reducer;
