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
import { getCommentsThunk, deleteCommentThunk } from "../../redux/modules/commentsSlice";
import "./Detail.scss";

const Detail = ({ post }) => {
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
  }, 300);

  const [smallInput, setSmallInput] = useState(false);

  const smallInputShow = () => {
    setSmallInput(!smallInput);
  };

  //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(getPostThunk(post.postId));  여기 페이로드 안에 포스트 아이디 들어와야함
  //     dispatch(getCommentsThunk(post.postId));  여기 페이로드 안에 포스트 아이디 들어와야함
  //   }, []);
  //   const detailPost = useSelector((state) => state.post.post);
  //   const detailComments = useSelector((state) => state.comments.comments);

  return (
    <>
      <div className="DetailModal">
        <div className="DetailModalXbutton"><FaTimes className="DetailFaXbutton"/></div>
        {windowSize.width >= 1000 ? (
          <div className="DetailContainer">
            {/* 여기 아래부터 지우면됨 */}
            <div className="DetailLeft">
              <img
                className="DetailImg"
                src="https://blog.kakaocdn.net/dn/yIjGx/btq04K3pAVP/0sh3aFbAlYVMk0ipiJKCMk/img.jpg"
                alt="detail"
              />
            </div>
            {/* 여기아래 활성화하고 위에꺼 날리면됨 */}
            {/* <div className="DetailLeft">
              <img
                className="DetailImg"
                src={detailPost.imgUrl}
                alt=""
              />
            </div> */}
            {/* 여기까지 */}

            <div className="DetailRight">
              <div className="DetailRightTitleContainer">
                <img
                  className="DetailMemberImg"
                  src="https://i.pinimg.com/236x/f0/19/c4/f019c40b1e2db2880d85ff31e10e60e9.jpg"
                />
                <div className="DetailRightTitleNickName">post.nickname</div>
              </div>
              <div className="DetailLine" />
              <div className="DetailRightContentContainer">
                {/* 여기 아래서부터 지우면됨 */}
                <div className="DetainRightContentWholeBox">
                  <div className="DetailuserImgBox">
                    <img
                      className="DetailRightIconBox"
                      src="https://i.pinimg.com/236x/f0/19/c4/f019c40b1e2db2880d85ff31e10e60e9.jpg"
                    />
                  </div>
                  <div className="DetailRightContentBox">
                    <a className="DetailOnerNickname">post.nickname</a>
                    <span className="DetailOnerBody">
                      光沢のある鮮やかなカッパー色に、スターバックス
                      <br />
                      リザーブ®のロゴが目をひくデザイン。
                      <br /> BALMUDA The Pot STARBUCKS
                      <br />
                      RESERVE LIMITED EDITIONは、
                      <br /> 美しい光沢感と色合いでスターバックス
                      <br />
                      リザーブ®の洗練された世界観もお楽しみいただける特別モデルです。
                      <br />
                      . 本日よりバルミューダオンラインストア、
                      <br />
                      BALMUDA The Store
                      <br />
                      Aoyama、スターバックスオンラインストア、
                      <br />
                      全国のスターバックス
                      <br />
                      リザーブ®取扱店舗で販売を開始いたします。 . .<br />{" "}
                      #BALMUDA
                      <br />
                      #STARBUCKS #BALMUDAThePotSTARBUCKSRESERVELIMITEDEDITION
                      <br />
                      #BALMUDAThePot
                      <br /> #バルミューダ #スターバックス
                      <br />
                      #バルミューダザポット
                      <br /> #電気ケトル
                      <br />
                    </span>
                    <div className="DetailBodyTail">게시시간</div>
                  </div>
                </div>
                {/* 여기부터 해제하고 위에꺼 날리면됨 */}
                {/* <div className="DetainRightContentWholeBox">
                  <div className="DetailuserImgBox">
                    <img
                      className="DetailRightIconBox"
                      src={detailPost.authorImgUrl}
                    />
                  </div>
                  <div className="DetailRightContentBox">
                    <a className="DetailOnerNickname">{detailPost.author}</a>
                    <span className="DetailOnerBody">
                      {detailPost.content}
                    </span>
                    <div className="DetailBodyTail">{detailPost.createdAt}</div>
                  </div>
                </div> */}
                {/* 여기까지 해제하면됨 */}
                {/* 맵함수 돌릴거임 */}
                <div className="DetainRightContentWholeBox">
                  <div className="DetailuserImgBox">
                    <img
                      className="DetailRightIconBox"
                      src="https://i.pinimg.com/236x/af/2c/39/af2c396e241bea0988de6bf4d67d2c03.jpg"
                      alt=""
                    />
                  </div>
                  <div className="DetailRightContentBox">
                    <a className="DetailOnerNickname">comment[0].nickname</a>
                    <span className="DetailOnerBody">
                      너무너무 이쁘네요!ㅁㄴㅇㄻㄴㅇㄻㄴㅇㄹㄴㅇㅁㄻㄴㅇㄹ
                    </span>
                    <div className="DetailBodyTail">게시시간 좋아요수</div>
                  </div>
                  <div className="DetailCommentLike">
                    <FaRegHeart />
                  </div>
                </div>
                {/* 아래꺼 해제하면됨 */}
                {/* {detailComments.length === 0
                  ? ""
                  : detailComments.map((comment) => {
                      <div className="DetainRightContentWholeBox">
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
                            {comment.createdAt}&nbsp;&nbsp;좋아요&nbsp;{comment.commentLikeCnt}
                          </div>
                        </div>
                        <div className="DetailCommentLike">
                          <FaRegHeart />
                        </div>
                      </div>;
                    })} */}
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
              <div className="DetailSmallLike">좋아요&nbsp;&nbsp;111개</div>
              {/* <div className="DetailSmallLike">좋아요&nbsp;&nbsp;{detailPost.postLikeCnt}개</div> */}
              <div className="DetailSmallTime">2시간 전</div>
              {/* <div className="DetailSmallTime">{detailPost.createdAt}</div> */}
              {smallInput ? (
                <div className="DetaillShowInputbox">
                  <>
                    <div className="DetailsmallShowInput">
                      <FaRegGrinAlt className="DetailInputIcon" />
                      <input
                        className="DetailsmallInput"
                        placeholder="댓글 달기..."
                      ></input>
                    </div>
                  </>
                  <div className="Detailsmallclick">게시</div>
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
                src="https://i.pinimg.com/236x/f0/19/c4/f019c40b1e2db2880d85ff31e10e60e9.jpg"
                alt=""
              />
              <div className="DetailRightTitleNickName">post.nickname</div>
              {/* <img
                className="DetailMemberImg"
                src={detailPost.authorImgUrl}
                alt=""
              />
              <div className="DetailRightTitleNickName">{detailPost.author}</div> */}
            </div>
            <div className="DetailsmallImgBox">
              <img
                className="DetailsmallImg"
                src="https://blog.kakaocdn.net/dn/yIjGx/btq04K3pAVP/0sh3aFbAlYVMk0ipiJKCMk/img.jpg"
              />
              {/* <img
                className="DetailsmallImg"
                src={detailPost.imgUrl}
                alt=''
              /> */}
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
            <div className="DetailSmallLike">좋아요&nbsp;&nbsp;111개</div>
            <div className="DetailSmallTime">2시간 전</div>
            {/* <div className="DetailSmallLike">좋아요&nbsp;&nbsp;{detailPost.postLikeCnt}개</div>
            <div className="DetailSmallTime">{detailPost.createdAt}</div> */}
            {smallInput ? (
              <div className="DetaillShowInputbox">
                <>
                  <div className="DetailsmallShowInput">
                    <FaRegGrinAlt className="DetailInputIcon" />
                    <input
                      className="DetailsmallInput"
                      placeholder="댓글 달기..."
                    ></input>
                  </div>
                </>
                <div className="Detailsmallclick">게시</div>
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
