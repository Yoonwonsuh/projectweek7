import React from 'react';
import './List.scss';

const ListContent = () => {
  return (
    <div className="ListContentWrap">
      <div className="ListContentHead">
        <div></div>
      </div>
      <div className="ListContentBody">
        <div className="ListContentBodyLike"></div>
        <div className="ListContentBodyComment">
          <h3 className="ListContentBodyCommentNickname">gdgdsdafadsfad</h3>
          <div className="ListContentBodyCommentWrap">
            <h3 className="ListContentBodyCommentWrapText">
              sdfadsfadsfadsfads
            </h3>
            <h3>더 보기</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListContent;
