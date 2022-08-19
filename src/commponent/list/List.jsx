import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postsList } from '../../redux/modules/postsSlice';
import './List.scss';
import ListImg from './ListImg';
import ListNav from './ListNav';
import ListContent from './ListContent';

const List = () => {
  const dispatch = useDispatch();

  return (
    <div className="ListWarp">
      {/* 상단바 */}
      <ListNav />
      {/* 이미지 */}
      <ListImg />
      {/* 아래 컨텐츠 박스 */}
      <ListContent />
    </div>
  );
};

export default List;
