import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./SignupForm.scss";
import logo from "../../img/logo.png";
import HorizontalLine from "../HorizontalLine/HorizontalLine";
new Blob([JSON.stringify()], { type: "application/json" });

const Signupform = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialState = {
    memberId: "",
    nickname: "",
    password: "",
    imgUrl: null,
  };
  //      memberId : 6 - 12자, 특수문자 사용금지
  //      nickname : 12자 이하 , 특수문자 사용 금지
  //      password : 6자 이상, 영어&숫자,&특수문자 포함
  // 특수문자 1자 이상, 전체 8자 이상일것.
  //   const isValidPassword = password.length >= 6 && specialLetter >= 1;

  const [newMember, setNewMember] = useState(initialState);
  const [memIdCheck, setMemIdCheck] = useState(false);
  const [nickCheck, setNickCheck] = useState(false);
  const [passCheck, setPassChekc] = useState(false);

  // password 특수문자, 숫자, 영어 검사를 위한 정규식표현.
  const specialLetter = newMember.password.search(
    /[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi
  );
  const num = newMember.password.search(/[0-9]/g);
  const eng = newMember.password.search(/[a-z]/g);
  // memebrId 특수문자 사용 금지
  const idNum = newMember.memberId.search(/[0-9]/g);
  const idEng = newMember.memberId.search(/[a-z]/g);
  // nickename 특수문자 사용 금지
  const NicNum = newMember.nickname.search(/[0-9]/g);
  const NickEng = newMember.nickname.search(/[a-z]/g);

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

  //memberId : 6 - 12자, 특수문자 사용금지
  useEffect(() => {
    if (newMember.memberId.length < 6 || newMember.memberId.length > 12) {
      setMemIdCheck(false);
    } else if (newMember.memberId.search(/\s/) != -1) {
      //  공백 체크
      setMemIdCheck(false);
    } else if (num < 0 || eng < 0) {
      setMemIdCheck(false);
    } else if (newMember.memberId === null) {
      setMemIdCheck(false);
    } else if (specialLetter.test() == true) {
      setMemIdCheck(false);
    } else {
      setMemIdCheck(true);
    }
  }, [newMember.memberId]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setNewMember({ ...newMember, [name]: value });
  };

  // 선택된 파일 읽기
  const onLoadFile = (e) => {
    setNewMember(URL.createObjectURL(e.target.files[0]));
  };

  // 가입 등록
  const onSignupHandler = async (event) => {
    event.preventDefault();
    if (
      newMember.memberId === false ||
      newMember.nickname === false ||
      newMember.password === false
    ) {
      event.preventDefault();
      alert("내용을 모두 채워주세요");
    } else {
      event.preventDefault();
      let frm = new FormData();
      let meberImg = document.getElementById("img_file");

      frm.append(
        "data",
        new Blob([JSON.stringify(newMember)], { type: "application/json" })
      );
      frm.append("image", meberImg.files[0]);
      try {
        const response = await dispatch(frm);
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
              placeholder="아이디"
              name="memberId"
              onChange={onChangeHandler}
            />
            <input
              placeholder="닉네임"
              name="nickname"
              onChange={onChangeHandler}
            />
            <input
              placeholder="비밀번호"
              type="password"
              name="password"
              onChange={onChangeHandler}
            />
            <input
              type="file"
              onChange={onLoadFile}
              id="img_file"
              accept="img/*"
            />
            <p>
              서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에
              업로드했을 수도 있습니다.
            </p>
            <span>더 알아보기</span>
            <button type="sumbit">가입</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signupform;
