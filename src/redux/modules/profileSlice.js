import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "./instance";

export const getMyProfileThunk = createAsyncThunk(
  "GET_MYPROFILE",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get(`members/mypage/${payload}`); //payload에 memberId 입력
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
export const getMyPostThunk = createAsyncThunk(
  "GET_MYPOST",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get(`members/profile/${payload}`); //payload에 memberId 입력
      if (data.success === true) {
        return thunkAPI.fulfillWithValue(data.data.myPost);
      } else {
        return console.log(data);
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);
export const getMyLikePostThunk = createAsyncThunk(
  "GET_MYLIKE",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get(`members/profile/${payload}`); //payload에 memberId 입력
      if (data.success === true) {
        return thunkAPI.fulfillWithValue(data.data.myLikePost);
      } else {
        return console.log(data);
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

const initialState = {
  myProfile: {},
  myPost: [],
  myLikePost: [],
  error: null,
};

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    [getMyProfileThunk.fulfilled]: (state, action) => {
      state.myProfile = action.payload;
    },
    [getMyProfileThunk.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [getMyProfileThunk.pending]: () => {},


    [getMyPostThunk.fulfilled]: (state, action) => {
      state.myPost = action.payload;
    },
    [getMyPostThunk.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [getMyPostThunk.pending]: () => {},


    [getMyLikePostThunk.fulfilled]: (state, action) => {
      state.myLikePost = action.payload;
    },
    [getMyLikePostThunk.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [getMyLikePostThunk.pending]: () => {},
  },
});

export default commentsSlice.reducer;
