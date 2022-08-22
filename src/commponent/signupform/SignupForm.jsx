import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./SignupForm.scss";
import logo from "../../img/logo.png";
import appimg from "../../img/appimg.png";
import profileimg from "../../img/profileimg.png";
import HorizontalLine from "../HorizontalLine/HorizontalLine";
import { signupDB } from "../../redux/modules/memberSlice";
new Blob([JSON.stringify()], { type: "application/json" });

const Signupform = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialState = {
    memberId: "",
    nickname: "",
    password: "",
  };

  const [newMember, setNewMember] = useState(initialState);
  const [memIdCheck, setMemIdCheck] = useState(false);
  const [nickCheck, setNickCheck] = useState(false);
  const [passCheck, setPassChekc] = useState(false);
  const [files, setFiles] = useState("");

  // password 특수문자, 숫자, 영어 검사를 위한 정규식표현.
  const specialLetter = newMember.password.search(
    /[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi
  );
  const num = newMember.password.search(/[0-9]/g);
  const eng = newMember.password.search(/[a-z]/g);
  // memebrId 영문+숫자
  const idNum = newMember.memberId.search(/[0-9]/g);
  const idEng = newMember.memberId.search(/[a-z]/g);
  // nickename 영문/한글/숫지
  const NickNum = newMember.nickname.search(/[0-9]/g);
  const NickEng = newMember.nickname.search(/[a-z]/g);
  const NickKor = newMember.nickname.search(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g);

  //passworrd 6자 이상 영어&숫자,&특수문자 포함
  useEffect(() => {
    if (newMember.password.length < 6) {
      setPassChekc(false);
    } else if (newMember.password.search(/\s/) != -1) {
      //  공백 체크
      setPassChekc(false);
    } else if (specialLetter < 0 || num < 0 || eng < 0) {
      setPassChekc(false);
    } else if (newMember.password === null) {
      setPassChekc(false);
    } else {
      setPassChekc(true);
    }
  }, [newMember.password]);

  //memberId : 6 - 12자, 영문+숫자
  useEffect(() => {
    if (newMember.memberId.length < 6 || newMember.memberId.length > 12) {
      setMemIdCheck(false);
    } else if (newMember.memberId.search(/\s/) != -1) {
      //  공백 체크
      setMemIdCheck(false);
    } else if (idNum < 0 || idEng < 0) {
      setPassChekc(false);
    } else if (newMember.memberId === null) {
      setMemIdCheck(false);
    } else {
      setMemIdCheck(true);
    }
  }, [newMember.memberId]);

  //nickname : 12자 이하
  useEffect(() => {
    if (newMember.nickname.length < 1 || newMember.nickname.length > 12) {
      setNickCheck(false);
    } else if (newMember.nickname.search(/\s/) != -1) {
      //  공백 체크
      setNickCheck(false);
    } else if (newMember.nickname === null) {
      setNickCheck(false);
    } else {
      setNickCheck(true);
    }
  }, [newMember.nickname]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setNewMember({ ...newMember, [name]: value });
  };

  // 선택된 파일 읽기
  const onLoadFile = (e) => {
    setFiles(URL.createObjectURL(e.target.files[0]));
  };

  // 가입 등록
  const onSignupHandler = async (event) => {
    event.preventDefault();
    if (memIdCheck === false || nickCheck === false || passCheck === false) {
      event.preventDefault();
      alert("회원정보를 모두 입력해주세요");
    } else {
      event.preventDefault();
      let frm = new FormData();
      let meberImg = document.getElementById("img_file");

      frm.append(
        "data",
        new Blob([JSON.stringify(newMember)], { type: "application/json" })
      );
      frm.append("img", meberImg.files[0]);
      try {
        const response = await dispatch(signupDB(frm));
        if (response) {
          setNewMember(initialState);
          alert("정상적으로 등록 되었습니다");
          navigate("/");
        }
      } catch (error) {}
    }
  };

  return (
    <div className="signupBackground">
      <div className="siginupContainer">
        <form
          className="signupBox"
          onSubmit={onSignupHandler}
          encType="multipart/form-data"
        >
          <div>
            <img src={logo} />
            <p>찬구들의 사진과 동영상을 보려면 가입하세요.</p>
            <div> 카카오톡으로 로그인 </div>
          </div>
          <HorizontalLine text={"또는"} />
          <div className="signupInput">
            <input
              className="inforBox"
              placeholder="아이디"
              name="memberId"
              onChange={onChangeHandler}
              value={newMember.memberId}
            />
            {!memIdCheck ? (
              newMember.memberId === "" ? (
                <div className="signupAlert">
                  6~12자 영문,숫자 조합으로 입력해주세요
                </div>
              ) : (
                <div className="signupAlertRed">아이디 형식을 지켜주세요</div>
              )
            ) : (
              <div className="signupAlertGreen">사용가능한 ID입니다</div>
            )}
            <input
              className="inforBox"
              placeholder="닉네임"
              name="nickname"
              onChange={onChangeHandler}
              value={newMember.nickname}
            />
            {!nickCheck ? (
              newMember.nickname === "" ? (
                <div className="signupAlert">
                  6자 이상 한글,영문 또는 숫자만 입력해주세요
                </div>
              ) : (
                <div className="signupAlertRed">닉네임 형식을 지켜주세요</div>
              )
            ) : (
              <div className="signupAlertGreen">사용가능한 닉네임입니다</div>
            )}

            <input
              className="inforBox"
              placeholder="비밀번호"
              type="password"
              name="password"
              onChange={onChangeHandler}
              value={newMember.password}
            />
            {!passCheck ? (
              newMember.password === "" ? (
                <div className="signupAlert">
                  영문,숫자,특수문자 조합 6자 이상
                </div>
              ) : (
                <div className="signupAlertRed">비밀번호 형식을 지켜주세요</div>
              )
            ) : (
              <div className="signupAlertGreen">사용가능한 비밀번호입니다</div>
            )}
            <div className="imguploadbox">
              <img className="signupPreImg" src={files ? files : profileimg} />
              <label className="signupLabel" htmlFor="img_file">
                이미지 가져오기
              </label>
              <input
                className="signupFile"
                type="file"
                onChange={onLoadFile}
                id="img_file"
                accept="img/*"
              />
            </div>
            <p className="signupInfor">
              서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에
              업로드했을 수도 있습니다.
              <a href="https://www.facebook.com/help/instagram/261704639352628">
                더 알아보기
              </a>
            </p>
            <button className="signinBtn" type="sumbit">
              가입
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signupform;
