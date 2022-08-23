import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./List.scss";
import Detail from "../detail/Detail";
import {
  BsChat,
  BsBookmark,
  BsHeart,
  BsHeartFill,
  BsEmojiSmile,
  BsCloudSnowFill,
} from "react-icons/bs";
import { addCommentsThunk } from "../../redux/modules/commentsSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  onAddCommentHandler,
  _postsList,
  onLikeBtnHandler,
} from "../../redux/modules/postsSlice";
const ListContent = ({ ListData }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose =() => {
    const CloseMoDalScrollY = localStorage.getItem("scrolly");
    setShow(false);
    window.scrollTo(0, CloseMoDalScrollY);
  };
  const handleShow = () => {
    let scrollY = window.scrollY;
    localStorage.setItem("scrolly", scrollY);
    setShow(true);
  };

  const initialState = {
    postId: "",
    content: "",
  };

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
      await dispatch(addCommentsThunk(newComment)); //통신용
      dispatch(onAddCommentHandler(newComment)); // 리듀서용 새로고침 안해도 업뎃됨
      setNewComment(initialState);
    }
  };

  const onLikeClick = () => {
    dispatch(onLikeBtnHandler(ListData.postId, true));
  };

  const onUnLikeClick = () => {
    dispatch(onLikeBtnHandler(ListData.postId, false));
  };

  return (
    <div className="ListContentWrap">
      <div className="ListContentHead">
        <div className="ListContentHead_left">
          <button className="ListContentHead_button">
            {ListData.isLike ? (
              <BsHeartFill
                className="ListContentHead_button_outline_heart"
                onClick={() => {
                  onLikeClick();
                }}
              />
            ) : (
              <BsHeart
                className="ListContentHead_button_outline_heart"
                onClick={() => {
                  onUnLikeClick();
                }}
              />
            )}
          </button>
          <button className="ListContentHead_button">
            <BsChat
              className="ListContentHead_button_outline_chat"
              onClick={handleShow}
            />
            <Modal show={show} onHide={handleClose}>
              <Detail postid={ListData.postId} onHide={handleClose} />
            </Modal>
          </button>
        </div>
        <div className="ListContentHead_right">
          <button className="ListContentHead_button">
            <BsBookmark className="ListContentHead_button_outline_bm" />
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
                <Detail
                  ListData={ListData}
                  onHide={handleClose}
                  postid={ListData.postId}
                />
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
