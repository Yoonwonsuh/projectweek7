import React, { useState } from "react";
import "./ProfilePostList.scss";
import { FaHeart, FaRegComment } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import Detail from "../detail/Detail";

const ProfilePost = ({ profilepost }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  return (
    <div className="ProfilePostListBox" key={profilepost.postId}>
      <div className="ProfileDarkness" onClick={handleShow}>
        <div className="ProfileListCount">
          <FaHeart style={{ fontSize: "15px" }} />
          &nbsp;{profilepost.postLikeCnt}&nbsp;&nbsp;&nbsp;
          <FaRegComment style={{ fontSize: "17px" }} />
          &nbsp;{profilepost.commentCnt}
        </div>
      </div>
      <img className="ProfilePostListImg" src={profilepost.imgUrl} />
      <Modal show={show} onHide={handleClose}>
        <Detail postid={profilepost.postId} onHide={handleClose} />
      </Modal>
    </div>
  );
};

export default ProfilePost;
