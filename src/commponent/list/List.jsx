import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postsList } from '../../redux/modules/postsSlice';
import ListImg from './ListImg';
import ListNav from './ListNav';

const List = () => {
  const dispatch = useDispatch();

  return (
    <div>
      {/* 상단바 */}
      <ListNav />
      {/* 이미지 */}
      <ListImg />
      {/* 아래 컨텐츠 박스 */}
      <div>
        {/* 포스팅 헤드 */}
        <div>
          <button>하트</button>
          <button>윤원님 디테일 페이지 버튼</button>
        </div>
        {/* 포스팅 내용 */}
        <div>
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
    </div>
  );
};

export default List;
