import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addPostsList, _postsList } from "../../redux/modules/postsSlice";
import "./MainForm.scss";

const MainPostForm = () => {
  const dispatch = useDispatch();
  const [filed, setFiled] = useState("");

  const initialState = {
    content: "",
  };

  const [inputForm, setInputForm] = useState(initialState);

  useEffect(() => {
    dispatch(_postsList());
  }, []);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputForm({ ...inputForm, [name]: value });
  };

  const onLoadFile = (e) => {
    setFiled(URL.createObjectURL(e.target.files[0]));
  };

  const onSignUpHandler = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    let uploadImg = document.getElementById("img_upFile");

    formData.append(
      "data",
      new Blob([JSON.stringify(inputForm)], { type: "application/json" })
    );
    formData.append("img", uploadImg.files[0]);
    await dispatch(addPostsList(formData));
    window.alert("이미지 업로드 성공");
  };

  return (
    <form
      className="MainPostForm_Container"
      encType="multipart/form-data"
      onSubmit={onSignUpHandler}>
      <div className="Title">
        <h1 className="name">새 게시물 만들기</h1>
      </div>

      <div className="body">
        <div className="Left">
          <div>
            <img className="Img" src={filed} alt="" />
          </div>
          <label className="Img_label" htmlFor="img_upFile">
            컴퓨터에서 선택
          </label>
        </div>
        <input
          type="file"
          accept="image/*"
          id="img_upFile"
          onChange={onLoadFile}
          style={{ display: "none" }}
        />

        <div className="Right">
          <div className="Img_header">
            <img className="profile_img" src="" alt="" />
            <div className="profile_nick">닉네임</div>
          </div>

          <input
            type="text"
            placeholder="입력해주세요."
            value={inputForm.content}
            name="content"
            onChange={onChangeHandler}
          />
          <button>추가하기</button>
        </div>
      </div>
    </form>
  );
};

export default MainPostForm;
