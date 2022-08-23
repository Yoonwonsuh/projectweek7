import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPostsList, _postsList } from "../../redux/modules/postsSlice";
import { axios } from "axios";

const PostForm = () => {
  useEffect(() => {
    dispatch(_postsList());
  }, []);
  const initialState = {
    content: "",
  };

  const dispatch = useDispatch();
  const [inputForm, setInputForm] = useState(initialState);
  const [filed, setFiled] = useState("");

  console.log(inputForm);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputForm({ ...inputForm, [name]: value });
  };

  const onLoadFile = (e) => {
    setFiled(URL.createObjectURL(e.target.files[0]));
  };

  const onSignupHandler = async (e) => {
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
    <form encType="multipart/form-data" onSubmit={onSignupHandler}>
      <input
        type="text"
        placeholder="입력해주세요."
        value={inputForm.content}
        name="content"
        onChange={onChangeHandler}
      />
      <button>추가하기</button>
      <h1>이미지 업로드</h1>
      <img src={filed} alt="" />
      <input
        type="file"
        accept="image/*"
        id="img_upFile"
        onChange={onLoadFile}
      />
    </form>
  );
};

export default PostForm;
