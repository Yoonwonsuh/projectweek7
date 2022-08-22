import { createSlice } from "@reduxjs/toolkit";
import instance from "./instance";

const initialState = {
  member: [],
};

// 로그인요청 post api/members/login
export const loginDB = (payload) => {
  return async function (dispatch) {
    await instance
      .post("members/login", {
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
// export const signupDB = (payload) => {
//   console.log(signupDB);
//   return async function (dispatch) {
//     const { data } = await instance
//       .post("members/signup", payload, {
//         "Content-Type": "multipart/form-data",
//       })
//       .then((response) => {
//         if (response.data.success === false) {
//           return window.alert(response.data.error.message);
//         } else {
//           return (
//             window.alert(`${response.data.data.nickname}님 환영합니다.`),
//             window.location.replace("/")
//           );
//         }
//       })
//       .catch((response) => {
//         console.log(response);
//       });
//   };
// };
export const signupDB = (payload) => {
  return async function (dispatch) {
    const { data } = await instance
      .post("members/signup", payload.frm, {
        "Content-Type": "multipart/form-data",
      })

      .then((response) => {
        if (data.response.success === false) {
          return window.alert(data.response.error.message);
        } else {
          return (
            window.alert(`${data.response.data.nickname}님 환영합니다.`),
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
  name: "member",
  initialState,
  reducers: {},
});

export const {} = memberSlice.actions;
export default memberSlice.reducer;
