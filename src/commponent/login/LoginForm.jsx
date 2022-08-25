import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import login_phone from "../../img/login_phone.png";
import login_screen1 from "../../img/login_screen1.png";
import login_screen2 from "../../img/login_screen2.png";
import login_screen3 from "../../img/login_screen3.png";
import logo from "../../img/logo.png";
import appimg from "../../img/appimg.png";
import kakao_login from "../../img/kakao_login.png";
import { loginDB } from "../../redux/modules/memberSlice";
import "./LoginForm.scss";
import HorizontalLine from "../HorizontalLine/HorizontalLine";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //input 입력값 받아오기위해 useRef 사용 (state사용해도되긴함)
  //useRef 값이 뱐해도 리렌더링 되지않음
  const id_ref = useRef(null);
  const pw_ref = useRef(null);
  // 미디어쿼리
  const isSmallMode = useMediaQuery({
    query: "(max-width : 1000px)",
  });
  //로그인 버튼 활성화
  const [btnState, setBtnState] = useState(false);
  const onBtn = () => {
    if (id_ref.current.value && pw_ref.current.value.length > 5) {
      setBtnState(true);
    } else {
      setBtnState(false);
    }
  };
  //login버튼 눌렀을때 값 가져오기 & 유효성검사
  const Loginform = () => {
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
    <>
      {isSmallMode ? (
        <div className="S-loginBackground">
          <div className="S-loginrightContainer">
            <div className="S-loginDiv">
              <div className="S-loginsmallDiv">
                <img src={logo} />
                <input placeholder="아이디" ref={id_ref} onChange={onBtn} />
                <br />
                <input
                  type="password"
                  placeholder="비밀번호"
                  ref={pw_ref}
                  onChange={onBtn}
                />
                <br />
                <button
                  onClick={Loginform}
                  className={`loginBtn ${btnState ? "loginBtnActive" : null}`}
                >
                  로그인
                </button>
              </div>
              <HorizontalLine text={"또는"} />
              <img src={kakao_login} className="S-kakao" />
              <div className="S-checkpw">비밀번호를 잊으셨나요?</div>
            </div>
            <div className="S-siginupPage">
              <div>계정이 잆으신가요?</div>
              <div onClick={() => navigate("/signup")}> 가입하기</div>
            </div>
            <div className="S-appBox">
              <p>앱을 다운로드하세요.</p>
              <img src={appimg} />
            </div>
          </div>
        </div>
      ) : (
        <div className="loginBackground">
          <div className="loginContainer">
            <div className="loginleftContainer">
              <div className="pleasedontmove">
                <img className="loginleftback" src={login_phone} />
                <img className="loginleftimg1" src={login_screen1} />
                <img className="loginleftimg2" src={login_screen2} />
                <img className="loginleftimg3" src={login_screen3} />
              </div>
            </div>
            <div className="loginrightContainer">
              <div className="loginDiv">
                <div className="loginsmallDiv">
                  <img src={logo} />
                  <input placeholder="아이디" ref={id_ref} onChange={onBtn} />
                  <br />
                  <input
                    type="password"
                    placeholder="비밀번호"
                    ref={pw_ref}
                    onChange={onBtn}
                  />
                  <br />
                  <button
                    onClick={Loginform}
                    className={`loginBtn ${btnState ? "loginBtnActive" : null}`}
                  >
                    로그인
                  </button>
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
      )}
    </>
  );
};

export default Login;
