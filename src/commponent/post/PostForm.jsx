import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPostsList, _postsList } from "../../redux/modules/postsSlice";
import { axios } from "axios";

const PostForm = () => {
  useEffect(() => {
    dispatch(_postsList());
  }, []);

  const dispatch = useDispatch();
  const comment = useSelector((state) => state.posts.postsList);
  const [inputForm, setInputForm] = useState("");

  const [imageUrl, setImageUrl] = useState("");

  const setFile = (e) => {
    if (e.target.files[0]) {
      const img = new FormData();
      img.append("file", e.target.files[0]);
      axios
        .post("http://3.35.49.115:8080/posts", img)
        .then((res) => {
          console.log("213213213213123", res);
          setImageUrl(res);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  console.log("dsfdsfdsfds", imageUrl);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (inputForm) {
      const newContent = {
        data: { content: inputForm },
        img: "",
      };
      console.log("11111111", newContent);
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
      <img src={imageUrl} alt="" />
      <input type="file" accept="image/*" onChange={(e) => setFile(e)} />
    </div>
  );
};

export default PostForm;
