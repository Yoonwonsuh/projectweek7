import React from "react";
import { useDispatch } from "react-redux";

const PostForm = () => {
  const dispatch = useDispatch();
  const [inputForm, setInputForm] = useState("");
  const handleTextSubmit = (e) => {
    e.preventDefault();
    if (inputForm) {
      const newContens = {};
      dispatch(addPostsList(newContens));
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
        onChange={(e) => setInputForm(e.target.c)}
      />
    </div>
  );
};

export default PostForm;
