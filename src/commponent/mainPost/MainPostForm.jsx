<<<<<<< Updated upstream
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMMyProfileThunk } from "../../redux/modules/myProfileSlice";
import { addPostsList } from "../../redux/modules/postsSlice";
=======
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMMyProfileThunk } from "../../redux/modules/myProfileSlice";
import { addPostsList } from "../../redux/modules/postsSlice";
import { IoMdArrowBack } from "react-icons/io";

>>>>>>> Stashed changes
import "./MainForm.scss";

const MainPostForm = ({ setIsModal }) => {
  const dispatch = useDispatch();
  const [filed, setFiled] = useState("");

  const userNickName = localStorage.getItem("nickname");

  useEffect(() => {
    dispatch(getMMyProfileThunk(userNickName));
  }, [dispatch]);

  const myProfile = useSelector((state) => state.myprofile.myrealProfile);
  const initialState = {
    content: "",
  };

  const [inputForm, setInputForm] = useState(initialState);
  const [textAreaCount, setTextAreaCount] = useState(0);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputForm({ ...inputForm, [name]: value });

    // 글자수 카운트
    setTextAreaCount(e.target.value.length);
  };

  const onLoadFile = (e) => {
    setFiled(URL.createObjectURL(e.target.files[0]));
  };

  const onSignUpHandler = async (e) => {
    e.preventDefault();
    let formData = new FormData();
<<<<<<< Updated upstream
    let uploadImg = document.getElementById("img_upFile");
=======
    let uploadImg = img_ref.current;
>>>>>>> Stashed changes

    // document.getElementById("img_upFile");  리액트에선 ref 이용

    formData.append(
      "data",
      new Blob([JSON.stringify(inputForm)], { type: "application/json" })
    );

    formData.append("img", uploadImg.files[0]);

    await dispatch(addPostsList(formData));

    window.alert("이미지 업로드 성공");
  };

  return (
<<<<<<< Updated upstream
    <form
      className="MainPostForm_Container"
      encType="multipart/form-data"
      onSubmit={onSignUpHandler}>
      <div className="Title">
        <h1 className="name">새 게시물 만들기</h1>
      </div>

      <div className="body">
        <div className="Left">
          <img className="Img" src={filed} alt="" />
          <label className="Img_label" htmlFor="img_upFile">
            <p>컴퓨터에서 선택</p>
          </label>
          <input
            type="file"
            accept="image/*"
            id="img_upFile"
            onChange={onLoadFile}
            style={{ display: "none" }}
=======
    <div className="MainPostForm_Wrap">
      <form
        className="MainPostForm_Container"
        encType="multipart/form-data"
        onSubmit={onSignUpHandler}>
        <div className="Title">
          <IoMdArrowBack
            className="backBtn"
            onClick={() => setIsModal(false)}
>>>>>>> Stashed changes
          />
          <h1 className="name">새 게시물 만들기</h1>
          <button className="addBtn">추가하기</button>
        </div>

        <div className="body">
          <div className="Left">
            <div className="left_body">
              <img className="Img" src={filed} alt="" />
            </div>
            <label className="Img_label" htmlFor="img_upFile">
              <p>컴퓨터에서 선택</p>
            </label>
            <input
              ref={img_ref}
              type="file"
              accept="image/*"
              id="img_upFile"
              onChange={onLoadFile}
              style={{ display: "none" }}
            />
          </div>

          <div className="Right">
            <div className="Img_header">
              <img
                className="profile_img"
                src={myProfile.memberImgUrl}
                alt=""
              />
              <div className="profile_nick">{myProfile.nickname}</div>
            </div>

            <div className="body_right">
              <textarea
                className="write_box"
                type="text"
                placeholder="문구 입력..."
                value={inputForm.content}
                name="content"
                maxLength="1000"
                onChange={onChangeHandler}
              />
              <p className="textCounter">{textAreaCount}/1000</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MainPostForm;
