import React from 'react';
import './List.scss';
import ListImg from './ListImg';
import ListNav from './ListNav';
import ListContent from './ListContent';

const List = ({ listData }) => {
  return (
    <div className="ListWarp">
      {/* 상단바 */}
      <ListNav listData={listData} />
      {/* 이미지 */}
      <ListImg listData={listData} />
      {/* 아래 컨텐츠 박스 */}
      <ListContent listData={listData} />
    </div>
  );
};

export default List;
