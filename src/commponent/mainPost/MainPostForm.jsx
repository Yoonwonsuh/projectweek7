import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addPostsList, _postsList } from "../../redux/modules/postsSlice";
import "./MainForm.scss";
const MainPostForm = () => {
  useEffect(() => {
    dispatch(_postsList());
  }, []);

  const initialState = {
    content: "",
  };

  const dispatch = useDispatch();
  const [inputForm, setInputForm] = useState(initialState);
  const [filed, setFiled] = useState("");

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

      <div>
        <img className="Img" src={filed} alt="" />
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

      <input
        type="text"
        placeholder="입력해주세요."
        value={inputForm.content}
        name="content"
        onChange={onChangeHandler}
      />

      <button>추가하기</button>
    </form>
  );
};

export default MainPostForm;
