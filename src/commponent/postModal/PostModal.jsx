import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deletePostsList } from "../../redux/modules/postsSlice";
import "./PostModal.scss";
import MainDelete from "../mainPost/MainEdit";

const PostModal = ({ ListData }) => {
  const dispatch = useDispatch();
  const [isModal, setIsModal] = useState(false);

  return (
    <>
      <div className="postModalContainer">
        <div className="postModalEditBox">
          <div
            className="postModalEditText"
            onClick={() => setIsModal(!isModal)}>
            수정
          </div>
        </div>
        <div className="postModalDeleteBox">
          <div
            className="postModalDeleteText"
            onClick={() => dispatch(deletePostsList(ListData.postId))}>
            삭제
          </div>
        </div>
      </div>
      {isModal ? (
        <MainDelete
          isModal={isModal}
          setIsModal={setIsModal}
          postId={ListData.postId}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default PostModal;
