import React, { useEffect, useState } from "react";
import { debounce } from "lodash";
import {
  FaRegHeart,
  FaRegComment,
  FaRegPaperPlane,
  FaRegGrinAlt,
} from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { getPostThunk, editPostThunk } from "../../redux/modules/postSlice";
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
  //     dispatch(getPostThunk(postid));
  //   }, []);
  //   const detailPost = useSelector((state) => state.post.post);

  return (
    <>
      <div className="DetailModal">
        {windowSize.width >= 1000 ? (
          <div className="DetailContainer">
            <div className="DetailLeft">
              <img
                className="DetailImg"
                src="https://blog.kakaocdn.net/dn/wlV3a/btqDebLH3c2/SkFcvQCDgeESEzmjllP5uk/img.jpg"
              />
            </div>

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
                    <div className="DetailBodyTail">게시시간 좋아요수</div>
                  </div>
                  <div className="DetailCommentLike"><FaRegHeart /></div>
                </div>
                {/* 맵함수 돌릴거임 */}
                <div className="DetainRightContentWholeBox">
                  <div className="DetailuserImgBox">
                    <img
                      className="DetailRightIconBox"
                      src="https://i.pinimg.com/236x/af/2c/39/af2c396e241bea0988de6bf4d67d2c03.jpg"
                    />
                  </div>
                  <div className="DetailRightContentBox">
                    <a className="DetailOnerNickname">comment[0].nickname</a>
                    <span className="DetailOnerBody">너무너무 이쁘네요!ㅁㄴㅇㄻㄴㅇㄻㄴㅇㄹㄴㅇㅁㄻㄴㅇㄹ</span>
                    <div className="DetailBodyTail">게시시간 좋아요수</div>
                        </div>
                  <div className="DetailCommentLike"><FaRegHeart /></div>
                </div>
                {/* 여기까지 */}
                <div className="DetainRightContentWholeBox">
                  <div className="DetailuserImgBox">
                    <img
                      className="DetailRightIconBox"
                      src="https://i.pinimg.com/236x/a5/fe/9f/a5fe9fbf9cfa0f5df5a86adb91976c66.jpg"
                    />
                  </div>
                  <div className="DetailRightContentBox">
                    <a className="DetailOnerNickname">comment[1].nickname</a>
                    <span className="DetailOnerBody">우리 오늘 컴백했어요!!</span>
                    <div className="DetailBodyTail">게시시간 좋아요수</div>
                  </div>
                  <div className="DetailCommentLike"><FaRegHeart /></div>
                </div>
                {/* 또 여기까지 Map돌리면됨 */}

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
              <div className="DetailSmallTime">2시간 전</div>
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
              />
              <div className="DetailRightTitleNickName">post.nickname</div>
            </div>
            <div className="DetailsmallImgBox">
              <img
                className="DetailsmallImg"
                src="https://blog.kakaocdn.net/dn/wlV3a/btqDebLH3c2/SkFcvQCDgeESEzmjllP5uk/img.jpg"
              />
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
