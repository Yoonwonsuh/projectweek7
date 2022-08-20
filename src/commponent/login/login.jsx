import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import loginimg from "../../img/loginimg.png";
import logo from "../../img/logo.png";
import appimg from "../../img/appimg.png";
import { loginDB } from "../../redux/modules/memberSlice";
import "./login.scss";
import HorizontalLine from "../HorizontalLine/HorizontalLine";

const Login = () => {
  const dispatch = useDispatch();

  //input 입력값 받아오기위해 useRef 사용 (state사용해도되긴함)
  //useRef 값이 뱐해도 리렌더링 되지않음
  const id_ref = useRef(null);
  const pw_ref = useRef(null);

  //login버튼 눌렀을때 값 가져오기 & 유효성검사
  const loginform = () => {
    // console.log(id_ref.current.value, pw_ref.current.value);
    const memberId = id_ref.current.value;
    const password = pw_ref.current.value;
    if (id_ref.current.value == "" || pw_ref.current.value == "") {
      alert("아이디와 비밀번호를 입력해주세요");
    } else {
      dispatch(loginDB({ memberId, password }));
    }
  };

  return (
    <div className="loginBackground">
      <div className="loginContainer">
        <div className="leftContainer">
          <img src={loginimg} />
        </div>
        <div className="rightContainer">
          <div className="loginDiv">
            <div>
              <img src={logo} />
              <input placeholder="아이디" ref={id_ref} />
              <br />
              <input type="password" placeholder="비밀번호" ref={pw_ref} />
              <br />
              <button onClick={loginform}>로그인</button>
            </div>
            <HorizontalLine text={"또는"} />
            <div className="kakao"> 카카오톡으로 로그인 </div>
            <div className="checkpw">비밀번호를 잊으셨나요?</div>
          </div>
          <div className="siginupPage">
            <span>계정이 잆으신가요?</span> <span> 가입하기</span>
          </div>
          <div className="appBox">
            <p>앱을 다운로드하세요.</p>
            <img src={appimg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
