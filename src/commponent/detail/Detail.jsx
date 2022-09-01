import React, { useEffect, useState, useRef } from "react";
import { debounce } from "lodash";
import {
  FaRegComment,
  FaRegPaperPlane,
  FaRegGrinAlt,
  FaTimes,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { getPostThunk, editPostThunk } from "../../redux/modules/postSlice";
import {
  getCommentsThunk,
  deleteCommentThunk,
  addCommentsThunk,
  CommentLikeCntThunk,
} from "../../redux/modules/commentsSlice";
import "./Detail.scss";
import {
  onAddCommentHandler,
  onDetailLikeHandler,
} from "../../redux/modules/postsSlice";
import { detailLikeThunk } from "../../redux/modules/postSlice";

const Detail = ({ onHide, postid }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const outSection = useRef();
  const nickname = localStorage.getItem("nickname");
  const initialState = {
    postId: "",
    content: "",
  };

  const [newComment, setNewComment] = useState(initialState);

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = debounce(() => {
    setWindowSize({
      width: window.innerWidth,
    });
  });

  const [smallInput, setSmallInput] = useState(false);

  const smallInputShow = () => {
    setSmallInput(!smallInput);
  };

  useEffect(() => {
    dispatch(getPostThunk({ postid, nickname }));
    dispatch(getCommentsThunk({ postid, nickname }));
  }, []);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setNewComment({ ...newComment, [name]: value, postId: postid });
  };

  const onAddSubmitHandler = async (e) => {
    if (newComment.content === "") {
      e.preventDefault();
      alert("내용을 입력해주세요");
    } else {
      e.preventDefault();
      await dispatch(addCommentsThunk(newComment));
      dispatch(onAddCommentHandler(newComment));
      setNewComment(initialState);
    }
  };

  const detailPost = useSelector((state) => state.post.post);
  const detailComments = useSelector((state) => state.comments.comments);

  const onLikeClick = () => {
    dispatch(detailLikeThunk(detailPost.postId));
    dispatch(onDetailLikeHandler(detailPost.postId));
  };

  // 디테일모달에서 닉네임을 누르면 닉네임의 프로필페이지로 이동

  const onClicknavigate = (payload) => {
    navigate(payload);
    onHide();
  };

  // comment.postId
  const onLikeCommentClick = (comment) => {
    dispatch(CommentLikeCntThunk(comment));
  };

  return (
    <>
      <div
        className="DetailModal"
        ref={outSection}
        onClick={(e) => {
          if (outSection.current === e.target) {
            onHide();
          }
        }}>
        <div className="DetailModalXbutton">
          <FaTimes className="DetailFaXbutton" onClick={onHide} />
        </div>
        {/* 반응형 */}
        {windowSize.width >= 1000 ? (
          <div className="DetailContainer">
            <div className="DetailLeft">
              <img className="DetailImg" src={detailPost.imgUrl} alt="" />
            </div>
            <div className="DetailRight">
              <div className="DetailRightTitleContainer">
                <img
                  className="DetailMemberImg"
                  src={detailPost.authorImgUrl}
                />
                <div className="DetailRightTitleNickName">
                  {detailPost.author}
                </div>
              </div>
              <div className="DetailLine" />
              <div className="DetailRightContentContainer">
                <div className="DetainRightContentWholeBox">
                  <div className="DetailuserImgBox">
                    <img
                      className="DetailRightIconBox"
                      src={detailPost.authorImgUrl}
                    />
                  </div>
                  <div className="DetailRightContentBox">
                    <a
                      className="DetailOnerNickname"
                      onClick={() =>
                        onClicknavigate(`/profile/${detailPost.author}`)
                      }>
                      {detailPost.author}
                    </a>
                    <span className="DetailOnerBody">{detailPost.content}</span>
                    <div className="DetailBodyTail">{detailPost.createdAt}</div>
                  </div>
                </div>
                {detailComments.length === 0
                  ? ""
                  : detailComments.map((comment) => {
                      return (
                        <div
                          className="DetainRightContentWholeBox"
                          key={comment.commentId}>
                          <div className="DetailuserImgBox">
                            <img
                              className="DetailRightIconBox"
                              src={comment.authorImgUrl}
                              alt=""
                            />
                          </div>
                          <div className="DetailRightContentBox">
                            <a
                              className="DetailOnerNickname"
                              onClick={() =>
                                onClicknavigate(`/profile/${comment.author}`)
                              }>
                              {comment.author}
                            </a>
                            <span className="DetailOnerBody">
                              {comment.content}
                            </span>
                            <div className="DetailBodyTail">
                              {comment.createdAt}&nbsp;&nbsp;좋아요&nbsp;
                              {comment.commentLikeCnt}
                            </div>
                          </div>
                          <div className="DetailCommentLike">
                            {comment.isLike ? (
                              <BsHeartFill
                                color="red"
                                onClick={() => {
                                  onLikeCommentClick(comment);
                                }}
                              />
                            ) : (
                              <BsHeart
                                onClick={() => {
                                  onLikeCommentClick(comment);
                                }}
                              />
                            )}
                          </div>
                        </div>
                      );
                    })}
              </div>

              <div className="DetailLine" />
              <div className="DetailControlBox">
                <div className="DetailIcon">
                  {detailPost.isLike ? (
                    <BsHeartFill
                      color="red"
                      onClick={() => {
                        onLikeClick();
                      }}
                    />
                  ) : (
                    <BsHeart
                      onClick={() => {
                        onLikeClick();
                      }}
                    />
                  )}
                </div>
                <div onClick={smallInputShow} className="DetailIcon">
                  <FaRegComment />
                </div>
                <div className="DetailIcon">
                  <FaRegPaperPlane />
                </div>
              </div>
              <div className="DetailSmallLike">
                좋아요&nbsp;&nbsp;{detailPost.postLikeCnt}개
              </div>
              <div className="DetailSmallTime">{detailPost.createdAt}</div>
              {smallInput ? (
                <div className="DetaillShowInputbox">
                  <>
                    <div className="DetailsmallShowInput">
                      <FaRegGrinAlt className="DetailInputIcon" />
                      <input
                        className="DetailsmallInput"
                        placeholder="댓글 달기..."
                        type="text"
                        name="content"
                        value={newComment.content}
                        onChange={onChangeHandler}></input>
                    </div>
                  </>
                  <div
                    className="Detailsmallclick"
                    onClick={onAddSubmitHandler}>
                    게시
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        ) : (
          <div className="DetailContainersmall">
            <div className="DetailTopTitle">
              <img
                className="DetailMemberImg"
                src={detailPost.authorImgUrl}
                alt=""
              />
              <div className="DetailRightTitleNickName">
                {detailPost.author}
              </div>
            </div>
            <div className="DetailsmallImgBox">
              <img className="DetailsmallImg" src={detailPost.imgUrl} alt="" />
            </div>
            <div className="DetailControlBox">
              <div className="DetailIcon">
                {detailPost.isLike ? (
                  <BsHeartFill
                    color="red"
                    onClick={() => {
                      onLikeClick();
                    }}
                  />
                ) : (
                  <BsHeart
                    onClick={() => {
                      onLikeClick();
                    }}
                  />
                )}
              </div>
              <div onClick={smallInputShow} className="DetailIcon">
                <FaRegComment />
              </div>
              <div className="DetailIcon">
                <FaRegPaperPlane />
              </div>
            </div>
            <div className="DetailSmallLike">
              좋아요&nbsp;&nbsp;{detailPost.postLikeCnt}개
            </div>
            <div className="DetailSmallTime">{detailPost.createdAt}</div>
            {smallInput ? (
              <div className="DetaillShowInputbox">
                <>
                  <div className="DetailsmallShowInput">
                    <FaRegGrinAlt className="DetailInputIcon" />
                    <input
                      className="DetailsmallInput"
                      placeholder="댓글 달기..."
                      type="text"
                      name="content"
                      value={newComment.content}
                      onChange={onChangeHandler}></input>
                  </div>
                </>
                <div className="Detailsmallclick" onClick={onAddSubmitHandler}>
                  게시
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Detail;
