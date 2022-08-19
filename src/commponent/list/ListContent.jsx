import React from 'react';
import './List.scss';

const ListContent = () => {
  return (
    <div className="ListContentWrap">
      {/* 포스팅 헤드 */}
      <div className="ListContentNav">
        <button>하트</button>
        <button>윤원님 디테일 페이지 버튼</button>
      </div>
      {/* 포스팅 내용 */}
      <div className="ListContent_content">
        <div>닉네임</div>
        <div>포스팅 내용</div>
      </div>

      <div>
        <button>윤원님 디테일 페이지 버튼</button>
      </div>

      <div>포스팅 생성 시간</div>

      <div>
        <input type="text" />
        <button>포스팅 추가 버튼</button>
      </div>
    </div>
  );
};

export default ListContent;
