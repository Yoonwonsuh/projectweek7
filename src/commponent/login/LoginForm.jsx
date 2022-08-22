import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import loginimg from "../../img/loginimg.png";
import login_screen1 from "../../img/login_screen1.png";
import logo from "../../img/logo.png";
import appimg from "../../img/appimg.png";
import kakao_login from "../../img/kakao_login.png";
import { loginDB } from "../../redux/modules/memberSlice";
import "./LoginForm.scss";
import HorizontalLine from "../HorizontalLine/HorizontalLine";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        <div className="loginleftContainer"></div>
        <div className="loginrightContainer">
          <div className="loginDiv">
            <div className="loginsmallDiv">
              <img src={logo} />
              <input placeholder="아이디" ref={id_ref} />
              <br />
              <input type="password" placeholder="비밀번호" ref={pw_ref} />
              <br />
              <button onClick={loginform}>로그인</button>
            </div>
            <HorizontalLine text={"또는"} />
            <img src={kakao_login} className="kakao" />
            <div className="checkpw">비밀번호를 잊으셨나요?</div>
          </div>
          <div className="siginupPage">
            <div>계정이 잆으신가요?</div>
            <div onClick={() => navigate("/signup")}> 가입하기</div>
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
