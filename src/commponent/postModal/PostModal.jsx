import React from "react";
import { useDispatch } from "react-redux";
import { deletePostsList } from "../../redux/modules/postsSlice";
import "./PostModal.scss";

const PostModal = ({ListData}) => {
  const dispatch = useDispatch();

  return (
    <div className="postModalContainer">
      <div className="postModalEditBox">
        <div className="postModalEditText">수정</div>
      </div>
      <div className="postModalDeleteBox">
        <div className="postModalDeleteText" onClick={()=>dispatch(deletePostsList(ListData.postId))}>삭제</div>
      </div>
    </div>
  );
};

export default PostModal;
