import { createSlice } from '@reduxjs/toolkit';
import instance from './instance';

const initialState = {
  member: [],
};

// 로그인요청 post api/members/login
export const loginDB = (payload) => {
  return async function (dispatch) {
    await instance
      .post('members/login', {
        memberId: payload.memberId,
        password: payload.password,
      })
      .then((response) => {

        if (response.data.success === false) {
          return window.alert(response.data.error.message);
        } else {
          return (

            localStorage.setItem("token", response.headers.authorization),
            localStorage.setItem("nickname", response.data.data.nickname),
            alert(`${localStorage.nickname}님 환영합니다.`),
            window.location.replace("/")
          );
        }
      })
      .catch((response) => {
        console.log(response);
      });
  };
};
// 회원가입 post /members/signup
export const signupDB = (payload) => {
  return async function (dispatch) {
    await instance
      .post("members/signup", payload)
      .then((response) => {
        if (response.data.success === false) {
          return window.alert(response.data.error.message);
        } else {
          return (
            window.alert(`${response.data.data.nickname}님 환영합니다.`),
            window.location.replace("/")
          );
        }
      })
      .catch((response) => {

        console.log(response);
      });
  };
};

export const memberSlice = createSlice({
  name: 'member',
  initialState,
  reducers: {},
});

export const {} = memberSlice.actions;
export default memberSlice.reducer;
