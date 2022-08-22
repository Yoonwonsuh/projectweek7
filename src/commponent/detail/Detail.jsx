import React, { useEffect, useState } from "react";
import { debounce } from "lodash";
import {
  FaRegHeart,
  FaRegComment,
  FaRegPaperPlane,
  FaRegGrinAlt,
  FaTimes,
} from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { getPostThunk, editPostThunk } from "../../redux/modules/postSlice";
import {
  getCommentsThunk,
  deleteCommentThunk,
  addCommentsThunk,
} from "../../redux/modules/commentsSlice";
import "./Detail.scss";
import { onAddCommentHandler } from "../../redux/modules/postsSlice";

const Detail = ({ ListData, onHide }) => {
  const dispatch = useDispatch();
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
  },);

  const [smallInput, setSmallInput] = useState(false);

  const smallInputShow = () => {
    setSmallInput(!smallInput);
  };

  useEffect(() => {
    dispatch(getPostThunk(ListData.postId));
    dispatch(getCommentsThunk(ListData.postId));
  }, []);

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
      dispatch(onAddCommentHandler(newComment))
      setNewComment(initialState);
    }
  };

  const detailPost = useSelector((state) => state.post.post);
  const detailComments = useSelector((state) => state.comments.comments);

  return (
    <>
      <div className="DetailModal">
        <div className="DetailModalXbutton">
          <FaTimes className="DetailFaXbutton" onClick={onHide} />
        </div>
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
                    <a className="DetailOnerNickname">{detailPost.author}</a>
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
                          key={comment.commentId}
                        >
                          <div className="DetailuserImgBox">
                            <img
                              className="DetailRightIconBox"
                              src={comment.authorImgUrl}
                              alt=""
                            />
                          </div>
                          <div className="DetailRightContentBox">
                            <a className="DetailOnerNickname">
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
                            <FaRegHeart />
                          </div>
                        </div>
                      );
                    })}
              </div>

              <div className="DetailLine" />
              <div className="DetailControlBox">
                <div className="DetailIcon">
                  <FaRegHeart />
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
                        onChange={onChangeHandler}
                      ></input>
                    </div>
                  </>
                  <div
                    className="Detailsmallclick"
                    onClick={onEditSubmitHandler}
                  >
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
                <FaRegHeart />
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
                      onChange={onChangeHandler}
                    ></input>
                  </div>
                </>
                <div className="Detailsmallclick" onClick={onEditSubmitHandler}>
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
