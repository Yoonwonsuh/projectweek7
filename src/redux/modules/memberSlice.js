import React from "react";

// 로그인요청 post api/members/login
export const addDetailThunk = createAsyncThunk(
  "postDetail",
  async (payload, api) => {
    const token = window.localStorage.getItem("SavedToken");
    try {
      const data = await instance.post("/api/auth/cards", payload);

      return api.fulfillWithValue(data.data);
    } catch (error) {
      return api.rejectWithValue(error);
    }
  }
);

export const memberSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [addDetailThunk.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },
    [addDetailThunk.rejected]: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const {} = memberSlice.actions;
export default memberSlice.reducer;
