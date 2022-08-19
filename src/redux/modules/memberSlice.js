import { createSlice } from "@reduxjs/toolkit";
import instance from "./instance";

const initialState = {
  member: [],
};

// 로그인요청 post api/members/login
export const loginDB = (payload) => {
  return async function (dispatch) {
    await instance
      .post("members/login", payload)
      .then((response) => {
        console.log(response);
      })
      .catch((response) => {
        console.log(response);
      });
  };
};

export const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {},
});

export const {} = memberSlice.actions;
export default memberSlice.reducer;
