import React, { useState } from "react";
import "./ProfileLikeList.scss";
import { FaHeart, FaRegComment } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import Detail from "../detail/Detail";

const ProfileLike = ({ profileLike }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  return (
    <div className="ProfilePostListBox" key={profileLike.postId}>
      <div className="ProfileDarkness" onClick={handleShow}>
        <div className="ProfileListCount">
          <FaHeart style={{ fontSize: "15px" }} />
          &nbsp;{profileLike.postLikeCnt}&nbsp;&nbsp;&nbsp;
          <FaRegComment style={{ fontSize: "17px" }} />
          &nbsp;{profileLike.commentCnt}
        </div>
      </div>
      <img className="ProfileLikeListImg" src={profileLike.imgUrl} />
      <Modal show={show} onHide={handleClose}>
        <Detail postid={profileLike.postId} onHide={handleClose} />
      </Modal>
    </div>
  );
};

export default ProfileLike;
