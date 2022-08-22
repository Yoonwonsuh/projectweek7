import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPostsList, _postsList } from "../../redux/modules/postsSlice";
import { useParams } from "react-router-dom";

const PostForm = () => {
  useEffect(() => {
    dispatch(_postsList());
  }, []);

  const dispatch = useDispatch();
  const comment = useSelector((state) => state.posts.postsList);
  console.log("12312321312", comment);
  const [inputForm, setInputForm] = useState("");
  const [inputImage, setInputImage] = useState("");

  const handleTextSubmit = (e) => {
    e.preventDefault();
    if (inputForm) {
      const newContens = { data: { content: inputForm } };
      console.log("111111111", newContens);
      dispatch(addPostsList(newContens));
      setInputForm("");
    } else {
      alert("내용을 입력해주세요!");
    }
  };
  console.log(inputForm);
  return (
    <div>
      <input
        type="text"
        placeholder="입력해주세요."
        value={inputForm}
        onChange={(e) => setInputForm(e.target.value)}
      />
      <button action="" type="submit" onClick={handleTextSubmit}>
        추가하기
      </button>
    </div>
  );
};

export default PostForm;
