import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPostsList, _postsList } from "../../redux/modules/postsSlice";
import instance from "../../redux/modules/instance";

const PostForm = () => {
  const nickname = localStorage.getItem("nickname");

  useEffect(() => {
    dispatch(_postsList());
  }, []);

  const dispatch = useDispatch();
  const comment = useSelector((state) => state.posts.postsList);
  const [inputForm, setInputForm] = useState("");
  const [uploadImg, setUploadImg] = useState("");

  console.log("dsfdsfdsfds", comment.data);

  const savaImage = (e) => {
    e.preventDefault();
    const fileReader = new FileReader();

    if (e.target.files[0]) {
      fileReader.readAsDataURL(e.target.files[0]);
    }
    fileReader.onload = () => {
      setUploadImg(e.target.files[0]);
    };
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (inputForm) {
      const newContent = {
        data: { content: inputForm },
        img: { setUploadImg },
      };
      dispatch(addPostsList(newContent));
      setInputForm("");
    } else {
      alert("내용을 입력해주세요!");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="입력해주세요."
        value={inputForm}
        onChange={(e) => setInputForm(e.target.value)}
      />
      <button action="" type="submit" onClick={onHandleSubmit}>
        추가하기
      </button>
      <h1>이미지 업로드</h1>
      <input
        type="file"
        accept="image/jpg,image/png,image/jpeg,image/gif"
        name="postImg"
        onChange={savaImage}
      />
    </div>
  );
};

export default PostForm;
