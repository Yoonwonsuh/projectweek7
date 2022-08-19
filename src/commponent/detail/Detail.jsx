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

const Detail = ({ postid }) => {
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
                  src="https://i.pinimg.com/236x/3d/02/12/3d02129727137fc9d51a339dd09b3832.jpg"
                />
                <div className="DetailRightTitleNickName">NickName</div>
              </div>
              <div className="DetailLine" />
              <div className="DetailRightContentContainer">
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
                リザーブ®取扱店舗で販売を開始いたします。 . .<br /> #BALMUDA
                <br />
                #STARBUCKS #BALMUDAThePotSTARBUCKSRESERVELIMITEDEDITION
                <br />
                #BALMUDAThePot
                <br /> #バルミューダ #スターバックス
                <br />
                #バルミューダザポット
                <br /> #電気ケトル
                <br />
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
                src="https://i.pinimg.com/236x/3d/02/12/3d02129727137fc9d51a339dd09b3832.jpg"
              />
              <div className="DetailRightTitleNickName">NickName</div>
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
