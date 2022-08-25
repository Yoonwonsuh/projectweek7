import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "./instance";

export const getMMyProfileThunk = createAsyncThunk(
  "GET_MMYPROFILE",
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

const initialState = {
  myrealProfile: {},
  error: null,
};

export const myprofileSlice = createSlice({
  name: "myprofile",
  initialState,
  reducers: {},
  extraReducers: {
    [getMMyProfileThunk.fulfilled]: (state, action) => {
      state.myrealProfile = action.payload;
    },
    [getMMyProfileThunk.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [getMMyProfileThunk.pending]: () => {},

  },
});

export default myprofileSlice.reducer;
