import React from 'react';
import './List.scss';
import {
  BsChat,
  BsFillBookmarkFill,
  BsBookmark,
  BsHeartFill,
  BsHeart,
  BsEmojiSmile,
} from 'react-icons/bs';
const ListContent = () => {
  return (
    <div className="ListContentWrap">
      <div className="ListContentHead">
        <div className="ListContentHead_left">
          <button className="ListContentHead_button">
            {/* <BsHeartFill className="ListContentHead_button_outline" /> */}
            <BsHeart className="ListContentHead_button_outline" />
          </button>
          <button className="ListContentHead_button">
            <BsChat className="ListContentHead_button_outline" />
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
          좋아요 <span>1000</span>개
        </h3>

        <div className="ListContentBodyComment">
          <h3 className="ListContentBodyCommentNickname">배돌이</h3>
          <div className="ListContentBodyCommentWrap">
            <span className="ListContentBodyCommentWrapText">
              오늘은 무얼하고 놀아야 할까
            </span>
            <button>더 보기</button>
          </div>
        </div>
        <div className="ListContentBodyComment_reply">
          댓글 <span> 9</span>개 모두 보기
        </div>

        <div className="ListContentBody_reply_wrap">
          <div className="ListContentBody_reply_cotainer">
            <button className="ListContentBody_reply_btn">
              <BsEmojiSmile className="ListContentBody_reply_btn_smile" />
            </button>
            <textarea
              placeholder="댓글 달기...."
              className="ListContentBody_reply_input"></textarea>
            <button className="ListContentBody_reply_postBtn">게시</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListContent;
