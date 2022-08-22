import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./List.scss";
import Detail from "../detail/Detail";
import {
  BsChat,
  BsBookmark,
  BsHeart,
  BsEmojiSmile,
  BsCloudSnowFill,
} from "react-icons/bs";
import { addCommentsThunk } from "../../redux/modules/commentsSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  onAddCommentHandler,
  _postsList,
} from "../../redux/modules/postsSlice";
const ListContent = ({ ListData }) => {
  var scrollY = window.scrollY;
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    window.scrollTo(0, scrollY);
  };
  const handleShow = () => {
    setShow(true);
    localStorage.setItem("scrolly", scrollY);
  };

  const initialState = {
    postId: "",
    content: "",
  };

  const nowScroll = window.scrollY;
  console.log(nowScroll);

  const [newComment, setNewComment] = useState(initialState);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setNewComment({ ...newComment, [name]: value, postId: ListData.postId });
  };

  const onEditSubmitHandler = async (e) => {
    if (newComment.content === "") {
      e.preventDefault();
      alert("내용을 입력해주세요");
    } else {
      await dispatch(addCommentsThunk(newComment));
      dispatch(onAddCommentHandler(newComment));
      setNewComment(initialState);
    }
  };

  return (
    <div className="ListContentWrap">
      <div className="ListContentHead">
        <div className="ListContentHead_left">
          <button className="ListContentHead_button">
            {/* <BsHeartFill className="ListContentHead_button_outline" /> */}
            <BsHeart className="ListContentHead_button_outline" />
          </button>
          <button className="ListContentHead_button">
            <BsChat
              className="ListContentHead_button_outline"
              onClick={handleShow}
            />
            <Modal show={show} onHide={handleClose}>
              <Detail ListData={ListData} onHide={handleClose} />
            </Modal>
          </button>
        </div>
        <div className="ListContentHead_right">
          <button className="ListContentHead_button">
            <BsBookmark className="ListContentHead_button_outline" />
            {/* <BsFillBookmarkFill className="ListContentHead_button_outline" /> */}
          </button>
        </div>
      </div>

      <div className="ListContentBody">
        <h3 className="ListContentBodyLike">
          좋아요 <span>&nbsp;{ListData.postLikeCnt}</span>개
        </h3>

        <div className="ListContentBodyComment">
          <h3 className="ListContentBodyCommentNickname">{ListData.author}</h3>
          <div className="ListContentBodyCommentWrap">
            <span className="ListContentBodyCommentWrapText">
              {ListData.content}&nbsp;
            </span>
            {/* <button>더 보기</button> */}
          </div>
        </div>
        <div className="ListContentBodyComment_reply">
          {ListData.commentCnt === 0 ? (
            ""
          ) : (
            <>
              <div
                className="ListContentBodyComment_reply_onclick"
                onClick={handleShow}
              >
                댓글&nbsp;<span>{ListData.commentCnt}</span>개 모두 보기
              </div>
              <Modal show={show} onHide={handleClose}>
                <Detail ListData={ListData} onHide={handleClose} />
              </Modal>
            </>
          )}
        </div>

        <div className="ListContentBody_reply_wrap">
          <div className="ListContentBody_reply_cotainer">
            <button className="ListContentBody_reply_btn">
              <BsEmojiSmile className="ListContentBody_reply_btn_smile" />
            </button>
            <input
              placeholder="댓글 달기...."
              className="ListContentBody_reply_input"
              type="text"
              name="content"
              value={newComment.content}
              onChange={onChangeHandler}
            ></input>
            <button
              className="ListContentBody_reply_postBtn"
              onClick={onEditSubmitHandler}
            >
              게시
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListContent;
