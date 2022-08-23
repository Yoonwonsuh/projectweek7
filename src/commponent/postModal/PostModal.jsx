import React from "react";
import "./PostModal.scss";

const PostModal = ({ListData}) => {
  return (
    <div className="postModalContainer">
      <div className="postModalEditBox">
        <div className="postModalEditText">수정</div>
      </div>
      <div className="postModalDeleteBox">
        <div className="postModalDeleteText">삭제</div>
      </div>
    </div>
  );
};

export default PostModal;
